import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ArticleCard: React.FunctionComponent<{ title: string; body: string }> = ({
    title,
    body,
}) => {
    const bodyArray = body.split(".");
    return (
        <Link href={`/`}>
            <article className="border rounded-xl py-4 px-3 cursor-pointer">
                <h1 className="text-2xl font-semibold text-gray-900">
                    {title}
                </h1>
                <p className="text-sm font-medium leading-6 mt-5">
                    {bodyArray?.map((line, index) => (
                        <span key={index}>
                            <p>{line}.</p>
                        </span>
                    ))}
                </p>
            </article>
        </Link>
    );
};

export default ArticleCard;
