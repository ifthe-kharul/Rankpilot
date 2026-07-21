import { FormToolWorkspace, FieldRow, TextField, TextAreaField, SelectField } from "@/components/tools/FormToolWorkspace";

export default function MarketingEmailPage() {
  return (
    <FormToolWorkspace
      toolTitle="Marketing Email Writer"
      toolIcon="mail"
      description="Create high-converting marketing emails and email sequences that get results."
      credits={6}
      fields={
        <>
          <FieldRow>
            <TextField label="Campaign Name" defaultValue="Summer Sale Campaign" />
            <SelectField label="Email Type" options={["Promotional Email", "Newsletter", "Announcement", "Re-engagement"]} />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Target Audience" badge="AI Analyzed" defaultValue="Existing customers and subscribers interested in our products." />
            <TextField label="Product / Offer" defaultValue="20% Off on All Premium Plans" hint="Highlight the main value proposition." />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Key Message" defaultValue="Limited-time offer to upgrade and enjoy premium benefits." />
            <SelectField label="Call To Action (CTA)" options={["Upgrade Now", "Shop Now", "Learn More", "Claim Offer"]} />
          </FieldRow>
          <FieldRow>
            <SelectField label="Tone of Voice" options={["Professional", "Friendly", "Urgent", "Playful"]} />
            <SelectField label="Email Length" options={["Short", "Medium", "Long"]} />
          </FieldRow>
        </>
      }
      summary={[
        { label: "Email Type", value: "Promotional" },
        { label: "Goal", value: "Sales" },
        { label: "Audience", value: "Existing Customers" },
        { label: "CTA", value: "Upgrade Now" },
        { label: "Tone", value: "Professional" },
      ]}
      tips={[
        "Keep subject lines under 50 characters for higher open rates.",
        "Lead with the offer, not the backstory.",
        "One clear CTA per email outperforms multiple competing links.",
      ]}
      resultPreview={
        <>
          <p className="font-bold mb-2">Subject: Your Premium Upgrade Is Waiting — 20% Off Ends Soon</p>
          <p className="mb-3">Hi there,</p>
          <p className="mb-3">
            For a limited time, upgrade to Premium and save 20% on every plan. You already know what Premium
            unlocks — now&apos;s the time to make it official.
          </p>
          <p className="font-semibold">→ Upgrade Now</p>
        </>
      }
    />
  );
}
