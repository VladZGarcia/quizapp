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
    <div className="flex flex-col flex-1">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Text to use</p>
        <CharacterCounter currentLength={value.length} maxLength={maxChars} />
      </div>
      <textarea
        className="border rounded-lg w-full p-2 mb-2 flex-1 resize-none overflow-auto text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Copy & paste text here to generate quiz questions ..."
        value={value}
        onChange={onChange}
        required
      />
      <SampleTextLinks onSampleClick={onSampleClick} />
    </div>
  );
}
