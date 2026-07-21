import { FormToolWorkspace, FieldRow, TextField, TextAreaField, SelectField } from "@/components/tools/FormToolWorkspace";

export default function SocialAdPage() {
  return (
    <FormToolWorkspace
      toolTitle="Social Ad Creator"
      toolIcon="campaign"
      description="Generate platform-optimized ad copy variations built for high click-through and conversion."
      credits={5}
      fields={
        <>
          <FieldRow>
            <TextField label="Campaign Name" defaultValue="Q3 App Install Push" />
            <SelectField label="Platform" options={["Meta (Facebook/Instagram)", "LinkedIn", "TikTok", "Google Ads"]} />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Product / Offer" defaultValue="Free 14-day trial of Rankpilot Pro, no credit card required." />
            <TextField label="Primary CTA" defaultValue="Start Free Trial" />
          </FieldRow>
          <FieldRow>
            <TextAreaField label="Target Audience" badge="AI Analyzed" defaultValue="Content marketers and SEO leads at mid-size companies." />
            <SelectField label="Ad Objective" options={["Conversions", "Traffic", "Awareness", "Lead Gen"]} />
          </FieldRow>
          <FieldRow>
            <SelectField label="Tone of Voice" options={["Bold", "Conversational", "Professional", "Witty"]} />
            <SelectField label="Number of Variations" options={["3 Variations", "5 Variations", "10 Variations"]} />
          </FieldRow>
        </>
      }
      summary={[
        { label: "Platform", value: "Meta" },
        { label: "Objective", value: "Conversions" },
        { label: "Audience", value: "Marketers/SEO" },
        { label: "CTA", value: "Start Free Trial" },
        { label: "Variations", value: "5" },
      ]}
      tips={[
        "Front-load the hook — the first 5 words decide the scroll-past.",
        "Match ad copy tone to the landing page for consistency.",
        "Generate multiple variations and let performance data pick the winner.",
      ]}
      resultPreview={
        <div className="space-y-4">
          <div>
            <p className="font-bold">Variation 1</p>
            <p>Stop guessing what ranks. Rankpilot writes, checks, and optimizes content in one place. Try it free for 14 days.</p>
          </div>
          <div>
            <p className="font-bold">Variation 2</p>
            <p>Your content team, minus the busywork. AI drafting + SEO scoring + grammar, all in one tool. No card required.</p>
          </div>
        </div>
      }
    />
  );
}
