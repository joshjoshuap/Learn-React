import './App.css';

const UserCard = (props) => {
return (
  <div class="card-info">
    <h1> ID No: {props.info.id}</h1>
    <p class="info-item">Firstname: <b> {props.info.firstName} </b> </p>
    <p class="info-item">Lastname: <b> {props.info.lastName} </b> </p>
    <p class="info-item">Age: <b> {props.info.age} </b> </p>
  </div>
)

}

export default UserCard;