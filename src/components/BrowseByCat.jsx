import Title from "./Title"

export default function BrowseByCat(){
    const categories = [
        {
            name: 'Dog',
            items: 3,
            image: './Images/dog-cartoon.png'
        },
        {
            name: 'Cat',
            items: 3,
            image: './Images/cat-cartoon.png'
        },
        {
            name: 'Bird',
            items: 3,
            image: './Images/bird-cartoon.png'
        },
        {
            name: 'Fish',
            items: 3,
            image: './Images/fish-cartoon.png'
        },
        {
            name: 'Rabbit',
            items: 3,
            image: './Images/rabbit-cartoon.png'
        },
        {
            name: 'Small Pet',
            items: 3,
            image: './Images/mouse-cartoon.png'
        
        }
    ]


    return <div className="font-adlam mt-20">

        {/* {
            categories.map((cat, index) => <div key={index}>{cat.name}</div>)
        } */}

        <Title title={'Browse By Catagories'}/>

        <div className="grid lg:grid-cols-6 grid-cols-2 mt-10 gap-5">
            {
                categories.map((cat,index) => <div key={index} className="bg-card p-5 rounded-md gap-3 flex flex-col items-center">
                <div className="bg-white p-5 rounded-full">
                    <img src={cat.image}></img>
                </div>
                <h2 className="font-adlam">{cat.name}</h2>
                <p className="font-sora">3 items</p>
            </div>)
            }
            

        </div>
    </div>
}