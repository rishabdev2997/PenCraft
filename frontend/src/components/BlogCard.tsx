
interface BlogCardProps {
    authorName: string;
    title : string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
    return <div className="border border-slate-200 pb-2">
        <div className="flex">
            <div className="flex justify-center flex-col">
            <Avatar name={authorName} /> 
            </div>
            <div className="font-light pl-1 pr-1">
                {authorName}
            </div>
            <div className="flex justify-center flex-col">
            <Circle />
            </div>
            <div className="font-thin pl-1 text-slate-500">
            {publishedDate}
            </div>
        </div>
        <div className="text-md font-semibold">
            {title}
        </div>
        <div className="text-xl font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
}
function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-300">

    </div>
}

function Avatar({ name }: {name:string}){
    return <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
        <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}

