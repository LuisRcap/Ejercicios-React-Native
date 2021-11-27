
const TiposBasicos = () => {

    const nombre: string = 'Luis';
    const edad: number = 26;
    const estaActivo: boolean = true;

    const poderes: string[] = [];   // 'Velocidad', 'Volar', 'Respirar bajo el agua'
    // const poderes: (string | number)[]

    return (
        <>
            <h3>Tipos Básicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'Inactivo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}

export default TiposBasicos;