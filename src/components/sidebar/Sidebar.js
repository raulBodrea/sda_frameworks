import './Sidebar.scss';

const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

const Sidebar = ({ filters, setFilters }) => {
  const getSizeButtonClass = size => {
    let className = 'sizes__button';
    const isSelected = filters.includes(size);

    if (isSelected) {
      className += ' sizes__button--selected';
    }

    return className;
  };

  const handleSizeClick = size => {
    const isSelected = filters.includes(size);
    if (isSelected) {
      const newFilters = filters.filter(currentSize => currentSize !== size);
      setFilters(newFilters);
    } else {
      setFilters([...filters, size]);
    }
  };

  return (
    <div className="sidebar">
      <h2>Sizes:</h2>
      <div className="sizes__wrapper">
        {sizes.map(size => (
          <div
            onClick={() => handleSizeClick(size)}
            className={getSizeButtonClass(size)}
            key={size}
          >
            {size.toUpperCase()}
          </div>
        ))}
      </div>
      <p>Leave a star on github.</p>
    </div>
  );
};

export default Sidebar;
