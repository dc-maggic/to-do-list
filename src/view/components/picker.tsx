import React from 'react'
import PropTypes from 'prop-types'

interface InterfaceAry {
  today_topic_2018: string;
  news_top_2018: string;
}

const ary: InterfaceAry = {
  today_topic_2018: '今日话题',
  news_top_2018: '今日要闻'
}
export interface PickerProps { 
  value: keyof InterfaceAry; 
  onPickerChange: (e: string) => void; 
  options:  Array<keyof InterfaceAry>
}

const Picker = (props: PickerProps) => {
  const {
    value,onPickerChange,options
  } = props;

  return (
    < span >
      <h2 className="picker__title">{ary[value]}</h2>
      <select onChange={e => onPickerChange(e.target.value)}
        value={value}>
        {options.map(option =>
          <option value={option} key={option}>
            {ary[option]}
          </option>)
        }
      </select>
    </span >
  )
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onPickerChange: PropTypes.func.isRequired
}

export default Picker