import createEvent from "./createEvent.js";
import getAllEvents from "./getAllEvents.js";
import getSingleEvent from "./getSingleEvent.js";
import updateEvent from "./updateEvent.js";
import deleteEvent from "./deleteEvent.js";



import registerEventAttendee from "./eventAttendeesController/registerEventAttendee.js";
import getEventAttendees from "./eventAttendeesController/getEventAttendees.js";
import updateEventAttendee from "./eventAttendeesController/updateEventAttendee.js";
import removeEventAttendee from "./eventAttendeesController/removeEventAttendee.js";


export { createEvent, getAllEvents, getSingleEvent, registerEventAttendee, getEventAttendees, updateEventAttendee, removeEventAttendee, updateEvent, deleteEvent };