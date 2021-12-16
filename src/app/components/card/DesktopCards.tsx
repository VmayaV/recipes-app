import React from "react"
import Resolutions from "../../config/resolutions"
import IRecipe from "../../interfaces/recipe"
import Card from "./Card"

type DesktopCardsProps = {
    cardData: IRecipe[];
    activeIndex: number;
}

const DesktopCards = ({ cardData, activeIndex }: DesktopCardsProps) => {
    const { numberOfCards, imageCard } = Resolutions.desktop;
    const cards = cardData.map(c => ({ imgUrl: c.pictures.find((f: { identifier: string; }) => f.identifier === imageCard).url, ...c }))
    return <div className={`grid grid-cols-4 md:gap-10`}>
        {
            Array.from(Array(numberOfCards)).map((_item, index) =>
                <Card key={index} card={cards[index + activeIndex]} />)
        }
    </div>
}
export default DesktopCards