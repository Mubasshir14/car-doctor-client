import team from '../../../assets/icons/group.svg'
import person from '../../../assets/icons/person.svg'
// import time from "../../../assets/icons/time.svg";
import time from '../../../assets/icons/time.svg'
import wrench from '../../../assets/icons/Wrench.svg'
import check from '../../../assets/icons/check.svg'
import delivery from '../../../assets/icons/deliveryt.svg'
// import { IoIosTimer } from "react-icons/io";

const ChooseUs = () => {
    return (
        <div>
            <div className="text-center  space-y-4 mb-8">
                <h3 className='text-[#FF3811] text-2xl font-bold '>Core Features</h3>
                <h1 className="text-5xl font-bold">Why Choose Us</h1>
                <p className="text-[#737373] py-3">Tthe majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-6 mb-36'>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={team} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y ">
                        <div className="my-2 space-y-1">
                            <h2 className="text-lg font-bold sm:text-2xl">Expert Team</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={time} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-bold sm:text-2xl">Timely Delivery</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={person} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-bold sm:text-2xl">24/7 Support</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={wrench} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-bold sm:text-2xl">Best Equipment</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={check} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-bold sm:text-2xl">100% Guranty</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-[#f68b76] hover:text-white">
                    <img src={delivery} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-bold sm:text-2xl">Timely Delivery</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;