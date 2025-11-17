import Event from "../../models/eventModel.js";


// POST: register attendee to event
const registerEventAttendee = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, location } = req.body;

    if (!fullName) {
      return res.status(400).json({ message: "Full name is required." });
    }

    const query = { _id: id };
    if (req.user.role !== "superadmin" && req.user.role !== "supportadmin") {
      query.church = req.user.church;
    }


    const event = await Event.findOne(query);
    if (!event) return res.status(404).json({ message: "Event not found." });

    // Prevent duplicate emails or phone
    // const duplicate = event.attendees.find(
    //   a =>
    //     (email && a.email === email) ||
    //     (phone && a.phone === phone)
    // );

    // if (duplicate) {
    //   return res.status(400).json({
    //     message: "Attendee already registered for this event."
    //   });
    // }

    const newAttendee = { fullName, email, phone, location };
    event.attendees.push(newAttendee);
    await event.save();

    return res.status(201).json({
      message: "Attendee registered successfully.",
      attendee: newAttendee
    });

  } catch (error) {
    return res.status(500).json({ message: "Error registering attendee", error: error.message });
  }
};

export { registerEventAttendee };