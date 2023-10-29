import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employyes-add-form/employyes-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Jeremy C.', salary: 4000, increase: true, rise: false, id: 1 },
        {
          name: 'Richard H.',
          salary: 3500,
          increase: false,
          rise: false,
          id: 2,
        },
        { name: 'James M.', salary: 3650, increase: false, rise: true, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        return item.id === id ? { ...item, [prop]: !item[prop] } : item;
      }),
    }));
  };

  render() {
    const { data } = this.state;
    const totalEmployees = data.length;
    const increasedEmployees = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo
          totalEmployees={totalEmployees}
          increasedEmployees={increasedEmployees}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
