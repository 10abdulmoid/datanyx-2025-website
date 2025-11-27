export type DatasetIdea = {
  id: string;
  publicTitle: string;
  private: {
    title: string;
    description: string;
    details: string;
    tags: string[];
    password: string;
    downloadLink: string;
  };
};

export const DATASETS: Record<string, DatasetIdea[]> = {
  medtech: [
    {
      id: "med-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "AI for Early Cancer Detection",
        description: "Develop a machine learning model to detect early signs of cancer from medical imaging data, improving survival rates through timely intervention.",
        details: "This dataset contains thousands of high-resolution MRI and CT scan images, labeled with verified diagnoses. The goal is to build a model that can identify anomalies with high sensitivity.",
        tags: ["AI", "Healthcare", "Imaging"],
        password: "med-1-pass",
        downloadLink: "#", // Replace with Google Drive Direct Link
      },
    },
    {
      id: "med-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Remote Patient Monitoring System",
        description: "Create a system for analyzing real-time vitals from wearable devices to alert doctors of potential health risks.",
        details: "Includes time-series data of heart rate, blood pressure, and oxygen levels from various wearable devices.",
        tags: ["IoT", "Wearables", "Real-time"],
        password: "med-2-pass",
        downloadLink: "#",
      },
    },
    {
      id: "med-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Drug Discovery Optimization",
        description: "Use deep learning to predict molecular interactions and accelerate the discovery of new potential drug candidates.",
        details: "A dataset of molecular structures and their known binding affinities to various protein targets.",
        tags: ["Deep Learning", "Pharma", "Chemistry"],
        password: "med-3-pass",
        downloadLink: "#",
      },
    },
    {
      id: "med-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Personalized Treatment Plans",
        description: "Analyze patient genetic and historical data to recommend personalized treatment pathways.",
        details: "Anonymized patient records including genetic markers, past treatments, and outcomes.",
        tags: ["Genomics", "Data Science", "Personalization"],
        password: "med-4-pass",
        downloadLink: "#",
      },
    },
    {
      id: "med-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Hospital Resource Allocation",
        description: "Predict patient inflow and optimize the allocation of beds, staff, and equipment in emergency rooms.",
        details: "Historical hospital admission data, including timestamps, severity of cases, and resource usage.",
        tags: ["Operations", "Predictive Analytics", "Management"],
        password: "med-5-pass",
        downloadLink: "#",
      },
    },
  ],
  fintech: [
    {
      id: "fin-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Fraud Detection in Transactions",
        description: "Build a real-time fraud detection system to identify suspicious financial transactions.",
        details: "A large dataset of credit card transactions, labeled as fraudulent or legitimate.",
        tags: ["Fraud", "Security", "Finance"],
        password: "fin-1-pass",
        downloadLink: "#",
      },
    },
    {
      id: "fin-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Algorithmic Trading Bot",
        description: "Develop a trading bot that uses historical market data to execute profitable trades automatically.",
        details: "Historical stock market data including open, high, low, close prices and volume.",
        tags: ["Trading", "Algo", "Stocks"],
        password: "fin-2-pass",
        downloadLink: "#",
      },
    },
    {
      id: "fin-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Credit Risk Assessment",
        description: "Create a model to predict the likelihood of a borrower defaulting on a loan.",
        details: "Loan application data including applicant demographics, credit history, and loan status.",
        tags: ["Risk", "Credit", "Banking"],
        password: "fin-3-pass",
        downloadLink: "#",
      },
    },
    {
      id: "fin-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Personal Finance Assistant",
        description: "An AI-powered assistant that categorizes expenses and provides budgeting advice.",
        details: "Anonymized bank statement data with transaction descriptions and amounts.",
        tags: ["Personal Finance", "NLP", "Budgeting"],
        password: "fin-4-pass",
        downloadLink: "#",
      },
    },
    {
      id: "fin-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Crypto Market Sentiment Analysis",
        description: "Analyze social media and news sentiment to predict cryptocurrency price movements.",
        details: "Dataset of tweets, news headlines, and corresponding crypto price changes.",
        tags: ["Crypto", "Sentiment", "NLP"],
        password: "fin-5-pass",
        downloadLink: "#",
      },
    },
  ],
  agrotech: [
    {
      id: "agro-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Crop Disease Identification",
        description: "Use computer vision to identify diseases in crops from images of leaves.",
        details: "A collection of images of healthy and diseased plant leaves.",
        tags: ["Computer Vision", "Agriculture", "Disease"],
        password: "agro-1-pass",
        downloadLink: "#",
      },
    },
    {
      id: "agro-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Smart Irrigation System",
        description: "Optimize water usage by predicting soil moisture levels based on weather data.",
        details: "Soil moisture sensor data combined with local weather station data.",
        tags: ["IoT", "Water", "Sustainability"],
        password: "agro-2-pass",
        downloadLink: "#",
      },
    },
    {
      id: "agro-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Yield Prediction",
        description: "Predict crop yields based on soil quality, weather patterns, and farming practices.",
        details: "Historical crop yield data along with environmental factors.",
        tags: ["Prediction", "Data Science", "Farming"],
        password: "agro-3-pass",
        downloadLink: "#",
      },
    },
    {
      id: "agro-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Supply Chain Optimization",
        description: "Reduce food waste by optimizing the supply chain from farm to table.",
        details: "Logistics data tracking produce movement, storage conditions, and spoilage rates.",
        tags: ["Logistics", "Supply Chain", "Optimization"],
        password: "agro-4-pass",
        downloadLink: "#",
      },
    },
    {
      id: "agro-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Precision Farming",
        description: "Analyze satellite imagery to provide actionable insights for precision farming.",
        details: "Satellite images and corresponding ground truth data for various crop types.",
        tags: ["Satellite", "Imaging", "Precision"],
        password: "agro-5-pass",
        downloadLink: "#",
      },
    },
  ],
  edtech: [
    {
      id: "ed-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Personalized Learning Paths",
        description: "Create an adaptive learning system that tailors content to student performance.",
        details: "Student performance data on various quizzes and assignments.",
        tags: ["Education", "Adaptive", "AI"],
        password: "ed-1-pass",
        downloadLink: "#",
      },
    },
    {
      id: "ed-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Automated Essay Grading",
        description: "Build an NLP model to automatically grade and provide feedback on student essays.",
        details: "A dataset of student essays with human-assigned grades and feedback.",
        tags: ["NLP", "Grading", "Automation"],
        password: "ed-2-pass",
        downloadLink: "#",
      },
    },
    {
      id: "ed-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Student Engagement Analysis",
        description: "Analyze video meeting data to measure and improve student engagement in online classes.",
        details: "Anonymized data from online classroom sessions, including participation metrics.",
        tags: ["Engagement", "Analytics", "Online Learning"],
        password: "ed-3-pass",
        downloadLink: "#",
      },
    },
    {
      id: "ed-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Course Recommendation Engine",
        description: "Recommend courses to students based on their interests and career goals.",
        details: "Student profiles, course catalogs, and enrollment history.",
        tags: ["Recommendation", "Career", "Education"],
        password: "ed-4-pass",
        downloadLink: "#",
      },
    },
    {
      id: "ed-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Virtual Tutor Chatbot",
        description: "Develop a chatbot that can answer student questions and explain concepts.",
        details: "A dataset of common student questions and expert answers in various subjects.",
        tags: ["Chatbot", "NLP", "Tutoring"],
        password: "ed-5-pass",
        downloadLink: "#",
      },
    },
  ],
};
