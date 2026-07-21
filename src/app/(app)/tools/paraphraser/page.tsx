import { TextToolWorkspace } from "@/components/tools/TextToolWorkspace";
import { SettingSection, SegmentedTabs, ChipGrid, InfoNote } from "@/components/tools/SettingsControls";

const sampleInput = `Search engine optimization requires a mix of technical accuracy and genuinely useful content. Teams that focus only on keywords tend to underperform compared to teams that prioritize reader value.`;

const sampleOutput = `Ranking well takes more than just technical SEO — it takes content people actually want to read. Teams that chase keywords alone usually fall behind the ones who put the reader first.`;

export default function ParaphraserPage() {
  return (
    <TextToolWorkspace
      toolTitle="Paraphraser"
      toolIcon="transform"
      actionLabel="Paraphrase Text"
      inputLabel="Original Text"
      outputLabel="Paraphrased Output"
      defaultInput={sampleInput}
      outputText={sampleOutput}
      outputMeta={<span className="text-xs text-on-surface-variant">Uniqueness: 91%</span>}
      settingsPanel={
        <>
          <SettingSection label="Paraphrase Mode">
            <SegmentedTabs options={["Standard", "Fluency", "Academic", "Simple"]} />
          </SettingSection>
          <SettingSection label="Synonym Strength">
            <ChipGrid options={["Basic", "Moderate", "Advanced", "Extreme"]} defaultValue="Moderate" />
          </SettingSection>
          <SettingSection label="Reading Level">
            <ChipGrid options={["Grade 6-8", "Grade 9-12", "College", "Expert"]} defaultValue="Grade 9-12" />
          </SettingSection>
          <InfoNote>
            Paraphraser rewrites word choice and sentence order to produce a unique, plagiarism-safe version of
            your text.
          </InfoNote>
        </>
      }
    />
  );
}
