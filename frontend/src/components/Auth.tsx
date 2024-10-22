import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    return <div className="min-h-screen bg-gradient-to-b from-red-50 via-blue-50 to-transparent flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="text-3xl font-extrabold">
                    Create an account 
                </div>
                <div className=" text-slate-500">
                    Already have an account ? 
                    <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                </div>
            </div>
        </div>
    </div>
}