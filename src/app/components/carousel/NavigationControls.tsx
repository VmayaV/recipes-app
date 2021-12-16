import React from "react"
import Dots from "./Dots"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"

type NavigationControlsProps = {
    index: number,
    pages: number,
    slideLeft: () => void,
    slideRight: () => void,
    setIndex: (index: number) => void,
    maxLength: number,
    numberOfCards: number
}
const NavigationControls = ({ index, pages, slideLeft, slideRight, setIndex, maxLength, numberOfCards }: NavigationControlsProps) => {
    console.log(index)
    return <div className="uppercase flex justify-between pt-11">
        <LeftArrow prev={slideLeft} disabled={index === 0} />
        <Dots activeIndex={index}
            onclick={(index: number) => setIndex(index)}
            pages={pages}
            numberOfCards={numberOfCards} />
        <RightArrow next={slideRight} disabled={(index + pages) === maxLength} />
    </div>
}

export default NavigationControls