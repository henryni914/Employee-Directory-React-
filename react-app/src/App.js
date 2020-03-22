import React, { Component } from "react";
import employees from "./employees.json";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {

    state = {
        employees
    };

    render() {
        return (
            <div>
                <Title> Employees List</Title>
                {this.state.employees.map(element => (
                <EmployeeCard
                id = {element.id}
                key = {element.id}
                name = {element.name}
                department = {element.department}
                role = {element.role}
                email = {element.email}
                />
            ))}
            </div>
        );
    }
}

export default App;