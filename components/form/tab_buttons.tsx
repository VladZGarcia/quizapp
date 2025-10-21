interface TabButtonsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabButtons({
  activeTab,
  onTabChange,
}: TabButtonsProps) {
  const tabs = [
    { id: "new", label: "New quiz" },
    { id: "history", label: "History" },
    { id: "saved", label: "Saved quizzes" },
  ];

  return (
    <div className="flex gap-8 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-2 transition-colors ${
            activeTab === tab.id
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
