import './CommissionsFormPage.css'
import FormSection from './FormSection';
import imgSrc from '../../KkyanCat.png'

function CommissionsForm(){
    const fnameArr = ['fname', 'First Name', 'text', 'flep', '^[a-zA-Z\s]{1,29}$', 'First Name']
    const lnameArr = ['lname', 'Last Name', 'text', 'flep', '^[a-zA-Z\s]{1,29}$', 'Last Name']
    const emailArr = ['email', 'Email', 'text', 'flep', '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', 'placeholder@email.com']
    const phoneArr = ['phone', 'Phone Number (Optional)', 'text', 'flep', '/^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-\s.]?)\d{3}([-.\s]?)\d{4}$/', '###-###-####']
    const elementList = [fnameArr, lnameArr, emailArr, phoneArr]
    return (
        <div>
            <h1 className="topic">Insert a custom commission request</h1>
            <img className="img" src={imgSrc} alt="Failed to load."/>
            <form>
                {FormSection('tmpDiv', elementList)}
                <label for='message'></label>
                <textarea name='message' rows='4' cols='50' placeholder='Type your description here...' id='flepMsg'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommissionsForm;