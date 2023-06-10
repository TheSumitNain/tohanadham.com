import React from 'react'
import { Link } from 'react-router-dom'

const Aarti = () => {
  return (
    <div class="container text-center my-5">
       <ul>
             <Link to="/aarti/chalisa">  <li className='mylinks'>हनुमान चालीसा </li> </Link>  <br />
             <Link to="/aarti/hanumanaarti">  <li className='mylinks'>हनुमान जी की आरती </li> </Link> <br />
             <Link to="/aarti/ramaarti">  <li className='mylinks'>श्री राम आरती </li> </Link> <br />
             <Link to="/aarti/ramstuti">  <li className='mylinks'>श्री राम स्तुति </li> </Link> <br />
     </ul>
    </div>
  )
}

export default Aarti