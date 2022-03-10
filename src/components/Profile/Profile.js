import axios from 'axios';
import '../../css/bulma.css'

function Profile() {
    var useData={
        'id':localStorage.getItem('id'),
        'token':localStorage.getItem('tokenLocal'),
    }
    window.onload = function get_data_user() {
        axios
        .get("http://localhost:8000/api/v1/profile/user/" + useData.id,{
            headers: {'Authorization': 'Token ' + useData.token,},})
            .then((response)=>{
                console.log(response.data)
                document.getElementById("name").value = response.data.first_name + " " + response.data.last_name;
                document.getElementById("email").value= response.data.email;
                document.getElementById("username").value = "@" + response.data.username;
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
    const salir = ()=>{
        localStorage.removeItem('tokenLocal')
        localStorage.removeItem('id')
        window.location.href = '/'
    }
    return (
        <section className="hero">
            <div className="columns is-mobile">
                <div className='column is-half is-offset-one-quarter'>
                    <div className="card">
                        <div className="has-text-centered">
                            <h2 className="title is-3">USER</h2>
                            <div className='column card-image'>
                                <div className='box'>
                                    <figure className="image is-1by1">
                                        <img className="is-rounded"  id='image'  alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="content">
                                        <p className="title is-4"><input className='input is-static' id='name' readOnly></input></p>
                                        <p className="subtitle is-6"><input className='input is-static' id='username' readOnly></input></p>
                                        <p className="subtitle is-6"><input className='input is-static' id='email' readOnly></input></p>
                                    </div>
                                </div>
                            </div>
                            <header>
                            <a href='/Update'>
                                <button className="button is-block is-fullwidth is-primary is-medium is-rounded">
                                    Actualizar
                                </button>
                            </a>
                            </header>
                            <br/>
                        </div>
                    </div>
                    <br/>
                    <header>
                        <button className="button is-block is-fullwidth is-danger is-medium is-rounded" onClick={salir}>
                            LogOut
                        </button>
                    </header>
                <br/>
                </div>
            </div>
        </section>
    );
  }

  export default Profile