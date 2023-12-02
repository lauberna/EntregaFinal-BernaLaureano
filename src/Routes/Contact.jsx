import Form from '../Components/Form'
import "../Components/css/form.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={`contact`}>
      <h1>WANT TO KNOW MORE?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact