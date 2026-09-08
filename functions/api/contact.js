// Cloudflare Pages Function handling form submissions at /api/contact
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, organisation, interestArea, message } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Name and email are required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return success response to client
    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead submission received successfully.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server processing error." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
