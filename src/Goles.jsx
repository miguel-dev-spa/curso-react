export const Goles = () => {
    const marcaGol = () => {
        console.log("GOOOL!!!")
    } 

    return (  
        <>
            <h2>Goles</h2>
            <button onClick={marcaGol}>Sumar goles</button>
        </>
    );
}
