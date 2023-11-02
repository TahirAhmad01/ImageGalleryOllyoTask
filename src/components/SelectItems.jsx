import { PropTypes } from 'prop-types';


function SelectItems({ selectedCount = 0 }) {
  return (
    <div className="w-full flex justify-between items-center px-5 py-4 border-b">
      <div className="flex items-center justify-start gap-2">
        <input
          type="checkbox"
          value=""
          name="bordered-checkbox"
          checked
          className=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className="font-semibold text-lg">{selectedCount} items selected</span>
      </div>
      <div>Delete</div>
    </div>
  );
}

SelectItems.propTypes = {
  selectedCount: PropTypes.number,
};

export default SelectItems;
