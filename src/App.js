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
        // Getting the value and name of the input which triggered the change
        // console.log(event.target);
        let searchValue = event.target.value;
        // let searchArr = this.state.employees;
        // if (searchValue !== "") {
        //     console.log(searchValue);
        //     let search = searchArr.filter(element =>
        //         element.name.toLowerCase().includes(searchValue.toLowerCase())
        //         //     {
        //         //     if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
        //         //         console.log(element)
        //         //         searchArr.push(element)
        //         //     }
        //         // }
        //     )
            // console.log("search " + search);
            // element.name.toLowerCase().includes(searchValue.toLowerCase())
            // console.log(search);
            // console.log("employeeSearch " + employeeSearch);
            // Updating the input's state
            this.setState(
                {
                    search: searchValue
                });
            // console.log(this.state.employees);
        // } else {
        //     this.setState(
        //         {
        //             employees: employees
        //         }
        //     )

        // }
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