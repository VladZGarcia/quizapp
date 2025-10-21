import CharacterCounter from "./character_counter";
import SampleTextLinks from "./sample_text_links";

interface QuizTextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxChars: number;
  onSampleClick: (topic: string) => void;
}

export default function QuizTextInput({
  value,
  onChange,
  maxChars,
  onSampleClick,
}: QuizTextInputProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Text to use</p>
        <CharacterCounter currentLength={value.length} maxLength={maxChars} />
      </div>
      <textarea
        className="border rounded-lg w-full p-2 mb-1 resize-y max-h-64 min-h-20 overflow-auto text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
        placeholder="Copy & paste text here to generate quiz questions ..."
        rows={6}
        value={value}
        onChange={onChange}
        required
      />
      <SampleTextLinks onSampleClick={onSampleClick} />
    </div>
  );
}
