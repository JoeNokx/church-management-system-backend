import Event from "../models/eventModel.js";

// GET ALL (with search, filter, pagination, sort, status)
const getAllEvents = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      title,
      department,
      group,
      cell,
      category,
      status, // upcoming | past | ongoing
      sort = "newest"
    } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 10);
    const skip = (pageNum - 1) * limitNum;

    const query = {};

    // Scope by church for non-super admins/supportadmins
    if (req.user.role !== "superadmin" && req.user.role !== "supportadmin") {
      query.church = req.user.church;
    }

    // Text search across several string fields
    if (search) {
      const regex = { $regex: search, $options: "i" };
      query.$or = [
        { title: regex },
        { description: regex },
        { venue: regex }
      ];
    }

    // Exact filters
    if (category) query.category = category;
    if (title) query.title = title;
    if (department) query.department = department;
    if (group) query.group = group;
    if (cell) query.cell = cell;

    // Status-based filtering
    const today = new Date();
    if (status === "upcoming") {
      query.dateFrom = { $gte: today };
    } else if (status === "past") {
      query.dateTo = { $lt: today };
    } else if (status === "ongoing") {
      query.dateFrom = { $lte: today };
      query.dateTo = { $gte: today };
    }

    // Sort options mapping
    const sortOptions = {
      titleAsc: { title: 1 },
      titleDesc: { title: -1 },
      newest: { dateFrom: -1 },
      oldest: { dateFrom: 1 }
    };
    const sortBy = sortOptions[sort] || sortOptions.newest;

    // Count total matching documents
    const total = await Event.countDocuments(query);

    // Fetch events
    const events = await Event.find(query)
      .populate("church", "name")
      .populate("cell", "name")
      .populate("group", "name")
      .populate("department", "name")
      .sort(sortBy)
      .skip(skip)
      .limit(limitNum)
      .lean(); // lean() to return plain JS objects (easier to add status)

    if (!events || events.length === 0) {
      return res.status(200).json({
        message: "No events found.",
        pagination: {
          totalResult: 0,
          totalPages: 0,
          currentPage: pageNum,
          hasPrev: false,
          hasNext: false,
          prevPage: null,
          nextPage: null
        },
        count: 0,
        events: []
      });
    }

    // Compute status for each event and attach
    const eventsWithStatus = events.map(ev => {
      const e = { ...ev };
      if (e.dateFrom && e.dateTo) {
        const start = new Date(e.dateFrom);
        const end = new Date(e.dateTo);
        if (start > today) e.status = "upcoming";
        else if (end < today) e.status = "past";
        else e.status = "ongoing";
      } else {
        e.status = "unknown";
      }

      
  // attendee count
  e.attendeeCount = e.attendees ? e.attendees.length : 0; 

      return e;
    });

        // Compute counts across all events in the query (without pagination)
    const allMatchingEvents = await Event.find(query);
    const totalEvents = allMatchingEvents.length;
    const upcomingCount = allMatchingEvents.filter(e => e.dateFrom > today).length;
    const ongoingCount = allMatchingEvents.filter(e => e.dateFrom <= today && e.dateTo >= today).length;
    const pastCount = allMatchingEvents.filter(e => e.dateTo < today).length;


    // Pagination info
    const totalPages = Math.ceil(totalEvents / limitNum);
    const pagination = {
      totalResult: total,
      totalPages,
      currentPage: pageNum,
      hasPrev: pageNum > 1,
      hasNext: pageNum < totalPages,
      prevPage: pageNum > 1 ? pageNum - 1 : null,
      nextPage: pageNum < totalPages ? pageNum + 1 : null
    };

    return res.status(200).json({
      message: "Events retrieved successfully",
       counts: {
                total: totalEvents,
                upcoming: upcomingCount,
                ongoing: ongoingCount,
                past: pastCount
            },
      pagination,
      events: eventsWithStatus
    });
  } catch (error) {
    console.error("Get all events error:", error);
    return res.status(500).json({ message: "Failed to retrieve events.", error: error.message });
  }
};


export { getAllEvents };