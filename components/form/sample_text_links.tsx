interface SampleTextLinksProps {
  onSampleClick: (topic: string) => void;
}

export default function SampleTextLinks({
  onSampleClick,
}: SampleTextLinksProps) {
  const samples = [
    { id: "ww2", label: "WW2" },
    { id: "trivia", label: "Trivia" },
    { id: "obama", label: "Barack Obama" },
  ];

  return (
    <p className="text-xs text-gray-500 dark:text-gray-400">
      Or, try a sample like{" "}
      {samples.map((sample, index) => (
        <span key={sample.id}>
          {index > 0 && (index === samples.length - 1 ? " or " : ", ")}
          <span
            className="font-medium cursor-pointer underline hover:text-blue-500 transition-colors"
            onClick={() => onSampleClick(sample.id)}
          >
            {sample.label}
          </span>
        </span>
      ))}
    </p>
  );
}
