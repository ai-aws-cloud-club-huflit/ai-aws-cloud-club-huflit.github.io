import logo from "../assets/img/logo.png";

interface NavbarItem {
    label: string;
    path: string;
}

const navbarItems: NavbarItem[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Blog",
        path: "/blog",
    },
    {
        label: "Events",
        path: "/events",
    },
];

export default function Navbar() {
    return (
        <nav className="bg-bg-100 border-b border-b-gray-400">
            <div className="flex flex-inline w-full py-2 px-8 items-center justify-between">
                <img src={logo} className="w-16" alt="logo" />
                <div className="flex flex-inline gap-6">
                    {navbarItems.map(({ label, path }) => (
                        <a
                            href={path}
                            className="text-black/70 hover:text-black"
                            key={label}>
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
