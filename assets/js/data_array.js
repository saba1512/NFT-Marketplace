const creators = [
    {
        id: 1,
        name: "Keepitreal",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/ArtistAvatar.svg"
    },
    {
        id: 2,
        name: "DigiLab",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/ArtistAvatar1.svg"
    },
    {
        id: 3,
        name: "GravityOne",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/ArtistAvatar2.svg"
    },
    {
        id: 4,
        name: "Juanie",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/ArtistAvatar3.svg"
    },
    {
        id: 5,
        name: "BlueWhale",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/AvatarPlaceholder.svg"
    },
    {
        id: 6,
        name: "Mr Fox",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/ArtistAvatar4.svg"
    },
    {
        id: 7,
        name: "Shroomie",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/Avatar.svg"
    },
    {
        id: 8,
        name: "Robotica",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/Avatar1.svg"
    },
    {
        id: 9,
        name: "RustyRobot",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/AvatarRobot.svg"
    },
    {
        id: 10,
        name: "Animakid",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/Avatar2.svg"
    },
    {
        id: 11,
        name: "Dotgu",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/AvatarAfrica.svg"
    },
    {
        id: 12,
        name: "Ghiblier",
        totalSales: "34.53 ETH",
        image: "./assets/img/data-img/Avatar3.svg"
    }
];


const gridContainer = document.getElementById("creatorsGrid");

if (gridContainer) {
    // gridContainer.innerHTML = creators.map(creator => `
    //     <div class="creator-card">
    //         <span class="rank">${creator.id}</span>
    //         <img src="${creator.image}" alt="${creator.name}">
    //         <div class="creator-info">
    //             <h3>${creator.name}</h3>
    //             <p>Total Sales: <span>${creator.totalSales}</span></p>
    //         </div>
    //     </div>
    // `).join("");

    creators.forEach((item) => {
        const divitem = document.createElement("div")
        divitem.id = `creator-${item.id}`;
        
        divitem.innerHTML = `
        <div class="creator-card">
            <span class="rank">${item.id}</span>
            <img src="${item.image}" alt="${item.name}">
            <div class="creator-info">
                <h3>${item.name}</h3>
                <p>Total Sales: <span>${item.totalSales}</span></p>
            </div>
        </div>
        `

        console.log(item.image)
        gridContainer.appendChild(divitem)
    })
}