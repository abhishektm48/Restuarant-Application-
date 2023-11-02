const About = () =>
{
    return(
        <div className="container px-10 flex flex-col md:px-28 mt-8 md:flex-row gap-8  md:justify-center">
        <div className="flex-col md:max-w-lg md:flex-row justify-center">
            <h1 className="my-3 text-center text-3xl font-semibold text-green-600">About Us</h1>
            <p className="text-left font-semibold leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum optio incidunt illum eum explicabo ducimus cumque officiis iusto in officia, mollitia libero qui dolorem a dignissimos, sit earum velit error vero doloremque! Amet commodi et ratione repellendus beatae, a soluta minus, eos necessitatibus laudantium quam sequi, fugiat distinctio dolores ab.</p>
        </div>
        <div className="mt-6 md:max-w-xl">
            <img src="https://thumbs.dreamstime.com/b/restaurant-manager-his-staff-terrace-interacting-to-head-chef-restaurant-restaurant-manager-his-staff-terrace-155740797.jpg?w=768" alt="team_img" className="rounded-md md:max-w-md shadow-lg" />
        </div>
        </div>
    )
}

export default About;