import axios from 'axios'
import '../../css/bulma.css'

function IfImagen(props) {
    const agregar_foto = ()=>{
      var token=localStorage.getItem('tokenLocal')
      let postData = new FormData();
      postData.append('id_user',localStorage.getItem('id'));
      postData.append('url_img', document.getElementById('image').files[0]);
      console.log(token)
      axios
        .post("http://localhost:8000/api/v1/profile/imagenes/",postData, {
          headers: { "Content-Type": "multipart/form-data", 
                      'Authorization': 'Token ' + token},
        })
        .then((response)=>{
          localStorage.setItem('urlProfile',response.data.pay_load.url_img)
          window.location.reload()
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    console.log(props.url)
    if (props.url!="http://localhost:8000undefined") {
      return(
        <div className='column card-image'>
          <div className='box'>
            <figure className="image is-1by1">
              <img className="is-rounded" src={props.url} alt="Placeholder image"/>
            </figure>
          </div>
        </div>
      )
    }else{
      return(
        <div className="column card-image">
          <div className='box'>
          <figure className="image is-1by1">
            <img className="is-rounded" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="Placeholder image"/>
          </figure>
          <div>
            <br/>
            <input className='input' type='file' id='image'></input>
            <br/>
            <button className="button is-block is-primary is-medium is-rounded" onClick={agregar_foto}>
              Agregar Perfil
            </button>
          </div>
          </div>
        </div>
      )
    }
  }

  export default IfImagen