import react from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    if (!stats || !Array.isArray(stats)) {
      return null; // or display an error message
    }
    
    return (
      <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={css.item} >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}> {stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  

 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};