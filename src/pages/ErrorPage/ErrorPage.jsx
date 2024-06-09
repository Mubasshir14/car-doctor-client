import one from '../../assets/images/products/1.png'
import two from '../../assets/images/products/2.png'
import three from '../../assets/images/products/3.png'
import four from '../../assets/images/products/4.png'
import five from '../../assets/images/products/5.png'
import six from '../../assets/images/products/6.png'

const ErrorPage = () => {
    return (
        <div>
            <div className="text-center  space-y-4 mb-8">
                <h3 className='text-[#FF3811] text-2xl font-bold '>Popular Products</h3>
                <h1 className="text-5xl font-bold">Browse Our Products</h1>
                <p className="text-[#737373] py-3">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-20 space-y-6'>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Cools Hydrolik Brake</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Cools Air Filter</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={four} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={five} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Tyres</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-4 border-[#F3F3F3]">
                    <figure className="px-10 pt-10">
                        <img src={six} alt="Shoes" className="rounded-xl bg-[#F3F3F3] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating gap-1 rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#FF3811]" checked/>
                        </div>
                        <h2 className="card-title">Engine Oil</h2>
                        <h4 className="card-title text-[#FF3811]">$20.00</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;