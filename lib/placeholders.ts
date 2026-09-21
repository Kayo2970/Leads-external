export interface PlaceholderInfo {
  id: number;
  title: string;
  subtitle?: string;
  category?: string;
  page: string;
  component: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateNumberedPlaceholderSvg({
  id,
  title = "Placeholder Image",
  subtitle = "",
  category = "",
  width = 480,
  height = 600,
}: {
  id: number;
  title?: string;
  subtitle?: string;
  category?: string;
  width?: number;
  height?: number;
}): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 480 600">
    <defs>
      <linearGradient id="bgGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="50%" stop-color="#1e1b4b" />
        <stop offset="100%" stop-color="#2a1454" />
      </linearGradient>
      <linearGradient id="brandGrad_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#DE3F11" />
        <stop offset="100%" stop-color="#9C1256" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGrad_${id})" />
    <rect x="16" y="16" width="448" height="568" fill="none" stroke="rgba(222, 63, 17, 0.4)" stroke-width="3" rx="24" />
    
    <circle cx="240" cy="210" r="100" fill="#180A30" stroke="url(#brandGrad_${id})" stroke-width="6" />
    
    <text x="240" y="175" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-weight="800" font-size="20" letter-spacing="3">
      PLACEHOLDER
    </text>
    <text x="240" y="240" text-anchor="middle" fill="url(#brandGrad_${id})" font-family="system-ui, sans-serif" font-weight="900" font-size="64">
      #${id}
    </text>
    
    ${
      category
        ? `<rect x="100" y="345" width="280" height="36" rx="18" fill="rgba(222,63,17,0.2)" stroke="rgba(222,63,17,0.5)" stroke-width="1.5" />
           <text x="240" y="369" text-anchor="middle" fill="#FF7A00" font-family="system-ui, sans-serif" font-weight="700" font-size="15">
             ${escapeXml(category)}
           </text>`
        : ""
    }
    
    <text x="240" y="440" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="24">
      ${escapeXml(title)}
    </text>
    
    ${
      subtitle
        ? `<text x="240" y="480" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="500" font-size="17">
             ${escapeXml(subtitle)}
           </text>`
        : ""
    }
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const PLACEHOLDERS_CATALOG: PlaceholderInfo[] = [
  // Board & Leadership (1-40)
  { id: 1, title: "Prof. Kuldeep Kumar Raina", subtitle: "Patron", category: "Leadership", page: "/about", component: "BoardMemberCard" },
  { id: 2, title: "Dr. K. M. Sharath Kumar", subtitle: "Chief Advisor", category: "Leadership", page: "/about", component: "BoardMemberCard" },
  { id: 3, title: "Dr. Subhadeep Mukherjee", subtitle: "Centre Head", category: "Leadership", page: "/about", component: "BoardMemberCard" },
  { id: 4, title: "Dr. Pallabi Mund", subtitle: "Event Head (GG Campus)", category: "Faculty Leads", page: "/about", component: "BoardMemberCard" },
  { id: 5, title: "Dr. Kiran Kumar B.M.", subtitle: "Event Head (RTC Campus)", category: "Faculty Leads", page: "/about", component: "BoardMemberCard" },
  { id: 6, title: "Ms. Sujata Bijwe", subtitle: "Head Industry Collaboration", category: "Faculty Leads", page: "/about", component: "BoardMemberCard" },
  { id: 7, title: "Dr. Ajay R", subtitle: "Head Finance", category: "Faculty Leads", page: "/about", component: "BoardMemberCard" },
  { id: 8, title: "Dr. Tapas Kumar Sahoo", subtitle: "Faculty Lead - Research & Academics", category: "Faculty Leads", page: "/about", component: "BoardMemberCard" },
  { id: 9, title: "Mr. Abhijit Arya", subtitle: "Sr. Vice President", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 10, title: "Mr. Laksh Soorya Singh", subtitle: "Sr. Events & Operations Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 11, title: "Mr. Bhawen Maroo", subtitle: "Sr. Events & Operations Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 12, title: "Ms. Shreesha S.N", subtitle: "Sr. Social Media & Design Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 13, title: "Ms. Bharvi A Padia", subtitle: "Sr. PR Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 14, title: "Mr. Arvind Rakshith G", subtitle: "Sr. Finance & Sponsorship Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 15, title: "Mr. Syed Furqaan Ahmed", subtitle: "Sr. Research & Development Head", category: "Student Core Council", page: "/about", component: "BoardMemberCard" },
  { id: 16, title: "Nuthan H", subtitle: "President", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 17, title: "Kunal Bhadauria", subtitle: "Vice President", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 18, title: "Kayomarz Pavri", subtitle: "Head - Design & Digital Media", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 19, title: "Shwetha S", subtitle: "Head - Design & Social Media", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 20, title: "Sudev Mutraa", subtitle: "Chief Coordinator", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 21, title: "Jyotsna Karn", subtitle: "Chief Coordinator", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 22, title: "Pranav P J", subtitle: "Chief Coordinator", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 23, title: "Shravya T", subtitle: "Chief Coordinator", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 24, title: "Shriram SG", subtitle: "General Secretary", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 25, title: "S Bhavya Shree", subtitle: "General Secretary", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 26, title: "Manoj Petakamsetty", subtitle: "General Secretary", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 27, title: "Yash Chandak", subtitle: "Head - Operations & Logistics", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 28, title: "Niyati Chawra", subtitle: "Head - Leadership & Development", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 29, title: "Sadiya Sawood", subtitle: "Head - Leadership & Development", category: "Alumni Student Council", page: "/about", component: "BoardMemberCard" },
  { id: 30, title: "Nimisha K M", subtitle: "Head - Sustainability & Innovation", category: "Alumni Student Council", page: "/about", component: "BoardMemberCard" },
  { id: 31, title: "Kishan KP", subtitle: "Head - Marketing & Branding", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 32, title: "Aravind Manashetti", subtitle: "Head - Finance & Sponsorship", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 33, title: "Sahana Mahadev", subtitle: "Senior Student Advisor", category: "Student Advisory Council", page: "/about", component: "BoardMemberCard" },
  { id: 34, title: "Anurag Pandey", subtitle: "Senior Student Advisor", category: "Student Advisory Council", page: "/about", component: "BoardMemberCard" },
  { id: 35, title: "Mr. Ramanan Ramanathan", subtitle: "Governing Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 36, title: "Mr. Rishikesh Patankar", subtitle: "Governing Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 37, title: "Mr. Balakrishnan I", subtitle: "Governing Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 38, title: "Mr. Anish Somani", subtitle: "Governing Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 39, title: "Mr. Vidur Dewan", subtitle: "Corporate Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 40, title: "Dr. Praveen Kamath Kumbla", subtitle: "Corporate Advisory Board", category: "Governing & Advisory", page: "/about", component: "BoardMemberCard" },
  { id: 49, title: "Archana S Nair", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 50, title: "Abdul Samad Khatta", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 51, title: "Mohammed Ibrahim", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 52, title: "Pranav Bansal", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 53, title: "Pruthvi Arya Singh", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 54, title: "Siddharth Gupta", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 55, title: "Rohit Kumar Raj", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 56, title: "P Koushik Reddy", subtitle: "Chief Coordinator", category: "Core Committee", page: "/about", component: "BoardMemberCard" },
  { id: 57, title: "Jagannadh R Krishna", subtitle: "Student Trainee Associate", category: "Core Committee", page: "/about", component: "BoardMemberCard" },

  // Home Featured Leadership (41-43)
  { id: 41, title: "Prof. Kuldeep Kumar Raina", subtitle: "Patron Card", category: "Home Hero", page: "/", component: "ChromaGrid" },
  { id: 42, title: "Dr. K. M. Sharath Kumar", subtitle: "Chief Advisor Card", category: "Home Hero", page: "/", component: "ChromaGrid" },
  { id: 43, title: "Dr. Subhadeep Mukherjee", subtitle: "Centre Head Card", category: "Home Hero", page: "/", component: "ChromaGrid" },

  // Events & Editions (44-56)
  { id: 44, title: "Catalyst Leadership Talk Series", subtitle: "Main Event Photo", category: "Event Workshop", page: "/events", component: "EventCard" },
  { id: 45, title: "Catalyst Vol. 1", subtitle: "Strategic Decision Making", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 46, title: "Catalyst Vol. 2", subtitle: "Executive Presence & Storytelling", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 47, title: "Catalyst Vol. 3", subtitle: "Advanced Organizational Psychology", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 48, title: "National Leadership Conclave", subtitle: "Main Event Photo", category: "Annual Conclave", page: "/events", component: "EventCard" },
  { id: 49, title: "Conclave 2024", subtitle: "Inaugural Assembly", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 50, title: "Conclave 2025", subtitle: "Viksit Bharat Vision", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 51, title: "Executive Fireside & Roundtables", subtitle: "Main Event Photo", category: "Executive Roundtable", page: "/events", component: "EventCard" },
  { id: 52, title: "Fireside Edition 1", subtitle: "CEO Dialogue", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 53, title: "Fireside Edition 2", subtitle: "Policy & Governance", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 54, title: "LEADS Annual Impact Meet", subtitle: "Main Event Photo", category: "Annual Conclave", page: "/events", component: "EventCard" },
  { id: 55, title: "Annual Impact Meet 2025", subtitle: "Year of Transformation (Updated Photo)", category: "Event Edition", page: "/events", component: "EventModal" },
  { id: 56, title: "LEADS Outreach Activities", subtitle: "Main Event Photo", category: "Outreach Initiatives", page: "/events", component: "EventCard" },

  // Event Gallery Items (57-72)
  { id: 57, title: "Event Gallery Photo 1", subtitle: "Catalyst Workshop", category: "Gallery", page: "/events", component: "GalleryGrid" },
  { id: 58, title: "LEADS Next Gen Centre – Inauguration", subtitle: "Official Launch & Plenary Sessions (Updated Photo)", category: "Conclave", page: "/events", component: "EventCard / EventModal" },
  { id: 59, title: "Vanguard Leadership Retreat 2026", subtitle: "Executive Retreat Series (Updated Photo)", category: "Conclave", page: "/events", component: "EventCard / EventModal" },
  { id: 60, title: "National Leadership Day – Badging Ceremony", subtitle: "Induction & Badging Ceremony (Updated Photo)", category: "Conclave", page: "/events", component: "EventCard / EventModal" },
  { id: 61, title: "AIMS South Zone Regional Conference 2025", subtitle: "Emerging Trends in AI & Sustainability (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 62, title: "9th State Level Seminar", subtitle: "Transformation for the Nation (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 63, title: "Educational & Cultural Visit to New Delhi", subtitle: "Experiential Learning Delegation (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 64, title: "NHRD Bangalore Chapter – Thought Leadership Meet", subtitle: "Market Benchmarking & Compensation (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 65, title: "BCIC Roundtable Discussion on Generative Economy", subtitle: "Ushering the AI-Driven Industrial Era (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 66, title: "FKCCI Global MSME Conclave 2026", subtitle: "Sankalp to Siddhi – Local Resolve to Global Realization (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 67, title: "Anvaya Innovation Summit 2026", subtitle: "Innovation for Impact – Vision to Action (Updated Photo)", category: "Outreach", page: "/events", component: "EventCard / EventModal" },
  { id: 68, title: "Event Gallery Photo 12", subtitle: "National Delegates", category: "Gallery", page: "/events", component: "GalleryGrid" },
  { id: 69, title: "Event Gallery Photo 13", subtitle: "Student Core Team", category: "Gallery", page: "/events", component: "GalleryGrid" },
  { id: 70, title: "Event Gallery Photo 14", subtitle: "Certificate Distribution", category: "Gallery", page: "/events", component: "GalleryGrid" },
  { id: 71, title: "Event Gallery Photo 15", subtitle: "Keynote Address", category: "Gallery", page: "/events", component: "GalleryGrid" },
  { id: 72, title: "Event Gallery Photo 16", subtitle: "Closing Plenary", category: "Gallery", page: "/events", component: "GalleryGrid" },

  // Partner Logos (73-83)
  { id: 73, title: "Faculty of Management & Commerce (FMC)", subtitle: "Academic Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 74, title: "Ramaiah Tech Business Incubator (RTBI)", subtitle: "Incubation Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 75, title: "Government of Karnataka", subtitle: "State Strategic Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 76, title: "K-TECH Society", subtitle: "Innovation Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 77, title: "FICCI", subtitle: "Apex Industry Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 78, title: "BCIC", subtitle: "Regional Industry Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 79, title: "ISTD", subtitle: "HR & Training Partner Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 80, title: "BMA", subtitle: "Management Association Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 81, title: "NHRD", subtitle: "Human Capital Network Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 82, title: "AIMS", subtitle: "B-School Association Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },
  { id: 83, title: "AIMA", subtitle: "Apex National Management Logo", category: "Partner Logo", page: "/partners", component: "PartnerCard" },

  // Site Logos & Brand Headers (84-89)
  { id: 84, title: "Hero Curtain Logo", subtitle: "Main LEADS Mask Logo", category: "Brand Logo", page: "/", component: "LogoScrollExpand" },
  { id: 85, title: "Header Navigation Logo", subtitle: "LEADS Transparent Logo", category: "Brand Logo", page: "Global", component: "Nav" },
  { id: 86, title: "Header BLS Summit Logo", subtitle: "BLS Summit Badge", category: "Brand Logo", page: "Global", component: "Nav" },
  { id: 87, title: "Footer LEADS Logo", subtitle: "LEADS White Header Logo", category: "Brand Logo", page: "Global", component: "Footer" },
  { id: 88, title: "Footer BLS Logo", subtitle: "BLS Summit Footer Logo", category: "Brand Logo", page: "Global", component: "Footer" },
  { id: 89, title: "Footer FMC Logo", subtitle: "FMC RUAS White Logo", category: "Brand Logo", page: "Global", component: "Footer" },
];
