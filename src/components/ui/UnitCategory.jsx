function UnitCategory ({ title, children }) {
  return (
    <li>
      <h2
        id={`${title.toLowerCase()}-label`}
        className='custom-select__category'
      >
        {title}
      </h2>
      <div role='group' aria-labelledby={`${title.toLowerCase()}-label`}>
        {children}
      </div>
    </li>
  )
}
export default UnitCategory
