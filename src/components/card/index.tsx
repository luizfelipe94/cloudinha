import React from "react";

type CardProps = {
    title: string;
    children?: React.ReactNode;
};

export function Card(props: CardProps) {
    return (
        <div className="card w-full h-80 bg-base-200 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}