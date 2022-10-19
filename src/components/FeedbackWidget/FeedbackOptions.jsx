import propTypes from 'prop-types';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onGood: propTypes.func.isRequired,
  onNeutral: propTypes.func.isRequired,
  onBad: propTypes.func.isRequired,
};
