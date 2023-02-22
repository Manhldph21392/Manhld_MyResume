import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js" ;
import HomePage from "./src/pages/Home";
import {render , router } from "./src/lib";


import AdminProjects from "./src/admin/Projects";
import AdminProjectAdd from "@/admin/Project-add";
import AdminProjectEdit from "@/admin/Project-edit";
import Footer from "@/components/Footer";


const app = document.querySelector("#app");

router.on("/HomePage" , () => render(HomePage,app));
router.on("/project/id",({data}) => render(() =>AdminProjects(data),app));
router.on("/porforlio", () =>render (Footer),app);

// Admin
router.on("/admin/projects", () => render(AdminProjects,app));
router.on("/admin/projects/add", () => render(AdminProjectAdd,app));
router.on("/admin/projects/:id/edit",({data}) => render(() => AdminProjectEdit(data),app));
router.resolve();
