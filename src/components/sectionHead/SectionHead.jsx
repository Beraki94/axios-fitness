import { TiThLarge } from 'react-icons/ti'
import './SectionHead.css'

const SectionHead = ({subTitle, title}) => {
  return (
    <div className='section-header'>
        <span>{subTitle}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead