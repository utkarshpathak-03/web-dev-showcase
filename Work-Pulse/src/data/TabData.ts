import avatar from "../assets/avatars/avatar.png";
import boy from "../assets/avatars/boy.png";
import gamer from "../assets/avatars/gamer.png";
import girl from "../assets/avatars/girl.png";
import hacker from "../assets/avatars/hacker.png";
import man1 from "../assets/avatars/man-1.png";
import man2 from "../assets/avatars/man-2.png";
import man from "../assets/avatars/man.png";
import woman1 from "../assets/avatars/woman-1.png";
import woman from "../assets/avatars/woman.png";

interface TabEmployee {
    id: number;
    name: string;
    leaveFrom: string,
    leaveTill: string,
    avatar: string
}

interface TabEmployeeStructure {
    onLeave: TabEmployee[];
    Active: TabEmployee[];
    OnBoarding: TabEmployee[];
}

const tabData: TabEmployeeStructure = {
    "onLeave": [
        {
            "id": 1,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": avatar

        },
        {
            "id": 2,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": boy
        },
        {
            "id": 3,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": gamer
        },
        {
            "id": 4,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": girl
        },
        {
            "id": 5,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": hacker
        },
        {
            "id": 6,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man1
        },
        {
            "id": 7,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man2
        },
        {
            "id": 8,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man
        },
        {
            "id": 9,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman1
        },
        {
            "id": 10,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman
        }
    ],
    "Active": [
        {
            "id": 4,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": girl
        },
        {
            "id": 5,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": hacker
        },
        {
            "id": 6,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man1
        },
        {
            "id": 1,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": avatar

        },
        {
            "id": 2,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": boy
        },
        {
            "id": 3,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": gamer
        },
        {
            "id": 7,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man2
        },
        {
            "id": 8,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man
        },
        {
            "id": 9,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman1
        },
        {
            "id": 10,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman
        }
    ],
    "OnBoarding": [
        {
            "id": 7,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man2
        },
        {
            "id": 8,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man
        },
        {
            "id": 9,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman1
        },
        {
            "id": 10,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": woman
        },
        {
            "id": 1,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": avatar

        },
        {
            "id": 2,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": boy
        },
        {
            "id": 3,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": gamer
        },
        {
            "id": 4,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": girl
        },
        {
            "id": 5,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": hacker
        },
        {
            "id": 6,
            "name": "Cody Fisher",
            "leaveFrom": "18 Jan 2026",
            "leaveTill": "19 Jan 2026",
            "avatar": man1
        }
    ],
}


export default tabData;