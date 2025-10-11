import { useEffect, useState } from "react";

const objects: string[] = ["Students", "Developers", "Fellow Enthusiasts"];

export default function AnimatedObject() {
  const [object, setObject] = useState<string>("");
  const [typingSpeed, setTypingSpeed] = useState<number>(200);
  const [loop, setLoop] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentObject = objects[loop % objects.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setObject((prev) => {
          const next = currentObject.substring(0, prev.length + 1);

          if (next === currentObject) {
            setTypingSpeed(1500); // Pause at the end reduced by 25%
            setTimeout(() => setIsDeleting(true), 1500);
          } else {
            setTypingSpeed(150); // Normal typing speed
          }
          return next;
        });
      } else {
        setObject((prev) => {
          if (prev.length === 0) {
            setIsDeleting(false);
            setLoop(loop + 1);
            setTypingSpeed(500);
            return "";
          }

          const next = prev.substring(0, prev.length - 1);
          setTypingSpeed(50); // Faster when deleting
          return next;
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [object, isDeleting, loop, typingSpeed]);

  return <span className="">{object}</span>;
}
