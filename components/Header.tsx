"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Header = ({ className }: HeaderProps) => {
    return (
        <header
            className={cn(
                `fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`,
                className
            )}
        >
            <div>Kevin Linro</div>
        </header>
    );
};

export default Header;
