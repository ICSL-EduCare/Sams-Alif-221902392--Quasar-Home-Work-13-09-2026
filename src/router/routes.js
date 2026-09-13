const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      // আপনার নতুন তৈরি করা পেজগুলোর লিংক
      { path: "flex", component: () => import("pages/1_FlexGrid.vue") },
      {
        path: "header",
        component: () => import("pages/2_LayoutHeaderFooter.vue"),
      },
      { path: "drawer", component: () => import("pages/3_LayoutDrawer.vue") },
      { path: "sticky", component: () => import("pages/4_PageSticky.vue") },
      { path: "scroller", component: () => import("pages/5_PageScroller.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
