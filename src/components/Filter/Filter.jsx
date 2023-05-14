import css from './Filter.module.css'; 
import PropTypes from 'prop-types'; 

export const Filter = ({ filter, handleInputChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={handleInputChange} 
          value={filter} 
          type="text"
          name="filter"
        />
      </label>
    </>
  );
}


Filter.propTypes = {
  filter: PropTypes.string.isRequired, 
  handleInputChange: PropTypes.func.isRequired 
};
