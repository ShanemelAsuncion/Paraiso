import BannerBgImg from "../assets/leaves.jpg"
import BannerImg from "../assets/spa.jpg"
import BannerImg2 from "../assets/shadeBeach.jpg";
import BarImg from "../assets/bar.jpg";
import KitchenImg from "../assets/kitchen.jpg";
import FoodImg from "../assets/food.jpg";
import { Colors, FontSize } from "../components/styles";

function Home(){


    return(
        <div style={{backgroundColor:Colors.bg}}>
            <div style={styles.banner}>
                <div style={styles.bannertxt__wrapper}>
                <h1 style={styles.banner__title}>Home <br></br><b>Away</b> From <br></br>Home</h1>
                </div>
                <img src={BannerImg} style={{height: '550px',padding: '50px 100px 0 0'}}/>
            </div>
            <div style={styles.banner2}>
                <div style={styles.bannertxt__wrapper}>
                    <h1 style={styles.banner__title}>Live the</h1>
                    <h1 style={styles.banner__title}>paradise Life</h1>
                </div>
                <div style={{display: "flex", alignItems: "flex-end"}}>
                <img src={BannerImg2} style={styles.banner__img2}/>
                </div>
            </div>
            <div style={{height: "100vh",textAlign: "center",margin: "0 100px 0 100px"}}> 
                <div style={styles.about__text}>
                    <h2 style={{fontSize: FontSize.md, padding: "100px 0 0 0"}}>Don't miss out on the experience of a lifetime</h2>
                    <p style={{fontSize: FontSize.sm}}>Pellentesque et diam leo. Cras facilisis justo sed orci laoreet efficitur. Duis nulla odio, tempor non metus quis, ultrices interdum velit. Pellentesque orci nisi, tincidunt at nisi sit amet, dignissim accumsan tortor. Etiam ullamcorper viverra lectus ac imperdiet. Integer viverra ac purus ut ornare. Nullam feugiat id lacus nec volutpat. Aliquam in dui ac metus pretium pharetra eget a neque. Sed in neque ultricies, fringilla magna eleifend, ultricies lectus.</p>
                </div>
                <div>
                    <img src={BarImg} style={{height:"400px", width: "100%", paddingBottom: "20px"}}/>
                    <div style={{display:"flex", width:"100%", justifyContent:"center" }}>
                        <img src={KitchenImg} style={{height:"400px", width: "400px", paddingRight: "5px", flexGrow:"1"}}/>
                        <img src={FoodImg} style={{height:"400px",width: "400px", paddingLeft: "5px", flexGrow:"1"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

const styles = {
    banner: {
        backgroundImage: `url(${BannerBgImg})`,
        backgroundSize: 'cover',
        height: "100vh",
        opacity: "92%",
        color: 'white',
        fontSize: FontSize.md,
        marginTop: '0%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    bannertxt__wrapper:{
        display: 'inline',
        padding: '120px 0 0 0',
    },
    banner__title: {
        marginTop: '0%',
        padding: '0 0 0 120px',
        fontWeight: '400'
    },
    banner2:{
        fontSize: FontSize.md,
        marginTop: '0%',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Crimson Pro',
        fontSize:'40px',
        height: "100vh",
        letterSpacing: '5px',
    },
    banner__img2:{
        height: '500px',
        float:'right',
        bottom:'0',
        borderRadius: '25px',
        margin: '0 120px 120px 0',
        width: '400px'
    },
    
}