import React from "react";

const Paragraph: React.FunctionComponent<{
    title: string;
    children: React.ReactNode;
    className?: string
}> = ({ title, children, className }) => {
    return (
        <article className={`text-sm leading-5 ${className}`}>
            <h3 className="font-medium text-base">{title}</h3>
            <p className="mt-2">{children}</p>
        </article>
    );
};

export default Paragraph;
