import { sendEmail } from "@/app/utils/mail.utils";

export async function POST(req: any) {
  const data = await req.formData();

  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const subject = data.get("prayerSubject");
  const prayerRequest = data.get("prayerRequest");

  const html = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone Number: ${phone}</p><p>Message: ${prayerRequest}</p>`;

  const sender = {
    name: "Prayer Website Form",
    address: process.env.GOOGLE_EMAIL,
  };
  const recipients = [
    {
      name: "Prayer Email",
      address: "prayer@lovefirstchristiancenter.com",
    },
  ];
  try {
    const res = await sendEmail({
      sender,
      recipients,
      subject: `${subject} - for ${name}`,
      message: html,
    });

    return Response.json({ accepted: "Email was sent successfully" });
  } catch (error) {
    return Response.json(
      { message: "Unable to send email at this time" },
      { status: 500 }
    );
  }
}
