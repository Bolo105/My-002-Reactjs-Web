
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsFillBuildingsFill, BsFillHouseGearFill } from 'react-icons/bs'
import { MdDesignServices, MdAutoFixHigh, MdArchitecture, MdFormatPaint } from 'react-icons/md'

export const about = [
    { title: "We Provide the Best Services Ever",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro doloribus obcaecati placeat natus iste odio est non earum?",
      cover: "../images1/about1.jpg"
    },
        ];

export const blog = [
            {
              id: 1,
              title: "The Fundamentals of Real Estate Construction: A Step-by-Step Guide",
              date: "Jan 12, 2018",
              author: "Jhon Travolta",
              desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
              cover: "../images1/blog/blog1.jpg",
            },
            {
              id: 2,
              title: "Sustainable Real Estate Construction: Green Buildings of the Future",
              date: "Feb 14, 2018",
              author: "Lebrom James",
              desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
              cover: "./images1/blog/blog2.jpg",
            },
            {
              id: 3,
              title: "The importance of safety in building construction",
              date: "Mar 21, 2018",
              author: "Al Pacino",
              desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
              cover: "./images1/blog/blog3.jpg",
            },
          ]
export const portfolio = [
    {
      id: 1,
      cover: "../images1/port/porta1.jpg",
      name: "Show",
      category: "Construction",
      title: "Building"
    },
    {
      id: 2,
      cover: "../images1/port/porta2.jpg",
      name: "Show",
      category: "Renovation",
      title: "Building"
    },
    {
      id: 3,
      cover: "../images1/port/porta3.jpg",
      name: "Show",
      category: "Fixing",
      title: "Building"
    },
    {
      id: 4,
      cover: "../images1/port/porta4.jpg",
      name: "Show",
      category: "Construction",
      title: "Building"
    },
    {
      id: 5,
      cover: "../images1/port/porta5.jpg",
      name: "Show",
      category: "Renovation",
      title: "Building"
    },
    {
      id: 6,
      cover: "../images1/port/porta6.jpg",
      name: "Show",
      category: "Fixing",
      title: "Building"
    }
  ];

  
   export const services = [
      {
        id: 1,
        icon: <BsFillBuildingsFill />,
        title: "Building Construction",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
      {
        id: 2,
        icon: <BsFillHouseGearFill  />,
        title: "House Renovation",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
      {
        id: 3,
        icon: <MdDesignServices  />,
        title: "Interior Design",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
      {
        id: 4,
        icon: <MdAutoFixHigh  />,
        title: "Fixing & Support",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
      {
        id: 5,
        icon: <MdArchitecture />,
        title: "Architecture Design",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
      {
        id: 6,
        icon: <MdFormatPaint />,
        title: "Painting",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
      },
    ];

   

export const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images1/testimonials/client1.png",
      name: "Jhon Smith",
      post: "Architect",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images1/testimonials/client2.png",
      name: "Jason Brown",
      post: "Contractor",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
      image: "./images1/testimonials/client3.png",
      name: "Melany Wright",
      post: "Civil Engineer",
    },
  ]
  export const contact = [
    {
      icon: <FaMapMarkerAlt />,
      text1: "2651 Main Street, Suit 124",
      text2: "Seattle, WA, 98101",
    },
    {
      icon: <FaPhone />,
      text1: "0123456789",
      text2: "0345627891",
    },
    {
      icon: <FaEnvelope />,
      text1: "hello@thetheme.io",
      text2: "inf0@brex-theme.io",
    },
  ]
  export const social = [
      { icon: <Facebook />},
      { icon: <Twitter />},
      { icon: <Instagram />},
      { icon: <YouTube />}
    ]
  