import React from "react";

type CardProps = {
    title: string;
    children?: React.ReactNode;
};

export function Card(props: CardProps) {
    return (
        <div className="w-full p-3 h-80 bg-white rounded-lg shadow">
            <div className="">
                <h6 className="text-lg font-bold text-gray-600">{props.title}</h6>
            </div>
            <div>{props.children}</div>
        </div>
    );
}