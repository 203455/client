import axios from "axios";
import '../../css/bulma.css'

function Login() {
  const consumir_login = () => {
    var postData = {
      "username" : document.getElementById('username').value,
      "password" : document.getElementById('password').value
    }
    axios
      .post("http://localhost:8000/api/v1/login",postData, {
        Headers: { "Content-Type": "application/json", },
      })
      .then((response) => {
        localStorage.setItem('tokenLocal',response.data.token)
        localStorage.setItem('id',response.data.id)
        window.location.href = "/Profile"
        })
      .catch((error) => {
        console.log(error.response.data.password[0]);
        console.log(error.response.data.username[0]);
      });
  };


  return (
    <section className="hero is-fullheight">
      <div className="columns is-centered">
        <div className="login has-text-centered">
          <h2 className="title is-3">LOGIN</h2>
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="text" placeholder="username"  required id="username" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" type="password" placeholder="**********"  required id="password" />
              </div>
            </div>
            <br />
          </form>
          <header>
              <button className="button is-block is-fullwidth is-primary is-medium is-rounded"  onClick={consumir_login}>
                Login
              </button>
          </header>
          <br/>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <a href="/Register">Create an Account</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );

}

export default Login;
