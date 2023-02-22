import { useEffect , router } from "@/lib"
// import { products } from "@/data";
// import { v4 as uuidv4 } from 'uuid';
const AdminProjectAdd = () => {
    
useEffect (()=>{
const form = document.getElementById("form-add");
const projectName = document.getElementById("project-name");
const projectPrice = document.getElementById("project-price");
const projectDesc = document.getElementById("project-desc");
// const productPrice = document.getElementById("product-price");

form.addEventListener ("submit", function(e){
  // Chặn sự kiện reload sau khi submit
    e.preventDefault();
    // Thêm phần tử vào mảng Products
    const newProduct = {
        // id: uuidv4(),
        name: projectName.value,
        price: projectPrice.value,
        desc: projectDesc.value,
        // price: productPrice.value,
    };
// setTimeout
fetch("http://localhost:3004/projects",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProduct),
}).then(() => router.navigate("/admin/products"));
// chuyển hướng về admin/products
});
});
  return /*html*/`
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
      <div class="form-group">
        <button class="btn btn-primary">Thêm dự án</button>
      </div>
    </form>
    </div>`
  
}

export default AdminProjectAdd