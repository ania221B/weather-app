import { UnitsToggle } from '../common'
import { Logo } from '../ui'

function Header ({ units, setUnits, metricUnits, imperialUnits, isMetric }) {
  return (
    <header className='primary-header'>
      <div className='primary-header__wrapper container' data-container='large'>
        <Logo title='Weather Now'></Logo>
        <UnitsToggle
          units={units}
          setUnits={setUnits}
          metricUnits={metricUnits}
          imperialUnits={imperialUnits}
          isMetric={isMetric}
        ></UnitsToggle>
      </div>
    </header>
  )
}
export default Header
