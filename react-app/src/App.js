import React, { Component } from "react";
import employees from "./employees.json";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
// import Table from "./components/Table";

class App extends Component {

    state = {
        employees
    };

    render() {
        return (
            <div>
                <Title> Employees List</Title>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(element => (
                            <EmployeeCard
                                id={element.id}
                                key={element.id}
                                name={element.name}
                                department={element.department}
                                role={element.role}
                                email={element.email}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;