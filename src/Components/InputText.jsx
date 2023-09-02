import '../Styles/InputText.css';

function InputText() {
    return (
        <div>
            <p>Ingrese su nombre</p>
            <input type='text' placeholder='Ingrese un nombre' autoComplete='off'></input>
            <button>Send</button>
        </div>
    );
}

export default InputText;