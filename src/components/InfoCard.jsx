import PropTypes from "prop-types";

const InfoCard = ({ title, children }) => (
  <div className="space-y-2">
    <h4 className="text-indigo-600 font-medium text-lg">{title}</h4>
    {children}
  </div>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default InfoCard;
