import "./UserHeader.css";

function UserHeader({ firstname }) {
  return (
    <div className="header">
      <h1>Welcome back {firstname}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default UserHeader;
