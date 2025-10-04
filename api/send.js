export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  // 1️⃣ Autenticação extra (chave secreta sua)
  const secret = req.headers["authorization"];
  if (secret !== `Bearer ${process.env.kfj39fj3JSD0sd_@#2025}`) {
    return res.status(403).json({ error: "Acesso negado" });
  }

  // 2️⃣ Pega dados enviados pelo Roblox
  const body = await req.body;

  try {
    // 3️⃣ Envia pro Discord Webhook real
    const response = await fetch(process.env.https://discord.com/api/webhooks/1423854175216861306/0gT6Bs9AlP-tQRj_08k1O6QlxZAunmecLYa68dGJdWDVdHAPAAyf16WoobW1QrJxAv0G, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Erro ao enviar pro Discord" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
