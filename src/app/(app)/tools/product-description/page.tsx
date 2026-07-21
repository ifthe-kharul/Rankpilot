import { FormToolWorkspace, FieldRow, TextField, TextAreaField, SelectField } from "@/components/tools/FormToolWorkspace";

export default function ProductDescriptionPage() {
  return (
    <FormToolWorkspace
      toolTitle="Product Description Writer"
      toolIcon="shopping_bag"
      description="Generate conversion-focused product copy with benefit-led bullet points and SEO metadata."
      credits={4}
      fields={
        <>
          <FieldRow>
            <TextField label="Product Name" defaultValue="Aurora Wireless Noise-Cancelling Headphones" />
            <SelectField label="Product Category" options={["Electronics", "Apparel", "Home & Garden", "Beauty"]} />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Key Features" defaultValue="40-hour battery life, active noise cancellation, memory-foam ear cups, Bluetooth 5.3." />
            <TextField label="Target Price Point" defaultValue="$179.99" />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Target Customer" badge="AI Analyzed" defaultValue="Commuters and remote workers who value comfort and audio quality." />
            <SelectField label="Format" options={["Bullet Points", "Short Paragraph", "Long-form Story", "Both"]} />
          </FieldRow>
          <FieldRow>
            <SelectField label="Tone of Voice" options={["Persuasive", "Minimalist", "Luxury", "Playful"]} />
            <SelectField label="Marketplace" options={["Shopify / DTC", "Amazon", "Etsy", "General"]} />
          </FieldRow>
        </>
      }
      summary={[
        { label: "Category", value: "Electronics" },
        { label: "Price", value: "$179.99" },
        { label: "Format", value: "Bullet Points" },
        { label: "Tone", value: "Persuasive" },
        { label: "Marketplace", value: "Shopify / DTC" },
      ]}
      tips={[
        "Lead with the single strongest benefit, not the spec sheet.",
        "Use sensory, concrete language over vague adjectives.",
        "Include one line addressing a common objection.",
      ]}
      resultPreview={
        <>
          <p className="font-bold mb-2">Aurora Wireless Noise-Cancelling Headphones</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>40-hour battery life — go a full work week without charging.</li>
            <li>Active noise cancellation for calls, flights, and open offices.</li>
            <li>Memory-foam ear cups built for all-day comfort.</li>
            <li>Bluetooth 5.3 for a stable, low-latency connection.</li>
          </ul>
        </>
      }
    />
  );
}
