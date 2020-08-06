import  React  from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQEkYFo2yJbGNw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=dNgjijc1DiRm6M8-_I5rTTJIAEG7yflr9bLgl0r8hMU" alt="joshua"></img>
      <div>
        <strong>Gustavo Joshua</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br></br>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;