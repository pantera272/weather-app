import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({action}) => {

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={action.description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${action.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{action.city}</h2>
        <p>
          <strong>Temp:</strong> {action.temp}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;