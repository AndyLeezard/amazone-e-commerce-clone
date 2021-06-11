import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={4000}
            >
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng5.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng3.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng2.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng4.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="img/home_demo_safe_eng6.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
