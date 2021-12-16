import React, { useLayoutEffect, useRef, useState } from "react"
import IRecipe from "../../interfaces/recipe"
import Card from "./Card"
import Resolutions from "../../config/resolutions";

type MobileCardsProps = {
    cardData: IRecipe[],
    activeIndex: number;
    setIndex: (index: number) => void,
}

const MobileCards = ({ cardData, activeIndex, setIndex }: MobileCardsProps) => {

    const ref = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const { imageCard } = Resolutions.mobile;

    useLayoutEffect(() => {
        if (ref.current) {
            setCardWidth(ref.current.offsetWidth);
        }
    }, [cardWidth]);

    const cards = cardData.map(c => ({ imgUrl: c.pictures.find((f: { identifier: string; }) => f.identifier === imageCard).url, ...c }))

    return <div className="flex m-3">
        <div className="shadow-2xl" ref={ref}> <Card key={activeIndex} card={cards[activeIndex]} /></div>
    </div>

}
export default MobileCards
