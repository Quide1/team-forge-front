"use client";
import { Bell } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const notifications = [
    { id: 1, message: "Nuevo seguidor", time: "Hace 5 minutos" },
    { id: 2, message: "Tu publicación fue compartida", time: "Hace 1 hora" },
    { id: 3, message: "Nuevo comentario en tu publicación lorem ipsum  lorem impsum", time: "Hace 2 horas" },

];

function Notifications() {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={notificationRef} className="relative">
            <button aria-label="Notificaciones" onClick={toggleOpen}>
                <Bell className="h-4 w-4" />
            </button>
            <menu
                className={`transition-all duration-300 ease-in-out fixed right-0 xs:absolute sm:absolute  text-sm bg-black  text-white shadow-lg rounded-lg border
                     border-gray-600  w-[320px]  ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none notificationPosition  "
                    }`}
            >
                <ul className="p-4">
                    <span className="font-bold text-custom-palette-500">Notificaciones</span>
                    <hr className="opacity-15 my-2" />
                    {notifications.map((notification) => (
                        <div key={notification.id} className="flex flex-col gap-1  p-1 rounded-lg hover:bg-slate-500/20">
                            <p className="text-ellipsis overflow-hidden ">{notification.message}</p>
                            <p className="text-gray-500">{notification.time}</p>
                        </div>
                    ))}
                </ul>
            </menu>
        </div>
    );
}

export default Notifications;
