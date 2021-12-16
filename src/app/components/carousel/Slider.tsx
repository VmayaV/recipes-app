import React, { useState } from "react";
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import NavigationControls from "./NavigationControls";

type SliderProps = {
    maxLength: number,
    index: number;
    setIndex: (index: number) => void,
    children: JSX.Element,
    numberOfCards: number,
    pages: number
};

const Slider = ({ maxLength, index, setIndex, children, pages, numberOfCards }: SliderProps) => {

    const [direction, setDirection] = useState(1);
    const slideLeft = () => {
        const prevIndex = index - numberOfCards;
        if (prevIndex < 0) {
            setIndex(0);
        } else {
            setIndex(prevIndex);
        }
        setDirection(-1);
    };

    const slideRight = () => {
        const nextIndex = index + numberOfCards;
        if (nextIndex >= maxLength - 1) {
            setIndex(maxLength - 1);
        } else {
            setIndex(nextIndex);
        }
        setDirection(1);
    };

    return (
        <div>
            <TransitionGroup>
                <SwitchTransition>
                    <CSSTransition
                        key={index}
                        timeout={100}
                        classNames="fade"
                    >
                        {children}
                    </CSSTransition>
                </SwitchTransition>
            </TransitionGroup>

            <NavigationControls
                index={index}
                pages={pages}
                slideLeft={slideLeft}
                slideRight={slideRight}
                setIndex={setIndex}
                numberOfCards={numberOfCards}
                maxLength={maxLength} />
        </div>
    )
}

export default Slider