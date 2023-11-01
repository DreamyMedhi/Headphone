import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>wsedrrfghjkml sedrftghjkl waesdrftghjkl edrtfyguhj asdqw rtyhui cvb sdfgh sdfghj asdfgh sedrty asdfgh asdf sdfvb sdfgh sdfgh asdfghj ghjkl qwer yuio zxcv sd f g </p>

                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Image"></img>
            </div>
        </div>
    );
};

export default Banner;
