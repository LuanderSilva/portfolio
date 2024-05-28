import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"

const sendEmail = (data, setLoading) => {
    const templateParams = {
        from_name: data.nome,
        message: data.msnBox,
        email: data.email
    }

    setLoading(true);

    emailjs.send("service_28c93fo", "template_c6inusk", templateParams, "MsctTC3SnINWuYdON")
        .then(() => {
            Swal.fire({
                title: "E-mail enviado com sucesso",
                icon: "success",
                timer: 3000,
                showConfirmButton: false,
            })
        })
        .catch((error) => {
            console.error('Erro ao enviar email:', error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado ao enviar o e-mail",
              });
        })
        .finally(() => {
            setLoading(false);
        });
}

export default sendEmail