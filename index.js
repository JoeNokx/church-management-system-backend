// main routes file 

// auth routes
import authRoutes from "./authRoute.js";

// user and church profile routes
import userRoutes from "./userRoute.js";
import churchRoute from "./churchRoute.js";

// admin control routes
import adminUserRoute from "./adminUserRoute.js";
import adminChurchRoute from "./adminChurchRoute.js";

// main module routes
import subscriptionRoute from "./subscriptionRoute.js";
import memberRoute from "./memberRoute.js";
import eventRoute from "./eventRoute.js";
import attendanceRoute from "./attendanceRoute.js";
import announcementRoute from "./announcementRoute.js";
import activityLogRoute from "./activityLogRoute.js";

// ministry routes
import cellRoute from "./ministryRoute/cellRoute.js";
import groupRoute from "./ministryRoute/groupRoute.js";
import departmentRoute from "./ministryRoute/departmentRoute.js";

// finance routes
import titheRoute from "./financeRoute/titheRoute.js";
import incomeRoute from "./financeRoute/incomeExpenseRoute/incomeRoute.js";
import expenseRoute from "./financeRoute/incomeExpenseRoute/expenseRoute.js";
import specialFundRoute from "./financeRoute/specialFundRoute.js";
import offeringRoute from "./financeRoute/offeringRoute.js";
import financialStatementRoute from "./financeRoute/financialStatementRoute.js";

// church project routes
import churchProjectRoute from "./financeRoute/projectRoute/churchProjectRoute.js";
import projectExpenseRoute from "./financeRoute/projectRoute/projectExpense.js";
import projectContributionRoute from "./financeRoute/projectRoute/projectContribution.js";



// export all routes
export {
  authRoutes,
  userRoutes,
  adminUserRoute,
  adminChurchRoute,
  churchRoute,
  subscriptionRoute,
  memberRoute,
  eventRoute,
  attendanceRoute,
  announcementRoute,
  activityLogRoute,
  cellRoute,
  groupRoute,
  departmentRoute,
  titheRoute,
  incomeRoute,
  expenseRoute,
  specialFundRoute,
  offeringRoute,
  financialStatementRoute,
  churchProjectRoute,
  projectExpenseRoute,
  projectContributionRoute
};
