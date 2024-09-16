export default function HardSkills({ propagateServerField }: any) {
    return (
        <div className="mb-4 flex flex-row">
            <h3>{propagateServerField.title}</h3>
            <div className="bg-gray-700 rounded-full h-2 w">
                <div className={`bg-sky-400 h-2 rounded-full w-${propagateServerField.percent}`} />
            </div>
        </div>
    )
}
