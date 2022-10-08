(() => {
  const populateData = (data) => {
    let dataHtml = "";
    let internsContainer = document.querySelector(".interns-container");
    internsContainer.innerHTML = "";

    data.length > 0
      ? data.forEach((intern) => {
          dataHtml += `
        <div class="intern">
            <div class="intern-top">
              <img src="${intern.img}" alt="" />
            </div>
            <div class="intern-bottom">
              <h4>${intern.name}</h4>
              <p>${intern.email}</p>
              <div class="intern-socials">
                <a href="${intern.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                <a href="${intern.twitter}"><i class="fab fa-twitter"></i></a>
                <a href="${intern.instagram}"><i class="fab fa-instagram"></i></a>
              </div>
              <button class="internButton" data-id="${intern._id}">view profile</button>
            </div>
          </div>
      `;
        })
      : (dataHtml += `<h1 style= "color: #1B1464;"><span style= "color: #ED7D2B;">Oops...</span> No Data found</h1>`);

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
    try {
      const res = await fetch(
        searchValue
          ? `https://logi-internship-api.onrender.com/api/interns/all?search=${searchValue}`
          : `https://logi-internship-api.onrender.com/api/interns/all?limit=9`
      );
      populateData(await res.json());
    } catch (err) {
      console.log(err);
    }
  };

  const getBySearch = (e) => {
    setTimeout(() => {
      getApiData(e.target.value);
    }, 1000);
  };

  const userSearch = document.getElementById("search");

  userSearch.addEventListener("keyup", getBySearch);

  getApiData();
})();
