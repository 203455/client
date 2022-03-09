import axios from 'axios';
import ImagenProfile from './ImagenProfile'
import '../../css/bulma.css'

function Profile() {
    var useData={
        'id':localStorage.getItem('id'),
        'token':localStorage.getItem('tokenLocal'),
        'url_img':"http://localhost:8000"+localStorage.getItem('url')
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
    }
    const salir = ()=>{
        localStorage.removeItem('tokenLocal')
        localStorage.removeItem('id')
        localStorage.removeItem('url')
        localStorage.removeItem('last_name')
        localStorage.removeItem('urlProfile')
        localStorage.removeItem('first_name')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        window.location.href = '/'
    }
    return (
        <section className="hero">
            <div className="columns is-mobile">
                <div className='column is-half is-offset-one-quarter'>
                    <div className="card">
                        <div className="has-text-centered">
                            <h2 className="title is-3">USER</h2>
                            <ImagenProfile url={useData.url_img}/>
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