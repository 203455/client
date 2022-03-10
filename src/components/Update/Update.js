import axios from 'axios'
import '../../css/bulma.css'

function Update() {
    var useData = {
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
        axios
            .get("http://localhost:8000/api/v1/profile/imagenes/" +useData.id,{
                    headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token ' + useData.token ,},
                })
                .then((response)=>{
                    console.log(response.data.pay_load.image)
                    var url="http://localhost:8000"+response.data.pay_load.image;
                    if (url!="http://localhost:8000undefined") {
                        document.getElementById('image').src=url
                    }else{
                        document.getElementById('image').src="http://localhost:8000/media/img/nulo.jpg"
                    }
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
        let putData = new FormData();
        putData.append('id_user',useData.id);
        putData.append('image', document.getElementById('img').files[0]);
        var url = document.getElementById('image').src
        console.log(url)
        if (url!="http://localhost:8000/media/img/nulo.jpg") {
            axios
            .put("http://localhost:8000/api/v1/profile/imagenes/"+useData.id,putData, {
                headers: { "Content-Type": "multipart/form-data", 'Authorization': 'Token ' + useData.token},
              })
            .then((response) => {
                console.log(response.data);
                window.location.href='/Profile'
              })
            .catch((error) => {
                console.log(error.response.data)
                alert("Incorrecto")
              });
        }else{
            axios
                .post("http://localhost:8000/api/v1/profile/imagenes/",putData, {
                    headers: { "Content-Type": "multipart/form-data", 
                                'Authorization': 'Token ' + useData.token},
                })
                .then((response)=>{
                    console.log(response)
                    window.location.href='/Profile'
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    const consumir_eliminar = ()=>{
        var url = document.getElementById('image').src
        console.log(url)
        if (url!="http://localhost:8000/media/img/nulo.jpg") {
            axios
            .delete("http://localhost:8000/api/v1/profile/imagenes/"+useData.id, {
                headers: { "Content-Type": "multipart/form-data", 'Authorization': 'Token ' + useData.token},
              })
            .then((response) => {
                console.log(response.data);
                window.location.href='/Profile'
              })
            .catch((error) => {
                console.log(error)
                alert("Incorrecto")
              });
        }else{
            alert("No hay una Imagen por eliminar")
        }
    }
    return (
        <section className="hero is-fullheight">
            <div className="columns is-centered">
                <div className="login has-text-centered">
                <h2 className="title is-3">UPDATE</h2>
                <div className='column card-image'>
                    <div className='box'>
                        <figure className="image is-1by1">
                            <img className="is-rounded" id='image' alt="Placeholder image"/>
                        </figure>
                        <br/>
                        <input className='input' type='file' id='img'></input>
                        <br/>
                        <header>
                            <button className="button is-block is-primary is-medium is-rounded" onClick={consumir_actualizarFoto}>
                                Actualizar Foto
                            </button>
                        </header>
                        <br/>
                        <header>
                            <button className="button is-block is-danger is-medium is-rounded" onClick={consumir_eliminar}>
                                Eliminar Foto
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