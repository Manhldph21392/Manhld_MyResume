import { useEffect, router } from "@/lib";
// import { products } from "@/data";
// import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
const AdminProjectAdd = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    const projectPrice = document.getElementById("project-price");
    const projectDesc = document.getElementById("project-desc");
    const projectImage = document.getElementById("project-images");
    const projectGitlink = document.getElementById("project-gitlink");

    form.addEventListener("submit", async function (e) {
      // Chặn sự kiện reload sau khi submit
      e.preventDefault();

      const urls = await uploadFiles(projectImage.files);
      // Thêm phần tử vào mảng Products
      const newProject = {
        // id: uuidv4(),
        title: projectName.value,
        price: projectPrice.value,
        desc: projectDesc.value,
        gitlink: projectGitlink.value,
        gallery: urls,
        // price: productPrice.value,
      };
      // setTimeout
      fetch("http://localhost:3004/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() => router.navigate("/admin/projects"));
      // chuyển hướng về admin/projects
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dfs9nuwom";
      const PRESET_NAME = "demo-upload";
      const FOLDER_NAME = "ECMA";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);
      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
        return urls;
      }
    }
  };
  return /*html*/ `
    <div class = "container">
    <h1>Thêm dự án</h1>
    <form action="" id="form-add">
      <div class="form-group mb-3">
        <label form="">Tên Dự Án</label>
        <input type="text" id="project-name" class ="form-control"/> 
      </div>
      <div class="form-group mb-3">
        <label form="">Giá Dự Án</label>
        <input type="text" id="project-price" class ="form-control"/> 
      </div>
      <div class="form-group mb-3">
        <label form="">Desc</label>
        <input type="text" id="project-desc" class ="form-control"/> 
      </div>
      <div class="form-group mb-3">
      <label form="">Image</label>
      <input type="file" id="project-images" multiple class ="form-control"/> 
    </div>
    <div class="form-group mb-3">
      <label form="">Link Github</label>
      <input type="text" id="project-gitlink" multiple class ="form-control"/> 
    </div>
      <div class="form-group">
        <button class="btn btn-primary">Thêm dự án</button>
      </div>
    </form>
    </div>`;
};

export default AdminProjectAdd;
