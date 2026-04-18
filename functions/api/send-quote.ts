interface Env {
  DISCORD_WEBHOOK_URL: string
}

interface ExtraFeature {
  name: string
  price: number
}

interface QuoteBody {
  name?: string
  email?: string
  phone?: string
  notes?: string
  projectType?: string
  includedFeatures?: string[]
  extraFeatures?: ExtraFeature[]
  priceMin?: number
  priceMax?: number
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = await request.json() as QuoteBody
    const { name, email, phone, notes, projectType, includedFeatures, extraFeatures, priceMin, priceMax } = body

    const includedList = includedFeatures?.length
      ? includedFeatures.map((f) => `  - ${f}`).join('\n')
      : '  None'

    const extraList = extraFeatures?.length
      ? extraFeatures.map((f) => `  - ${f.name} (+${f.price}\u20AC)`).join('\n')
      : '  None'

    const embed = {
      title: 'New Quote Request',
      color: 0x243b53,
      fields: [
        { name: 'Client', value: name || 'Not specified', inline: true },
        { name: 'Email', value: email || 'Not specified', inline: true },
        { name: 'Phone', value: phone || 'Not specified', inline: true },
        { name: 'Project Type', value: projectType || 'Not specified', inline: false },
        { name: 'Included Features', value: includedList, inline: false },
        { name: 'Extra Features', value: extraList, inline: false },
        { name: 'Price Estimate', value: `**${priceMin}\u20AC \u2013 ${priceMax}\u20AC** (VAT excluded)`, inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: 'Laciola.it — Quote Configurator' },
    }

    if (notes?.trim()) {
      embed.fields.push({ name: 'Additional Notes', value: notes, inline: false })
    }

    const discordRes = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Laciola Quotes', embeds: [embed] }),
    })

    if (!discordRes.ok) {
      return new Response(JSON.stringify({ error: 'Error sending the request' }), { status: 500 })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}
