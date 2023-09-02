function Score(props) {
    return (
        <div>
            <label htmlFor="">TU</label>
            <p id="score">{props.pj}</p>
            -
            <label htmlFor="">COMPUTADORA</label>
            <p id="score">{props.pc}</p>
        </div>
    );
}

export default Score;