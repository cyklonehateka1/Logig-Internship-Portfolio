(() => {
  const populateData = (data) => {
    let dataHtml = "";
    let internsContainer = document.querySelector(".interns-container");
    internsContainer.innerHTML = "";

    data.forEach((intern) => {
      dataHtml += `
        <div class="intern">
            <div class="intern-top">
              <img src="${intern.img}" alt="" />
            </div>
            <div class="intern-bottom">
              <h4>${intern.name}</h4>
              <p>${intern.email}</p>
              <div class="intern-socials">
                <a href=""><i class="fab fa-linkedin-in"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
              </div>
              <button class="internButton" data-id="${intern._id}">view profile</button>
            </div>
          </div>
      `;
      // console.log(intern._id);
    });

    internsContainer.innerHTML = dataHtml;

    const internButton = document.querySelectorAll(".internButton");

    internButton.forEach((button) => {
      button.addEventListener("click", (e) => {
        const internId = e.srcElement.getAttribute("data-id");
        localStorage.setItem("internId", JSON.stringify(internId));
        window.location.assign("../pages/profile.html");
      });
    });
  };

  const getApiData = async (searchValue) => {
    fetch(`https://logi-internship-api.onrender.com/api/interns/all`)
      .then((res) => res.json())
      .then((data) => {
        populateData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getApiData();
})();
