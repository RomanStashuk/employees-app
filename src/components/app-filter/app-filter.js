import classNames from 'classnames';

import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'All employees' },
    {
      name: 'rise',
      label: 'For a promotion',
    },
    {
      name: 'moreThen1000',
      label: 'Salary more than $1000',
    },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const buttonClass = classNames(
      'btn',
      { 'btn-light': filter === name },
      { 'btn-outline-light': filter !== name },
    );

    return (
      <button
        className={buttonClass}
        type="button"
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
