import { useEffect, router ,useState} from "@/lib";
// import { projects } from "../../data";

const AdminProjectEdit = ({ id }) => {
    const [data, setData] = useState({});
    // Lấy dữ liệu từ localStorage
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // // Tìm project theo id
    // const currentProject = projects.find((project) => project.id == id);

    useEffect(() => {
        fetch(`http://localhost:3004/projects/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectDesc = document.getElementById('project-desc')
        const projectImg = document.getElementById('project-img')
        const projectGitlink = document.getElementById("project-gitlink");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Tạo ra project mới
            const newProjects = {
                title: projectName.value,
                desc: projectDesc.value,
                img: projectImg.value,
                gitlink: projectGitlink.value,
            };
            fetch(`http://localhost:3004/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProjects), // '{"a": "10"}'
            }).then(() => router.navigate("/admin/projects"));
        });
    });

    return /*html*/`<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${data.title}" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Ngôn ngữ</label>
                        <input type="text" class="form-control" id="project-desc" value="${data.desc}" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">IMG</label>
                        <input type="file" class="form-control" id="project-img" value="${data.img}" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Link Github</label>
                        <input type="text" class="form-control" id="project-gitlink" value="${data.gitlink}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
};

export default AdminProjectEdit;
