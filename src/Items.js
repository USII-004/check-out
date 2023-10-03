import './Items.css';
import {FaCircleCheck} from 'react-icons/fa6';


function Items() {
  return (
    <div className='items__container'>
      <div className='items__list'>
        <a href='#' className='btn flex'>
          <div className='mark__icon'>
            <FaCircleCheck />
          </div>
          <div className='items__info'>
            <h3>50 unique avaters</h3>
            <p>10 variation of 5 styles</p>
          </div>
          <div className='items__price'>
            <h3>$2.98</h3>
          </div>
        </a>
      </div>

      <div className='items__list'>
        <span className='items__accent'>
          MOST POPULAR
        </span>
        <a href='#' className='btn flex checked'>
          <div className='mark__icon'>
            <FaCircleCheck />
          </div>
          <div className='items__info'>
            <h3>100 unique avaters</h3>
            <p>20 variation of 5 styles</p>
          </div>
          <div className='items__price'>
            <h3>$2.98</h3>
          </div>
        </a>
      </div>

      <div className='items__list'>
        <a href='#' className='btn flex'>
          <div className='mark__icon'>
            <FaCircleCheck />
          </div>
          <div className='items__info'>
            <h3>200 unique avaters</h3>
            <p>40 variation of 5 styles</p>
          </div>
          <div className='items__price'>
            <h3>$2.98</h3>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Items