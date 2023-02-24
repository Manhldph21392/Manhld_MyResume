// import { products } from "@/data";
import { useEffect, useState } from "@/lib";
const AdminProjects = () => {
  // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
  const [data, setData] = useState([]);
  // Bước 2: Lấy dữ liệu từ localStorage và gán vào biến data
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3004/projects");
      const data = await res.json();
      setData(data);
    })();
  });
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // Viết sự kiện cho từng button remove
      btn.addEventListener("click", function () {
        // lấy id từ data-id của button
        const id = this.dataset.id;
        fetch(`http://localhost:3004/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          //lọc ra các phần tử có id khác button
          const newProjects = data.filter((project) => project.id !== +id);
          //gán lại giá trị cho biến data
          setData(newProjects);
        });
      });
    }
  });
  // HIỂN THỊ RA NGOÀI MÀN HÌNH
  return /*html*/ ` 
    <div class = "container">
    <h1>Quản lí dự án</h1>
    <table class="table table-bordered">
    <thead>
      
  <tr>
    <th>STT</th>
    <th>Tên</th>
    <th>Desc</th>
    <th>IMG</th>
    <th>Link Github</th>
    <th></th>
  </tr>
    </thead>
    <tbody>
    ${data
      .map(
        (project, index) => `
    <tr>
    <td>${index + 1}</td>
    <td>${project.title}</td>
    <td>${project.desc}</td>
    <td><img src = "${project.gallery}"}></td>
    <td>${project.gitlink}</td>
    <td>
      <button data-id = "${
        project.id
      }" class="btn btn-danger btn-remove">Xóa</button>
      <a href="/admin/projects/${project.id}/edit">Sửa</a>
      </td>
  </tr>
    `
      )
      .join("")}
      
    </tbody>
  </table>    
    </div>`;
};

export default AdminProjects;
