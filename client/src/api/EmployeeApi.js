import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
    {
        id: "react-flux-building-applications",
        firstName: "Building Applications in React and Flux",
        lastName: "http://www.pluralsight.com/courses/react-flux-building-applications",
        address: "cory-house",
        company: "5:08",
        salary: "JavaScript"
    },
    {
        id: "react-flux-building-applications",
        firstName: "Building Applications in React and Flux",
        lastName: "http://www.pluralsight.com/courses/react-flux-building-applications",
        address: "cory-house",
        company: "5:08",
        salary: "JavaScript"
    },
    {
        id: "react-flux-building-applications",
        firstName: "Building Applications in React and Flux",
        lastName: "http://www.pluralsight.com/courses/react-flux-building-applications",
        address: "cory-house",
        company: "5:08",
        salary: "JavaScript"
    },
    {
        id: "react-flux-building-applications",
        firstName: "Building Applications in React and Flux",
        lastName: "http://www.pluralsight.com/courses/react-flux-building-applications",
        address: "cory-house",
        company: "5:08",
        salary: "JavaScript"
    },
    {
        id: "react-flux-building-applications",
        firstName: "Building Applications in React and Flux",
        lastName: "http://www.pluralsight.com/courses/react-flux-building-applications",
        address: "cory-house",
        company: "5:08",
        salary: "JavaScript"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
    return replaceAll(employee.firstName, ' ', '-');
};

class EmployeeApi {
    static getAllEmployees() {
        /*return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], employees));
            }, delay);
        });*/
        const URL = "/employees";
        
        return fetch(URL, { method: 'GET'})
        .then( response => { Promise.all([response, response.json()]);console.log(response.json());})

    }

    static saveEmployee(employee) {
        employee = Object.assign({}, employee); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validationx
                const minEmployeefirstNameLength = 1;
                if (employee.firstName.length < minEmployeefirstNameLength) {
                    reject(`Employee must be at least ${minEmployeefirstNameLength} characters.`);
                }

                if (employee.id) {
                    const existingEmployeeIndex = employees.findIndex(a => a.id === employee.id);
                    employees.splice(existingEmployeeIndex, 1, employee);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    employee.id = generateId(employee);
                    //course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    employees.push(employee);
                }

                resolve(employee);
            }, delay);
        });
    }

    static deleteEmployee(employeeId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = employees.findIndex(employee => employee.id === employeeId);
                employees.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getEmployee(employeeId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingEmployeeIndex = employees.findIndex(employee => employee.id === employeeId);
                
                const employeeFound = Object.assign({}, employees[existingEmployeeIndex]);

                resolve(employeeFound);

            }, delay);
        });
    }

}

export default EmployeeApi;
