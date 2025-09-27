function UnitCategory ({ title, children }) {
  return (
    <li>
      <h2 className='custom-select__category'>{title}</h2>
      {children}
    </li>
  )
}
export default UnitCategory
