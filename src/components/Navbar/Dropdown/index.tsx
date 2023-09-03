"use client"
import React from "react";

export default function DropdownComponent() {
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        // Redirect to the desired external link based on the selected option
        if (selectedValue === "Agency") {
            window.location.href = ""; // Replace with the actual URL
        } else if (selectedValue === "Platform") {
            window.location.href = "https://www.youtube.com"; // Replace with the actual URL
        }
    };

    return (
        <div className="relative pl-10">
            <select
                className="w-full text-white bg-transparent text-xl"
                onChange={handleOptionChange}
            >
                <option value="Agency">Agency</option>
                <option value="Platform">Platform</option>
            </select>
        </div>
    );
}
