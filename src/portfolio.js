/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Teja's Portfolio",
  description:
    "Data Scientist and ML Engineer, dedicated to crafting end-to-end products that make a lasting impact on society.",
  og: {
    title: "Teja Cherukuri Portfolio",
    // type: "website",
    // url: "http://abc.com/",
  },
};

//Home Page
const greeting = {
  title: "Teja Cherukuri",
  logo_name: "TejaCherukuri",
  // nickname: "",
  subTitle:
    "Data Scientist and ML Engineer, dedicated to crafting end-to-end products that make a lasting impact on society.",
  resumeLinkSinglePage:
    "https://drive.google.com/file/d/1FVyybvRprFYbipAr86-5bywQWwyQYAZ1/view?usp=sharing",
  resumeLink:
    "https://drive.google.com/file/d/1FVyybvRprFYbipAr86-5bywQWwyQYAZ1/view?usp=sharing",
  portfolio_repository:
    "https://github.com/tejacherukuri/tejacherukuri.github.io",
  githubProfile: "https://github.com/tejacherukuri",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/tejacherukuri",
  // linkedin: "https://linkedin.com/in/teja-krishna-cherukuri-319714135",
  // gmail: "tejakrishnacherukuri@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/tejacherukuri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/tejacherukuri",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tejakrishnacherukuri@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?hl=en&user=6S9WmqwAAAAJ",
    fontAwesomeIcon: "fa-book", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#4285F4", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/teja_cherukuri/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI, Machine Learning & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "HuggingFace Transformers",
          fontAwesomeClassname: "logos:hugging-face-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Built REST APIs in FastAPI, Spring Boot",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "skill-icons:flask-dark",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Teja_Cherukuri/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/tejacherukuri",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Georgia State University",
      subtitle: "M.S in Computer Science",
      logo_path: "gsu_small_logo.png",
      alt_name: "GSU",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have taken variety of courses related to Artificial Intelligence which correspond to Natural Language Processing, Advanced Machine Learning, Computer Vision, Deep Learning etc.",
        "⚡ Apart from this, I have also done research assistantship. I have worked on designing and developing multi-modal fusion techniques, attention mechanisms for solving various medical imaging problems. ",
      ],
      website_link: "https://www.gsu.edu/",
    },
    {
      title:
        "Vignan's Foundation for Science, Technology & Research University",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "vignan_logo.png",
      alt_name: "VU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit Scholarship which is given to top 10% of students in college. I have received award from respected director for best performance in academics.",
      ],
      website_link: "https://vignan.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/AJ4BA3CYKZ45",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Python for Everybody",
      subtitle: "- University of Michigan",
      logo_path: "python_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/MZM9GYUCYTA4",
      alt_name: "Python",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work and Volunteerships ",
  description:
    "Throughout my professional and academic journey, I have held diverse roles, including positions as a Research Assistant, Data Scientist, and Software Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "TReNDS Center",
          company_url: "https://trendscenter.org/",
          logo_path: "trends_small_logo.png",
          duration: "Sep 2023 - Present",
          location: "Atlanta, GA",
          description: [
            "Published 5 IEEE papers showcasing the impact of our research methods for advancing AI in Medicine.",
            "Developed and fine-tuned Multi-modal LLMs for medical image captioning, integrating images with diagnostic text, achieving a 13.4% higher BLEU4 over VisionGPT, with just 440M parameters, and reducing inference time to 1.6 sec per image.",
            "Designed various medical image classification models for diagnosing chronic diseases such as schizophrenia, diabetic retinopathy, breast cancer, and colon cancer using specific imaging modalities with 5%–7% lower false negatives.",
            "Experienced in implementing and scaling deep learning models using PyTorch, leveraging slurm job scheduling for high performance computing and and efficient resource utilization.",
            "Medical Vision Language Transformer: Pioneered a novel approach for resource-constrained environments, integrating Abstractor & Adaptor to enhance feature focus and fusion, achieving expert-level precision in medical image captioning.",
            "Multi-Modal Medical Transformer: Devised a vision-language model integrating retinal image features & clinical keywords, achieving a 13.5% improvement in BLEU-4 over GPT-2 for accurate diagnostic report generation.",
            "Guided Context Gating: Innovated a novel attention model to improve context learning in retinal images, boosting accuracy by 2.63% over advanced attention methods & 6.53% over Vision Transformer, enhancing retinopathy diagnosis.",
            "Spatial Sequence Attention Network: Formulated a unique attention mechanism to identify Schizophrenia specific regions in brain sMRI, improving diagnosis accuracy by 6.52% and clinical interpretability with neuroanatomical insights.",
            "Multi-Modal Imaging Genomics Transformer: Designed a fusion model combining genomics with sMRI & fMRI, bettering Schizophrenia diagnosis accuracy by 2.12% and revealing associated genetic markers.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer (Graduate Research Assistant)",
          company: "Georgia State University",
          company_url: "https://www.gsu.edu/",
          logo_path: "gsu_small_logo.png",
          duration: "Aug 2023 - Dec 2023",
          location: "Atlanta, GA",
          description: [
            "Designed and implemented a secure user management system for a fire spread simulation application, utilizing React.js and Spring Security with JWT and OAuth 2.0, following modern web security practices",
            "Deployed applications to AWS ECS using Docker containers, optimizing resource allocation and achieving a 20% reduction in deployment time. Managed efficient storage with AWS S3 and streamlined access permissions using AWS IAM policies.",
          ],
          color: "#9b1578",
        },
        {
          title: "Data Scientist",
          company: "Tata Consultancy Services Limited",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_small_logo1.png",
          duration: "Nov 2020 - Aug 2023",
          location: "Hyderabad, Telangana",
          description: [
            "Proposed and built the bank's first regression-based model for dynamic interest rate prediction on mortgage loans, increasing annual revenue by $180M–$230M through optimized pricing strategy.",
            "Performed large-scale data analysis on 400GB+ financial data using Python, SQL, and PySpark, uncovering key patterns that optimized banking operations.",
            "Replaced rule-based fraud detection with an XGBoost model, preventing $25M+ in annual losses.",
            "Increased credit card application completion rates by 80% through an A/B test, optimizing form length and adding a progress bar, leading to higher user engagement and conversion.",
            "Communicated analysis and modeling decisions to non-technical stakeholders through data visualization and PowerBI reports, providing actionable recommendations that enabled data-driven business decisions.",
            "Deployed real-time fraud detection model on AWS (SageMaker, Lambda, EC2), handling up to 10,000 trans/sec.",
          ],
          color: "#fc1f20",
        },
        // {
        //   title: "Software Engineer",
        //   company: "Tata Consultancy Services Limited",
        //   company_url: "https://www.tcs.com/",
        //   logo_path: "tcs_small_logo1.png",
        //   duration: "Nov 2020 - Apr 2021",
        //   location: "Hyderabad, Telangana",
        //   description: [
        //     "Designed & implemented REST APIs using Spring Boot, enhancing scalability and boosting API response times by 30%. Integrated React.js for a responsive UI, ensuring a user-friendly experience and reducing rendering latency by 20%.",
        //     "Transformed the corporate actions application from a monolithic to a microservices architecture in Java, resulting in $2 million in client savings and substantial improvements in functionality and efficiency.",
        //     "Auto Deployment: Increased application availability by migrating to a private cloud, while achieving a 50% budget optimization through automated build and deployment workflows with Git, Jenkins, Docker, and Kubernetes.",
        //     "Auto Scheduling: Developed Linux scripts for scheduled batch jobs, reducing manual intervention, resulting in a 30% decrease in operational costs and a 20% time savings.",
        //   ],
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Paper Reviewer",
          company: "",
          company_url: "",
          logo_path: "unknown_logo.png",
          duration: "Dec 2023 - Present",
          location: "Remote",
          description: [
            "IEEE Transactions in Medical Imaging (2023-Present): 2",
            "IEEE International Symposium on Biomedical Imaging 2025: 5",
            "MICCAI 2025: 3",
          ],
          color: "#4285F4",
        },
        {
          title: "Member",
          company: "Indian Student Organization (ISO)",
          company_url: "https://pin.gsu.edu/organization/iso",
          logo_path: "unknown_logo.png",
          duration: "Aug 2023 - Present",
          location: "Atlanta, GA",
          description: [
            "Helping new international students with the accomodation, food as they navigate their life in the country.",
            "Organizing cultural events to foster cross-cultural experiences between students from diverse countries.",
          ],
          color: "#4285F4",
        },
        {
          title: "NSS",
          company: "National Service Scheme",
          company_url: "https://nss.gov.in/",
          logo_path: "nss_logo.png",
          duration: "Aug 2018 - May 2020",
          location: "Guntur, Andhra Pradesh",
          description: [
            "Donated & distributed water, food, shelter supplies to the poor",
          ],
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Engaged in diverse projects across Machine Learning, Data Science, and Full-stack development. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [],
};

// Research Page
const researchSites = {
  researchSites: [
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#4285F4",
      },
      profileLink:
        "https://scholar.google.com/citations?user=6S9WmqwAAAAJ&hl=en",
    },
    {
      siteName: "ORCiD",
      iconifyClassname: "simple-icons:orcid",
      style: {
        color: "#A6CE39",
      },
      profileLink: "https://orcid.org/0000-0002-4952-728X",
    },
    {
      siteName: "Web of Science",
      iconifyClassname: "simple-icons:clarivate",
      style: {
        color: "#2A2A84",
      },
      profileLink:
        "https://www.webofscience.com/wos/author/record/KEJ-6069-2024",
    },
    {
      siteName: "Research Gate",
      iconifyClassname: "simple-icons:researchgate",
      style: {
        color: "#6F6F6F",
      },
      profileLink:
        "https://www.researchgate.net/profile/Teja-Krishna-Cherukuri",
    },
  ],
};

// Research Page
const research = {
  title: "Research",
  subtitle: "",
  description:
    "I am an active researcher in the field of Deep Learning, Computer Vision and NLP.  My research work mainly focusses on budiling computer aided diagnostic tools for medical imaging problems through multi-modal learning, novel attention mechanisms and the development of interpretable AI systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Conferences (5)",
      experiences: [
        {
          title:
            "Multi-modal Imaging Genomics Transformer: Attentive Integration of Imaging with Genomic Biomarkers for Schizophrenia Classification",
          company:
            "Proceedings of the IEEE International Symposium on Biomedical Imaging (ISBI), 2025",
          company_url:
            "https://signalprocessingsociety.org/blog/isbi-2025-2025-ieee-international-symposium-biomedical-imaging",
          logo_path: "unknown_logo.png",
          duration: "12/2024",
          location: "IEEE",
          full_detailed_link: "https://arxiv.org/abs/2407.19385",
          description: [
            "Schizophrenia (SZ) is a severe brain disorder marked by diverse cognitive impairments, abnormalities in brain structure, function, and genetic factors. Its complex symptoms and overlap with other psychiatric conditions challenge traditional diagnostic methods, necessitating advanced systems to improve precision. Existing research studies have mostly focused on imaging data, such as structural and functional MRI, for SZ diagnosis. There has been less focus on the integration of genomic features despite their potential in identifying heritable SZ traits. In this study, we introduce a Multi-modal Imaging Genomics Transformer (MIGTrans), that attentively integrates genomics with structural and functional imaging data to capture SZ-related neuroanatomical and connectome abnormalities. MIGTrans demonstrated improved SZ classification performance with an accuracy of 86.05% (+/- 0.02), offering clear interpretations and identifying significant genomic locations and brain morphological/connectivity patterns associated with SZ.",
          ],
          color: "#4285F4",
        },
        {
          title:
            "GCS-M3VLT: Guided Context Self-Attention based Multi-modal Medical Vision Language Transformer for Retinal Image Captioning",
          company:
            "Proceedings of the IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025",
          company_url: "https://2025.ieeeicassp.org/",
          logo_path: "unknown_logo.png",
          duration: "12/2024",
          location: "IEEE",
          full_detailed_link: "https://arxiv.org/abs/2412.17251",
          description: [
            "Retinal image analysis is crucial for diagnosing and treating eye diseases, yet generating accurate medical reports from images remains challenging due to variability in image quality and pathology, especially with limited labeled data. Previous Transformer-based models struggled to integrate visual and textual information under limited supervision. In response, we propose a novel vision-language model for retinal image captioning that combines visual and textual features through a guided context self-attention mechanism. This approach captures both intricate details and the global clinical context, even in data-scarce scenarios. Extensive experiments on the DeepEyeNet dataset demonstrate a 0.023 BLEU@4 improvement, along with significant qualitative advancements, highlighting the effectiveness of our model in generating comprehensive medical captions.",
          ],
          color: "#4285F4",
        },
        {
          title:
            "Guided Context Gating: Learning to leverage salient lesions in retinal fundus images",
          company:
            "IEEE International Conference on Image Processing (ICIP), 2024",
          company_url: "https://2024.ieeeicip.org/",
          logo_path: "unknown_logo.png",
          duration: "06/2024",
          location: "IEEE",
          full_detailed_link: "https://arxiv.org/abs/2406.13126",
          description: [
            "Effectively representing medical images, especially retinal images, presents a considerable challenge due to variations in appearance, size, and contextual information of pathological signs called lesions. Precise discrimination of these lesions is crucial for diagnosing vision-threatening issues such as diabetic retinopathy. While visual attention-based neural networks have been introduced to learn spatial context and channel correlations from retinal images, they often fall short in capturing localized lesion context. Addressing this limitation, we propose a novel attention mechanism called Guided Context Gating, an unique approach that integrates Context Formulation, Channel Correlation, and Guided Gating to learn global context, spatial correlations, and localized lesion context. Our qualitative evaluation against existing attention mechanisms emphasize the superiority of Guided Context Gating in terms of explainability. Notably, experiments on the Zenodo-DR-7 dataset reveal a substantial 2.63% accuracy boost over advanced attention mechanisms & an impressive 6.53% improvement over the state-of-the-art Vision Transformer for assessing the severity grade of retinopathy, even with imbalanced and limited training samples for each class.",
          ],
          color: "#4285F4",
        },
        {
          title:
            "M3T: Multi-Modal Medical Transformer to bridge Clinical Context with Visual Insights for Retinal Image Medical Description Generation",
          company:
            "IEEE International Conference on Image Processing (ICIP), 2024",
          company_url: "https://2024.ieeeicip.org/",
          logo_path: "unknown_logo.png",
          duration: "06/2024",
          location: "IEEE",
          full_detailed_link: "https://arxiv.org/abs/2406.13129",
          description: [
            "Automated retinal image medical description generation is crucial for streamlining medical diagnosis and treatment planning. Existing challenges include the reliance on learned retinal image representations, difficulties in handling multiple imaging modalities, and the lack of clinical context in visual representations. Addressing these issues, we propose the Multi-Modal Medical Transformer (M3T), a novel deep learning architecture that integrates visual representations with diagnostic keywords. Unlike previous studies focusing on specific aspects, our approach efficiently learns contextual information and semantics from both modalities, enabling the generation of precise and coherent medical descriptions for retinal images. Experimental studies on the DeepEyeNet dataset validate the success of M3T in meeting ophthalmologists' standards, demonstrating a substantial 13.5% improvement in BLEU@4 over the best-performing baseline model.",
          ],
          color: "#4285F4",
        },
        {
          title:
            "Spatial Sequence Attention Network for Schizophrenia Classification from Structural Brain MR Images",
          company:
            "IEEE International Symposium on Biomedical Imaging (ISBI), 2024",
          company_url: "https://biomedicalimaging.org/",
          logo_path: "unknown_logo.png",
          duration: "02/2024",
          location: "IEEE",
          full_detailed_link: "https://arxiv.org/abs/2406.12683",
          description: [
            "Schizophrenia is a debilitating, chronic mental disorder that significantly impacts an individual's cognitive abilities, behavior, and social interactions. It is characterized by subtle morphological changes in the brain, particularly in the gray matter. These changes are often imperceptible through manual observation, demanding an automated approach to diagnosis. This study introduces a deep learning methodology for the classification of individuals with Schizophrenia. We achieve this by implementing a diversified attention mechanism known as Spatial Sequence Attention (SSA) which is designed to extract and emphasize significant feature representations from structural MRI (sMRI). Initially, we employ the transfer learning paradigm by leveraging pre-trained DenseNet to extract initial feature maps from the final convolutional block which contains morphological alterations associated with Schizophrenia. These features are further processed by the proposed SSA to capture and emphasize intricate spatial interactions and relationships across volumes within the brain. Our experimental studies conducted on a clinical dataset have revealed that the proposed attention mechanism outperforms the existing Squeeze & Excitation Network for Schizophrenia classification.",
          ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Journals (7)",
      work: true,
      experiences: [
        {
          title:
            "MedTransNet: Advanced Gating Transformer Network For Medical Image Classification",
          company: "Machine Vision and Applications",
          company_url: "https://link.springer.com/journal/138",
          logo_path: "springer_small_logo.png",
          duration: "07/2024",
          location: "Springer Berlin Heidelberg",
          full_detailed_link:
            "https://link.springer.com/article/10.1007/s00138-024-01542-2",
          description: [
            "Accurate medical image classification poses a significant challenge in designing expert computer-aided diagnosis systems. While deep learning approaches have shown remarkable advancements over traditional techniques, addressing inter-class similarity and intra-class dissimilarity across medical imaging modalities remains challenging. This work introduces the advanced gating transformer network (MedTransNet), a deep learning model tailored for precise medical image classification. MedTransNet utilizes channel and multi-gate attention mechanisms, coupled with residual interconnections, to learn category-specific attention representations from diverse medical imaging modalities. Additionally, the use of gradient centralization during training helps in preventing overfitting and improving generalization, which is especially important in medical imaging applications where the availability of labeled data is often limited. Evaluation on benchmark datasets, including APTOS-2019, Figshare, and SARS-CoV-2, demonstrates effectiveness of the proposed MedTransNet across tasks such as diabetic retinopathy severity grading, multi-class brain tumor classification, and COVID-19 detection. Experimental results showcase MedTransNet achieving 85.68% accuracy for retinopathy grading, 98.37% for tumor classification, and 99.60% for COVID-19 detection, surpassing recent deep learning models. MedTransNet holds promise for significantly improving medical image classification accuracy.",
          ],
          color: "#0879bf",
        },
        {
          title:
            "Gated contextual transformer network for multi-modal retinal image clinical description generation",
          company: "Image and Vision Computing",
          company_url:
            "https://www.sciencedirect.com/journal/image-and-vision-computing",
          logo_path: "elsevier_logo.png",
          duration: "02/2024",
          location: "Elsevier B.V.",
          full_detailed_link:
            "https://www.sciencedirect.com/science/article/pii/S0262885624000490",
          description: [
            "Generating semantically meaningful and coherent clinical description for the diagnosis of retinal images has been a challenging task for both Computer Vision and Natural Language Processing domains. This is mainly due to the fact that the clinical descriptions generated by the language model are completely dependent on the type of retinal image representations learned by the vision model. This work investigates and proposes a unified approach to integrate multi-modal retinal image visual representations with corresponding clinical keyword embeddings which can aid the language model to learn the clinical semantics and generate lengthy, coherent clinical descriptions accurately. Our proposed approach, named the Gated Contextual Transformer Network, comprises two attention-based encoders that learn semantically discriminative attention-based representations from retinal images and clinical keywords, along with a Transformer Network for clinical description generation. The first encoder leverages a pre-trained Convolutional Neural Network (VGG19) and a Gated Contextual Attention module to learn discriminative attention-based representations from the multi-modal retinal images. The second encoder incorporates an Embedding layer and an Attention module to learn attention-based clinical keyword embeddings. The Transformer network consists of a fusion encoder that attentively integrates retinal image visual features with clinical keyword embeddings and a decoder that is responsible for generating semantically meaningful and coherent clinical descriptions. Our experimental studies on the benchmark DeepEyeNet dataset demonstrate that the proposed approach successfully generates clinical descriptions from multi-modal retinal images, meeting the standards of ophthalmologists. To support our claim, we provide qualitative and quantitative evaluations of the proposed approach. This includes reporting BLUE, CIDEr, and ROUGE scores for the predicted descriptions, as well as employing Visual Explanation for Clinical Description Generation.",
          ],
          color: "#0879bf",
        },
        {
          title:
            "Visual attention based composite dense neural network for facial expression recognition",
          company: "Journal of Ambient Intelligence and Humanized Computing",
          company_url: "https://link.springer.com/journal/12652",
          logo_path: "springer_small_logo.png",
          duration: "12/2023",
          location: "Springer Berlin Heidelberg",
          full_detailed_link:
            "https://link.springer.com/article/10.1007/s12652-022-03843-8",
          description: [
            "Facial Expression Recognition (FER) models have received special attention in the field of computer vision and provide the basis for many real-time applications. This article proposes a unique deep learning model called Visual Attention based Composite Dense Neural Network (VA-CDNN) for recognising expressions from facial images. We extract eye-pair, mouth, and normalized face regions from facial images using localized facial landmark points. Eye-pair and mouth regions provide local information, and normalized face provides comprehensive and holistic information about facial expression. All these cropped facial regions are passed through the pre-trained Xception deep ConvNet independently to obtain the most discriminating spatial representations from each of the regions. These representations serve as input to proposed Visual Attention block. Rather than giving equal importance to each feature in the spatial representation, attention weight is computed for each feature map to indicate the amount of attention to be paid. These attention based features obtained from all the three regions are then fused to obtain a compact and discriminatory representation that ultimately leads to better identification of facial expressions. A regularized dense neural network is trained on these visual attention based features to identify the type of facial expression. Efficacy and robustness of the attention based approach are proved based on the experimental studies on the benchmark JAFFE and CK+ datasets. Proposed VA-CDNN achieved a highest test accuracy of 97.67% and 97.46% on CK+ and JAFFE datasets respectively. Results obtained from the experimental studies reveal that the proposed method using attention based features is comparable to the recent best models with consistently improving performance regardless of the number of expressions being considered for recognition.",
          ],
          color: "#9b1578",
        },
        {
          title:
            "Hinge attention network: A joint model for diabetic retinopathy severity grading",
          company: "Applied Intelligence",
          company_url: "https://link.springer.com/journal/10489",
          logo_path: "springer_small_logo.png",
          duration: "10/2022",
          location: "Springer US",
          full_detailed_link:
            "https://link.springer.com/article/10.1007/s10489-021-03043-5",
          description: [
            "Diabetic Retinopathy is one of the prominent reasons for permanent blindness in working age, long term diabetic patients. With the prevalence in raise of diabetics, majority of the people are endangered to permanent vision loss. The advancements in medical imaging techniques enabled the research community to focus on developing automated and computerized systems for diagnosing retinopathy in early stages. But, it is a very complex challenge due to the presence of high intra-class variations and imbalanced data distribution for higher grades of severity. In recent years, various deep learning based models have been designed for automating the process of retinopathy severity classification. In this research work, we present a fascinating deep learning model with multiple attention stages called Hinge Attention Network (HA-Net). Proposed model consists of a pre-trained VGG16 base to extract initial spatial representation from retinal scan images, spatial attention autoencoder to learn lesion specific latent representations in spatial dimensions and a channel attention based hinge neural network to grab category based discriminative features in channel dimension and classify the severity grade of retinopathy. In addition to spatial and channel attention mechanism, we use Convolutional LSTM layer to prioritize highly important spatial maps before passing to hinge neural network. All these components of HA-Net, enabled it to make generalised and accurate predictions on unseen data. The effectiveness and acceptability of proposed model is proved by validating it using two benchmark datasets, Kaggle APTOS 2019 and ISBI IDRiD. Extensive experimental studies on these datasets reveal that, proposed HA-Net outstrip several existing models by achieving an accuracy of 85.54% on Kaggle APTOS, and an accuracy of 66.41% on IDRiD datasets.",
          ],
          color: "#fc1f20",
        },
        {
          title:
            "Multi-level attention network: application to brain tumor classification",
          company: "Signal, Image and Video Processing",
          company_url: "https://link.springer.com/journal/11760",
          logo_path: "springer_small_logo.png",
          duration: "04/2022",
          location: "Springer London",
          full_detailed_link:
            "https://link.springer.com/article/10.1007/s11760-021-02022-0",
          description: [
            "Brain tumor classification is one of the challenging tasks in the field of medical image analysis. Any faults occurred during brain tumor diagnosis process may result in reduced life span of humans. Automating the process of tumor diagnosis may reduce the number of human errors in diagnosis process. With the recent technological advancements, visual attention for medical image analysis tasks has been widely employed by research community in designing computer-aided diagnosis systems. In this work, we introduce a multi-level attention mechanism for the task of brain tumor recognition. The proposed multi-level attention network (MANet) includes both spatial and cross-channel attention which not only focuses on prioritizing tumor region, but also maintains cross-channel temporal dependencies present in semantic feature sequence obtained from Xception backbone. The performance of proposed approach is evaluated on Figshare and BraTS benchmark datasets. Our experimental studies reveal that, cross-channel attention block along with spatial attention generalizes better and leads to superior performance with fewer model parameters. Our proposed MANet achieved a highest accuracy of 96.51% on Figshare and 94.91% on BraTS’2018 datasets and outperformed several existing models for the tumor recognition task.",
          ],
          color: "#fc1f20",
        },
        {
          title:
            "Transfer learning based novel ensemble classifier for COVID-19 detection from chest CT-scans",
          company: "Computers in Biology and Medicine",
          company_url:
            "https://www.sciencedirect.com/journal/computers-in-biology-and-medicine",
          logo_path: "elsevier_logo.png",
          duration: "02/2022",
          location: "Elsevier Pergamon",
          full_detailed_link:
            "https://www.sciencedirect.com/science/article/pii/S0010482521009215",
          description: [
            "Coronavirus Disease 2019 (COVID-19) is a deadly infection that affects the respiratory organs in humans as well as animals. By 2020, this disease turned out to be a pandemic affecting millions of individuals across the globe. Conducting rapid tests for a large number of suspects preventing the spread of the virus has become a challenge. In the recent past, several deep learning based approaches have been developed for automating the process of detecting COVID-19 infection from Lung Computerized Tomography (CT) scan images. However, most of them rely on a single model prediction for the final decision which may or may not be accurate. In this paper, we propose a novel ensemble approach that aggregates the strength of multiple deep neural network architectures before arriving at the final decision. We use various pre-trained models such as VGG16, VGG19, InceptionV3, ResNet50, ResNet50V2, InceptionResNetV2, Xception, and MobileNet and fine-tune them using Lung CT Scan images. All these trained models are further used to create a strong ensemble classifier that makes the final prediction. Our experiments exhibit that the proposed ensemble approach is superior to existing ensemble approaches and set state-of-the-art results for detecting COVID-19 infection from lung CT scan images.",
          ],
          color: "#fc1f20",
        },
        {
          title:
            "Lesion-aware attention with neural support vector machine for retinopathy diagnosis",
          company: "Machine Vision and Applications",
          company_url: "https://link.springer.com/journal/138",
          logo_path: "springer_small_logo.png",
          duration: "11/2021",
          location: "Springer Berlin Heidelberg",
          full_detailed_link:
            "https://link.springer.com/article/10.1007/s00138-021-01253-y",
          description: [
            "Diabetic retinopathy (DR) is a severe eye disease which can lead to permanent blindness. Identifying DR in early stages by using computer-aided diagnosis (CAD) systems can help the ophthalmologists to give proper treatment rationally, there by preventing many people from going blind. Due to intra-class variations and imbalanced data distribution, it is highly difficult to design a CAD system for DR severity diagnosis with greater generalizability. In this article, we propose a multi-stage deep learning pipeline, lesion-aware attention with neural support vector machine, for diabetic retinopathy diagnosis. Proposed pipeline consists of a pre-trained convolution base for learning retinal image spatial representations, lesion-aware attention for weighting lesion specific features, convolution autoencoder for learning latent attention representations and a neural support vector machine for discrimination. Convolutional autoencoder and neural support vector machine are jointly trained in end-to-end fashion to obtain category based lesion specific latent attention features by complementing each other in re-constructor and discriminator paths. Proposed approach is validated using two benchmark retinal scan image datasets, Kaggle APTOS 2019 and ISBI 2018 IDRiD, for DR type and severity grade classification tasks. Our experimental studies expose that using lesion-aware attention along with the joint training of autoencoder and neural support vector machine boosted the performance of models used for DR diagnosis, thereby outperforming existing works presented in the literature for DR severity grading. Proposed model achieved the highest accuracy of 90.45%, 84.31% on APTOS dataset and an accuracy of 79.85%, 63.24% on IDRiD dataset for DR type and severity grade classification tasks, respectively.",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Under Review (2)",
      experiences: [
        {
          title:
            "MedVLT: Focus & Fusion in Vision Language Transformer Yield Expert Precision in Medical Image Captioning",
          company:
            "Proceedings of the 28th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2025",
          company_url: "",
          logo_path: "unknown_logo.png",
          duration: "Intented for Submission",
          location: "",
          description: [""],
          color: "#4285F4",
        },
        {
          title:
            "Dynamic Contextual Attention Network: Transforming Spatial Representations into Adaptive Insights for Endoscopic Polyp Diagnosis",
          company:
            "Proceedings of the 28th International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2025",
          company_url: "",
          logo_path: "unknown_logo.png",
          duration: "Intended for Submission",
          location: "",
          description: [
            "Colorectal polyps are key indicators for early detection of colorectal cancer. However, traditional endoscopic imaging often struggles with accurate polyp localization and lacks comprehensive contextual awareness, which can limit the explainability of diagnoses. To address these issues, we propose the Dynamic Contextual Attention Network (DCAN). This novel approach transforms spatial representations into adaptive contextual insights, using an attention mechanism that enhances focus on critical polyp regions without explicit localization modules. By integrating contextual awareness into the classification process, DCAN improves decision interpretability and overall diagnostic performance. This advancement in imaging could lead to more reliable colorectal cancer detection, enabling better patient outcomes.",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "teja.png",
    description:
      "I am available on Email, LinkedIn and Instagram. You can message me, I will reply within 24 hours. I can help you with ML, AI, Research and Full-stack Development.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "478 Lindbergh Pl NE, Atlanta, GA-30324, US",
    locality: "Atlanta",
    country: "US",
    region: "Georgia",
    postalCode: "30324",
    streetAddress: "478 Lindbergh Pl NE",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/PAUaqHH6bqfL9P6h9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  researchSites,
  research,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
