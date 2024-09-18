export default function HardSkills({ propagateServerField }: any) {
    propagateServerField = propagateServerField || {};
    const percent = propagateServerField.percent || "0";
    const [value, total] = percent.split('/').map(Number); // Converte a porcentagem para valores numéricos

    // Calcula a porcentagem e garante que esteja entre 0 e 100
    const percentage = Math.min(Math.max((value / total) * 100, 0), 100);

    return (
        <div className="mb-4 flex flex-col">
            <h3>{propagateServerField.title}</h3>
            <div className="bg-gray-700 rounded-full h-2">
                <div 
                    className="bg-sky-400 h-2 rounded-full"
                    style={{ width: `${percentage}%` }} // Aplica a largura calculada
                />
            </div>
        </div>
    )
}
