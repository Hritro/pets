import Title from "./Title"

export default function EverydayLowPrice(){
    return <div className="max-w-7xl mx-auto lg:px-0 px-3">
        <Title title={'Everyday low Price'}></Title>
        <div className="lg:grid grid-cols-5 mt-10 gap-5">
            <div className="h-[350px] col-span-3 bg-gradient-to-br from-[#F8CCFB] to-[#ACD2FD] rounded-lg flex  items-center justify-between font-adlam">
                <div className="p-20">
                    <h3 className="font-sora">Under Price</h3>
                    <h1 className="text-xl mt-4">Pet Grooming Mitt</h1>
                    <h2 className="text-white mt-2">(Easy Hair Removal)</h2>
                    <h1 className="text-7xl mt-5">$7.99</h1>
                </div>
                <div>
                    <img className="h-[350px]" src=".\Images\cute-dog-mid.png"></img>
                </div>
            </div>
            <div className="h-[350px] lg:mt-0 mt-5 col-span-2 bg-gradient-to-br from-[#FFF9F4] to-[#F9DF8A] rounded-lg flex  items-center justify-between relative">
                <div className="p-10 absolute top-1">
                    <h3 className="text-xl font-adlam">T-Shirt for Dogs</h3>
                    <h1 className="text-4xl text-[#FFDC26] font-adlam">$7.99</h1>
                </div>
                <div className="absolute right-2 bottom-0">
                    <img className="h-[300px]" src=".\Images\cute-pet-mid.png"></img>
                </div>
            </div>
        </div>
    </div>
}