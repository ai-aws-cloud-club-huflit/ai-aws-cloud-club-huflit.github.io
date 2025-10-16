import logo from "../assets/img/logo.png";

export default function Footer() {
    return (
        <footer className="bg-bg-200 w-full border-t border-t-gray-400">
            <div className="flex flex-inline w-full py-2 px-8 items-center justify-between">
                <img src={logo} className="w-16" alt="logo" />
                <p className="text-gray-600 font-mono">
                    Copyright © 2025{" "}
                    <a
                        href="https://tobynguyen.dev"
                        className="hover:text-black/80 duration-300">
                        Toby Nguyen
                    </a>
                </p>
                <div className="flex flex-inline items-center gap-3">
                    <a
                        href="https://example.com"
                        className="text-black/70 hover:(text-black) duration-300">
                        <i className="i-mdi:github text-2xl"></i>
                    </a>
                    <a
                        href="https://example.com"
                        className="text-black/70 hover:(text-black) duration-300">
                        <i className="i-mdi:facebook text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
