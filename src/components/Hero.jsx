const Hero = () =>
{
    return(
       <div className="container px-28 py-8 bg-center bg-cover min-h-screen bg-[url('https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')]">
                <nav className="flex items-center">
                    <div className="text-2xl font logo-font cursor-pointer text-white">
                        <h1>Easy <span className="text-orange-500">Foods</span></h1>
                    </div>
                    <ul className="text-white flex-1 text-right font-semibold">
                        <li className="px-5 inline-block"><a href=""><span className="text-orange-600">Home</span></a></li>
                        <li className="px-5 inline-block hover:text-orange-600 duration-300"><a href="">About Us</a></li>
                        <li className="px-5 inline-block hover:text-orange-600 duration-300"><a href="">Special Dishes</a></li>
                        <li className="px-5 inline-block hover:text-orange-600 duration-300"><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className="text-white mt-48 max-w-lg">
                    <h1 className="text-5xl font-semibold">It's all about <span className="text-orange-600">good foods & taste..</span></h1>
                    <p className="text-md leading-6 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus modi dolore, cumque mollitia inventore sapiente similique accusamus reiciendis, laborum dolorum voluptatem, expedita earum quis.</p>
                    <div className="mt-10">
                        <a className="bg-orange-600 py-3 px-8 rounded-3xl font-medium inline-block hover:bg-transparent hover:text-orange-600 hover:border border border-transparent hover:border-orange-600 duration-300" href="">Order Now</a>
                    </div>
                </div>
            </div>
    )
}

export default Hero;