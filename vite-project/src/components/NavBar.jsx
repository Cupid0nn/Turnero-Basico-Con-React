import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <div
    // className="hola"
      // className={styles.hola}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'end',
        gap: '2em',
        height: '4em',
        backgroundColor: '#654321',
        paddingRight: '4em',
        alignItems: 'center',
        boxShadow: '0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)',
        
      }}
      // mover a styles.css y ponerle nombre de la clase navbarstiled
    >
      <Link to="/home">Home</Link>
      <Link to="/appointment">Appointments</Link>
      <Link to="/appointment/schedule">Schedule</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavBar;
