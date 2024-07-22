import { ImgTxtBox } from "../../components/ImgTxtBox";
import petIcon from"../../assets/icons/pet.png";
import wifiIcon from  "../../assets/icons/wifi.png"

function ImgTxtBoxTest(){


    return(
        <div style={styles.container}>
            <ImgTxtBox img={petIcon} label={"Pet Friendly"} size={"lg"} />
            <ImgTxtBox img={wifiIcon} label={"Free Wifi"} size={"sm"} />
        </div>
    )
}

export default ImgTxtBoxTest;

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '200px',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
