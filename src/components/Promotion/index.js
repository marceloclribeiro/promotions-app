import React from 'react'
import './styles.css'
function Promotion(props) {
  return (
    <div className='promotion'>
      <img src={props.heroImageUrl} alt='' />
      <div className='info'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className='buttons'>
          <a className='terms' href=''>
            {props.termsAndConditionsButtonText}
          </a>
          <a className='join' href=''>
            {props.joinNowButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Promotion