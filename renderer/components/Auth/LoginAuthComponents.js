import React, { useState } from "react"
import axios from 'axios'
import { PostWithoutHeader } from "../../libs/RequestAxios";
import { withIronSessionApiRoute } from "../../pages/api/login";

export default function LoginAuthComponents() {
    const [authText, setAuthText] = useState(null)

    const onSubmitFunc = async (e) => {
        e.preventDefault();
        withIronSessionApiRoute(async function loginRoute(req, res) {
            // get user from database then:
            req.session.user = {
              id: 230,
              admin: true,
            };
            await req.session.save();
            res.send({ ok: true });
          },{
            cookieName: "myapp_cookiename",
            password: "complex_password_at_least_32_characters_long",
            // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
            cookieOptions: {
              secure: process.env.NODE_ENV === "production",
            },
          })
        // PostWithoutHeader('login', authText)
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))
    }
    const changeValueOfText = (e) => {
        let name = e.target.name
        let value = e.target.value
        setAuthText({
            ...authText,
            [name]: value
        })
    }

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Masuk ke akun Anda
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmitFunc}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={changeValueOfText} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama@perusahaan.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={changeValueOfText} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Sign in</button>
                    <div className="text-center">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500">Lupa password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}