export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full h-full font-mono">
            {children}
        </main>
    )
}