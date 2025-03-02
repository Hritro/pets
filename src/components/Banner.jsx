// import background from './Images/cat-big.png'

export default function Banner(){
    return <div style={{backgroundImage: `url("./Images/cat-big.png")`}} className="lg:h-[650px] h-[430px]  bg-contain bg-bottom bg-no-repeat mt-5">
            <div className="flex flex-col text-left items-start gap-3 ">
                <div className="text-4xl font-adlam lg:w-[400px]">Pamper Your Pet, Because They Deserve the Bes</div>
                <div className="font-sora lg:w-[600px]">Discover a world of treats, toys, and essentials handpicked for your furry friends. Shop now and make tails wag with joy!</div>
                <div>
                    <button className="bg-primary2 text-black font-sora p-2 rounded-md">Find a Pet</button>
                </div>

            </div>
    </div>
}

