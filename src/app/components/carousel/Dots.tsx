import React from "react";

type DotsProps = {
    activeIndex: number,
    onclick: (activeIndex: number) => void,
    dotsNumber: number
}
const Dots = ({ activeIndex, onclick, dotsNumber }: DotsProps) => {
    return (
        <div className="flex">
            {Array.from(Array(dotsNumber)).map((item, index) => {
                return activeIndex % 4 === index ?
                    <span
                        key={`${index}-active`}
                        onClick={() => onclick(index)}
                        className="m-1"
                    >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.611816" width="16" height="16" rx="8" fill="white" />
                        </svg>
                    </span> :
                    <span key={`${index}-inactive`} onClick={() => onclick(index)} className="m-1">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.611816" width="16" height="16" rx="8" fill="#CC092F" />
                        </svg>
                    </span>
            }
            )}
        </div >
    )
}
export default Dots