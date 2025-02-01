import PropTypes from "prop-types";
const ReadTime = ({ count }) => {
  return (
    <div>
      <p>
        You Have Read <strong>{count} </strong>Piece of Advice
      </p>
    </div>
  );
};

ReadTime.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ReadTime;
