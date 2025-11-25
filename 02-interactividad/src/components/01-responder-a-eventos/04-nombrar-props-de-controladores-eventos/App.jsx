export default function App() {
    function handleGenerateClick() {
        alert("PDF Generado.")
    }

    function handleEncenderClick() {
        alert("Led Encendido.")
    }

    return <>
        <div>
            <h2>Nombrar props de controladores de eventos</h2>
            <Boton onSmash={handleGenerateClick}>
                Generar PDF
            </Boton>
            <Boton onSmash={handleEncenderClick}>
                Encender Led
            </Boton>
        </div>
    </>;
}


function Boton({ onSmash, children }) {
    return <>
        <button onClick={onSmash}>{children}</button>
    </>
}

