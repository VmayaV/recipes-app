import React from "react";

type DotsProps = {
    activeIndex: number,
    onclick: (activeIndex: number) => void,
    pages: number,
    numberOfCards: number
}
const Dots = ({ activeIndex, onclick, pages, numberOfCards }: DotsProps) => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array.from(Array(pages)).map((item, index) => {
                const ind = index * numberOfCards;
                return activeIndex === ind ?
                    <button
                        key={`${index}-active`}
                        onClick={() => onclick(ind)}
                        className="m-1"
                    >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.611816" width="16" height="16" rx="8" fill="white" />
                        </svg>
                    </button> :
                    <button key={`${index}-inactive`} onClick={() => onclick(ind)} className="m-1">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.611816" width="16" height="16" rx="8" fill="#CC092F" />
                        </svg>
                    </button>
            }
            )}
        </div >
    )
}
export default Dots