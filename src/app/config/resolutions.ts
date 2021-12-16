
const Resolutions = {
    mobile: {
        minWidth: 768, //for the sake of simplicity, only resolutions smaller than 768px width will be taken into consideration for mobile, and bigger than 768 as desktop
        imageCard: "MobileMain",
        imageMain: "MobileLarge",
        numberOfCards: 1
    },
    desktop: {
        minWidth: 769,
        imageCard: "MobileMain",
        imageMain: "MobileLarge",
        numberOfCards: 4
    }
}

export default Resolutions