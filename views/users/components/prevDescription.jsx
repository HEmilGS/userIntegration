
const PrevDescription = ({descriptions}) => {
  return (
    <div>
      <h1>Previous Description</h1>
      {descriptions?.map((des, idx) => (
        <p key={idx}>{des.description}</p>
      ))}
    </div>
  )
}

export default PrevDescription