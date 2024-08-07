import { ThemedButton } from "../../components/ThemedButton";

function ButtonTest(){


    return(
        <div style={styles.container}>
            BUTTON STYLES:
            <ThemedButton color='green'type="outline" label="Shop now" />
            <ThemedButton color='black' type="filled" label="Learn more" /> 
            <ThemedButton color='neutral'type="outline" label="Shop now" />
            <ThemedButton color='neutral' type="filled" label="Learn more" /> 
            <ThemedButton color='neutral' type="underline" label="Learn more" /> 
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '200px',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default ButtonTest;