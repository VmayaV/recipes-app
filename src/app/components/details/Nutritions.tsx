import React from "react"
/**
 * Everything is static here, but it should be loaded from 'data' sent as props
 * 
 */
const Nutritions = () => {
    return <div>
        <div className="text-md-20">Næringsindhold</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <div className="bg-light-gray md:rounded-tl-md">
                    <div className=""></div>
                    <div className="text-right nutrition-text">ENERGIFORDELING</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="nutrition-text">
                        Fiber:
                    </div>
                    <div className="nutrition-text">-</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="nutrition-text">
                        Protein:
                    </div>
                    <div className="nutrition-text">23 %</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="text-left nutrition-text">
                        Kulhydrat:
                    </div>
                    <div className="text-right nutrition-text">43,5 %</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="text-left nutrition-text">
                        Fedt:
                    </div>
                    <div className="text-right nutrition-text">28,2 %</div>
                </div>
            </div>

            <div>
                <div className="bg-light-gray flex justify-between md:rounded-tr-md">
                    <div className="visible md:invisible"></div>
                    <div className="text-right nutrition-text">NÆRINGSINDHOLD PR. 100G</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="nutrition-text visible md:invisible ">
                        Fiber:
                    </div>
                    <div className="nutrition-text">1,5</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="nutrition-text visible md:invisible">
                        Protein:
                    </div>
                    <div className="text-right nutrition-text">23 %</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="nutrition-text visible md:invisible">
                        Kulhydrat:
                    </div>
                    <div className="nutrition-text">43,5 %</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="nutrition-text visible md:invisible">
                        Fedt:
                    </div>
                    <div className="nutrition-text">2,8 g %</div>
                </div>
            </div>

        </div>
    </div>
}
export default Nutritions