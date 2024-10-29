import { Link } from "react-router-dom";

export interface BlogCardProps {
    authorName: string;
    title : string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar size="small" name={authorName} /> 
                <div className="font-light pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2 ">
                <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col ">
                {publishedDate}
                </div>
            </div>
            <div className="text-md font-semibold pt-2">
                {title}
            </div>
            <div className="text-xl font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}
export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-300 ">

    </div>
}

// Assuming this is in Avatar.tsx
export function Avatar({
    name,
    size = "small",
    onClick, // Add the onClick prop
}: {
    name: string;
    size: "small" | "big";
    onClick?: () => void; // Make onClick optional
}) {
    return (
        <div
            className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full`}
            onClick={onClick} // Attach the onClick event
            style={{ cursor: "pointer" }} // Optional: change cursor to pointer to indicate it's clickable
        >
            <span className={`${size === "small" ? "text-sm" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
                {name[0]}
            </span>
        </div>
    );
}


