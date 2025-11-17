import Event from "../../models/eventModel.js";



//PUT: update attendee
const updateEventAttendee = async (req, res) => {
  try {
    const { id, attendeeId } = req.params;
    const { fullName, email, phone, location } = req.body;

    const query = { _id: id };
    if (req.user.role !== "superadmin" && req.user.role !== "supportadmin") {
      query.church = req.user.church;
    }

    const event = await Event.findOne(query);
    if (!event) return res.status(404).json({ message: "Event not found." });

    const attendee = event.attendees.id(attendeeId);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found." });
    }

    if (fullName) attendee.fullName = fullName;
    if (email) attendee.email = email;
    if (phone) attendee.phone = phone;
    if (location) attendee.location = location;

    await event.save();

    return res.status(200).json({
      message: "Attendee updated successfully.",
      attendee
    });

  } catch (error) {
    return res.status(500).json({ message: "Error updating attendee", error: error.message });
  }
};


export { updateEventAttendee };