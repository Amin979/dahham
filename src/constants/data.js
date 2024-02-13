import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "contact us",
        text: "be in a touch , und write  us"
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Prices",
        text: "have a look for the best prices"
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Branding",
        text: "Leverage over 40 years of expertise as we guide you seamlessly towards success."
    },
    {
        id: 4,
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Content Creation",
        text: "Discover quality and reliability in every replacement part."
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "Design",
        text: "Design your own piece"
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "Buy by us",
        text: "you want to be our client?, so click here"
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "We can plan together."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "We make the plan real ."
    }
];

const features = [
    {
        id: 10,
        title: "contact us",
        text: "For inquiries, our main location is in Aleppo, Al Malab Al Baldi, Dahham. Feel free to reach us via email at: dahhamcomp@gmail.com."
    },
    {
        id: 11,
        title: "Prices",
        text: "We provide competitive prices that vary depending on the product and quantity. Our offerings extend beyond appliances, encompassing a diverse range of spare parts. Serving not only Syria but the entire Middle East, we ensure tailored pricing solutions to meet your specific needs."
    },
 /*   {
        id: 12,
        title: "Branding",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
    {
        id: 13,
        title: "Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },*/
    {
        id: 14,
        title: "Design",
        text: "we specialize in crafting replacement parts for washing machines and similar appliances. Furthermore, we take pride in our ability to design and manufacture custom components, tailored to the specific preferences and requirements of our valued customers.\"\n" +
            "\n" +
            "Feel free to adjust it according to your preferences!"
    },
    {
        id: 15,
        title: "Online Buying",
        text: "For any inquiries or requests, feel free to utilize our contact form. Whether you have questions or wish to place an order, our contact form is the convenient way to get in touch and provide the necessary information."}
];

const portfolio = [
    {
        id: 16,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+4917621496297",
        text: "Call us"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "dahhamcomp@gmail.com",
        text: "Send us an email"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Syria, Al Malab Albaldi",
        text: "Come for a visit!"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;