import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import account from "../views/accountView";
import register from "../views/registerView.vue";
import activated from "../components/activePage.vue";
import Admin from "../views/adminView.vue";
import news from "../views/news.vue";
import orders from "../views/orders.vue";
import withdraw from "../views/withdraw";
import seeorder from "../views/inwithdraw.vue";
import withdrawhistory from "../views/withdrawhistory.vue";
import Dashboard from "../views/DashBoard.vue";
import deposit from "../views/deposit.vue";
import depositId from "../views/depositId.vue";
import depositIdhistory from "../views/depositHistory.vue";
import depositIdhistoryId from "../views/depositHistoryId.vue";
import withdrawhistoryId from "../views/withdrawhistoryId.vue";
import notactive from "../views/notActive.vue";
import notactiveId from "../views/notactiveId.vue";
import Dashboardusers from "../views/Dashboardusers.vue";
const routes = [
  // { path: "/:NotFgnd(.*)*", name: "NotFound", component: NotFound },

  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/account",
    name: "account",
    component: account,
    meta: { auth: false },
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: { auth: false },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    // meta: { auth: true, isAdmin: true },
    children: [
      {
        path: "news",
        name: "news",
        component: news,
      },
      {
        path: "orders",
        name: "orders",
        component: orders,
      },
      {
        path: "withdraw",
        name: "withdraw",
        component: withdraw,
      },
      {
        path: "withdraw/:id",
        component: seeorder,
      },
      {
        path: "withdrawhistory",
        component: withdrawhistory,
      },
      {
        path: "withdrawhistory/:id",
        component: withdrawhistoryId,
      },
      {
        path: "Dashboard",
        component: Dashboard,
      },
      {
        path: "Dashboardusers/:id",
        component: Dashboardusers,
      },
      {
        path: "deposit",
        component: deposit,
      },
      {
        path: "deposit/:id",
        component: depositId,
      },
      {
        path: "depositHistory",
        component: depositIdhistory,
      },
      {
        path: "depositHistory/:id",
        component: depositIdhistoryId,
      },
      {
        path: "notactive",
        component: notactive,
      },
      {
        path: "notactive/:id",
        component: notactiveId,
      },
    ],
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/",
  // },
  // {
  //   path: "/:id",
  //   component: freefire,
  // },
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: Admin,
  //   meta: { auth: true, isAdmin: true },
  //   children: [
  //     {
  //       path: "Product",
  //       name: "adminProduct",
  //       component: Product,
  //     },
  //     {
  //       path: "product/:id",
  //       component: Productadmin,
  //     },
  //     {
  //       path: "overview",
  //       name: "overview",
  //       component: overView,
  //     },
  //     {
  //       path: "proFile",
  //       name: "proFile",
  //       component: proFile,
  //     },
  //     {
  //       path: "adminOrder",
  //       name: "adminOrder",
  //       component: adminOrder,
  //     },
  //     {
  //       path: "adminOrder/:id",
  //       component: orderreq,
  //     },
  //     {
  //       path: "adminUsers",
  //       name: "adminUsers",
  //       component: adminUsers,
  //     },
  //     {
  //       path: "adminwllet",
  //       name: "adminwallet",
  //       component: adminwallet,
  //     },
  //     {
  //       path: "card",
  //       name: "card",
  //       component: admincard,
  //     },
  //     {
  //       path: "card/:id",
  //       component: getcard,
  //     },
  //     {
  //       path: "reorder",
  //       component: reorder,
  //     },
  //   ],
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: login,
  //   meta: { auth: false },
  // },
  // {
  //   path: "/seccess",
  //   name: "seccess",
  //   component: Seccess,
  // },
  // {
  //   path: "/register",
  //   name: "registern",
  //   component: register,
  //   meta: { auth: false },
  // },
  {
    path: "/activated/:accessToken",
    name: "activated",
    component: activated,
  },
  // {
  //   path: "/forgotpassword",
  //   name: "forgotpassword",
  //   component: forgotpassword,
  // },
  // {
  //   path: "/changepassword/:accessToken",
  //   name: "changepassword",
  //   component: changepassword,
  // },
  // {
  //   path: "/order",
  //   name: "order",
  //   component: order,
  //   meta: { auth: false },
  // },
  // {
  //   path: "/order:id",
  //   component: orderpage,
  // },
  // {
  //   path: "/wallet",
  //   name: "wallet",
  //   component: wallet,
  // },
  // //products
  // {
  //   path: "/cart",
  //   name: "cart",
  //   component: cart,
  // },
  // {
  //   path: "/Checkout",
  //   name: "CheckOut",
  //   component: CheckOut,
  // },
  // {
  //   path: "/bankak",
  //   name: "bankak",
  //   component: bankak,
  // },
  // {
  //   path: "/binance",
  //   name: "binance",
  //   component: binance,
  // },
  // {
  //   path: "/payeer",
  //   name: "payeer",
  //   component: payeer,
  // },
  // {
  //   path: "/fawry",
  //   name: "fawry",
  //   component: fawry,
  // },
  // {
  //   path: "/addbalance",
  //   name: "addbalance",
  //   component: addbalance,
  // },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: test,
  // },
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ["/login", "/register"];
  const authRequired = to.meta.auth;
  const isAdmin = to.meta.isAdmin;
  const loggedIn = localStorage.getItem("token");
  const isaAdmin = localStorage.getItem("isAdmin");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  if (isAdmin && isaAdmin == "false") {
    return next("/");
  }
  // if (!to.matched.length) {
  //   next('/notFound');
  // } else {
  //   next();
  // }
  // isAdmin:"true"
  // else if (authRequired && !loggedIn) {
  //   return next("/login");
  // }

  next();
});

export default router;
