import React from "react"
import Dots from "./Dots"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"

type NavigationControlsProps = {
    index: number,
    dotsNumber: number,
    slideLeft: () => void,
    slideRight: () => void,
    setIndex: (activeIndex: number) => void,
}
const NavigationControls = ({ index, dotsNumber, slideLeft, slideRight, setIndex, }: NavigationControlsProps) => {
    return <div className="uppercase flex justify-between pt-11">
        <LeftArrow prev={slideLeft} />
        <Dots activeIndex={index}
            onclick={(activeIndex: number) => setIndex(activeIndex)}
            dotsNumber={dotsNumber} />
        <RightArrow next={slideRight} />
    </div>
}

export default NavigationControls