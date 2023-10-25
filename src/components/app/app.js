import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employyes-add-form/employyes-add-form';

function App() {
  const data = [
    { name: 'Jeremy C.', salary: 4000, increase: true, id: 1 },
    { name: 'Richard H.', salary: 3500, increase: false, id: 2 },
    { name: 'James M.', salary: 3650, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} onDelete={(id) => console.log(id)} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
