import './app-info.css';

const AppInfo = ({ totalEmployees, increasedEmployees }) => {
  return (
    <div className="app-info">
      <h1>Employee accounting in the company</h1>
      <h2>Total number of employees: {totalEmployees}</h2>
      <h2>Will receive the bonus: {increasedEmployees}</h2>
    </div>
  );
};

export default AppInfo;
