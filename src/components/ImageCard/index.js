import React from "react";

function ImageCard(props) {
    return <img className="img-responsive" alt={props.employee.name.last} src={props.employee.picture.medium} />;
}

export default ImageCard;