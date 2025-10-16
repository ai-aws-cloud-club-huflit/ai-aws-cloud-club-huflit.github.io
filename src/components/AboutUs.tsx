interface SocialMedia {
    type: "github" | "x";
    link: string;
}

interface Member {
    avatar: string;
    name: string;
    role: string;
    connects: SocialMedia[];
}

const members: Member[] = [
    {
        avatar: "https://picsum.photos/60",
        name: "Toby Nguyen",
        role: "Web developer",
        connects: [
            {
                type: "github",
                link: "https://github.com/tobynguyen27",
            },
        ],
    },
    {
        avatar: "https://picsum.photos/60",
        name: "Toby Nguyen",
        role: "Web developer",
        connects: [
            {
                type: "github",
                link: "https://github.com/tobynguyen27",
            },
        ],
    },
    {
        avatar: "https://picsum.photos/60",
        name: "Toby Nguyen",
        role: "Web developer",
        connects: [
            {
                type: "github",
                link: "https://github.com/tobynguyen27",
            },
        ],
    },
    {
        avatar: "https://picsum.photos/60",
        name: "Toby Nguyen",
        role: "Web developer",
        connects: [
            {
                type: "github",
                link: "https://github.com/tobynguyen27",
            },
        ],
    },
    {
        avatar: "https://picsum.photos/60",
        name: "Toby Nguyen",
        role: "Web developer",
        connects: [
            {
                type: "github",
                link: "https://github.com/tobynguyen27",
            },
        ],
    },
];

export default function AboutUs() {
    return (
        <div className="w-full border-t border-t-gray-400">
            <div className="container mx-auto p-3">
                <div className="py-12">
                    <p className="text-4xl font-semibold">Members</p>
                    <p className="text-lg text-gray-900">
                        We are the club of AI & AWS Cloud enthusiasts
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6">
                    {members.map(({ name, avatar, role, connects }) => (
                        <div
                            className="flex items-center justify-center border border-gray-400 w-full"
                            key={name}>
                            <div className="flex flex-col items-center justify-center gap-5 py-10 px-20">
                                <div className="">
                                    <img
                                        src={avatar}
                                        alt={name}
                                        className="rounded-full w-16 h-16"
                                    />
                                </div>
                                <div className="">
                                    <p className="text-center font-semibold text-lg">
                                        {name}
                                    </p>
                                    <p className="text-center text-gray-900">
                                        {role}
                                    </p>
                                </div>
                                <div className="">
                                    {connects.map(({ type, link }) => (
                                        <a href={link} key={link}>
                                            {type === "github" ? (
                                                <i className="i-mdi:github text-2xl text-black/70 hover:(text-black) duration-300" />
                                            ) : (
                                                <i className="i-mdi:twitter text-2xl text-black/70 hover:(text-black) duration-300" />
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-12">
                    <p className="text-2xl font-semibold">Want to jon us?</p>
                    <p className="text-lg text-gray-900 mt-3">
                        If you are:
                        <ul className="list-disc list-inside">
                            <li>Obsessed with developer experience</li>
                            <li>Passionate about AI and AWS</li>
                        </ul>
                        Meet us in our{" "}
                        <a
                            href="https://discord.gg/5zHx8JtmVn"
                            className="hover:text-black/80 duration-300 underline decoration-offset-3">
                            Discord server
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
