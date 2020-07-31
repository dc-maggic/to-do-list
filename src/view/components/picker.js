import React from 'react'
import PropTypes from 'prop-types'

const ary = {
  today_topic_2018: '今日话题',
  news_top_2018: '今日要闻'
}
const Picker = ({ value, onChange, options }) => (
  <span>
    <h2 className="picker__title">{ary[value]}</h2>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
        <option value={option} key={option}>
          {ary[option]}
        </option>)
      }
    </select>
  </span>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker