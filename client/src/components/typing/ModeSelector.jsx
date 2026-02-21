export default function ModeSelector({ mode, setMode }) {
    const modes = [30, 60, 120];

    return (
        <div className="flex gap-4">
            {modes.map((m) => (
                <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-6 py-2 rounded-full ${mode === m
                            ? "bg-sunset text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                >
                    {m}s
                </button>
            ))}
        </div>
    );
}