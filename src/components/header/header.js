import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <h1 className={style.visuallyHidden}>
      {siteTitle}
    </h1>
    <p className={style.visuallyHidden}>Suzuki Method Piano Lessons</p>
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to='/' className={style.navLink} activeClassName={style.active}>
            home
          </Link>
        </li>
        <li>
          <Link to='/method/' className={style.navLink} activeClassName={style.active}>
            method
          </Link>
        </li>
        <li>
          <Link to='/teacher/' className={style.navLink} activeClassName={style.active}>
            teacher
          </Link>
        </li>
        <li>
          <Link to='/tuition/' className={style.navLink} activeClassName={style.active}>
            tuition
          </Link>
        </li>
      </ul>
    </nav>
    <figure className={style.piano}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 756.34'><title>Hill City Studio Piano</title><g id='bb2cb4ea-9b6b-439b-813d-e9d8494695b6' data-name='Layer 2'><g id='a03e04eb-9582-43e3-a879-20e78b4dd28c' data-name='Layer 1'><path d='M801.36,0A312.82,312.82,0,0,1,818.8,48.33C840,125,859.32,219.56,1023.29,307.73S1195,449.58,1195,527.53,1193.83,750,1193.83,750H5V84.11A235.11,235.11,0,0,1,20.13,0Z' fill='#353122' /><rect x='117.85' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='152.43' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='187' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='221.58' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='256.15' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='290.73' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='325.3' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='359.88' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='394.45' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='429.03' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='463.6' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='498.18' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='532.75' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='567.33' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='601.9' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='636.48' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='671.05' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='705.63' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='740.2' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='774.78' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='809.35' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='843.93' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='878.5' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='913.08' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='947.65' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='982.23' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='1016.8' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='1051.38' y='581.14' width='28.77' height='160.5' fill='#fff9ee' /><rect x='140.23' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='174.81' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='243.96' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='313.11' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='382.26' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='278.53' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='416.83' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='485.98' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='555.14' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='658.86' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='624.28' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='728.01' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='520.56' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='762.58' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='797.16' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='866.31' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='970.03' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='1039.19' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='1004.61' y='581.14' width='18.58' height='103.27' fill='#333' /><rect x='900.89' y='581.14' width='18.58' height='103.27' fill='#333' /><text transform='translate(117.85 385.76)' fontSize='109.45' fill='#fff7ea' fontFamily='Poppins-Medium, Poppins' fontWeight='500'><tspan letterSpacing='-0.02em'>H</tspan><tspan x='75.23' y='0' letterSpacing='-0.02em'>i</tspan><tspan x='101.46' y='0' letterSpacing='-0.03em'>l</tspan><tspan x='127.61' y='0'>l </tspan><tspan x='184.96' y='0' letterSpacing='-0.04em'>C</tspan><tspan x='265.52' y='0' letterSpacing='-0.03em'>i</tspan><tspan x='291.41' y='0' letterSpacing='0em'>t</tspan><tspan x='332.33' y='0'>y </tspan><tspan x='424.49' y='0' letterSpacing='-0.03em'>S</tspan><tspan x='487.41' y='0' letterSpacing='-0.03em'>t</tspan><tspan x='524.72' y='0' letterSpacing='-0.02em'>u</tspan><tspan x='593.77' y='0' letterSpacing='-0.02em'>d</tspan><tspan x='665.48' y='0' letterSpacing='-0.02em'>i</tspan><tspan x='691.94' y='0' letterSpacing='0em'>o</tspan></text><text transform='translate(117.85 458.49)' fontSize='53.46' fill='#fff7ea' fontFamily='Poppins-Medium, Poppins' fontWeight='500'><tspan letterSpacing='-0.02em'>S</tspan><tspan x='30.99' y='0' letterSpacing='-0.02em'>u</tspan><tspan x='64.46' y='0' letterSpacing='-0.03em'>z</tspan><tspan x='88' y='0' letterSpacing='-0.02em'>u</tspan><tspan x='121.73' y='0' letterSpacing='-0.02em'>k</tspan><tspan x='150.5' y='0'>i </tspan><tspan x='178.52' y='0' letterSpacing='-0.01em'>M</tspan><tspan x='225.26' y='0' letterSpacing='-0.02em'>e</tspan><tspan x='256.96' y='0' letterSpacing='-0.02em'>t</tspan><tspan x='275.59' y='0' letterSpacing='-0.01em'>h</tspan><tspan x='309.49' y='0' letterSpacing='-0.01em'>o</tspan><tspan x='343.12' y='0'>d </tspan><tspan x='393.27' y='0' letterSpacing='-0.03em'>P</tspan><tspan x='423.43' y='0' letterSpacing='-0.02em'>i</tspan><tspan x='436.65' y='0' letterSpacing='-0.02em'>a</tspan><tspan x='471.93' y='0' letterSpacing='-0.02em'>n</tspan><tspan x='505.82' y='0'>o </tspan><tspan x='553.83' y='0' letterSpacing='-0.03em'>L</tspan><tspan x='576.09' y='0' letterSpacing='-0.02em'>e</tspan><tspan x='608.11' y='0' letterSpacing='-0.02em'>s</tspan><tspan x='635.78' y='0' letterSpacing='-0.02em'>s</tspan><tspan x='663.38' y='0' letterSpacing='-0.02em'>o</tspan><tspan x='696.65' y='0' letterSpacing='-0.02em'>n</tspan><tspan x='730.35' y='0'>s</tspan></text><rect width='1200' height='756.34' fill='none' /></g></g></svg>
    </figure>
  </header>
)

export default Header

Header.propTypes = {
  siteTitle: propTypes.string.isRequired
}
