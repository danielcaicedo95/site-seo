import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, telefono, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Configura el transporte de Nodemailer para Gmail
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "danielcaicedoco@gmail.com", // Tu correo de Gmail
        pass: "vqax ucuq dlzh hrls", // Contraseña de aplicación de Gmail
      },
    });

    // Configura el correo electrónico
    const mailOptions = {
      from: `"${nombre}" <${email}>`, // Remitente
      to: "danielcaicedoco@gmail.com", // Destinatario
      subject: `Nuevo mensaje de ${nombre}`, // Asunto
      text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`, // Cuerpo del mensaje
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({ message: "Error al enviar el correo", error });
  }
}


