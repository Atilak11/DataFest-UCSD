export const COLORS = {
  ucsdBlue: "#00629B",
  ucsdGold: "#C69214",
  dark: "#0d1b2a",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "calendar", label: "Calendar" },
  { id: "rules", label: "Rules" },
  { id: "resources", label: "Resources" },
  { id: "announcements", label: "Announcements" },
  { id: "past", label: "Past DataFest" },
  { id: "support", label: "Support Us" },
];

export const SLIDES_PDF = [
  
  {
    title: "Workshop 2 Slides",
    description: "SIG - DataFest 2026 Info Meeting",
    file: "/slides/WorkshopTwo.pdf",
    date: "Jan 30",
    org: "All",
  }
]

export const WORKSHOPS = [
  { date: "Jan 16", day: "Fri", time: "2:00–3:00 PM",          title: "Basics of R & Stata + Data Viz Intro",    org: "UES",          location: "CSB 003",          done: true  },
  { date: "Jan 30", day: "Fri", time: "2:00–4:00 PM",          title: "DataFest 2026 Info Meeting",              org: "All",          location: "CSB 003",          done: true  },
  { date: "Feb 4",  day: "Thu", time: "8:00–10:00 PM",         title: "DS3 – Data Science in Health",            org: "DS3",          location: "Otterson 1S113",   done: true  },
  { date: "Feb 13", day: "Fri", time: "5:30–6:30 PM",          title: "Intro to Machine Learning",               org: "TQT × SIG",   location: "CSB 003",          done: true  },
  { date: "Feb 18", day: "Thu", time: "8:00–10:00 PM",         title: "DS3 – Data Science in Finance",           org: "DS3",          location: "Otterson 1S114",   done: true  },
  { date: "Feb 27", day: "Fri", time: "5:30–6:30 PM",          title: "Working with Data",                       org: "Blake Ellison",location: "CSB 003",          done: true  },
  { date: "Mar TBD",day: "TBD", time: "TBD",                   title: "Workshop #5 – Presentation Skills",       org: "TBD",          location: "TBD",              done: false },
  { date: "Apr 24", day: "Fri", time: "Late Afternoon",         title: "DataFest Day 1 – Check-In",               org: "Event",        location: "Price Center East Ballroom", done: false, highlight: true },
  { date: "Apr 25", day: "Sat", time: "All Day",                title: "DataFest Day 2 – Hack!",                  org: "Event",        location: "Malk Hall 5th Floor",        done: false, highlight: true },
  { date: "Apr 26", day: "Sun", time: "Morning – Early Afternoon", title: "DataFest Day 3 – Presentations & Awards", org: "Event",   location: "Malk Hall 5th Floor",        done: false, highlight: true },
];

export const FAQS = [
  { q: "How many people per team?",               a: "Teams must have between 4 and 5 members. All members must be from the same school." },
  { q: "Who can participate?",                    a: "All currently enrolled undergraduate students who have been enrolled for at least one quarter in the current academic year." },
  { q: "Do I need coding skills?",                a: "Coding, stats, and data science experience is helpful — but communication and presentation skills matter just as much. Build a team with complementary strengths!" },
  { q: "Can I register as an individual?",        a: "You may sign up individually, but you'll need to form or join a team of 4–5 before the registration deadline." },
  { q: "Can I substitute team members?",          a: "No. Once registration is closed, no substitutions are allowed." },
];

export const RULES = [
  "Teams must have 4–5 members, all from the same school.",
  "All participants must be currently enrolled undergraduates (enrolled at least one quarter in the 2025–26 academic year).",
  "Each team must formally register with a team name and all member names & student ID numbers.",
  "Team names must be professional — nothing you wouldn't use in a workplace setting.",
  "Once registration closes, no substitute team members are allowed.",
  "The dataset is revealed at the start of the event — no prior access.",
  "Teams present findings to a panel of judges on the final day.",
];

export const ANNOUNCEMENTS = [
  {
    date: "Mar 3, 2026",
    title: "Registration Opening Soon!",
    body: "Team registration will open shortly. Stay tuned for the link. Make sure you have 4–5 undergrads ready to go!",
    tag: "Registration",
  },
  {
    date: "Feb 27, 2026",
    title: "Workshop #4 Slides Now Available",
    body: "Slides from Blake Ellison's 'Working with Data' workshop are now posted in the Resources section below.",
    tag: "Workshop",
  },
  {
    date: "Jan 30, 2026",
    title: "Info Meeting Recap",
    body: "Thanks to everyone who joined the DataFest 2026 Info Meeting! Slides are available. Workshop #3 coming Feb 13.",
    tag: "Event",
  },
];

export const ORGANIZERS = {
  faculty: [
    "Karen Doescher – Dept. of Economics",
    "Andrew Cronan – Dept. of Cognitive Science",
    "Emanuel Vespa – Dept. of Economics",
    "Xinwei Ma – Dept. of Economics",
  ],
  orgs: [
    { name: "Sustainable Investment Group (SIG)", people: ["Jason Oliner, Co-president", "Theodosia Lim, Co-president"] },
    { name: "Undergraduate Economics Society (UES)", people: ["Jayden Wang"] },
    { name: "Triton Quantitative Trading (TQT)", people: [] },
    { name: "Data Science Student Society (DS3)", people: [] },
  ],
};
