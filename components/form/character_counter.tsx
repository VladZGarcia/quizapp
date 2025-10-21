interface CharacterCounterProps {
  currentLength: number;
  maxLength: number;
}

export default function CharacterCounter({
  currentLength,
  maxLength,
}: CharacterCounterProps) {
  const isOverLimit = currentLength >= maxLength;

  return (
    <span
      className={`text-xs ${
        isOverLimit ? "text-red-500" : "text-gray-500 dark:text-gray-400"
      }`}
    >
      {currentLength.toLocaleString("en-US")} /{" "}
      {maxLength.toLocaleString("en-US")}
    </span>
  );
}
