import './app-info.css';

const AppInfo = ({ totalEmploees, increasedEmploees }) => {
  return (
    <div className="app-info">
      <h1>Employee accounting in the company</h1>
      <h2>Total number of employees: {totalEmploees}</h2>
      <h2>Will receive the bonus: {increasedEmploees}</h2>
    </div>
  );
};

export default AppInfo;
