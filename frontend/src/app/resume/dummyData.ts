import { Resume } from "@/types";

const dummyData: Resume = {
  id: "1",
  title: "Software Engineer Resume",
  userId: "1",
  sections: [
    {
      id: "personal-info",
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        city: "Anytown",
        state: "CA",
        country: "USA",
        title: "Software Engineer",
        summary:
          "A brief summary of your professional background and career goals",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/john-doe"
          },
          {
            platform: "GitHub",
            url: "https://www.github.com/john-doe"
          },
          {
            platform: "Personal Website",
            url: "https://www.john-doe.com"
          }
        ]
      },
      order: 1
    },
    {
      id: "education",
      data: [
        {
          id: "1",
          degree: "Bachelor of Science",
          institution: "University of Anytown",
          location: "Anytown, CA",
          graduationYear: 2024,
          gpa: 3.8
        }
      ],
      order: 2
    },
    {
      id: "experience",
      data: [
        {
          id: "1",
          position: "Software Engineer",
          company: "Anytown Tech Solutions",
          location: "Anytown, CA",
          startDate: "2020-01-01",
          endDate: "2024-01-01",
          current: false,
          description: [
            "Developed and maintained web applications using React and Node.js",
            "Collaborated with team members to design and implement new features",
            "Optimized application performance and scalability"
          ]
        },
        {
          id: "2",
          position: "Software Engineer",
          company: "Anytown Tech Solutions",
          location: "Anytown, CA",
          startDate: "2020-01-01",
          endDate: "2024-01-01",
          current: false,
          description: [
            "Developed and maintained web applications using React and Node.js",
            "Collaborated with team members to design and implement new features",
            "Optimized application performance and scalability"
          ]
        }
      ],
      order: 3
    },
    {
      id: "skills",
      data: [
        {
          id: "1",
          name: "React",
          level: "expert"
        },
        {
          id: "2",
          name: "Node.js",
          level: "expert"
        },
        {
          id: "3",
          name: "Express",
          level: "expert"
        }
      ],
      order: 4
    },
    {
      id: "projects",
      data: [
        {
          id: "1",
          title: "Anytown Tech Solutions",
          description:
            "Developed and maintained web applications using React and Node.js",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
          link: "https://www.anytowntechsolutions.com"
        },
        {
          id: "2",
          title: "Anytown Tech Solutions",
          description:
            "Developed and maintained web applications using React and Node.js",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
          link: "https://www.anytowntechsolutions.com"
        }
      ],
      order: 5
    },
    {
      id: "randomTitle",
      data: [
        {
          subtitleLeft: "subtitleLeft",
          subtitleRight: "subtitleRight",
          description: ["description1", "description2", "description3"]
        }
      ],
      order: 6
    }
  ],
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
  isPublic: true
};

export default dummyData;
