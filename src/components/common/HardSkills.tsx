interface HardSkillsProps {
    propagateServerField: {
      title: string;
      percent?: string;
    };
  }
  
  export default function HardSkills({ propagateServerField }: HardSkillsProps) {
    const percent = propagateServerField.percent || "0";
    const [value, total] = percent.split('/').map(Number);
  
    const percentage = Math.min(Math.max((value / total) * 100, 0), 100);
  
    return (
      <div className="mb-4 flex flex-col">
        <h3>{propagateServerField.title}</h3>
        <div className="bg-gray-700 rounded-full h-2">
          <div 
            className="bg-sky-400 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
  