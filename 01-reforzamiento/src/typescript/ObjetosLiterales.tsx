interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Luis',
        edad: 26,
        direccion: {
            pais: 'México',
            casaNo: 245
        }
    };

    return (
        <>
            <h3>Objetos Listerales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales;