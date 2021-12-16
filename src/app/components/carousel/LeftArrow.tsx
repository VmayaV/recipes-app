import React from "react";

type LeftArrowProps = {
    prev: () => void,
    disabled: boolean
}

const LeftArrow = ({ prev, disabled }: LeftArrowProps) => {
    return (
        <button onClick={prev} className={`flex md:visible invisible ${disabled ? "disabled-nav-button" : "enabled-nav-button"}`} disabled={disabled}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill="#CC092F" />
                <path d="M9.11646 12.3188L13.6771 15.9551C13.7982 16.0723 14 15.9551 14 15.6618L14 8.33059C14 8.09599 13.7982 7.92004 13.6771 8.03734L9.15682 11.6736C8.95502 11.8496 8.95502 12.2015 9.11646 12.3188Z" fill="white" />
            </svg>
            <span className="pl-2 text-white">Forrige</span>
        </button>
    )
}
export default LeftArrow