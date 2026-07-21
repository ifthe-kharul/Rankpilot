import { TextToolWorkspace } from "@/components/tools/TextToolWorkspace";
import { SettingSection, SegmentedTabs, ChipGrid, InfoNote } from "@/components/tools/SettingsControls";

const sampleInput = `Affiliate marketing is a performance-based strategy where businesses reward affiliates for driving traffic or sales. Success depends on choosing the right niche, building trust with an audience, and consistently producing high-quality content. Common mistakes include promoting too many unrelated products, ignoring disclosure requirements, and focusing on volume over relevance. The most successful affiliates treat their audience's trust as the primary asset, not the commission itself.`;

const sampleOutput = `• Affiliate marketing rewards partners for driving sales or traffic.
• Success hinges on niche selection, audience trust, and content quality.
• Avoid over-promotion, missing disclosures, and low-relevance content.
• Audience trust — not commissions — is the real long-term asset.`;

export default function SummarizerPage() {
  return (
    <TextToolWorkspace
      toolTitle="Summarizer"
      toolIcon="short_text"
      actionLabel="Summarize Text"
      inputLabel="Source Text"
      outputLabel="Summary"
      defaultInput={sampleInput}
      outputText={sampleOutput}
      outputMeta={<span className="text-xs text-on-surface-variant">Compression: 78%</span>}
      settingsPanel={
        <>
          <SettingSection label="Summary Format">
            <SegmentedTabs options={["Bullets", "Paragraph", "TL;DR", "Key Points"]} />
          </SettingSection>
          <SettingSection label="Summary Length">
            <ChipGrid options={["Short", "Medium", "Long", "Custom"]} defaultValue="Medium" />
          </SettingSection>
          <SettingSection label="Focus Area">
            <ChipGrid options={["General", "Data & Stats", "Action Items", "Quotes"]} defaultValue="General" />
          </SettingSection>
          <InfoNote>
            Summarizer extracts the core ideas from long-form content while preserving key facts, figures, and
            names.
          </InfoNote>
        </>
      }
    />
  );
}
