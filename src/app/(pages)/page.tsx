"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";

const Home = () => {
const {authStatus} = useAuth();
return (
    <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap -mx-2 gap-y-8">
            <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
                <div className="relative text-center w-full flex justify-center flex-wrap">
                </div>
            </div>
            <div className="w-full px-2 flex flex-wrap justify-end">
                {authStatus ? (
                    <div className="max-w-md">
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
        </div>
    </div>
);
}

export default Home;