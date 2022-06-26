import { Searchbar } from "../types";

export const teams : Searchbar[] = [
    { value: "Mumbai Indians", label: "Mumbai Indians" },
    { value: "Chennai Super Kings", label: "Chennai Super Kings" },
    { value: "Kolkata Knight Riders", label: "Kolkata Knight Riders" },
    { value: "Delhi Capitals", label: "Delhi Capitals" },
    { value: "Royal Challengers Bangalore", label: "Royal Challengers Bangalore" },
    { value: "Punjab Kings", label: "Punjab Kings" },
    { value: "Lucknow Super Giants", label: "Lucknow Super Giants" },
    { value: "Gujarat Titans", label: "Gujarat Titans" },
    { value: "Rajasthan Royals", label: "Rajasthan Royals" },
    { value: "Sunrisers Hyderabad", label: "Sunrisers Hyderabad" }
];
export const vals = new Map<String,String>([
    ["Chennai Super Kings", "CSK"],
    ["Kolkata Knight Riders", "KKR"],
    ["Mumbai Indians", "MI"],
    ["Delhi Capitals", "DC"],
    ["Royal Challengers Bangalore", "RCB"],
    ["Punjab Kings", "PBKS"],
    ["Lucknow Super Giants", "LSG"],
    ["Gujarat Titans", "GT"],
    ["Rajasthan Royals", "RR"],
    ["Sunrisers Hyderabad", "SRH"],
]);