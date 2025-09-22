import { Cloud, Shield, Database, Code, Mail, Linkedin } from "lucide-react";

const mockData = {
  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    name: "Saurabh Pandey",
    tagline: "GCP Certified Cloud Architect & Senior Privacy Engineer with 17+ years of expertise in big data technologies, privacy governance, and scalable cloud solutions.",
    highlights: [
      "GCP Certified",
      "Privacy Engineering",
      "Big Data Specialist",
      "Cloud Architecture",
      "17+ Years Experience"
    ]
  },

  about: {
    description: "As a seasoned technology leader, I specialize in architecting privacy-centric applications on Google Cloud Platform and implementing robust data governance solutions. My expertise spans across big data technologies like Hadoop, Spark, and Python, with a strong focus on privacy regulations including GDPR and CCPA compliance. I've successfully led cross-functional teams to deliver scalable solutions that meet business needs while maintaining the highest privacy standards.",
    location: "Greater Phoenix Area",
    experience: "17+ Years in IT",
    currentRole: "Senior Privacy Engineer at American Express"
  },

  skills: [
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5 text-gray-400" />,
      items: ["Google Cloud Platform", "Cloud Spanner", "BigQuery", "Cloud Dataflow", "GCP Services"]
    },
    {
      category: "Privacy & Security",
      icon: <Shield className="w-5 h-5 text-gray-400" />,
      items: ["GDPR Compliance", "CCPA", "BigID", "OneTrust", "Privacy by Design", "Data Governance"]
    },
    {
      category: "Big Data & Analytics",
      icon: <Database className="w-5 h-5 text-gray-400" />,
      items: ["Hadoop", "Apache Spark", "PySpark", "HDFS", "Hive", "Data Pipelines"]
    },
    {
      category: "Programming & Tools",
      icon: <Code className="w-5 h-5 text-gray-400" />,
      items: ["Python", "Spark RDD", "Shell Scripting", "SQL", "Data Analytics", "ETL"]
    }
  ],

  experience: [
    {
      title: "Senior Privacy Engineer",
      company: "American Express",
      duration: "June 2023 - Present",
      description: "Architect and develop privacy-centric applications on Google Cloud Platform, implementing data privacy and security best practices while ensuring GDPR and CCPA compliance. Lead technical initiatives for marketing privacy consent management using GCP services like Cloud Spanner, BigQuery, and Dataflow."
    },
    {
      title: "Senior System Engineer",
      company: "First Republic Bank",
      duration: "September 2022 - June 2023",
      description: "Created solution design documents and implemented secure designs for business requirements. Performed impact analysis, coordinated with cross-functional teams, and implemented data governance and privacy tools to ensure regulatory compliance."
    },
    {
      title: "Lead Technical Consultant",
      company: "Infosys (Amex Account)",
      duration: "October 2019 - September 2022",
      description: "Provided architectural solutions for strategic initiatives across the organization, designed privacy rule engines using big data technologies, and developed privacy products that improved compliance and reduced time to market."
    },
    {
      title: "Technology Lead",
      company: "Infosys",
      duration: "2014 - October 2019",
      description: "Led requirement analysis, solution design, and development phases of enterprise applications. Implemented Agile practices, performed code reviews, and ensured optimal performance through strategic architecture decisions."
    }
  ],

  projects: [
    {
      title: "Global Privacy Data Discovery & Eligibility Tool",
      description: "Developed comprehensive data discovery process (DTEC) that integrates with all card issuance platforms to identify missing entity data in privacy applications. Built privacy eligibility tool that re-evaluates missing entity data through triggers, determines final privacy preferences, and updates HDFS database for marketing team consumption.",
      technologies: ["Python", "Spark", "HDFS", "BigQuery", "GCP", "Data Pipelines"]
    },
    {
      title: "Global Privacy Rule Engine Migration",
      description: "Led migration of legacy privacy rule engine to modern big data platform. Developed configurable privacy rule engine using Spark RDD/DataFrame and Hive tables to process high-volume data and determine privacy rules based on worldwide privacy regulations. This centralized solution became a cornerstone in avoiding compliance issues from incorrect privacy handling.",
      technologies: ["Apache Spark", "Hive", "RDD/DataFrame", "Big Data", "Privacy Compliance", "Legacy Migration"]
    }
  ],

  contact: [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "saurabh.pandeyy@gmail.com",
      href: "mailto:saurabh.pandeyy@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "www.linkedin.com/in/saurabhpandeyy",
      href: "https://www.linkedin.com/in/saurabhpandeyy"
    }
  ]
};

export default mockData;