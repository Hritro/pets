import Title from "./Title"
import { FaStar } from "react-icons/fa6";


export default function Tranding(){
    const Catagories = [
        {
            rating : 4.5,
            name : 'pet Bed',
            price : '$39.99',
            image : './Images/dog-cartoon.png'

        },
        {
            rating : 4.3,
            name : 'pet Bed',
            price : '$36.99',
            image : './Images/fish-cartoon.png'

        },
        {
            rating : 4.4,
            name : 'pet Bed',
            price : '$37.99',
            image : './Images/pet-couch.png'

        },
        {
            rating : 4.1,
            name : 'pet Bed',
            price : '$33.99',
            image : './Images/mouse-cartoon.png'

        },
        {
            rating : 5.0,
            name : 'pet Bed',
            price : '$42.99',
            image : './Images/bird-cartoon.png'

        },
        {
            rating : 4.0,
            name : 'pet Bed',
            price : '$31.99',
            image : './Images/dog-cartoon.png'

        },
        {
            rating : 4.1,
            name : 'pet Bed',
            price : '$35.99',
            image : './Images/rabbit-cartoon.png'

        },
        {
            rating : 4.5,
            name : 'pet Bed',
            price : '$39.99',
            image : './Images/fish-cartoon.png'

        },
        {
            rating : 3.5,
            name : 'pet Bed',
            price : '$25.99',
            image : './Images/mouse-cartoon.png'

        },

    ]


    return <div className="bg-secondary2 mt-20 py-20">
        <div className="max-w-7xl mx-auto lg:px-0 px-3">
            <Title title={'Tranding Pet Products'}></Title>

            <div className="grid lg:grid-cols-5 gap-5 mt-10">
                <div className="lg:col-span-2 bg-card rounded-xl h-[350px] p-10 space-y-4 relative">
                    <h2 className="font-adlam text-2xl">T-Shirt For Dogs</h2>
                    <p className="font-sora text-sm">Discover a world of treats, toys, and essentials handpicked for</p>
                    <button className="btn bg-white px-5 font-sora rounded-sm">Shop Now</button>
                    <div className="absolute bottom-0 right-0">
                        <img src="./Images/cute-pet-small.png"></img>
                    </div>
                </div>
                <div className="lg:col-span-3 grid lg:grid-cols-3 grid-cols-2 font-sora gap-5">
                    {/* Card start */}
                    {
                        Catagories.map((item,index) => <div key={index}  className="flex gap-2 items-center bg-white p-3 rounded-lg">
                        <div className="bg-secondary2 p-3 rounded-lg">
                            <img className="h-12 w-12" src={item.image} alt="products"></img>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-xs">
                                <span className="text-yellow-500 "><FaStar/></span>
                                <span>{item.rating}</span>
                            </div>
                            <h2 className="text-sm">{item.name}</h2>
                            <h4 className="text-xs">{item.price}</h4>
                        </div>
                        
                    </div>)
                    }
                    
                    {/* card end */}
                    

                    
                </div>
            </div>
        </div>
    </div>
}