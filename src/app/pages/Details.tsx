import React from "react";
import BurgerImg from '../assets/images/burger.png';

const Details = () => {

    return <div>
        <main className="font-gotham">
            <header className="flex items-stretch flex-col md:flex-row">
                <div className="bg-dark-blue basis-full md:basis-1/3 flex flex-col justify-between text-white px-5 pt-16.5 pb-12.5 md:px-20">
                    <div className="text-xs">
                        <span className="text-light-gray">Opskrifter</span><span>{'>'}</span>
                        <span>Klassisk Burger
                        </span>
                    </div>
                    <div>
                        <h1 className="text-white uppercase my-4 font-veener-two text-xl">
                            Klassisk burger m. hjemmelavet pomfritter
                        </h1>
                    </div>
                    <div className="flex text-xs justify-between">
                        <div>
                            <div className="font-bold">Måltidstype: </div>
                            <div>Hovedret</div>
                        </div>
                        <div className=''>
                            <div className="font-bold">Arbejdstid: </div>
                            <div>20 min.</div>
                        </div>
                        <div >
                            <div className="font-bold">Samlet tid: </div>
                            <div>30 min.</div>
                        </div>
                    </div>
                </div>
                <div className="basis-full md:basis-2/3">
                    <img className="max-w-full" src={BurgerImg} />
                </div>
            </header>

            <section className="flex flex-col md:flex-row">
                <div className="bg-light-blue basis-full md:basis-1/3 px-5 py-8 md:px-20 md:py-14">
                    <h2 className="text-dark-blue uppercase font-veener-two text-lg py-2">
                        Ingredienser
                    </h2></div>


                <div className="basis-full md:basis-2/3 px-5 py-8 md:px-10 md:py-14">
                    <h2 className="text-dark-blue uppercase font-veener-two text-lg py-2">Introduktion</h2>
                    <div className="text-md-18 py-8">
                        Hjemmelavede burgere med saftige bøffer, sprødt lækkert fyld, guacamole og nybagte boller er virkelig lækkert! Her er de hjemmelavede burgere tilberedt med boller bagt med oliven og en skøn bøf med soltørrede tomater – det giver en særlig skøn smag til burgerne og derudover fyldes de jo endelig bare med alt favoritfyldet.
                    </div>
                    <div className="flex py-8">
                        {/* tags */}
                        <div className='bg-dark-gray mr-2 rounded-md text-white text-xs px-3 py-2'>Hovedretter</div>
                        <div className='bg-dark-gray mr-2 rounded-md text-white text-xs px-3 py-2'>Amerikansk</div>
                        <div className='bg-dark-gray mr-2 rounded-md text-white text-xs px-3 py-2'>Junk food</div>
                        <div className='bg-dark-gray mr-2 rounded-md text-white text-xs px-3 py-2'>Frokost</div>
                        <div className='bg-dark-gray mr-2 rounded-md text-white text-xs px-3 py-2'>Nem aftensmad</div>
                    </div>
                    <div>
                        <div className="text-md-20">Næringsindhold</div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <div className="bg-light-gray rounded-tl-md">
                                    <div></div>
                                    <div className="text-right">ENERGIFORDELING</div>
                                </div>
                                <div className="flex justify-between border-b border-l border-light-gray">
                                    <div>
                                        Fiber:
                                    </div>
                                    <div>-</div>
                                </div>
                                <div className="flex justify-between  border-b border-l border-light-gray">
                                    <div>
                                        Protein:
                                    </div>
                                    <div>23 %</div>
                                </div>
                                <div className="flex justify-between  border-b border-l border-light-gray">
                                    <div className="text-left">
                                        Kulhydrat:
                                    </div>
                                    <div className="text-right">43,5 %</div>
                                </div>
                                <div className="flex justify-between  border-b border-l border-light-gray">
                                    <div className="text-left">
                                        Fedt:
                                    </div>
                                    <div className="text-right">28,2 %</div>
                                </div>
                            </div>

                            <div>
                                <div className="bg-light-gray flex justify-between rounded-tr-md">
                                    <div className="visible md:invisible"></div>
                                    <div className="text-right">NÆRINGSINDHOLD PR. 100G</div>
                                </div>
                                <div className="flex justify-between  border-b border-r border-light-gray">
                                    <div className="visible md:invisible">
                                        Fiber:
                                    </div>
                                    <div>1,5</div>
                                </div>
                                <div className="flex justify-between border-b border-r border-light-gray">
                                    <div className="visible md:invisible">
                                        Protein:
                                    </div>
                                    <div className="text-right">23 %</div>
                                </div>
                                <div className="flex justify-between border-b border-r border-light-gray">
                                    <div className="visible md:invisible">
                                        Kulhydrat:
                                    </div>
                                    <div>43,5 %</div>
                                </div>
                                <div className="flex justify-between border-b border-r border-light-gray">
                                    <div className="visible md:invisible">
                                        Fedt:
                                    </div>
                                    <div>2,8 g %</div>
                                </div>
                            </div>

                        </div>
                        {/* <table className="table-auto w-full rounded-md">
                            <thead className="bg-light-gray">
                                <tr>
                                    <th></th>
                                    <th className="font-bold text-xs p-2 text-right">ENERGIFORDELING</th>
                                    <th className="invisible md:visible"></th>
                                    <th className="font-bold text-xs p-2 text-right">NÆRINGSINDHOLD PR. 100G
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-l border-r border-light-gray border-solid">
                                    <td className="text-left">Fiber:</td>
                                    <td className="text-right">-</td>
                                    <td className="text-left visible md:invisible">Fiber:</td>
                                    <td className="text-right">1,5 g</td>
                                </tr>
                                <tr className="border-b border-l border-r border-light-gray border-solid">
                                    <td className="text-left">Protein:</td>
                                    <td className="text-right">-</td>
                                    <td className="text-left visible md:invisible">Protein:</td>
                                    <td className="text-right">1,5 g</td>
                                </tr>
                                <tr className="border-b border-l border-r border-light-gray border-solid">
                                    <td className="text-left">Kulhydrat:</td>
                                    <td className="text-right">The Eagles</td>
                                    <td className="text-left visible md:invisible">Kulhydrat:</td>

                                    <td className="text-right">1972</td>
                                </tr>
                                <tr className="border-b border-l border-r border-light-gray border-solid">
                                    <td className="text-left">Fedth:</td>
                                    <td className="text-right">Earth, Wind, and Fire</td>
                                    <td className="text-left visible md:invisible">Fedth:</td>
                                    <td className="text-right">1975</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>

            </section>

        </main >
        <footer>
            <ul className="flex justify-center">
                <li>
                    <a href="#">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.47359 15.4341H7.48114H7.47863H7.47359ZM7.5265 15.4341H7.53154H7.5265ZM7.45091 15.4341H7.45847H7.45343H7.45091ZM7.5517 15.4341H7.54666H7.55422H7.5517ZM7.42823 15.4341H7.43327H7.42823ZM7.57438 15.4341H7.56934H7.57438ZM7.59957 15.4341H7.60461H7.59957ZM7.40051 15.4316H7.40807H7.40555H7.40051ZM7.62225 15.4316H7.61721H7.62477H7.62225ZM7.37784 15.4316H7.3854H7.38036H7.37784ZM7.64745 15.4316H7.64241H7.64745ZM7.35516 15.4316H7.36272H7.35516ZM7.32744 15.4316H7.335H7.32744ZM7.67265 15.4316H7.67768H7.67265ZM7.30224 15.4316H7.31232H7.3098H7.30224ZM7.69532 15.4316H7.6928H7.70288H7.69532ZM7.72052 15.4316H7.71548H7.72556H7.72052ZM7.28209 15.429H7.29216H7.28713H7.28209ZM7.25941 15.429H7.26697H7.25941H7.25437H7.25941ZM7.7432 15.429H7.73816H7.7432H7.74824H7.7432ZM7.7684 15.429H7.76588H7.77595H7.7684ZM7.22917 15.429H7.23925H7.23673H7.22917ZM7.20901 15.4265H7.21909H7.21405H7.20901ZM7.79107 15.429H7.78603H7.79611H7.79107ZM7.18634 15.4265H7.19641H7.18634ZM7.81627 15.4265H7.80871H7.81627ZM7.1561 15.4265H7.16618H7.16366H7.1561ZM7.83895 15.4265H7.83643H7.84651H7.83895ZM7.13342 15.424H7.14602H7.14098H7.13342ZM7.86415 15.424H7.85911H7.8717H7.86415ZM7.11326 15.424H7.12586H7.1183H7.11326ZM7.88682 15.424H7.87926H7.89186H7.88682ZM7.91202 15.4215H7.90194H7.91202H7.9221H7.91202ZM7.09311 15.4215H7.10318H7.09311H7.08303H7.09311ZM7.9347 15.4215H7.92966H7.94226H7.9347ZM7.06035 15.4215H7.07295H7.06791H7.06035ZM7.04019 15.419H7.05279H7.04523H7.04019ZM7.9599 15.419H7.95234H7.96493H7.9599ZM7.02003 15.419H7.03011H7.02003H7.00995H7.02003ZM7.98257 15.419H7.97249H7.98257H7.99265H7.98257ZM8.00777 15.4164H8.00525H8.01533H8.00777ZM6.9898 15.4164H6.99988H6.99736H6.9898ZM6.96712 15.4139H6.9772H6.97216H6.96712ZM8.03045 15.4139H8.02541H8.03549H8.03045ZM6.94696 15.4139H6.95704H6.94696ZM8.05564 15.4139H8.04809H8.05564ZM6.91924 15.4114H6.92932H6.9268H6.91924ZM8.07832 15.4114H8.08588H8.07832ZM8.10352 15.4089H8.09848H8.10856H8.10352ZM6.89657 15.4089H6.90664H6.90161H6.89657ZM6.87641 15.4064H6.88397H6.87641ZM8.1262 15.4089H8.12116H8.1262ZM8.17407 15.4038H8.17659H8.17407ZM6.82853 15.4038H6.83357H6.83105H6.82853ZM6.80586 15.4013H6.81089H6.80586ZM6.32963 15.3434C2.74656 14.779 0.00256348 11.6746 0.00256348 7.93282C0.00256348 3.79541 3.36389 0.434082 7.5013 0.434082C11.6387 0.434082 15 3.79541 15 7.93282C15 11.6746 12.256 14.7789 8.67298 15.3409V10.0998H10.4217L10.7543 7.93282H8.6755V6.52681C8.6755 5.93467 8.96527 5.35513 9.89757 5.35513H10.8425V3.51068C10.8425 3.51068 9.98324 3.36454 9.16433 3.36454C7.45091 3.36454 6.33214 4.40267 6.33214 6.28239V7.93534H4.42722V10.1023H6.33214V15.3434H6.32963Z" fill="#CC092F" />
                        </svg>
                        <span className="invisible md:visible">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.434082C11.6387 0.434082 15 3.79541 15 7.93408C15 12.0728 11.6387 15.4341 7.5 15.4341C3.36133 15.4341 0 12.0728 0 7.93408C0 3.79541 3.36133 0.434082 7.5 0.434082ZM11.9922 5.67822C11.8848 5.27393 11.5664 4.95752 11.1641 4.8501C10.4316 4.65283 7.5 4.65283 7.5 4.65283C7.5 4.65283 4.56836 4.65283 3.83789 4.84814C3.43555 4.95557 3.11719 5.27393 3.00977 5.67627C2.8125 6.40869 2.8125 7.93408 2.8125 7.93408C2.8125 7.93408 2.8125 9.45947 3.00781 10.1899C3.11523 10.5942 3.43359 10.9106 3.83594 11.0181C4.56641 11.2134 7.49805 11.2134 7.49805 11.2134C7.49805 11.2134 10.4297 11.2134 11.1602 11.0181C11.5645 10.9106 11.8809 10.5923 11.9883 10.1899C12.1836 9.45947 12.1836 7.93408 12.1836 7.93408C12.1836 7.93408 12.1875 6.40869 11.9922 5.67822ZM6.5625 9.34033V6.52783L8.99805 7.93408L6.5625 9.34033Z" fill="#CC092F" />
                        </svg>
                        <span className="invisible md:visible">Youtube</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex'>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 7.93408C9 8.76253 8.32844 9.43408 7.5 9.43408C6.67156 9.43408 6 8.76253 6 7.93408C6 7.10564 6.67156 6.43408 7.5 6.43408C8.32844 6.43408 9 7.10564 9 7.93408Z" fill="#CC092F" />
                            <path d="M10.8281 5.41619C10.7597 5.23082 10.6506 5.06303 10.5088 4.92531C10.3711 4.7835 10.2034 4.67436 10.0179 4.60595C9.86746 4.54753 9.64148 4.47799 9.22524 4.45904C8.77497 4.43851 8.63997 4.43408 7.50006 4.43408C6.36003 4.43408 6.22503 4.43839 5.77487 4.45893C5.35864 4.47799 5.13254 4.54753 4.98222 4.60595C4.79674 4.67436 4.62895 4.7835 4.49134 4.92531C4.34953 5.06303 4.24039 5.2307 4.17187 5.41619C4.11345 5.56662 4.0439 5.79272 4.02496 6.20896C4.00442 6.65911 4 6.79411 4 7.93414C4 9.07405 4.00442 9.20905 4.02496 9.65932C4.0439 10.0756 4.11345 10.3015 4.17187 10.452C4.24039 10.6375 4.34942 10.8051 4.49122 10.9429C4.62895 11.0847 4.79662 11.1938 4.98211 11.2622C5.13254 11.3207 5.35864 11.3903 5.77487 11.4092C6.22503 11.4298 6.35992 11.4341 7.49994 11.4341C8.64008 11.4341 8.77508 11.4298 9.22513 11.4092C9.64136 11.3903 9.86746 11.3207 10.0179 11.2622C10.3902 11.1186 10.6845 10.8243 10.8281 10.452C10.8866 10.3015 10.9561 10.0756 10.9752 9.65932C10.9957 9.20905 11 9.07405 11 7.93414C11 6.79411 10.9957 6.65911 10.9752 6.20896C10.9562 5.79272 10.8867 5.56662 10.8281 5.41619V5.41619ZM7.50006 10.1263C6.28924 10.1263 5.3077 9.14484 5.3077 7.93403C5.3077 6.72321 6.28924 5.74178 7.50006 5.74178C8.71076 5.74178 9.6923 6.72321 9.6923 7.93403C9.6923 9.14484 8.71076 10.1263 7.50006 10.1263ZM9.77897 6.16743C9.49604 6.16743 9.26665 5.93804 9.26665 5.65511C9.26665 5.37217 9.49604 5.14278 9.77897 5.14278C10.0619 5.14278 10.2913 5.37217 10.2913 5.65511C10.2912 5.93804 10.0619 6.16743 9.77897 6.16743Z" fill="#CC092F" />
                            <path d="M7.5 0.434082C3.3585 0.434082 0 3.79258 0 7.93408C0 12.0756 3.3585 15.4341 7.5 15.4341C11.6415 15.4341 15 12.0756 15 7.93408C15 3.79258 11.6415 0.434082 7.5 0.434082ZM11.7807 9.70963C11.7598 10.1681 11.6869 10.4811 11.5805 10.7551C11.3568 11.3335 10.8995 11.7909 10.321 12.0146C10.0471 12.121 9.734 12.1938 9.27567 12.2147C8.81641 12.2357 8.6697 12.2407 7.50011 12.2407C6.33041 12.2407 6.18382 12.2357 5.72445 12.2147C5.26611 12.1938 4.953 12.121 4.67915 12.0146C4.39167 11.9064 4.13143 11.737 3.91628 11.5178C3.69724 11.3028 3.52776 11.0424 3.41961 10.7551C3.31318 10.4812 3.24028 10.1681 3.21945 9.70975C3.19828 9.25038 3.19336 9.10367 3.19336 7.93408C3.19336 6.7645 3.19828 6.61778 3.21934 6.15853C3.24017 5.70008 3.31295 5.38708 3.41938 5.11311C3.52753 4.82575 3.69713 4.5654 3.91628 4.35036C4.13132 4.13121 4.39167 3.96172 4.67903 3.85358C4.953 3.74715 5.266 3.67436 5.72445 3.65342C6.1837 3.63248 6.33041 3.62744 7.5 3.62744C8.66959 3.62744 8.8163 3.63248 9.27555 3.65353C9.734 3.67436 10.047 3.74715 10.321 3.85346C10.6083 3.96161 10.8687 4.13121 11.0838 4.35036C11.3029 4.56551 11.4725 4.82575 11.5805 5.11311C11.687 5.38708 11.7598 5.70008 11.7808 6.15853C11.8017 6.61778 11.8066 6.7645 11.8066 7.93408C11.8066 9.10367 11.8017 9.25038 11.7807 9.70963V9.70963Z" fill="#CC092F" />
                        </svg>
                        <span className="invisible md:visible">Instagram</span>
                    </a>
                </li>
            </ul>
        </footer>
    </div >
}
export default Details