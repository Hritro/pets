const PawsomeNews = () => {
    return (
        <div className="bg-secondary2 rounded-xl p-10 flex gap-20 items-center absolute -top-1/2 lg:min-w-7xl lg:left-[120px] left-6">
            <div>
                <img src="./Images/cute-pet-mid.png" alt=""></img>
            </div>
            <div className="space-y-5">
                <h1 className="font-adlam text-3xl">Get Pawsome News!</h1>
                <p className="font-sora">Exclusive training tips, ticks, product deals and more.</p>
                <div><input type="text" placeholder="Enter Email..." className="input border-0 font-sora" /></div>
                <button className="btn border-0 bg-primary2 font-sora">Subscribe</button>
            </div>
        </div>
    );
};

export default PawsomeNews;