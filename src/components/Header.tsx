import AnimatedObject from "./ui/AnimatedObject";

export default function Header() {
  return (
    <div className="relative flex h-[30rem] w-full items-center justify-center bg-white">
      <div
        className="
      absolute
      inset-0
      [background-size:80px_80px]
      [background-image:linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)]
      "
      ></div>
      <div className="inset-10 relative w-full h-full flex items-center justify-center top-0 left-0">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-snug">
          Sharing{" "}
          <span className="text-nowrap">
            <span className="text-[#8473ff]">AI</span> &{" "}
            <span className="bg-gradient-to-r from-[#00CDAC] to-[#02AAB0] text-transparent bg-clip-text">
              AWS Cloud
            </span>
          </span>{" "}
          wisdom
          <br className="hidden lg:block" /> for{" "}
          <span className="bg-gray-200 px-3 font-mono text-nowrap">
            [<AnimatedObject />]
          </span>
        </p>
      </div>
    </div>
  );
}
