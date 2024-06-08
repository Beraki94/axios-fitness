import './PageHeader.css'
const PageHeader = ({title, image, children}) => {
  return (
    <div className='pageheader'>
        <img src={image} alt="" />
        <div className='pageheader-content'>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default PageHeader