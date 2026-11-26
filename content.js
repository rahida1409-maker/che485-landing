/* Course content. Edit with index.html?edit and press 'Download content.js', then replace this file. */
window.__courseContent = {
  "schemaVersion": 1,
  "course": {
    "code": "CHE485",
    "title": "Chemistry Laboratory",
    "faculty": "FACULTY OF CHEMICAL ENGINEERING",
    "institution": "UiTM",
    "semester": "20264",
    "venue": "Chemistry Lab",
    "language": "en",
    "lead": "This is where theoretical knowledge meets practical experience. Through laboratory experiments, you will explore chemical principles, develop practical skills, enhance critical thinking, and gain hands-on experience in a safe and supportive learning environment. Before starting any experiment, please familiarise yourself with the laboratory rules, safety procedures, and experimental guidelines. Explore, Experiment, Discover, and Learn! Wishing you an enjoyable and meaningful laboratory experience!"
  },
  "design": {
    "accent": "#0F766E",
    "hero": { "style": "art", "image": "assets/banner.jpg", "alt": "Describe your banner image here" },
    "themeToggle": true,
    "theme": "light"
  },
  "lecturer": {
    "name": "Dr. Rahida Wati Sharudin",
    "role": "Course lecturer",
    "affiliation": "FKK, UiTM",
    "email": "rahida@uitm.edu.my",
    "photo": "assets/lecturer.jpg",
    "introVideo": ""
  },
  "links": {
    "syllabus": "https://drive.google.com/file/d/1kT1ueh3BASXDX6C6_f_k1-_OKKcZIQSw/view?usp=sharing",
    "announcements": "https://example.com/announcements",
    "materials": "https://drive.google.com/drive/folders/1AXPCB0oyJNNwAnIZjgHAorXO62YtOpr5?usp=sharing",
    "briefing": "https://drive.google.com/file/d/1Q_aOqA5qUJ8D0vXPsjpp5yfQFTBeGfrR/view?usp=sharing",
    "coverPages": "https://drive.google.com/drive/folders/1ZiJ6aCBRlqr_St1AnAulLxm5XvJAFX27?usp=sharing",
    "rubrics": "https://docs.google.com/spreadsheets/d/1IF0qS_3MmtbXfgPtnev0nCGAbTexLURs/edit?usp=sharing&ouid=112168098548211508819&rtpof=true&sd=true",
    "timetableA": "https://example.com/timetable-a",
    "timetableB": "https://example.com/timetable-b"
  },
  "startHere": {
    "kicker": "First things first",
    "title": "Start here",
    "intro": "Three steps before your first class. Do them in order, and tick each one off.",
    "steps": [
      {
        "title": "Read the syllabus",
        "sub": "What you will learn and how you are assessed",
        "link": "syllabus",
        "label": "Open syllabus"
      },
      {
        "title": "Check your class schedule",
        "sub": "Dates for classes and deadlines",
        "link": "#schedule",
        "label": "Go to schedule"
      },
      {
        "title": "Attend your first class",
        "sub": "{session}, Lab 2, Building A",
        "link": "#lecturer",
        "label": "How to contact"
      }
    ]
  },
  "quickLinks": [
    { "title": "Syllabus", "hint": "Course outline", "link": "syllabus" },
    { "title": "Class schedule", "hint": "Your weekly plan", "link": "#schedule" },
    { "title": "Announcements", "hint": "Latest notices", "link": "announcements" },
    { "title": "Assessment", "hint": "Marks and rubrics", "link": "#assessment" },
    { "title": "Materials", "hint": "Notes, manuals, folders", "link": "materials" },
    { "title": "Support", "hint": "Who to ask and how", "link": "#lecturer" }
  ],
  "sections": { "schedule": true, "experiments": true, "workflow": true, "assessment": true, "rules": true },
  "schedule": {
    "kicker": "Your semester",
    "title": "My schedule",
    "timetableLabel": "Official timetable",
    "note": "Not sure which group is yours? Check your university portal.",
    "groups": [
      {
        "id": "EH2203I",
        "day": "Wednesday",
        "time": "11 am – 2 pm",
        "timetable": "timetableA",
        "dates": [
          "2026-09-30",
          "2026-10-07",
          "2026-10-14",
          "2026-10-21",
          "2026-10-28",
          "2026-11-04",
          "2026-11-11",
          "2026-11-18",
          "2026-11-25",
          "2026-12-02",
          "2026-12-09",
          "2026-12-16",
          "2026-12-23",
          "2026-12-30",
          "2027-01-06"
        ],
        "holidays": {}
      }
    ],
    "plan": [
      { "type": "brief", "week": 1, "note": "Safety Briefing" },
      { "type": "lab", "experiment": 1, "week": 2 },
      { "type": "consult", "experiment": 2, "week": 3 },
      { "type": "lab", "experiment": 2, "week": 4 },
      { "type": "consult", "experiment": 3, "week": 5, "submit": 1 },
      { "type": "lab", "experiment": 3, "week": 6 },
      { "type": "break", "week": 7, "note": "Mid-semester break" },
      { "type": "break", "week": 8, "note": "Mid-semester break" },
      { "type": "consult", "week": 9, "experiment": 4, "submit": 3 },
      { "type": "lab", "week": 10, "experiment": 4 },
      { "type": "consult", "week": 11, "experiment": 5 },
      { "type": "lab", "week": 12, "experiment": 5, "submit": 4 },
      { "type": "break", "week": null, "note": "MID SEM BREAK" },
      { "type": "other", "week": 13, "submit": 5 },
      { "type": "test", "week": 14, "note": "ONLINE TEST" }
    ]
  },
  "experiments": {
    "word": "Lab",
    "title": "Your experiments",
    "intro": "Dates follow your class group. CE means closed-ended (fixed procedure). OE means open-ended (you plan your own).",
    "items": [
      {
        "short": "LAB 1",
        "openEnded": false,
        "co": "CO1",
        "report": "TR",
        "reportLabel": "Technical Report 1",
        "manual": "materials",
        "name": "Determination of concentration of acetic acid in vinegar"
      },
      {
        "name": "Kinetic of chemical reaction – Iodination of cyclohexanone",
        "short": "LAB 2",
        "openEnded": true,
        "co": "CO1 · CO2",
        "report": "LR",
        "reportLabel": "Lab Report 2",
        "manual": "materials"
      },
      {
        "name": "Thermodynamic experiment – Heat of neutralization",
        "short": "LAB 3",
        "openEnded": true,
        "co": "CO1 · CO2",
        "report": "LR",
        "reportLabel": "Lab Report 3",
        "manual": "materials"
      },
      {
        "name": "Stoichiometry analysis",
        "short": "LAB 4",
        "openEnded": false,
        "co": "CO1 · CO2",
        "report": "TR",
        "reportLabel": "Technical Report 4",
        "manual": "materials"
      },
      {
        "name": "Determination of dye concentration using absorption spectroscopy",
        "short": "LAB 5",
        "openEnded": true,
        "co": "CO1 · CO2",
        "report": "LR",
        "reportLabel": "Lab Report 5",
        "manual": "materials"
      }
    ]
  },
  "workflow": {
    "kicker": "Every experiment",
    "title": "From start to submission",
    "steps": [
      {
        "when": "1 week before",
        "title": "Consult",
        "text": "Open-ended labs: discuss your plan with the lecturer."
      },
      {
        "when": "Lab day",
        "title": "Run the experiment",
        "text": "Carry out the lab and record your raw data."
      },
      { "when": "End of lab", "title": "Get it signed", "text": "Lecturer signs your raw data sheet." },
      {
        "when": "Within 2 weeks",
        "title": "Submit your report",
        "text": "Hand in your report to the lecturer."
      }
    ],
    "compare": {
      "title": "Closed-ended and open-ended labs",
      "columns": [
        {
          "title": "Closed-ended lab (CE)",
          "summary": "A set procedure with clear directions.",
          "steps": ["Read the lab manual", "Follow it and run the experiment", "Get your raw data signed"]
        },
        {
          "title": "Open-ended lab (OE)",
          "summary": "You plan the procedure from the problem given.",
          "steps": ["Plan your own procedure", "Consult your lecturer one week before", "Run the experiment"]
        }
      ]
    }
  },
  "assessment": {
    "kicker": "How you are graded",
    "title": "Assessment",
    "weights": [
      {
        "label": "Reports",
        "percent": 50,
        "detail": "Technical report (individual) · Lab report (group)"
      },
      { "label": "Rubric", "percent": 35, "detail": "Assessed by rubric" },
      { "label": "Test", "percent": 15, "detail": "Sample test · {testDate}" }
    ],
    "reports": [
      {
        "code": "TR",
        "name": "Technical report",
        "mode": "Individual",
        "modeTone": "blue",
        "chip": "Individual · Technical report",
        "labs": "Lab 1",
        "scale": 30,
        "criteria": [
          ["Abstract", 10],
          ["Methodology", 10],
          ["Results", 10],
          ["Discussion", 30],
          ["Conclusion", 15],
          ["References", 5]
        ],
        "buttons": [{"label":"Cover page","link":"coverPages"}, {"label":"Rubric","link":"rubrics"}]
      },
      {
        "code": "LR",
        "name": "Lab report (full report)",
        "mode": "Group",
        "modeTone": "pink",
        "chip": "Group · Full report",
        "labs": "Lab 2 · Lab 3",
        "scale": 30,
        "criteria": [
          ["Abstract", 5],
          ["Introduction", 10],
          ["Methodology", 10],
          ["Results", 10],
          ["Discussion", 20],
          ["Conclusion", 5]
        ],
        "buttons": [{"label":"Cover page","link":"coverPages"}, {"label":"Rubric","link":"rubrics"}]
      }
    ]
  },
  "rules": {
    "kicker": "Please remember",
    "title": "Important rules",
    "items": [
      { "title": "Attendance is compulsory", "text": "Write your attendance rule here." },
      { "title": "Safety first", "text": "Write your dress code and safety rules here." },
      { "title": "Submit on time", "text": "Say where, when and how reports are submitted." },
      { "title": "Academic integrity", "text": "Say what happens with late submission or plagiarism." }
    ]
  },
  "supportIntro": { "kicker": "Contact and support", "title": "Dr. Rahida Wati Sharudin" },
  "support": [
    {
      "title": "Cannot attend a class?",
      "text": "Tell your lecturer early. Say what happened and what you need."
    },
    { "title": "Emergency", "text": "Replace this with your faculty office number and safety contact." },
    {
      "title": "Need support or an adjustment?",
      "text": "Email your lecturer and say what support would help you learn.",
      "link": "email"
    }
  ],
  "analytics": { "goatcounter": "" },
  "feedback": { "enabled": true },
  "prepwise": { "enabled": false, "url": "", "courseCode": "", "label": "PrepWISE", "text": "" },
  "footer": { "text": "", "credit": false, "creditText": "", "creditUrl": "" },
  "strings": {}
};
