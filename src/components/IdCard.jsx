import "../App.css";


function IdCard (props) {
    return (
        <div className="IdCard">
            <img src={props.picture}/>
            <div className="IdCardInfo">
            <p><b>FirstName:</b> {props.firstName}</p>
            <p><b>LastName:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toDateString()}</p>
            </div>    
        </div>
    );
}

export default IdCard;