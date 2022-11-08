import "./CustomButton.css";

function CustomButton(props) {
    return (
        <button
            className={props.color}
            onClick={() => props.onClick(props.color)}
        >
            {props.color}
        </button>
    );
}

export default CustomButton;
