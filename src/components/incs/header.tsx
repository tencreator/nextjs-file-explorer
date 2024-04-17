const links = [
    { href: '/', label: 'Home' },
    // { href: '/ref', label: 'References' },
    // { href: '/weather', label: 'Weather' },
]

export function Header() {
    return (
        <header className="flex justify-center items-center h-16 bg-black text-white">
            <h2>Web Based File Explorer</h2>

            <nav>
                <ul className="flex">
                    {links.map(link => (
                        <li key={link.href} className="mx-4 btn btn-ghosted"><a href={link.href}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>

            <div></div>
        </header>
    )
}