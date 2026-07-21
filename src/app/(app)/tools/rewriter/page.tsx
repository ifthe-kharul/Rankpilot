import { TextToolWorkspace } from "@/components/tools/TextToolWorkspace";
import { SettingSection, SegmentedTabs, ChipGrid, InfoNote } from "@/components/tools/SettingsControls";

const sampleInput = `Our platform helps businesses create content faster. It uses AI to write articles, check grammar, and improve SEO. Many teams use it every day to save time on writing tasks.`;

const sampleOutput = `Content creation shouldn't be a bottleneck. Our platform combines AI-powered drafting, real-time grammar checks, and built-in SEO guidance into one workspace — so teams spend less time writing and more time shipping.`;

export default function RewriterPage() {
  return (
    <TextToolWorkspace
      toolTitle="Rewriter"
      toolIcon="edit_note"
      actionLabel="Rewrite Text"
      inputLabel="Original Text"
      outputLabel="Rewritten Output"
      defaultInput={sampleInput}
      outputText={sampleOutput}
      outputMeta={<span className="text-xs text-on-surface-variant">Similarity: 38%</span>}
      settingsPanel={
        <>
          <SettingSection label="Rewrite Mode">
            <SegmentedTabs options={["Standard", "Fluency", "Formal", "Creative"]} />
          </SettingSection>
          <SettingSection label="Change Intensity">
            <ChipGrid options={["Light", "Medium", "Heavy", "Maximum"]} defaultValue="Medium" />
          </SettingSection>
          <SettingSection label="Output Length">
            <ChipGrid options={["Shorter", "Same", "Longer", "Custom"]} defaultValue="Same" />
          </SettingSection>
          <InfoNote>
            Rewriter restructures sentences and vocabulary while preserving your original meaning and key facts.
          </InfoNote>
        </>
      }
    />
  );
}
