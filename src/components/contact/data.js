import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";

const location = <ImLocation />;
const email = <MdEmail />;
const phone = <BsPhoneFill />;

const contactInfoData = [
  [
    {
      image: location,
      itemName: ["Country", "City", "Street"],
      itemValue: ["Nigeria", "Minna", "Opp. Mawo int."],
    },
  ],
  [
    {
      image: email,
      itemName: ["Email", "Facebook", "Linkedin"],
      itemValue: [
        "babatundeolatunjie9@gmail.com",
        "https://www.facebook.com/profile.php?id=100080934143818",
        "https://www.linkedin.com/in/babatunde-olatunji-6658b323a/",
      ],
    },
  ],
  [
    {
      image: phone,
      itemName: ["Support Services", "Office", "Personal"],
      itemValue: ["08070753122", "09036861277", "09036861277"],
    },
  ],
];

export default contactInfoData;
