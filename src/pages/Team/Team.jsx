import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import one from '../../assets/images/team/1.jpg'
import two from '../../assets/images/team/2.jpg'
import three from '../../assets/images/team/3.jpg'
import { Link } from "react-router-dom";
const Team = () => {
    return (
        <div>
            <div className="text-center  space-y-4 mb-8">
                <h3 className='text-[#FF3811] text-2xl font-bold '>Team</h3>
                <h1 className="text-5xl font-bold">Meet Our Team</h1>
                <p className="text-[#737373] py-3">Tthe majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3">
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl  " />
                    </figure>
                    <div className="card-body items-center text-center space-y-2">
                        <h2 className="card-title font-bold">David Macculam</h2>
                        <h4 className="text-[#737373] font-bold">Engine Expert</h4>
                        <div className=" flex gap-2 mb-2">
                            <Link className="btn rounded-full border-[#FF3811]"><FaSquareFacebook></FaSquareFacebook></Link>
                            <Link className="btn rounded-full border-[#FF3811] "><FcGoogle></FcGoogle></Link>
                            <Link className="btn border-[#FF3811] rounded-full"><FaGithub></FaGithub></Link>
                        </div>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl  " />
                    </figure>
                    <div className="card-body items-center text-center space-y-2">
                        <h2 className="card-title font-bold">Ricky Ponting</h2>
                        <h4 className="text-[#737373] font-bold">Engine Expert</h4>
                        <div className=" flex gap-2 mb-2">
                            <Link className="btn rounded-full border-[#FF3811]"><FaSquareFacebook></FaSquareFacebook></Link>
                            <Link className="btn rounded-full border-[#FF3811] "><FcGoogle></FcGoogle></Link>
                            <Link className="btn border-[#FF3811] rounded-full"><FaGithub></FaGithub></Link>
                        </div>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded-xl  " />
                    </figure>
                    <div className="card-body items-center text-center space-y-2">
                        <h2 className="card-title font-bold">Virat Kohli</h2>
                        <h4 className="text-[#737373] font-bold">Engine Expert</h4>
                        <div className=" flex gap-2 mb-2">
                            <Link className="btn rounded-full border-[#FF3811]"><FaSquareFacebook></FaSquareFacebook></Link>
                            <Link className="btn rounded-full border-[#FF3811] "><FcGoogle></FcGoogle></Link>
                            <Link className="btn border-[#FF3811] rounded-full"><FaGithub></FaGithub></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;