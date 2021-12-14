import React from "react";

type RightArrowProps = {
    next: () => void
}

const RightArrow = ({ next }: RightArrowProps) => {
    return (

        <div onClick={next} className="flex">
            <span className="pr-2 text-white">Næste</span>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.223633" width="24" height="24" rx="3" fill="#CC092F" />
                <path d="M15.1072 12.3188L10.5465 15.9551C10.4254 16.0723 10.2236 15.9551 10.2236 15.6618L10.2236 8.33059C10.2236 8.09599 10.4254 7.92004 10.5465 8.03734L15.0668 11.6736C15.2686 11.8496 15.2686 12.2015 15.1072 12.3188Z" fill="white" />
            </svg>
        </div>)
}
export default RightArrow