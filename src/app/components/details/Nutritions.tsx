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
                    <div className="text-right pt-2 pr-2">ENERGIFORDELING</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="pt-2 pr-2">
                        Fiber:
                    </div>
                    <div className="pt-2 pr-2">-</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="pt-2 pr-2">
                        Protein:
                    </div>
                    <div className="pt-2 pr-2">23 %</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="text-left pt-2 pr-2">
                        Kulhydrat:
                    </div>
                    <div className="text-right pt-2 pr-2">43,5 %</div>
                </div>
                <div className="nutrition-left-border">
                    <div className="text-left pt-2 pr-2">
                        Fedt:
                    </div>
                    <div className="text-right pt-2 pr-2">28,2 %</div>
                </div>
            </div>

            <div>
                <div className="bg-light-gray flex justify-between md:rounded-tr-md">
                    <div className="visible md:invisible"></div>
                    <div className="text-right pt-2 pr-2">NÆRINGSINDHOLD PR. 100G</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="pt-2 pr-2 visible md:invisible ">
                        Fiber:
                    </div>
                    <div className="pt-2 pr-2">1,5</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="pt-2 pr-2 visible md:invisible">
                        Protein:
                    </div>
                    <div className="text-right pt-2 pr-2">23 %</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="pt-2 pr-2 visible md:invisible">
                        Kulhydrat:
                    </div>
                    <div className="pt-2 pr-2">43,5 %</div>
                </div>
                <div className="nutrition-right-border">
                    <div className="pt-2 pr-2 visible md:invisible">
                        Fedt:
                    </div>
                    <div className="pt-2 pr-2">2,8 g %</div>
                </div>
            </div>

        </div>
    </div>
}
export default Nutritions