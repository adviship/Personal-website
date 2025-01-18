import { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        document.addEventListener("mousemove", (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        });
    }, []);

    return (
        <div className="cursor absolute w-6 h-6 rounded-full bg-white border-2 border-gray-800 pointer-events-none"></div>
    );
};

export default Cursor;
