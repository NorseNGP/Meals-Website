let filterMenuItems = document.querySelectorAll(".filter-menu-item");

filterMenuItems.forEach(el => {

    for (let i of filterMenuItems) {
        i.addEventListener('click', function (e) {
            e.preventDefault();
            el.classList.remove("active");
            this.classList.add("active");

            let filterResult = document.querySelectorAll(".filter-result");
            for (let y of filterResult) {
                y.classList.remove("filter-result-active");
            }

            document.querySelector(`.${this.textContent}`).classList.add("filter-result-active");

        })
    }
})

let reservationContainer = document.querySelector(".scroll-reservation");

reservationContainer.addEventListener('click', () => {
  let container = document.querySelector(".reservation-section");
  container.scrollIntoView({behavior: "smooth"});
})