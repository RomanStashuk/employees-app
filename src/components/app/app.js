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
        { name: 'Jeremy C.', salary: 4000, increase: true, id: 1 },
        { name: 'Richard H.', salary: 3500, increase: false, id: 2 },
        { name: 'James M.', salary: 3650, increase: false, id: 3 },
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
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  render() {
    const { data } = this.state;
    const totalEmploees = data.length;
    const increasedEmploees = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo
          totalEmploees={totalEmploees}
          increasedEmploees={increasedEmploees}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
