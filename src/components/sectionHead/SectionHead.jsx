import { TiThLarge } from 'react-icons/ti'
import './SectionHead.css'

const SectionHead = ({subTitle, title}) => {
  return (
    <div className='section-header'>
        <span>{subTitle}</span>
        <h1>{title}</h1>
    </div>
  )
}

export default SectionHead