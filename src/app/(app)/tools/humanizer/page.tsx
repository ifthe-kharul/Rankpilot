import { TextToolWorkspace } from "@/components/tools/TextToolWorkspace";
import { SettingSection, SegmentedTabs, ChipGrid, CheckboxList, InfoNote } from "@/components/tools/SettingsControls";

const sampleInput = `Recent advancements in artificial intelligence have fundamentally altered the landscape of digital content creation. Automation tools are now capable of generating extensive volumes of text that satisfy basic informational requirements. However, these models often lack the nuanced emotional resonance and rhythmic variation characteristic of human prose.`;

const sampleOutput = `AI has changed content creation in a big way. Tools can now churn out huge amounts of text that cover the basics just fine. But here's the catch — most of it still misses the emotional nuance and natural rhythm that makes writing feel genuinely human.`;

export default function HumanizerPage() {
  return (
    <TextToolWorkspace
      toolTitle="AI Humanizer"
      toolIcon="face"
      actionLabel="Humanize Text"
      inputLabel="Original Input"
      outputLabel="Humanized Output"
      defaultInput={sampleInput}
      outputText={sampleOutput}
      outputMeta={
        <div className="flex items-center gap-1">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant">AI Detection:</span>
          <span className="text-[10px] font-bold text-secondary">Low (4%)</span>
        </div>
      }
      settingsPanel={
        <>
          <SettingSection label="Humanization Mode">
            <SegmentedTabs options={["Balanced", "Strong", "Light", "Custom"]} />
          </SettingSection>
          <SettingSection label="Target Voice Style">
            <ChipGrid
              options={["Natural", "Conversational", "Professional", "Academic", "Friendly", "Journalistic", "Streamlined", "Persuasive"]}
            />
          </SettingSection>
          <SettingSection label="Preservation Locks">
            <CheckboxList options={["Names & Dates", "SEO Keywords", "Citations & Links", "Product Details", "Direct Quotes"]} />
          </SettingSection>
          <InfoNote>
            Our models are trained on over 50M human-written samples to ensure natural flow while maintaining
            semantic meaning.
          </InfoNote>
        </>
      }
    />
  );
}
