const carouselItems = [
    {
        title: "Quality Products",
        text: "Quality fruits and Vegetables sourced daily from 8000+ farmers",
        image: require("./assets/images/Welcome/1.png")
    },
    {
        title: "Item 2",
        text: "Text 2",
        image: require("./assets/images/Welcome/2.png")
    },
    {
        title: "Item 3",
        text: "Text 3",
        image: require("./assets/images/Welcome/3.png")
    },
    {
        title: "Item 4",
        text: "Text 4",
        image: require("./assets/images/Welcome/4.png")
    },
    {
        title: "Item 5",
        text: "Text 5",
        image: require("./assets/images/Welcome/5.png")
    },
];

export const getCarouselItems = () => {
    return carouselItems;
}
