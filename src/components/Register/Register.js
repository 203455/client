import axios from "axios";
import '../../css/bulma.css'

function Register() {

  const consumir_register = () => {
    var postData = {
      "first_name": document.getElementById('first_name').value,
      "username" : document.getElementById('user').value,
      "password" : document.getElementById('password').value,
      "last_name": document.getElementById('last_name').value,
      "password2": document.getElementById('password2').value,
      "email": document.getElementById('email').value
    }
    axios
      .post("http://localhost:8000/api/v1/register/create",postData, {
        Headers: { "Content-Type": "application/json", },
      })
      .then((response) => {
        console.log(response.data);
        alert("Usuario Registrado")
        window.location.href='/'
      })
      .catch((error) => {
        console.log(error.response.data)
        alert("Registro incorresto")
      });
  };


  return (
    <section className="hero is-fullheight">
      <div className="columns is-centered">
        <div className="login has-text-centered">
          <h2 className="title is-3">REGISTER</h2>
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="text" placeholder="first name"  required id="first_name" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="text" placeholder="last name"  required id="last_name" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="text" placeholder="username"  required id="user" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="email" placeholder="email"  required id="email" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="password" placeholder="**********"  required id="password" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="password" placeholder="confirm password"  required id="password2" />
              </div>
            </div>
            <br />
          </form>
          <header>
              <button className="button is-block is-fullwidth is-primary is-medium is-rounded"  onClick={consumir_register}>
                Register
              </button>
          </header>
          <br/>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <a href="/">Have an Account</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );

}

export default Register;