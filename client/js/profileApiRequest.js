(() => {
  const populateData = (data) => {
    const profileContainer = document.querySelector(".profile-container");
    const title = document.querySelector("title");
    title.innerText = data.name;

    data
      ? (profileContainer.innerHTML = `<div class="profile-top">
          <div class="profile-img-container">
            <img src="${data.img}" alt="" />
          </div>
          <div class="name-position">
            <h4>${data.name}</h4>
            <p>Software Engineer</p>
          </div>
        </div>
        <div class="profile-bottom">
          <div class="info-cont">
            <div class="row1">
              <div class="row1-left">
                <h3>Bio</h3>
                <p>
                  ${data.bio}
                </p>
              </div>
              <div class="row1-right">
                <h3>Skills</h3>
                <div class="skills-container">
                ${data.skills.map((skill) => {
                  return `<div class="skills-row">
                      <div class="skill-img-container">
                        <img src=${skill.image} alt="" class="html" />
                      </div>
                      <h6>${skill.name}</h6>
                    </div>`;
                })}
                </div>
              </div>
            </div>
            <div class="row2">
              <div class="row2-left">
                <h3>Education</h3>
                <p>
                  ${data.education}
                </p>
              </div>
              <div class="row2-right">
                <h3>Contact</h3>
                <div class="contact-row">
                  <i class="fab fa-linkedin-in"></i>
                  <!-- <span class="material-symbols-outlined">mail</span> -->
                  <p>${data.linkedin}</p>
                </div>
                <div class="contact-row">
                  <span class="material-symbols-outlined">mail</span>
                  <p>${data.email}</p>
                </div>
                <div class="contact-row">
                  <i class="fab fa-twitter"></i>
                  <!-- <span class="material-symbols-outlined">mail</span> -->
                  <p>${data.twitter}</p>
                </div>
                <div class="contact-row">
                  <i class="fab fa-instagram"></i>
                  <!-- <span class="material-symbols-outlined">mail</span> -->
                  <p>${data.instagram}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-cont">
          ${data.projects.map((project) => {
            return `<div class="portfolio-card">
                <img src="${project.img}" alt="" />
                <div class="portfolio-card-det">
                  <h5 class="darkPrimaryText">${project.name}</h5>
                  <a src="${project.link}"><button>Live Demo</button></a>
                </div>
              </div>`;
          })}
            
          </div>
        </div>`)
      : ((profileContainer.innerHTML = `<span>Loading</span>`),
        (profileContainer.style.height = "50vh"));
  };

  const id = JSON.parse(localStorage.getItem("internId"));

  const getIntern = async (internId) => {
    try {
      const res = await fetch(
        `https://logi-internship-api.onrender.com/api/interns/${id}`
      );
      const data = await res.json();
      populateData(data);
    } catch (err) {
      console.log(err);
    }
  };
  getIntern();
})();
