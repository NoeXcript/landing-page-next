import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

export interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string
    id: number
}


const infoCards: IInfoCard[] = [
    {
        title: 'Increased Sales',
        bodyText: "Insightful's predictive analytics identify highvalue prospects for targeted pitches, boosting conversion reates and sales by up to 20%",
        icon: ArrowUpNarrowWide,
        id: 1
    }, {
        title: 'No Time Wasted',
        bodyText: "Insightful automates personalized content creation, freeing up sales repss' time for revenue-focused activities and increased productivity.",
        icon: AlarmClockOff,
        id: 2
    }, {
        title: 'Decreased Churn',
        bodyText: "Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities",
        icon: ArrowDownNarrowWide,
        id: 3
    }
]


export default infoCards