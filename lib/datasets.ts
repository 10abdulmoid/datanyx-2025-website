export type DatasetIdea = {
  id: string;
  publicTitle: string;
  private: {
    title: string;
    description: string;
    details: string;
    targetAudience: string[];
    tags: string[];
    passwords: string[];
    downloadLink: string;
  };
};

export const DATASETS: Record<string, DatasetIdea[]> = {
  medtech: [
    {
      id: "med-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Digital Support System for Para-Athletes",
        description: "Ravi Pal, a para-athlete who won gold and bronze medals for the country, recently shared that despite bringing international glory to India, he was forced to leave his home stadium because it lacked even the basic training support and facilities (News Reference). He isn't an exception; almost every para-athlete faces the similar systemic struggles; training without personalized guidance, living without structured nutrition or hydration plans, and having no tools to monitor fatigue, recovery, or injury risk. Slowly, these invisible gaps drain their stamina, increase overuse injuries, delay performance peaks, and dim the potential that deserved better care from the very beginning.",
        details: "Act as a Medical Data Scientist, your task is to design a website or mobile app that quietly supports para-athletes in understanding their daily physical patterns. A system that solves their stamina weakens, routines imbalance, sweating patterns shifts and hydration dipping pointing toward strain, long before they become visible. By observing their pattern and highlighting where their body might need attention, such a companion would close the silent gaps that make their journey harder and more vulnerable allowing them to focus fully on growth, consistency, and their long-term goals.",
        targetAudience: ["Independent para-athletes and their support teams", "Sports Authority of India (SAI)", "Sports nutritionists supporting para-athlete diets"],
        tags: ["AI", "Healthcare", "Imaging"],
        passwords: ["12847", "59362", "83741"],
        downloadLink: "#",
      },
    },
    {
      id: "med-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Early Detection System for Chronic Kidney Disease",
        description: "Based on a recent NDTV Health report, India now has 138 million people living with Chronic Kidney Disease (CKD), the second-highest burden worldwide (News Reference). CKD is not only widespread but growing rapidly, affecting people across urban and rural areas, cutting across age and gender. A new Lancet study led by the University of Glasgow further warns that CKD has become the 9th leading cause of death globally, emphasizing that kidney failure is a \"silent epidemic\" that progresses quietly for years before being detected. The scale of the disease, combined with limited awareness and underdiagnosis, makes it a significant public health challenge that demands innovative solutions.",
        details: "Act as a Renal Data Scientist to design a website or mobile app for users to gain insight into how subtle changes in their routine health indicators may influence overall kidney function. The challenge is not only the scale of the disease, but the invisibility of early decline, creatinine may rise slowly, eGFR may drop unnoticed, hydration routines may fluctuate, blood pressure may remain uncontrolled, and proteinuria or lifestyle indicators may worsen without triggering timely clinical attention. Most patients only receive a diagnosis when kidney damage has already advanced to an irreversible stage. The platform should help users observe patterns over time, understand emerging trends, and make informed daily choices so they feel guided, aware, and empowered, while quietly supporting them in anticipating changes before they become serious.",
        targetAudience: ["Nephrologists and renal-care physicians", "Dialysis centers and CKD outpatient departments", "Multi-speciality hospitals managing long-term chronic patients"],
        tags: ["IoT", "Wearables", "Real-time"],
        passwords: ["26593", "74128", "91456"],
        downloadLink: "#",
      },
    },
    {
      id: "med-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "AI-Driven Prediction of Drug-Induced Liver Injury",
        description: "According to a Study of Liver Diseases, Drug-Induced Liver Injury (DILI) is now a leading cause of acute liver failure with mortality rates between 10% and 50%, and what makes it alarming is that it isn't limited to high-risk drugs: ordinary painkillers, OTC medicines, herbal supplements, and dietary products can all trigger toxic liver reactions (News Reference). These dangers often stay hidden because clinical trials, conducted on only a few thousand participants, simply cannot detect rare hepatotoxic reactions that occur in one in thousand or one in lakh people; such side effects emerge only after millions begin using the drug. By the time early symptoms like fatigue or nausea are recognized as toxicity, intervention may already be delayed, showing how modern medicine can treat disease but still struggle to catch silent, slow-building adverse reactions in time.",
        details: "Act as a Biomedical Data Scientist, responsible for designing an intelligent risk-prediction system that identifies toxic drug reaction patterns early - before they evolve into clinical emergencies. Your task is to build a model capable of learning from biochemical markers, patient factors, clinical histories, and drug ingredient interactions, helping clinicians to detect hepatotoxicity sooner, adjust treatment safely, and prevent avoidable cases of severe liver injury.",
        targetAudience: ["Drug manufacturer", "Pharmacist", "Local people"],
        tags: ["Deep Learning", "Pharma", "Chemistry"],
        passwords: ["38264", "65917", "47283"],
        downloadLink: "#",
      },
    },
    {
      id: "med-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "AI-Driven Severity Detection for Myasthenia Gravis in Elderly Patients",
        description: "Monica Seles recently revealed her diagnosis of Myasthenia Gravis (MG), a neuromuscular disorder that often begins with subtle signs but can escalate unpredictably. In elderly patients, symptoms like drooping eyelids, sudden muscle weakness, difficulty swallowing, or shortness of breath can easily be mistaken for fatigue or aging yet they may also resemble serious conditions such as LEMS, GBS, CIDP, or even early ALS (News Reference). Because these disorders share overlapping and fluctuating symptoms, older adults and caregivers frequently struggle to judge whether the condition is stable, worsening, or entering a dangerous phase. This uncertainty often delays timely medical attention during moments when rapid action could prevent severe complications.",
        details: "Act as a Neuroinformatics Data Scientist responsible for designing an intelligent system that observes symptom patterns over time, distinguishes MG from similar neuromuscular conditions, evaluates severity shifts, and signals when medical attention is needed. Your task is to build a model that minimizes confusion, supports early detection, and helps caregivers make safer decisions for vulnerable elderly patients.",
        targetAudience: ["Neurology clinics and geriatric care centers", "Neuromuscular disorders Researcher", "Physiotherapy and rehab centers"],
        tags: ["Genomics", "Data Science", "Personalization"],
        passwords: ["51739", "82645", "19374"],
        downloadLink: "#",
      },
    },
    {
      id: "med-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Decoding the Silent Signals of Immunodeficiency through Gene Expression",
        description: "Not all illnesses shout some whisper. Millions live with recurring sneezing, asthma, skin allergies, or chronic fatigue, unaware that these subtle symptoms may point to an underlying immune deficiency Most cases go unnoticed for years. Yet some stories reveal the stakes more clearly, like that of Aisha Chaudhary, who was born with Severe Combined Immunodeficiency (SCID) and required a bone-marrow transplant at six months. Despite early diagnosis, complications took her life at 18 (News Reference). Her condition was rare and identified early but countless others remain undiagnosed, living with immune dysfunction that quietly affects daily life without a name.",
        details: "Act as an Immunogenomics Data Scientist working alongside clinical genetic counselors. Your task is to analyze gene expression datasets containing both healthy individuals and those with known immunodeficiency disorders. You must uncover patterns, identify differentially expressed genes, explore clusters, visualize abnormalities, and detect early biomarkers that could signal hidden immune disorders before they become life-altering.",
        targetAudience: ["Immunology researchers", "Immune disorders patient", "Clinical geneticists and genetic counselors"],
        tags: ["Operations", "Predictive Analytics", "Management"],
        passwords: ["64821", "93157", "25698"],
        downloadLink: "#",
      },
    },
  ],
  fintech: [
    {
      id: "fin-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Smart Financial Safety Net for Unstable Market",
        description: "On November 25, HP Inc. announced that it will cut 4,000–6,000 jobs globally by 2028 as part of a major restructuring strategy. (News reference) Similar announcements from global giants like Apple and other tech firms have intensified the layoff wave worldwide. In India, thousands of salaried professionals face sudden income loss with limited financial cushioning. Rising layoffs, inflation and unstable conditions have exposed the lack of financial preparedness among salaried individuals. When employment is disrupted, financial stability quickly deteriorates due to the absence of systematic savings and investment management. In today's world, there is no assured job stability or security unless one is a government employee. For this unstable market reality, individuals desperately need a financial system that actively safeguards their future.",
        details: "Act as a Financial Data Scientist to build a website or mobile application that addresses the growing financial vulnerability of salaried individuals. Financial data today is scattered across multiple platforms, resulting in poor end-to-end Traceability and weak control over money flow. There is an urgent need for an integrated financial management platform that strengthens all income and expense data, enforces fixed savings through automated blocking, allocates funds into structured ratios for SIPs, stocks, bonds, and lifestyle spending, and continuously monitors emergency funds. The system should help users remain financially stable during job loss, salary delays, or unexpected medical emergencies.",
        targetAudience: ["Young Professionals in Private Sector", "Middle Income Household Workers", "Contract/Daily Based Employee"],
        tags: ["Financial Planning", "Savings", "Income Security"],
        passwords: ["17539", "48926", "72164"],
        downloadLink: "#",
      },
    },
    {
      id: "fin-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Digital Workflow System for Banking Asset Operations",
        description: "In November 2024, Exim Bank announced the auction of 516.50 decimals of mortgaged land after Beximco LPG Unit-1 defaulted on a Tk409 crore loan, marking a major escalation in the group's financial troubles. Banking records highlight the scale of the crisis: Janata Bank alone has Tk23,000 crore in exposure to Beximco, while the total exposure across all banks exceeds Tk35,000 crore. (News reference) Banks come under immense pressure to speed up recovery. They still struggle with scattered asset information that makes tracking difficult, slow legal coordination that delays actions, manual documentation, delayed issuance of legal notices, weak follow-up mechanisms, and lack of inter-departmental transparency. These gaps make it harder for banks to respond quickly, maintain accuracy, and manage such large default cases effectively.",
        details: "Act as a Bank Data Scientist to address the growing challenges in banking asset management. Today, asset information is stored across multiple systems, making it difficult to track progress and status of mortgaged assets, legal documentation, and ongoing auction cases. Auction workflows are largely manual, leading to delays, missed assets, limited bidder participation with low transparency. Banks lack a structured mechanism to reach potential bidders, effectively list assets in the market and predict recovery value. The absence of data insights and automated legal workflows weakens the overall loan recovery process from asset mapping to recovery through auction affecting both operational efficiency and financial stability. There is a need for a smarter, unified approach that enables banks to manage asset recovery with greater speed, accuracy, and transparency.",
        targetAudience: ["Loan recovery specialists", "Auction bidders", "NPA management"],
        tags: ["Banking", "Asset Management", "Loan Recovery"],
        passwords: ["29847", "53681", "86492"],
        downloadLink: "#",
      },
    },
    {
      id: "fin-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Intelligent Global Capital Routing System",
        description: "In a major crackdown on offshore gambling platforms, the Directorate General of GST Intelligence (DGGI) issued notices to 38 such platforms for allegedly laundering money and siphoning off taxes. As per reports, these entities were found to be facilitating money laundering for high-net-worth individuals, including celebrities and social media influencers. Authorities have estimated tax evasion of nearly ₹12,000 crore between April 2019 and November 2022 (News Reference). When capital moves from one country to another, it passes through tax treaties, withholding rules, currency conversion spreads, compliance delays, and legal blind spots. Offshore routing today is not just about movement, it is about cost negotiation. Offshore finance is no longer about dodging, it is about identifying where money leaks, where it stabilizes, and where it lawfully multiplies.",
        details: "Act as a Global Capital Data Scientist working inside an international treasury desk to build a web or mobile based interface that analyzes and structures cross border capital movement. The challenge is intentionally broad capital routing today involves multiple invisible financial frictions that are not clearly understood or compared. Teams should simulate capital flow pathways, analyze jurisdictional behaviors, score and rank routing strategies, estimate friction and compliance cost, compare global financial corridors, and design robust capital movement frameworks. With Indian startups routing funds through offshore nodes, currency spread losses per transfer, and over 30 global locations acting as unique financial routing hubs, the system must help stakeholders understand how smart legal routing alone can save millions without earning a single rupee.",
        targetAudience: ["International treasury professionals", "Startup founders and CFOs", "Financial analysts"],
        tags: ["Global Finance", "Capital Routing", "Compliance"],
        passwords: ["41265", "67834", "94517"],
        downloadLink: "#",
      },
    },
    {
      id: "fin-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Smart Financial Management System for Startups",
        description: "In recent years, India's startup scene has grown rapidly, with new founders entering the ecosystem every day and early successes creating massive excitement. Yet behind this momentum lies a harsh truth: nearly 90% of Indian startups fail within their first five years, as highlighted in multiple founder case studies. (News Reference) Stories like Stayzilla, TinyOwl, and Byju's show how even promising companies can collapse when financial clarity is missing. Many founders only realize trouble when cash starts running out or growth slows unexpectedly, often too late to recover. These real-world failures reveal a deeper pattern most startups struggle due to limited visibility into their financial health, causing early warning signs to be overlooked.",
        details: "Act as a Startup Data Scientist build a website or mobile app to examine the growing challenges startups face in managing financial stability. Startups often rely on manual spreadsheets and scattered financial records, leaving founders unaware of what's consuming their money. Without clear visibility, they struggle to see who truly brings in revenue and what is causing rising costs from cloud spikes to failed marketing. Most startups recognize these issues only after EBITDA drops or cash flow becomes unstable, giving them very little room to respond. The lack of predictive insights and real time alerts pushes founders into reactive rather than proactive decisions. In a fast moving market, this limited visibility becomes one of the biggest reasons early stage companies slip into liquidity traps and fail to recover in time. This makes it evident that startups urgently need better financial awareness and stronger visibility to survive in a volatile, fast changing market.",
        targetAudience: ["Early-stage startup founders", "Incubators and accelerators", "Angel investors and VCs"],
        tags: ["Startups", "Financial Management", "Cash Flow"],
        passwords: ["53926", "78145", "32869"],
        downloadLink: "#",
      },
    },
    {
      id: "fin-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Smart Financial Support System for Gig Workers",
        description: "India's gig economy has grown rapidly, employing millions across platforms like Swiggy, Zomato, Rapido, Amazon, Flipkart, and Uber. Yet behind this growth lies a harsh reality, over 77% of gig delivery workers earn less than ₹2.5 lakh annually. Surveys across major cities show that 61% are unaware of tax brackets and 77% do not invest in mutual funds. Long working hours, fuel costs, vehicle maintenance, penalties, and unpredictable incentives force workers into a cycle of unstable income and rising expenses.(News Reference) As earnings fluctuate daily and essential expenses increase, gig workers often find themselves without savings, emergency buffers, or financial planning tools, making long term stability difficult to achieve.",
        details: "Most gig workers run their finances through manual tracking or rough estimates, act as a Financial Data Scientist to design and build a web or mobile application that helps gig workers clearly understand their daily earnings, monthly expenses, and actual take home income. With unpredictable order volumes and surge based payouts, workers struggle to forecast how much they will earn or save in the weeks ahead. Essential costs like fuel, repairs, and platform deductions frequently exceed expectations, creating invisible financial leakage. Many also lack clarity about income tax rules, and a large portion does not file ITRs due to inconsistent income documentation. Limited awareness of welfare schemes, lack of structured saving habits, and no system for micro-investments further widen the gap between income and long term security. Workers often turn to informal loans with high interest simply to manage short term needs, which increases financial stress. In such an unpredictable earning environment, gig workers need far better financial visibility and support to avoid falling into long-term instability and debt.",
        targetAudience: ["Gig workers and delivery partners", "Rideshare and logistics workers", "Labour welfare boards & government bodies"],
        tags: ["Gig Economy", "Financial Literacy", "Income Management"],
        passwords: ["65184", "89273", "41736"],
        downloadLink: "#",
      },
    },
  ],
  agrotech: [
    {
      id: "agro-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Smart Digital Agriculture Management System for Meghalaya",
        description: "According to The Shillong Times, Meghalaya recorded the highest monsoon rainfall deficit in India at 45%. (News reference) Agriculture supports about 70% of the population and contributes around 22% of the state's GSDP, with crops such as rice, maize, pulses, ginger, and spices thriving in the region's hilly terrain. Despite strong organic farming yields, farmers lack structured, data-driven decision-support tools, leading to inconsistent productivity and increased vulnerability to climate risks.",
        details: "Act as Agricultural Data Scientists specializing in hill farming like Meghalaya's. Build a website or mobile app for farmers who are struggling to make timely crop decisions as the region faces increasing climate instability, shifting rainfall patterns, and fast-changing ground conditions. Fragile slopes, frequent soil erosion, and unpredictable weather make crop planning, and field management extremely difficult. Reliable, timely information is limited, leaving productivity inconsistent. The gap between the region's farming potential and the ability to make informed, sustainable decisions continues to grow, highlighting the urgency of understanding and characterising these challenges.",
        targetAudience: ["Cooperative and community based farmers", "Local crop buyers and traders", "Regional distributors of agricultural produce"],
        tags: ["Computer Vision", "Agriculture", "Disease"],
        passwords: ["18462", "52739", "76184"],
        downloadLink: "#",
      },
    },
    {
      id: "agro-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "Precision Environment Monitoring for High Yield Mushroom Farming",
        description: "According to a recent Times of India article, Bengaluru's mushroom sector is gaining widespread popularity. Cities around it, including Dabaspet, Nelamangala, Bidadi, and Malur, are seeing a rise in small cultivation units. Yet despite this growing demand, local production still reaches only 1 to 2 tonnes per day, while states like Maharashtra send nearly 20 tonnes daily to meet Bengaluru's needs. This demonstrates the high potential of the sector and the opportunities for small-scale cultivators to expand efficiently.(News Reference) Mushroom farming has appeared as a fast, low-space, and highly profitable agricultural business model that attracts small farmers, entrepreneurs, and urban growers alike. However, these improvised growing environments often lack precise environmental regulation. Even minor deviations in conditions can spoil the entire batch, turning potential profits into sudden losses. As the industry scales rapidly, its fragile dependency on tightly controlled environments has become a critical vulnerability.",
        details: "Act as an AgriTech Data Scientist to design and build a website or mobile-based application that supports mushroom cultivators in sustaining stable micro-climates within small and medium-scale shelters. Growers currently struggle to maintain the precise balance of humidity, airflow, hygiene, nutrition, and moisture required for healthy mushroom growth. This leads to unpredictable yields, sudden contamination outbreaks, inconsistent crop quality, and recurring financial losses. Despite rapid sector growth, most cultivators lack structured guidance, real-time insights, and predictive decision-support systems. The objective is to enable continuous environmental intelligence that can detect subtle condition shifts that trigger infections and deteriorate yield, transforming mushroom farming from guesswork into a data-driven, reliable enterprise.",
        targetAudience: ["Small and medium-scale farmers", "Urban home-based cultivators and agri-entrepreneurs", "Farm automation developers"],
        tags: ["IoT", "Water", "Sustainability"],
        passwords: ["24795", "61483", "85926"],
        downloadLink: "#",
      },
    },
    {
      id: "agro-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Intelligent Farming Systems for Smarter Future India",
        description: "In 2025, Indian agriculture will remain a pillar of the nation's economy, supporting nearly 60% of the rural population and contributing 18-20% to the national GDP. (News Reference) Despite its importance, the sector is under increasing pressure. Rapid population growth is driving up food demand, projected to double by 2050, while urbanization is steadily reducing available farmland in cities like Hyderabad, Bengaluru, Mumbai, Chennai, and Delhi. At the same time, soil quality is deteriorating due to excessive chemical use, erosion, and continuous monocropping, and water scarcity is worsening as groundwater levels decline and rainfall becomes less predictable. Farmers face rising input costs, poor-quality seeds, climate-related disasters, and limited access to modern technologies such as precision farming and efficient irrigation systems. With these compounding challenges, India's agricultural productivity is at risk, making sustainable and technology-driven farming strategies essential to secure the nation's food supply and rural livelihoods.",
        details: "Act as an AgriTech Data Strategist to design a website or mobile platform where farmers can gain insights into their farm's productivity, resource use, and potential risks. The challenge is not only the scale of agricultural demands, but the invisibility of early warning signals subtle fluctuations in soil, moisture, crop growth, or anomaly activity often go unnoticed until problems emerge. The new techniques and future-driven platform should be developed to observe growing trends, anticipate risks, and optimize decisions on irrigation, crop selection, and soil management. Users should feel guided, informed, and confident, able to make proactive choices while exploring their farm's overall health and sustainability through intuitive visualizations.",
        targetAudience: ["Smallholder and commercial farmers", "Agricultural Universities & Research Institutions", "Rural Development Organizations"],
        tags: ["Prediction", "Data Science", "Farming"],
        passwords: ["36148", "74259", "92637"],
        downloadLink: "#",
      },
    },
    {
      id: "agro-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Smart Vegan Supply & Demand Tracker",
        description: "The widespread use of chemicals, antibiotics, and steroids in broiler chicken farms has raised serious health concerns, including antibiotic resistance, hormone disorders, and gut microbiota disruption. Glyphosate residues in poultry feed have also been linked to oxidative stress and reproductive harm in chickens (News Reference). Growing health consciousness, environmental awareness, and ethical concerns are driving a global shift toward vegan products such as plant-based meat, paneer, and milk. Yet producers face challenges: supply often fails to match demand, regional consumption patterns remain poorly understood, and no integrated system exists to forecast demand or recommend optimal locations for cultivating the plants that feed this market. Without these insights, strategic planning, resource allocation, and sustainable growth in the vegan product sector remain limited.",
        details: "Act as a Vegan Market Data Scientist tasked with developing an AI-driven system that analyzes regional consumption trends, predicts future demand for specific vegan products, and identifies optimal cultivation areas for plant-based inputs. Your challenge is to integrate diverse datasets, uncover patterns in consumer behavior, and provide actionable insights that enable producers to plan production efficiently, meet growing demand, and support the sustainable expansion of the vegan market.",
        targetAudience: ["Vegan & GenZ Consumers", "Plant-Based Food Manufacturers", "Nutrition and Health Conscious Consumers"],
        tags: ["Logistics", "Supply Chain", "Optimization"],
        passwords: ["47823", "81564", "39285"],
        downloadLink: "#",
      },
    },
    {
      id: "agro-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Yield Intelligence Advisory Platform",
        description: "Indian soils have supported crop cultivation for centuries, but centuries of continuous farming without proper replenishment have left them depleted and exhausted, resulting in some of the lowest crop yields in the world. Only about 30% of farmers use balanced NPK fertilizers, while India remains the world's second-largest fertilizer consumer, applying over 55 million tons annually. Soil erosion claims nearly 5.3 billion tonnes of fertile topsoil every year, and uneven access to essential manures like cow dung worsens the problem. (News Reference) Without careful soil nourishment, the productivity of farmland continues to decline, threatening food security and the livelihoods of millions of farmers.",
        details: "Act as an Agricultural Data Scientist tasked with building a smart soil-nutrition advisory system for Indian farmers. Your goal is to analyze soil fertility data, crop requirements, and regional fertilizer availability to recommend optimal manure and fertilizer application strategies. The system should support offline and multilingual modes, help maximize yields sustainably, and guide farmers toward balanced nutrient use for healthier soils and better harvests.",
        targetAudience: ["Smallholder Farmers/Commercial Farmers", "Central Agriculture Departments", "Cooperative Societies"],
        tags: ["Satellite", "Imaging", "Precision"],
        passwords: ["59374", "92816", "46152"],
        downloadLink: "#",
      },
    },
  ],
  edtech: [
    {
      id: "ed-1",
      publicTitle: "Problem Statement 01",
      private: {
        title: "Automated Platform for Accurate Examination Evaluation and Scoring",
        description: "In 2019, a Telangana student was initially declared failed after being awarded just 20 marks, but a post-reverification revealed her actual score to be 48. (News Reference) A single human error that changed her fate forever. This tragic incident highlights the impact of manual mistakes in high-stakes evaluations. Competitive examinations such as UPSC Prelims, TG-TET and various state-level educator eligibility tests involve lakhs of answer sheets that are manually evaluated, a slow, error-prone and difficult process. One incorrect tally, mismatched memo or misread score can lead to failed results, lost opportunities, lengthy appeals, and in extreme cases, irreversible emotional and mental consequences.",
        details: "Act as an Assessment Evaluation Data Scientist responsible for developing a web or mobile-based automated assessment system that addresses the growing trust deficit in manual examination evaluations. The core problems to address include incorrect aggregation of marks, unnoticed discrepancies between question-wise scores and final totals, delayed detection of evaluation errors, and the absence of verifiable results. The system must ensure that no result is released without complete internal verification and authentication, thereby preventing wrongful academic failure, prolonged dispute cycles, and irreversible life-altering consequences caused purely by human mistakes. The system should be robust and secured to prevent any sort of tampering.",
        targetAudience: ["Private Testing & Certification Agencies", "National Entrance Exam Bodies", "Govt. Recruitment & Examination Cells"],
        tags: ["Education", "Adaptive", "AI"],
        passwords: ["15738", "49261", "73845"],
        downloadLink: "#",
      },
    },
    {
      id: "ed-2",
      publicTitle: "Problem Statement 02",
      private: {
        title: "AI-Driven Social Skills & Conflict-Resolution Coach",
        description: "Across classrooms and workplaces, people increasingly struggle to speak up, collaborate, or feel understood. This isn't just discomfort, it's part of a worsening global loneliness crisis. WHO's 2025 data shows that every sixth person feels chronically lonely, and the emotional damage is serious, contributing to 100 deaths every hour worldwide. (News Reference) In classrooms, team activities, or workplace discussions, many people hold back not because they lack ideas, but because they worry about how they will sound or be perceived. They struggle to read social cues, can't tell when to speak, or fear being misunderstood. Over time, this hesitation quietly erodes participation, confidence, and a sense of belonging, making simple group interactions feel overwhelming.",
        details: "You are an Educational Data Scientist tasked with building an AI platform that helps individuals understand how they participate in group interactions. The system should carefully observe behavioral patterns such as facial expressions, gestures, and speaking dynamics and transform these insights into gentle, personalized guidance. The platform aims to create a safe space where users can gradually build social confidence through structured yet natural learning experiences. It should provide actionable feedback for improvement and feature a dashboard that tracks progress, highlighting social interaction patterns and personal growth over time.",
        targetAudience: ["Students", "Young professionals", "Training Institutes"],
        tags: ["NLP", "Grading", "Automation"],
        passwords: ["27594", "58136", "84629"],
        downloadLink: "#",
      },
    },
    {
      id: "ed-3",
      publicTitle: "Problem Statement 03",
      private: {
        title: "Adaptive Attention-Monitoring Platform for Deep Study Retention",
        description: "In Hyderabad, a new study showed that young adults spend 6.4 hours a day on screens, with each extra hour slowing reaction time and weakening attention accuracy. Psychologist Siri Varshini says 8 out of 10 children now struggle to stay focused, and teachers like Zaneet Hussain report that post-pandemic students lose concentration much faster in classrooms. Lead researcher Anuradha Meda found that heavy multitasking causes cognitive strain, reduced sustained focus, and poorer learning engagement (News Reference). As students juggle notifications, fast content, and constant screen shifting, traditional study methods fail to hold their attention, leading to shallow understanding and weak retention.",
        details: "You are a Data Scientist, build a website or mobile app that can envision a system that can sense when the mind drifts and respond in ways that pull the learner back into focus. Many study platforms reduce learning to passive scrolling or watching, without sensing when the student's focus slips. They rarely encourage pauses or deeper thinking, leading to knowledge that remains shallow. Frequent multitasking weakens cognitive stamina, shortens attention spans, and disrupts long-term retention. Without any system that understands real time focus patterns or moment to moment engagement, students often move through lessons mechanically, missing the deeper thinking required for lasting learning. In a world where distraction is constant, the need for an intelligent system that understands and responds to human attention has never been more urgent.",
        targetAudience: ["Medical Science Students", "Civil Services Students", "Engineering Students"],
        tags: ["Engagement", "Analytics", "Online Learning"],
        passwords: ["39482", "62817", "91753"],
        downloadLink: "#",
      },
    },
    {
      id: "ed-4",
      publicTitle: "Problem Statement 04",
      private: {
        title: "Digital Interaction System for Experience-Based Laboratory Learning",
        description: "A student walks into the chemistry lab ready to perform a titration, but there are only a handful of burettes for the entire class, a few pipettes shared across benches, and several key reagents missing. Instead of experiencing the reaction firsthand, they watch classmates perform each step while standing on the sidelines. The colour change, the endpoint, the fine adjustments everything becomes something they observe, not perform (News Reference). This situation is common across many institutions, where limited equipment turns practical sessions into demonstrations rather than hands-on learning. Without repeated practice, experimentation, and room for mistakes, scientific concepts remain largely theoretical, and students struggle to build real confidence in laboratory skills.",
        details: "You are an Experimental Data Scientist rethinking how students can truly experience experiments even when a real laboratory is out of reach. Many learners complete the entire lab syllabi without ever conducting experiments independently, adjusting volumes, recording their own observations, or analysing outcomes based on real results. When practical exposure becomes restricted, students miss out on the intuitive understanding that comes only from feeling the apparatus, calibrating instruments, troubleshooting errors, and refining technique through repetition. This gap between theoretical knowledge and practical competence weakens learning outcomes and leaves students unsure of their abilities. The challenge now is to reimagine how students can gain true experimental experience even when access to fully equipped physical laboratories is limited.",
        targetAudience: ["Universities/Colleges", "Remote and Resource-Limited Campuses", "Virtual and Hybrid Learning Ecosystems"],
        tags: ["Recommendation", "Career", "Education"],
        passwords: ["48159", "75392", "36274"],
        downloadLink: "#",
      },
    },
    {
      id: "ed-5",
      publicTitle: "Problem Statement 05",
      private: {
        title: "Smart Classroom Analytics System",
        description: "Across many government schools, classrooms are severely overcrowded, placing teachers under constant stress while directly impacting student safety and learning quality. As reported by the Ministry of Education, overcrowded classrooms contribute to both teacher stress and declining classroom control. (News Reference) In such chaotic environments, notorious students create disturbances that often go unnoticed, some students slip out of classrooms without permission, and incidents such as talking, copying, cheating, or throwing objects frequently escape attention. More concerning are the silent signals - students lowering their heads, losing curiosity, withdrawing from participation, showing emotional stress, or mentally disengaging which remain invisible in packed classrooms. Teachers, already overburdened, are unable to observe every learner closely. As a result, both discipline and emotional well-being are compromised, while learning outcomes steadily decline.",
        details: "Act as an Education Data Analyst addressing the growing behavioral, emotional, and engagement-monitoring gaps in overcrowded government school classrooms through a web or mobile-based educational system. The key problems to address include the inability to continuously monitor student behavior, delayed identification of misconduct, unnoticed cheating and off-task activity, untracked classroom exits, and the complete absence of reliable indicators for student attention, curiosity, emotional stress, and disengagement. Teachers also lack objective feedback on which teaching methods improve attention and participation, forcing them to rely solely on trial-and-error. The absence of structured classroom behavioral insights weakens discipline, student safety, emotional health, and evidence-based teaching practices.",
        targetAudience: ["Teachers and Professors", "School principals and administrators", "School safety and monitoring departments"],
        tags: ["Chatbot", "NLP", "Tutoring"],
        passwords: ["56283", "87941", "42568"],
        downloadLink: "#",
      },
    },
  ],
};
 