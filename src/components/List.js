import React from "react";
import ImageCard from "./ImageCard";

function List(props) {
    const listItems = props.employees.map(employee =>
        <li className="list-group-item" key={employee.id}>
            <ImageCard employee={employee} />
            {employee.name.first}
        </li>);

    return (
        <ul className="list-group">
            {listItems}
        </ul>
    )
}

export default List;