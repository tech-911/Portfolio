import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const location = <ImLocation className="text-[22px]" />;
const email = <MdEmail className="text-[22px]" />;
const phone = <MdPhone className="text-[22px]" />;

const contactInfoData = [
  [
    {
      type: "location",
      image: location,
      itemName: ["Country", "City", "Street"],
      itemValue: ["Nigeria", "Minna", "Opp. Mawo int."],
    },
  ],
  [
    {
      type: "email",
      image: email,
      itemName: ["Email", "Facebook", "Linkedin", "Github"],
      itemValue: [
        "babatundeolatunji74@gmail.com",
        "https://www.facebook.com/profile.php?id=100080934143818",
        "https://www.linkedin.com/in/babatunde-olatunji",
        "https://github.com/tech-911",
      ],
    },
  ],
  [
    {
      type: "contact",
      image: phone,
      itemName: ["Support Services", "Office", "Personal"],
      itemValue: ["08070753122", "09036861277", "09036861277"],
    },
  ],
];

export default contactInfoData;
