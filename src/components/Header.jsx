import { Logo } from './ui'
import UnitsToggle from './UnitsToggle'

function Header ({ units, setUnits, metricUnits, imperialUnits, isMetric }) {
  return (
    <header className='primary-header'>
      <div className='container' data-container='large'>
        <Logo></Logo>
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
