import React from "react";
import {
    Sliders
} from "react-feather";
import async from "../components/Async";


// Guards
// const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
// const SignIn = async(() => import("../pages/auth/SignIn"));
// const SignUp = async(() => import("../pages/auth/SignUp"));
// const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
// const Page404 = async(() => import("../pages/auth/Page404"));
// const Page500 = async(() => import("../pages/auth/Page500"));

// Account
//const Profile = async(() => import("../pages/account/Profile"));
// const Profile = async(() => import("../pages/pages/Profile"));
// const InvoiceDetails = async(() => import("../pages/pages/InvoiceDetails"));
// const InvoiceList = async(() => import("../pages/pages/InvoiceList"));

// Home components
const Main = async(() => import("../pages/main/MainPage"));

// Pages
// const UserList = async(() => import("../pages/users/UsersList"));
// const WorkspaceList = async(() => import("../pages/workspaces/WorkspacesList"));
// const CategoryList = async(() => import("../pages/categories/Categories"));
// const AmenityList = async(() => import("../pages/amenities/Amenities"));

// Protected routes
// const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

const mainRoutes = {
    id: "Main",
    path: "/",
    header: "General",
    icon: <Sliders/>,
    containsHome: true,
    element: <Main />,
    guard: null,
};

// const usersRoutes = {
//     id: "Users",
//     path: "/users",
//     icon: <Users/>,
//     component: UserList,
//     guard: AuthGuard,
// };

// const workspacesRoutes = {
//     id: "Workspaces",
//     path: "/workspaces",
//     header: "Workspace",
//     icon: <Layers/>,
//     containsHome: true,
//     component: WorkspaceList,
//     guard: AuthGuard,
// };

// const workspaceAddRoutes = {
//     id: "Workspaces",
//     path: "/workspaces",
//     header: "Workspace",
//     icon: <Layers/>,
//     containsHome: true,
//     component: WorkspaceList,
//     guard: AuthGuard,
// };

// const categoriesRoutes = {
//     id: "Categories",
//     path: "/categories",
//     icon: <Bookmark/>,
//     containsHome: true,
//     component: CategoryList,
//     guard: AuthGuard,
// };

// const amenitiesRoutes = {
//     id: "Amenities",
//     path: "/amenities",
//     icon: <Coffee/>,
//     containsHome: true,
//     component: AmenityList,
//     guard: AuthGuard,
// };

// const bookingsRoutes = {
//     id: "Bookings",
//     path: "/bookings",
//     icon: <Calendar/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const disputesRoutes = {
//     id: "Disputes",
//     path: "/disputes",
//     icon: <AlertOctagon/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const reviewsRoutes = {
//     id: "Reviews",
//     path: "/reviews",
//     icon: <MessageCircle/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const staffsRoutes = {
//     id: "Staff",
//     path: "/staffs",
//     header: "Company",
//     icon: <Users/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const agenciesRoutes = {
//     id: "Agencies",
//     path: "/agencies",
//     icon: <Home/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const transactionsRoutes = {
//     id: "Transactions",
//     path: "/transactions",
//     header: "Payment",
//     icon: <Repeat/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// const invoicesRoutes = {
//     id: "Invoices",
//     path: "/invoices",
//     icon: <CreditCard/>,
//     containsHome: true,
//     component: null,
//     guard: AuthGuard,
// };

// Account routes (profile, etc.)
// const accountRoutes = {
//     id: "Account",
//     path: "/account",
//     children: [
//         {
//             path: "/account/profile",
//             name: "Profile",
//             component: Profile
//         }
//     ]
// }

// const authRoutes = {
//     id: "Auth",
//     path: "/auth",
//     icon: <Users/>,
//     children: [
//         {
//             path: "/auth/sign-in",
//             name: "Sign In",
//             element: <SignIn/>,
//         },
//         {
//             path: "/auth/sign-up",
//             name: "Sign Up",
//             element: <SignUp/>,
//         },
//         {
//             path: "/auth/reset-password",
//             name: "Reset Password",
//             element: <ResetPassword/>,
//         },
//         {
//             path: "/auth/404",
//             name: "404 Page",
//             element: <Page404/>,
//         },
//         {
//             path: "/auth/500",
//             name: "500 Page",
//             element: <Page500/>,
//         },
//     ],
//     element: null,
// };


// This route is only visible while signed in
// const protectedPageRoutes = {
//     id: "Private",
//     path: "/private",
//     component: ProtectedPage,
//     children: null,
//     guard: AuthGuard,
// };

// Routes using the Main layout
export const mainLayoutRoutes = [
  mainRoutes,
];

// Routes using the Auth layout
// export const authLayoutRoutes = [authRoutes];

// Routes that are protected
export const protectedRoutes = [
];

// Routes visible in the sidebar
export const sidebarRoutes = [
  mainRoutes,
];
