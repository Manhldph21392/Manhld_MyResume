import { useEffect, useState } from "@/lib";
const Porforlio = () => {
  const [data, setData] = useState([]);
useEffect(() =>{
  (async () => {
    const res = await fetch("http://localhost:3004/projects");
    const data = await res.json();
    setData(data);
  })();
});

  return /*html*/ `
    <section id="works">
    <div class="container">
      <!-- dec -->
      <div class="works__dec">
        <img src="./src/img/work-dec.png" alt="illustration of leaf" />
      </div>
      <div class="works__dec">
        <img src="./src/img/work-dec.png" alt="illustration of leaf" />
      </div>
      <!-- heading -->
      <h2>My Projects</h2>
      <!-- img -->
      <div class="works__img">
     
      <table class="table table-bordered">
      <thead>
        
    <tr>
      <th>STT</th>
      <th>Tên dự án</th>
      <th>Desc</th>
      <th>IMG</th>
      <th>Link Github</th>
      <th></th>
    </tr>
      </thead>
      <tbody>
      ${data
        .map(
          (project, index) => /*html*/`
      <tr>
      <td>${index + 1}</td>
      <td>${project.title}</td>
      <td>${project.desc}</td>
      <td><img src = "${project.gallery}"></td>
      <td>${project.gitlink}</td>
      <td>
        
        </td>
    </tr>
      `
        )
        .join("")}
        
      </tbody>
    </table>    
      </div>
      <!-- btn -->
      <div class="works__btn">
        <a href="https://github.com/Manhldph21392/BigShoes"><button>View Works</button></a>
      </div>
    </div>
  </section>`;
};

export default Porforlio;
