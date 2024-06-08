import { Link, useLoaderData } from "react-router-dom";
import img1 from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const amount = form.amount.value;

        // console.log(name, date, email, amount);
        const order ={
            CustomerName: name,
             email,
            date,
            service: _id,
            price: price
        }

        console.log(order);
    }
    return (
        <div>
            <div className="mt-20 mb-36 ">
                <div className="carousel-item relative w-full rounded-xl">
                    <img src={img1} className="w-full " />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-8  ml-12  '>
                            <h2 className='text-7xl font-bold'>Check Out</h2>
                        </div>

                    </div>
                    <div className="absolute flex transform -translate-y-1/2 left-1/3 -bottom-6">
                        <div className="bg-[#FF3811] py-3 px-20 rounded-t-3xl">
                            <h3 className="text-white">Home/Checkout</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="rounded-xl bg-base-200 mb-36">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="p-10">
                            <form onSubmit={handleBookService}>
                                <div className="block lg:flex gap-4">
                                <div className="">
                                    {/* <label className="label">
                                        <span className="label-text font-bold">First Name</span>
                                    </label> */}
                                    <input type="text" placeholder="First Name" name="name" defaultValue={user?.displayName} className="input input-bordered w-[472px]" required />
                                </div>
                                <div className="">
                                    {/* <label className="label">
                                        <span className="label-text font-bold">Last Name</span>
                                    </label> */}
                                    <input type="date" name="date" className="input input-bordered w-[472px]" required />
                                </div>
                                </div>
                                <div className="block lg:flex gap-4 mt-3 mb-8">
                                <div className="">
                                    {/* <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label> */}
                                    <input type="email" placeholder="Email" defaultValue={user?.email} name="email" className="input input-bordered w-[472px]" required />
                                </div>
                                <div className="">
                                    {/* <label className="label">
                                        <span className="label-text font-bold">Your Phone</span>
                                    </label> */}
                                    <input type="text" placeholder="Due Amount" name="amount" defaultValue={'$' + price} className="input input-bordered w-[472px]" required />
                                </div>
                                </div>
                                <div >
                                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full h-[150px]" ></textarea>
                                </div>
                                <input className="bg-[#FF3811] mt-6 text-white w-full btn" type="submit" value='Order Confirm' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;