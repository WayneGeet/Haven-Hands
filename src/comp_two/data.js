import {FaHome} from "react-icons/fa";
import {MdOutlineElderly} from "react-icons/md"; 
import {FaWheelchair} from "react-icons/fa"; 
// Causes
import family from "./imagesHH/family_cause.jpg"
import old_c from "./imagesHH/old_cause.jpg";
import disabled_c from "./imagesHH/disabled_cause_1.jpg";
import kid_c from "./imagesHH/kid_cause.jpg";
import teen_c from "./imagesHH/teen_cause.jpg";

export const items = [
{
    title:"Street Kids",
    content:"It is estimated that there is an average of 250 000 street children Kenya. We are hoping to reduce that number by providing homes, food, shelter and education for those kids. Will you be part of this transformative action?",
    icon:<FaHome size={24} color="white"/>
},
{
    title:"Elderly Communities",
    content:"The elderly community makes up 6% of the Kenyan population. This number is set to increase but the resources are not available.",
    icon:<MdOutlineElderly size={24} color="white"/>
},
{
    title:"PWDs",
    content:"People living with disability have a challenge with accessing resources such as education, food and basic amenities. It is up to us to step in and secure a place for this community.",
    icon:<FaWheelchair size={24} color="white"/>
},
]

export const causes = [
    {
        title:"Providing financial help to disadvantaged families",
        content:"We are situate in an area where most families cannot afford the basic ammenities. Through our generous sponsors, we are ensuring that no family goes hungry.",
        image:family
    },
    {
        title:"Providing support to the elderly",
        content:"We offer help and support to the elderly in our communities. Through our weekly home visits, we can ensure that the elderly are not neglected.",
        image:old_c
    },
    {
        title:"Looking after people with disabilities",
        content:"It is part of our mission that no disabled person should feel neglected or not a member of the community. We provide brails, wheelchairs, earing aids and basic ammenities to ensure that PCWs are looked after.",
        image:disabled_c
    },
    {
        title:"Looking after neglected children",
        content:"There is a huge population of children who have been neglected by their parents and/or guardians. These kids have gone on to join gangs and started abusing drugs such as bhang and sniffing glue. At Haven Hands we believe that they still have a chance to get their lives together and be better individuals.",
        image:teen_c
    }
    
]