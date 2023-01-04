import {useState} from 'react'
import emailjs from "@emailjs/browser"

import "../styles/Contact.sass"

const Contact = () => {

    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (email === "" || assunto === "" || mensagem === ""){
            alert("Preencha todos os campos!")
            return
        }

        const templateParams = {
            from_name: email,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        }

        emailjs.send("service_dx44dn5", "template_dxtc55i", templateParams, "POvhmS9s0jpzWbVJb")
        .then((response)=>{
            console.log("Email enviado", response.status, response.text)
            setEmail("")
            setAssunto("")
            setMensagem("")
        }, (err)=>{
            console.log("Erro: ", err)
        })
    }

    return(
        <div>
            <form className="contact" onSubmit={handleSubmit}>
                <h2>Fale conosco</h2>
                <input type="text" placeholder="Digite o seu melhor email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <input type="text" placeholder="Assunto" onChange={(e)=>{setAssunto(e.target.value)}} value={assunto} />
                <input type="text" placeholder="Escreva a sua mensagem" id="message" onChange={(e)=>{setMensagem(e.target.value)}} value={mensagem}/>
                <button>ENVIAR</button>
            </form>
        </div>
    )
}

export default Contact