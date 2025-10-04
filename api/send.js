export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    // 🔑 Verifica autenticação
    const secret = req.headers["authorization"];
    if (secret !== `Bearer ${process.env.kfj39fj3JSD0sd_@#2025}`) {
      return res.status(403).json({ error: "Acesso negado" });
    }

    // 📦 Pega o body corretamente
    const body = req.body; // já funciona no Vercel (sem JSON.parse)

    // 🚀 Envia pro Discord
    const response = await fetch(process.env.https://discord.com/api/webhooks/1423854175216861306/0gT6Bs9AlP-tQRj_08k1O6QlxZAunmecLYa68dGJdWDVdHAPAAyf16WoobW1QrJxAv0G, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(500).json({ error: "Erro no Discord", details: errText });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
