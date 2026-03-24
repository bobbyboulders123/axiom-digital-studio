export async function submitContactForm(values) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.error || "Something went wrong while sending your message.");
  }

  return data;
}