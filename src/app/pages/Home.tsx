import React, { useState } from "react";
import Slider from "../components/carousel/Slider";
import useFetchAll from "../../api/useFetchAll";
import { SpinnerDotted } from 'spinners-react';
import useWindowSize from "../components/utils/useWindowsSize";
import Card from "../components/card/Card";

const Home = () => {

    const { data, loading, error } = useFetchAll();
    const [index, setIndex] = useState(0);
    const size = useWindowSize();


    if (error)
        throw error;
    if (loading)
        return <SpinnerDotted color='#123B4F' />

    const sliderData = data.data.map((r: any) => {
        const { source: {
            urlSegment,
            longName,
            pictures,
            type,
            preparationTime: { total }
        } } = r
        return {
            id: urlSegment,
            title: longName,
            imgUrl: pictures[0].formats.find((f: { identifier: string; }) => f.identifier === "ThumbLarge").url,
            type: type,
            prepTime: total
        }
    })

    return <div className="bg-dark-blue px-20 py-10">
        <h3 className="font-veener-two text-xl4.25 text-white leading-11 py-10">
            h3/TITLE - Relateret opskrifter
        </h3>
        <Slider sliderImage={sliderData} index={index} setIndex={setIndex}>
            <div className="grid grid-cols-4 gap-10">
                <Card recipe={sliderData[index]} ></Card>
                <Card recipe={sliderData[index + 1]}></Card>
                <Card recipe={sliderData[index + 2]}></Card>
                <Card recipe={sliderData[index + 3]}></Card>
            </div>
        </Slider>
    </div>
}

export default Home;