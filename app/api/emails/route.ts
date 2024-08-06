import { sendEmail } from "@/app/utils/mail.utils";

export async function POST(req: any) {
  try {
    const data = await extractFormData(req);
    const emailContent = generateEmailContent(data);
    const subject = data.subject || "Contact Inquiry";

    const sender = {
      name: "Website Form",
      address: process.env.GOOGLE_EMAIL,
    };

    const recipients = determineRecipients(subject);

    const res = await sendEmail({
      sender,
      recipients,
      subject: `${subject} - for ${data.name}`,
      message: emailContent,
    });

    return Response.json({ accepted: "Email was sent successfully" });
  } catch (error) {
    return Response.json(
      { message: "Unable to send email at this time" },
      { status: 500 }
    );
  }
  async function extractFormData(req: any) {
    const data = await req.formData();
    return {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("prayerSubject"),
      message: data.get("message"),
    };
  }

  function generateEmailContent({ name, email, phone, message }: any) {
    return `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone Number: ${phone}</p><p>Message: ${message}</p>`;
  }

  // Utility function to determine recipients based on subject or other criteria
  function determineRecipients(subject: string) {
    if (subject === "Contact Inquiry") {
      return [
        {
          name: "General Inquiry",
          address: "info@lovefirstchristiancenter.com",
        },
      ];
    } else {
      return [
        {
          name: "Prayer Email",
          address: "prayer@lovefirstchristiancenter.com",
        },
      ];
    }
  }
}
