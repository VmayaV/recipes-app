import React from "react";
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import NavigationControls from "./NavigationControls";

type SliderProps = {
    sliderImage: string,
    index: number;
    setIndex: (index: number) => void,
    children: JSX.Element,
};

const Slider = ({ sliderImage, index, setIndex, children }: SliderProps) => {

    const numberOfCards = 4;

    const slideLeft = () => {
        const prevIndex = index - numberOfCards;
        if (prevIndex < 0) {
            setIndex(0);
        } else {
            setIndex(prevIndex);
        }
    };

    const slideRight = () => {
        const nextIndex = index + numberOfCards;
        if (nextIndex >= sliderImage.length - 1) {
            setIndex(sliderImage.length - numberOfCards - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    const dotsNumber = Math.ceil((sliderImage.length - 1) / numberOfCards);

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
                dotsNumber={dotsNumber}
                slideLeft={slideLeft}
                slideRight={slideRight}
                setIndex={setIndex} />
        </div>
    )
}

export default Slider