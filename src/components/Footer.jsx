import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import PawsomeNews from "./PawsomeNews";

export default function Footer(){
    return <div className="relative lg:mt-72 mt-88 bg-[#FFED92]">
            <PawsomeNews></PawsomeNews>
            <div className=" grid grid-cols-1  lg:flex justify-between  p-30  w-full pt-72">
            <div className="">
                <div className="flex gap-2">
                    <div>
                        <img className="h-6" src="./Images/logo-footer.png"></img>
                    </div>
                    <div className="font-sora">Browse<span className="text-[#FFDC26]">4</span>Pets</div>
                </div>
                <div className="font-sora mt-3 text-xs">Discover a world of treats, toys, and essentials handpicked for your furry friends</div>
            </div>
            <div>
                <div className="font-sora lg:mt-0 mt-4">Find a Pet</div>
                <div className="mt-3 font-sora">Breeds</div>
                <div className="mt-3 font-sora">Contact Us</div>
            </div>
            <div>
                <div className="mt-10 font-sora">Follow Us</div>
                <div className="flex gap-3 mt-2">
                    <div>
                        <FaFacebook></FaFacebook>
                    </div>
                    <div>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div>
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <div>
                        <FaYoutube></FaYoutube>
                    </div>
                </div>
            </div>
        </div>
    </div> 
}