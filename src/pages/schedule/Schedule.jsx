import PageHeader from '../../components/PageHeader/PageHeader'
import './Schedule.css'

const Schedule = () => {
  return (
    <section className='schedule'>
      <PageHeader title={"Daily Schedule"}image={"https://t4.ftcdn.net/jpg/03/17/72/47/240_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"}>
      "Push yourself because no one else is going to do it for you."
      </PageHeader>

       <table className='schedule-table'>
        <thead>
            <tr>
                <th>Hours</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 AM - 10:00 AM</td>
                <td>Morning Energy</td>
                <td>Morning Energy</td>
                <td>Morning Energy</td>
                <td>Morning Energy</td>
                <td>Morning Energy</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr className='even'>
                <td>10:30 AM - 11:30 AM</td>
                <td>Sweeming</td>
                <td>Sweeming</td>
                <td>Sweeming</td>
                <td>Stretching</td>
                <td>Stretching</td>
                <td>Stretching</td>
                <td>Stretching</td>
                
            </tr>
            <tr>
                <td>11:30 AM - 16:00 PM</td>
                <td>Body Building</td>
                <td>Body Building</td>
                <td>Body Building</td>
                <td>Body Building</td>
                <td>Sweeming</td>
                <td>Sweeming</td>
                <td>Sweeming</td>
            </tr>
            <tr className='even'>
                <td>16:00 PM - 18:30 PM</td>
                <td>Fitness Club</td>
                <td>Fitness Club</td>
                <td>Fitness Club</td>
                <td>Fitness Club</td>
                <td>Fitness Club</td>
                <td>Stretching</td>
                <td>Stretching</td>
            </tr>
            <tr>
                <td>18:30 PM - 19:30 PM</td>
                <td>Fitness</td>
                <td>Fitness</td>
                <td>Fitness</td>
                <td>Fitness</td>
                <td>Dancing</td>
                <td>Dancing</td>
                <td>Dancing</td>

                
            </tr>
            <tr className='even'>
                <td>19:30 PM - 20:30 PM</td>
                <td>Boxing</td>
                <td>Boxing</td>
                <td>Boxing</td>
                <td>Tennis</td>
                <td>Tennis</td>
                <td>-</td>
                <td>-</td>                
            </tr>
        </tbody>
    </table>
    </section>
  )
}

export default Schedule