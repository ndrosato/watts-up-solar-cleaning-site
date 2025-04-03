"use server"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please provide a valid email address" }
  }

  try {
    // For now, we'll just log the email
    console.log(`New subscription: ${email}`)

    // In a production environment, you would:
    // 1. Store this email in a database
    // 2. Send a notification to your Google Workspace email
    // 3. Potentially integrate with an email marketing service like Mailchimp or SendGrid

    // Example of sending an email notification (would require setting up a mail service)
    // await sendEmail({
    //   to: 'your-email@wattsupsolarcleaning.com.au',
    //   subject: 'New Newsletter Subscription',
    //   text: `New subscriber: ${email}`
    // })

    return { success: true, message: "Thank you for subscribing!" }
  } catch (error) {
    console.error("Subscription error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

