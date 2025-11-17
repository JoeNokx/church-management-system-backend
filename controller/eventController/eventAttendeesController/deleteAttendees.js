import Event from "../../models/eventModel.js";


const removeEventAttendee = async (req, res) => {
  try {
    const { id, attendeeId } = req.params;

    const query = { _id: id };
    if (req.user.role !== "superadmin" && req.user.role !== "supportadmin") {
      query.church = req.user.church;
    }

    const event = await Event.findOne(query);
    if (!event) return res.status(404).json({ message: "Event not found." });

    const before = event.attendees.length;
    event.attendees = event.attendees.filter(a => a._id.toString() !== attendeeId);
    const after = event.attendees.length;

    if (before === after) {
      return res.status(404).json({ message: "Attendee not found." });
    }

    await event.save();

    return res.status(200).json({ message: "Attendee removed successfully." });

  } catch (error) {
    return res.status(500).json({ message: "Error removing attendee", error: error.message });
  }
};

export { removeEventAttendee };