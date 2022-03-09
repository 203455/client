import axios from 'axios'
import '../../css/bulma.css'

function Update() {
    var useData = {
        'url_img': "http://localhost:8000"+localStorage.getItem('url'),
        'id':localStorage.getItem('id'),
        'token':localStorage.getItem('tokenLocal')
    }
    window.onload = function get_data_user() {
        axios
        .get("http://localhost:8000/api/v1/profile/user/" + useData.id,{
            headers: {'Authorization': 'Token ' + useData.token,},})
            .then((response)=>{
                console.log(response.data)
                document.getElementById("first_name").placeholder = response.data.first_name;
                document.getElementById("email").placeholder= response.data.email;
                document.getElementById("username").placeholder =response.data.username;
                document.getElementById("last_name").placeholder = response.data.last_name;
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    const consumir_actulizar = () =>{

        var putData = {
            "first_name": document.getElementById('first_name').value,
            "username" : document.getElementById('username').value,
            "last_name": document.getElementById('last_name').value,
            "email": document.getElementById('email').value
        }
        if (putData.username =='') {
            putData.username=document.getElementById('username').placeholder
        }
        if (putData.first_name=='') {
            putData.first_name=document.getElementById('first_name').placeholder
        }
        if (putData.last_name=='') {
            putData.last_name=document.getElementById('last_name').placeholder
        }
        if (putData.email=='') {
            putData.email=document.getElementById('email').placeholder
        }
        console.log(putData.first_name);
        axios
            .put("http://localhost:8000/api/v1/profile/user/"+useData.id,putData, {
                headers: { "Content-Type": "application/json",
                 'Authorization': 'Token ' + useData.token},
              })
            .then((response) => {
                console.log(response.data)
                alert()
                window.location.href='/Profile'
              })
            .catch((error) => {
                console.log(error)
                alert("Incorrecto")
              });
    }
    const consumir_actualizarFoto =()=>{
        var putData ={
            "image": document.getElementById('image').value,
            "id_user":useData.id
        }
        axios
            .put("http://localhost:8000/api/v1/profile/imagenes/"+useData.id,putData, {
                Headers: { "Content-Type": "application/json", 'Authorization': 'Token ' + useData.token},
              })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('urlProfile',response.data.pay_load.url_img)
                window.location.href='/Profile'
              })
            .catch((error) => {
                console.log(error.response.data)
                alert("Incorrecto")
              });
    }
    return (
        <section className="hero is-fullheight">
            <div className="columns is-centered">
                <div className="login has-text-centered">
                <h2 className="title is-3">UPDATE</h2>
                <div className='column card-image'>
                    <div className='box'>
                        <figure className="image is-1by1">
                            <img className="is-rounded" src={useData.url_img} alt="Placeholder image"/>
                        </figure>
                        <br/>
                        <input className='input' type='file' id='image'></input>
                        <br/>
                        <header>
                            <button className="button is-block is-primary is-medium is-rounded" onClick={consumir_actualizarFoto}>
                                Actualizar Foto
                            </button>
                        </header>
                    </div>
                </div>
                <form>
                    <div className="field">
                    <div className="control">
                        <input className="input is-medium is-rounded" type="text" required id="first_name" ></input>
                    </div>
                    </div>
                    <div className="field">
                    <div className="control">
                        <input className="input is-medium is-rounded" type="text"   required id="last_name"></input>
                    </div>
                    </div>
                    <div className="field">
                    <div className="control">
                        <input className="input is-medium is-rounded" type="text"  required id="username"></input>
                    </div>
                    </div>
                    <div className="field">
                    <div className="control">
                        <input className="input is-medium is-rounded" type="email"  name="email" required id="email"></input>
                    </div>
                    </div>
                    <br />
                </form>
                <header>
                    <button className="button is-block is-fullwidth is-primary is-medium is-rounded" onClick={consumir_actulizar}>
                        Actualizar Datos
                    </button>
                </header>
                <br/>
                <header>
                    <a href='/Profile'>
                        <button className="button is-block is-fullwidth is-danger is-medium is-rounded">
                            Cancelar
                        </button>
                    </a>
                </header>
                <br/>
                </div>
            </div>
        </section>
    );
  }

  export default Update