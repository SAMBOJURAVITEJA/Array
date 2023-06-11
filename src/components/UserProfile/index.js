import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, uniqueNo, name, role} = userDetails
  return (
    <li key={uniqueNo} className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}
export default UserProfile
