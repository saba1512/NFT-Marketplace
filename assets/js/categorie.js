const category = [
    {
        img1: "./assets/img/category-img/Photo.svg",
        title: "Art",
    },
    {
        img1: "./assets/img/category-img/Photo1.svg",
        title: "Collectibles",
    },
    {
        img1: "./assets/img/category-img/Photo2.svg",
        title: "Music",
    },
    {
        img1: "./assets/img/category-img/Photo3.svg",
        title: "Photography",
    },
    {
        img1: "./assets/img/category-img/Photo4.svg",
        title: "Video",
    },
    {
        img1: "./assets/img/category-img/Photo5.svg",
        title: "Utility",
    },
    {
        img1: "./assets/img/category-img/Photo.svg",
        title: "Sport",
    },
    {
        img1: "./assets/img/category-img/Photo6.svg",
        title: "Virtual World",
    }
]

const categoriesCards = document.getElementById("categories-cards");

category.forEach((item) => {
    const divItem = document.createElement("div")

    divItem.innerHTML = `
    <img src="${item.img1}" alt="${item.title}">
    <h4>${item.title}</h4>
    `
    console.log(item.title)
    categoriesCards.appendChild(divItem)
})