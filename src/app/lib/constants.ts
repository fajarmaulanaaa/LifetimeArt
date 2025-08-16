export const menuHeader = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "our-work",
    name: "Our work",
  },
  {
    id: "faqs",
    name: "FAQs",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const aboutUsPhotos = [
  { src: "/img/about-us/variant-1.png", alt: "Warm dining room" },
  { src: "/img/about-us/variant-2.png", alt: "Modern living room" },
  { src: "/img/about-us/variant-3.png", alt: "Cabin among trees" },
  { src: "/img/about-us/variant-4.png", alt: "Minimal kitchen" },
  { src: "/img/about-us/variant-5.png", alt: "Bright lounge area" },
];

export const aboutStats = [
  {
    value: "8",
    label: "Years experience",
    sub: "Delivering high-quality home projects consistently every year.",
  },
  {
    value: "26",
    label: "Projects completed",
    sub: "Over 25 successful projects delivered across households.",
  },
  {
    value: "30",
    label: "Skilled Tradespeople",
    sub: "Trusted partners across core trades to keep timelines on track.",
  },
  {
    value: "100%",
    label: "Client satisfaction",
    sub: "After-service and warranties included on selected services.",
  },
];

type Service = {
  key: string;
  title: string;
  desc: string;
  img: string;
  icon: string;
};

export const serviceData: Service[] = [
  {
    key: "kitchens",
    title: "Kitchens",
    desc: "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.",
    img: "/img/services/Kitchen.png",
    icon: "/img/services/kitchen.svg",
  },
  {
    key: "loft",
    title: "Loft Conversions",
    desc: "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
    img: "/img/services/Loft.png",
    icon: "/img/services/loft.svg",
  },
  {
    key: "bathrooms",
    title: "Bathrooms",
    desc: "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
    img: "/img/services/Bathroom.png",
    icon: "/img/services/bathroom.svg",
  },
  {
    key: "extensions",
    title: "Extensions",
    desc: "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
    img: "/img/services/Extension.png",
    icon: "/img/services/extension.svg",
  },
  {
    key: "restorations",
    title: "Restorations",
    desc: "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
    img: "/img/services/Restoration.png",
    icon: "/img/services/restoration.svg",
  },
  {
    key: "external",
    title: "External Works",
    desc: "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
    img: "/img/services/External.png",
    icon: "/img/services/external.svg",
  },
];

export type Testimonial = {
  name: string;
  role?: string;
  avatar: string;
  text: string;
  rating?: number;
};

export const testimonialsData: Testimonial[] = [
  {
    name: "Rachel Carter",
    role: "Homeowner",
    text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    avatar: "/img/avatar/rachel.png",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Homeowner",
    text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    avatar: "/img/avatar/emily.png",
    rating: 4,
  },
  {
    name: "Michael Carter",
    role: "External Work",
    text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    avatar: "/img/avatar/michael.png",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Homeowner",
    text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    avatar: "/img/avatar/emily.png",
    rating: 5,
  },
];

export type Work = {
  id: string;
  title: string;
  image: string;
  service: string;
  timeline: string;
  desc: string;
  review: string;
  creator: string;
  avatar: string;
};

export const ourWorkData: Work[] = [
  {
    id: "modern-kitchen",
    title: "Modern kitchen refit",
    image: "/img/work/kitchen.png",
    service: "Kitchen",
    timeline: "4 weeks",
    desc: "This kitchen transformation brought sleek, modern design and enhanced functionality to our client's home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
    review:
      "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
    creator: "Rachel Morgan",
    avatar: "/img/avatar/rachel.png",
  },
  {
    id: "garden-path",
    title: "External garden path build",
    image: "/img/work/garden.png",
    service: "External Works",
    timeline: "6 weeks",
    desc: "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
    review:
      "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
    creator: "Michael Turner",
    avatar: "/img/avatar/michael.png",
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom renovation",
    image: "/img/work/bathroom.png",
    service: "Bathroom",
    timeline: "4 weeks",
    desc: "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
    review:
      "LifetimeArt delivered a stunning bathroom that feels luxurious and practical. The finish is exceptional, and the process was smooth from start to finish.",
    creator: "Laura Davies",
    avatar: "/img/avatar/emily.png",
  },
];

export type Sosmed = {
  id: string;
  title: string;
  icon: string;
};
export const sosmed: Sosmed[] = [
  { id: "ig", title: "Instagram", icon: "/img/sosmed/ig.png" },
  { id: "tiktok", title: "Tiktok", icon: "/img/sosmed/tt.png" },
  { id: "x", title: "X", icon: "/img/sosmed/x.png" },
];

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};