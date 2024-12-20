import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `A driven software developer with a strong foundation in computer science and a passion for creating impactful, user-centric solutions. Adept at designing scalable, secure, and efficient systems through academic projects and self-initiated endeavors. A competitive programming enthusiast with a Codeforces rating of 1600+, demonstrating exceptional problem-solving skills and analytical thinking. Committed to continuous learning and innovation, with a goal to contribute to cutting-edge technologies and deliver meaningful results.`;

export const ABOUT_TEXT = `Hi, I’m Akshiti Agarwal—a curious mind who loves creating impactful solutions, one line of code at a time. 💡 Whether it’s developing an AI-powered voting system using a unique BlockTree architecture for unmatched security 🔐 and efficiency ⚡ or experimenting with deep learning 🧠 to build tools like image captioning 🖼️ and text summarization models, I believe technology is about making lives better and simpler. 🌟

I’m equally passionate about the 'how' ⚙️ as I am about the 'what'. 🎯 I enjoy digging deep into AI 🤖, DevOps tools like Kubernetes 🛠️ and Jenkins 🔧, and cloud platforms like AWS ☁️ & Azure ☁️, crafting solutions that are scalable, creative, and meaningful. But what really drives me is solving problems 🧩—be it optimizing code, leading a team during my time at Here Technologies 🚀, or coming up with new ways to automate processes. I have a knack for problem-solving, backed by a Codeforces rating of 1600+, which reflects my analytical thinking and competitive programming skills.

When I’m not wrapped up in a coding puzzle 🧑‍💻, you’ll probably find me embracing my artistic side 🎨. I express myself through Kathak 🩰—the rhythm, discipline, and storytelling it demands mirror the qualities I value in my work. 🎶 Music 🎵 is my constant companion, and as a nature lover 🌳, I find my best ideas brewing on long walks 🚶‍♀️ or while watching a beautiful sunset 🌅.

I believe the best work comes when you blend passion ❤️, creativity ✨, and purpose 🏆. I’m here to explore, learn, and innovate 💻—always with a sense of curiosity 🧐 and a dash of personality. 😊

Let’s connect and create something beautiful—whether it’s with code, ideas, or stories waiting to be told! ✨🌍
`;

export const EXPERIENCES = [
  {
    year: "06/2024 - 07/2024",
    role: "Project Intern",
    company: "Here Technologies",
    description: `Collaborated on the Global Automated Web Scraping and Spider Project, gaining a hands-on experience in web
scraping, data management, and automation, utilized Python libraries like Scrapy, tackled challenges related to
dynamic content and data extraction efficiency.`,
  },
  {
    year: "06/2022 - 07/2022",
    role: "Social Intern",
    company: "Our Voix",
    description: `Spearheaded campaigns, reaching over 1,000 participants, to elevate awareness and educate on preventing child sexual harassment and cyberbullying, achieving a 40% increase in community engagement.`,
  },
];

export const PROJECTS = [
  {
    title: "SecureCast",
    image: project1,
    description:
      "A secure and transparent voting system built on a unique block-tree architecture with multi-factor authentication using OTP and facial recognition.",
    technologies: ["Java","Python","Rust", "RetinaFace","Microservices Architecture", "Multi-factor authentication (OTP, Facial Recognition)", "Block-tree architecture","GDPR"],
  },
  {
    title: "Image Captioning Model",
    image: project2,
    description:
      "Designed a tool to generate descriptive captions for images using CNNs for analysis and LSTM for text generation.",
    technologies: ["Python","TensorFlow", "Keras", "CNN", "LSTM", "Advanced NLP Pipelines", "PyTest", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Text Summarizer and Paraphraser",
    image: project3,
    description:
      "Developed a text summarizer and paraphrasing model leveraging abstractive summarization to simplify reading.",
    technologies: ["Python", "Javascript", "ReactJS", "FastAPI","BART Transformer Model", "NLP", "MongoDB", "ExpressJS"],
  },
];

export const CONTACT = {
  phoneNo : "+91 7678441413" ,
  email: "akshitiagarwal@gmail.com",
  // linkedin: "https://www.linkedin.com/in/akshiti-agarwal-996b63261/", 
};
