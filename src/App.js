import React, { Component } from "react";
import employees from "./employees.json";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {

    state = {
        employees,
        search: ""
    };

    handleInputChange = event => {
        let searchValue = event.target.value;
            this.setState(
                {
                    search: searchValue
                });
    };

    render() {
        
        const searchArr = this.state.employees.filter(element => element.name.toLowerCase().includes(this.state.search.toLowerCase()));

        return (
            <div>
                <Title> Employees List</Title>
                <input
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search"
                />
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
                        {searchArr.map(element => (
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