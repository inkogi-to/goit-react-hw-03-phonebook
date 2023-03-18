import PropTypes from "prop-types";

import {InputFilter, LabelFilter} from "./Filter.styled";


const Filter = ({value, onChange}) => {
  return (
    <form>
      <LabelFilter htmlFor='fl'>Filter to name:</LabelFilter>
      <InputFilter type="text" id="fl" value={value} onChange={onChange}/>
    </form>

  )

};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Filter;
