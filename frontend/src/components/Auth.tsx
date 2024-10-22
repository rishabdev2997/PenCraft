import { SignupInput } from "@rishabdev/pencraft-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    return <div className="min-h-screen bg-gradient-to-b from-red-100 via-blue-100 to-transparent flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-3xl font-extrabold mb-1">
                        Create an account 
                    </div>
                    <div className=" text-slate-500">
                        Already have an account ? 
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                </div>
                <div>
                    <LabelledInput label="Name" placeholder="Rishabdev Tudu..." onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }} />
                    <LabelledInput label="Username" placeholder="rishabdev@gmail.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value,
                        }))
                    }} />
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({ label, placeholder, onChange, type}: LabelledInputType){
    return  <div>
    <label className="block mb-2 text-sm font-medium text-black">{label}</label>
    <input onChange={onChange} type={type ||"text"} id="first_name" className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}