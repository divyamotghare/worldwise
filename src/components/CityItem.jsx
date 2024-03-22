import { Link } from "react-router-dom";
import { useCities } from "../Contexts/useCities";
import styles from "./CityItem.module.css";
// import PropTypes from "prop-types";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  console.log(position);

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
// CityItem.propTypes = {
//   city: PropTypes.shape({
//     cityName: PropTypes.string,
//     country: PropTypes.string,
//     emoji: PropTypes.string,
//     date: PropTypes.string,
//     notes: PropTypes.string,
//     position: PropTypes.shape({
//       lat: PropTypes.number,
//       lng: PropTypes.number,
//     }),
//     id: PropTypes.string,
//   }),
// };
export default CityItem;
