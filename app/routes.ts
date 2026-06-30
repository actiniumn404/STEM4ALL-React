import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/lander/lander.tsx"),
    route("about", "pages/about/about.tsx"),
    route("get-involved", "pages/involvement/involvement.tsx"),
    route("team", "pages/team/team.tsx")
] satisfies RouteConfig;
