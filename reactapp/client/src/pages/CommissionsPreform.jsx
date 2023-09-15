import './CommissionsPreform.css'
import CommissionsForms from './CommissionsForms';

function CommissionsPreform(){
    return (
        <div>
        <h1 className="topic">Insert a custom commission request</h1>
        <img className="img" src="./commissionsimg.png" alt="Failed to load."/>
        <CommissionsForms formName="Name" />
        <CommissionsForms formName="Email" />
        <CommissionsForms formName="Topic" />
        </div>
    );
}

export default CommissionsPreform;