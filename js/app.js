 AOS.init();
document.addEventListener("DOMContentLoaded" ,function(){

    const progressBar = document.querySelectorAll(".progress-bar");
    progressBar.forEach(bar => {
       const target = bar.getAttribute("data-bs-target");
       setTimeout(() => {
            bar.style.width = target +"%";
       },500)
    })



    const searchinput = document.getElementById("searchinput")
    const portfolioitem = document.querySelectorAll(".portfolio-item")

    searchinput.addEventListener("input", function(){
        const searchTerm = this.value.toLowerCase();
        portfolioitem.forEach((item) => {
            const title = item.querySelector("h4").textContent.toLowerCase();
            if(title.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })

    })


    const filterButtons = document.querySelectorAll(".filter-btn")

    filterButtons.forEach((button) => {
        button.addEventListener("click", function(){
            const filter = this.getAttribute("data-filter");
            portfolioitem.forEach((item) => {
                if(filter === 'all' || item.getAttribute("data-category")
                === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })

        })
    })


})