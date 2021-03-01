import React from "react";
import { triggerModal } from '../actions'
import { connect } from "react-redux";
import CreatePlant from './Plant/CreatePlant'
import ViewPlant from './Plant/ViewPlant'
import CreateGroup from './Group/CreateGroup'
import ViewGroup from './Group/ViewGroup'
import Success from './Notifications/Success'

function setModalContent(type,action,id = null,group_id = null) {
if (type === 'plant' && action === 'new') {
return <CreatePlant group_id={group_id} triggerModal={triggerModal}/>  
} else if (type === 'plant' && action === 'view') {
  return <ViewPlant id={id} triggerModal={triggerModal}/>
} else if (type === 'group' && action === 'new') {
  return <CreateGroup/>
} else if (type === 'group' && action === 'edit') {
  return <ViewGroup id={id}/>
} else if (type === 'notification' && action === 'success') {
  return <Success/>
}
}  
class Modal extends React.Component {



  render() {
    console.log(this.state)

      if(!this.props.isShown){
          return null;
      }
    return <div className="modal" id="modalFrame">
      <div className="modal-content">
        {setModalContent(this.props.type,this.props.action,this.props.id,this.props.group_id)}
        <button onClick={() => this.props.triggerModal({id: null,type: null,action: null,isShown: false})}> Close yo!</button>
      </div>
    </div>;
  }
}

export default connect(null, { triggerModal })(Modal);
