import '../main.js'

const Hero = () =>
{
    return(
        <div>
       <div className="w-full container px-10 md:px-28 py-8 bg-center bg-cover md:min-h-fit">
                <nav className="flex items-center">
                    <div className="text-2xl font logo-font cursor-pointer text-white hover:text-yellow-400 duration-300">
                        <h1>Easy <span className="text-yellow-400 hover:text-white duration-300">Foods</span></h1>
                    </div>
                    <ul className="text-white flex-1 text-right  font-semibold hidden md:block" id="menu">
                        <li className="px-5 inline-block"><a href=""><span className="text-yellow-400">Home</span></a></li>
                        <li className="px-5 inline-block hover:text-yellow-400 duration-300"><a href="">About Us</a></li>
                        <li className="px-5 inline-block hover:text-yellow-400 duration-300"><a href="">Special Dishes</a></li>
                        <li className="px-5 inline-block hover:text-yellow-400 duration-300"><a href="">Contact</a></li>
                    </ul>
                    <i className="fa-solid fa-bars text-yellow-400 md:hidden flex-1 text-right hover:text-white duration-300 cursor-pointer" id="toggle-btn"></i>
                </nav>
                <div className='flex flex-col items-center md:flex-row'>
                <div className="text-white mt-12 md:my-40 max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-semibold hero-image-font">It's all about <span className="text-yellow-400">good food & taste..</span></h1>
                    <p className="text-md leading-6 pt-5 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus modi dolore, cumque mollitia inventore sapiente similique accusamus reiciendis, laborum dolorum voluptatem, expedita earum quis.</p>
                    <div className="mt-8">
                        <a className="bg-yellow-400 font-semibold text-black py-3 px-8 rounded-3xl inline-block hover:bg-transparent hover:text-yellow-400 hover:border border border-transparent hover:border-yellow-400 duration-300" href="">Order Now</a>
                    </div>
                </div>
                <div className='mt-12 md:my-38 max-w-lg md:ml-28 float-right'>
                    <img src="/images/pngwing.com.png" alt="hero_img" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;