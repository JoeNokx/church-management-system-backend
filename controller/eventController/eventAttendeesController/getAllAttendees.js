import Event from "../../models/eventModel.js";

// GET : fetch all attendees
const getEventAttendees = async (req, res) => {
  try {

    const {
      page = 1,
      limit = 10,
      search = "",
    } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 10);
    const skip = (pageNum - 1) * limitNum;


    const { id } = req.params;

    const query = { _id: id };
    if (req.user.role !== "superadmin" && req.user.role !== "supportadmin") {
      query.church = req.user.church;
    }

    

    const event = await Event.findOne(query).select("attendees")

  if (!event) return res.status(404).json({ message: "Event not found." });

      let attendees = event.attendees || [];

      
    // SEARCH filter (case-insensitive)
    if (search.trim() !== "") {
      const regex = new RegExp(search, "i");
      attendees = attendees.filter(a =>
        regex.test(a.fullName) || (a.location && regex.test(a.location))
      );
    }

    const totalAttendees = attendees.length;

    // PAGINATION
    const paginatedAttendees = attendees.slice(skip, skip + limitNum);
    const totalPages = Math.ceil(totalAttendees / limitNum);

    // Pagination info
    const pagination = {
        totalResult: totalAttendees,
        totalPages,
        currentPage: pageNum,
        hasPrev: pageNum > 1,
        hasNext: pageNum < totalPages,
        prevPage: pageNum > 1 ? pageNum - 1 : null,
        nextPage: pageNum < totalPages ? pageNum + 1 : null
      }
    

    return res.status(200).json({
      count: paginatedAttendees.length,
      pagination,
      attendees: paginatedAttendees
    });

  } catch (error) {
    return res.status(500).json({ message: "Error fetching attendees", error: error.message });
  }
};


export { getEventAttendees };