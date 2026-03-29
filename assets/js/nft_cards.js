const nftCards = [
    {
        id: 1,
        title: "Distant Galaxy",
        img: "./assets/img/data-img/ArtistAvatar2.svg",
        artist: "MoonDancer",
        image: "./assets/img/nft-img/ImagePlaceholder2.svg",
        price: "1.63 ETH",
        highestBid: "0.33 wETH"
    },
    {
        id: 2,
        title: "Life On Edena",
        img: "./assets/img/data-img/AvatarPlaceholder.svg",
        artist: "NebulaKid",
        image: "./assets/img/nft-img/ImagePlaceholder1.svg",
        price: "1.63 ETH",
        highestBid: "0.33 wETH"
    },
    {
        id: 3,
        title: "AstroFiction",
        img: "./assets/img/data-img/AvatarAfrica.svg",
        artist: "Spaceone",
        image: "./assets/img/nft-img/ImagePlaceholder.svg",
        price: "1.63 ETH",
        highestBid: "0.33 wETH"
    }
];

const cards = document.getElementById("nft-cards")

nftCards.forEach((item) => {
    const divItem = document.createElement("div")
    divItem.id = `nft-${item.id}`;

    divItem.innerHTML = `
    <div class="nft-card">
        <img src="${item.image}" alt="${item.title}">
        <div class="nft-bottom">
            <h3>${item.title}</h3>
            <p class="artist"><img src="${item.img}" alt="${item.title}"> ${item.artist}</p>
            <div class="price-info">
                <div>
                    <p class="label">Price</p>
                    <p class="value">${item.price}</p>
                </div>
                <div>
                    <p class="label">Highest Bid</p>
                    <p class="value">${item.highestBid}</p>
                </div>
            </div>
        </div>
    </div>
    `
    cards.appendChild(divItem)
})