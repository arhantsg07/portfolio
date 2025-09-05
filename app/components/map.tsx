import { MapPin } from "lucide-react";
import { Avatar } from "@mui/material";
import { useTheme } from "../context/themeContext";

function Map() {
    const { themeClasses } = useTheme();
    return (
        <section className="pt-30 px-6">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <div className="flex flex-col items-center gap-8 justify-center text-3xl text-white font-['IBM_Plex_Mono'] mb-20">
                        <Avatar
                            alt="Profile_photo"
                            src="./images/logo.png"
                            sx={{ width: 200, height: 200 }}
                        />
                        <div className={`${themeClasses.text}`}>Arhant Gourkhede</div>
                        
                        {/* <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p> */}
                        <div className="flex justify-center items-center space-x-4 text-gray-400">
                            <MapPin className="w-5 h-5" />
                            <span>IIIT Kota, Rajasthan</span>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
}

export default Map;