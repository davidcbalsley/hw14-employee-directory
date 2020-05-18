import React from "react";

function List(props) {
    const listItems = props.employees.map(employee =>
        <li className="list-group-item" key={employee.id}>{employee.name.first}</li>);

    return (
        <ul className="list-group">
            {listItems}
        </ul>
    )
}

export default List;