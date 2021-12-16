import React, { useEffect, useState } from "react";
import Slider from "../components/carousel/Slider";
import useFetchAll from "../../api/useFetchAll";
import { SpinnerDotted } from 'spinners-react';
import useWindowSize from "../components/utils/useWindowsSize";
import Resolutions from "../config/resolutions";

const Home = () => {

    const [index, setIndex] = useState(0);
    const [Cards, setCards] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const { data, loading, error } = useFetchAll();

    const { width } = useWindowSize();

    useEffect(() => {
        const loadCard = () => {
            if (width) {
                if (Resolutions.mobile.minWidth < width) {
                    import('../components/card/DesktopCards').then(({ default: DesktopCards }) => {
                        setCards(() => DesktopCards);
                        setIsMobile(false)
                    }
                    )
                } else {
                    import('../components/card/MobileCards').then(({ default: MobileCards }) => {
                        setCards(() => MobileCards)
                        setIsMobile(true)
                    }
                    )
                }
            }
        }
        loadCard();
    }, [width])

    if (error)
        throw error;
    if (loading)
        return <SpinnerDotted color='#123B4F' size={"width:100%"} />

    const cardData: any[] = data.data.map((card: any) => {
        const { source: {
            urlSegment,
            longName,
            pictures,
            type,
            preparationTime: { total }
        } } = card
        return {
            id: urlSegment,
            title: longName,
            pictures: pictures[0].formats,
            recipeType: type,
            prepTime: total
        }
    })
    const lastIndex = cardData.length - 1;
    const numberOfCards = isMobile ? Resolutions.mobile.numberOfCards : Resolutions.desktop.numberOfCards;
    const numberOfPages = isMobile ? lastIndex : Math.floor(lastIndex / numberOfCards);

    return <div className="bg-dark-blue md:px-20 md:py-10 pb-10">
        <h3 className="font-veener-two text-3xl leading-10 md:text-xl4.25 text-white md:leading-11 py-10 md:m-0 mx-10">
            h3/TITLE - Relateret opskrifter
        </h3>
        <Slider maxLength={lastIndex} index={index} setIndex={setIndex} numberOfCards={numberOfCards} pages={numberOfPages}>
            <Cards cardData={cardData} activeIndex={index} setIndex={setIndex} />
        </Slider>
    </div>
}

export default Home;