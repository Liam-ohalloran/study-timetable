/* =========================================================
   STUDY SCHEDULE  (edit this file to change the timetable)
   ---------------------------------------------------------
   Each block is one line:   "START-END  subject  what you're doing"
     e.g.  "15:45-16:45 spec Test 4 practice questions"
   Add the word cram after the subject for a CRAM block:
     e.g.  "19:30-20:00 spec cram Formulas + errors"
   Use 24-hour times. Midnight is 24:00.
   "school" on its own adds 8:30 to 3:15 school.

   Subjects:  eng  hbio  spec  meth  chem  rel
   Other:     school  shift  exam  tutor  sport  event  cut
     (cut = something you plan to skip, shown crossed out)

   due:   the red notes under each day's name, e.g. { Thu: "Spec Test 4" }
   focus: one or two sentences shown at the top of that week
   ========================================================= */

const SCHEDULE = [
{
  name: "Week 1", start: "2026-10-12",
  focus: "Spec leads because of Thursday's Inv 2 validation, the Revision Assignment and Test 4 next week. Every other subject still gets a short block so nothing goes cold.",
  due: { Tue: "Term 4 starts", Thu: "Spec Inv 2 validation" },
  Mon: [
    "9:00-10:30 spec Inv 2: complex numbers",
    "11:00-11:45 meth Test 6: Ch 6 review",
    "13:00-13:45 chem Reaction rates recap",
    "14:00-14:45 hbio Lab skills: equipment list",
    "15:00-15:20 rel Email Ms Carroll re validation",
    "16:00-16:30 event Callback vocals practice"
  ],
  Tue: [
    "school",
    "15:30-16:30 spec Inv 2: finish + check working",
    "16:45-17:45 tutor Leo tutoring"
  ],
  Wed: [
    "school",
    "16:00-17:00 spec cram Inv 2: final run-through",
    "18:50-19:50 sport Spring netball",
    "20:00-20:45 eng 7B: reread the task brief"
  ],
  Thu: [
    "school",
    "15:30-18:00 event Chicago callbacks",
    "18:00-19:00 tutor Laura tutoring",
    "19:30-20:00 hbio Flashcards (light)"
  ],
  Fri: [
    "school",
    "16:00-22:00 shift FRIDAY PL 4-10"
  ],
  Sat: [
    "9:00-10:00 spec Revision Assignment",
    "10:15-11:00 eng 7B: pick transformation idea",
    "12:00-15:30 shift SATURDAY PI 12-3:30",
    "17:00-17:45 chem Inv 2: rates theory"
  ],
  Sun: [
    "6:00-14:00 shift SUNDAY PL 6-2",
    "16:00-16:45 meth Test 6: Ch 6 questions",
    "17:00-18:00 spec Revision Assignment: finish"
  ],
},

{
  name: "Week 2", start: "2026-10-19",
  focus: "English 7B is due Monday 26, so it leads the week. Spec Test 4 prep starts now since it's on Thursday 29 with Methods Test 6 and the Chem validation, and Human Bio gets steady lab skills blocks.",
  due: { Tue: "Spec Revision Assignment due", Sat: "Whitey's birthday party · Driving hazard perception test" },
  Mon: [
    "school",
    "15:45-16:45 spec Revision Assignment: finalise",
    "19:00-19:45 eng 7B: draft the transformation"
  ],
  Tue: [
    "school",
    "15:30-16:30 meth Test 6: Ch 6 questions",
    "16:45-17:45 tutor Leo tutoring"
  ],
  Wed: [
    "school",
    "16:00-17:00 eng 7B: keep drafting",
    "18:50-19:50 sport Spring netball",
    "20:00-20:45 hbio Lab skills: methods + safety"
  ],
  Thu: [
    "school",
    "15:45-16:45 spec Test 4: practice questions",
    "18:00-19:00 tutor Laura tutoring",
    "19:30-20:15 chem Rates: collision theory"
  ],
  Fri: [
    "school",
    "15:45-17:15 eng 7B: finish draft, plan the oral"
  ],
  Sat: [
    "9:00-10:30 eng 7B polish + oral rehearsal",
    "11:00-12:00 spec Test 4: practice questions",
    "13:00-14:00 chem Validation prep: rates"
  ],
  Sun: [
    "10:00-10:45 eng Oral run-through",
    "11:00-12:00 meth Test 6: Ch 7",
    "13:00-13:45 hbio Lab skills: practise techniques",
    "14:00-14:45 spec Test 4: weak spots"
  ],
},

{
  name: "Week 3", start: "2026-10-26",
  focus: "Thursday has Methods Test 6, Spec Test 4 and the Chem validation, then Human Bio lab skills on Friday, so those four lead. English gets a short exam-prep block, and Methods Rev Test 2 prep starts on the weekend.",
  due: { Mon: "English 7B oral + transformation", Thu: "Methods Test 6 · Spec Test 4 · Chem Inv 2 validation", Fri: "HBio Task 9 lab skills · Stella's Halloween party (maybe)", Sat: "Halloween party · Halloween sleepover" },
  Mon: [
    "school",
    "15:45-16:45 meth Test 6: Ch 8",
    "17:00-17:45 spec Test 4: practice questions",
    "19:00-20:00 chem Validation prep: method + calcs"
  ],
  Tue: [
    "school",
    "15:30-16:30 spec Test 4: timed past test",
    "16:45-17:45 tutor Leo tutoring",
    "20:00-20:45 meth Test 6: timed past test"
  ],
  Wed: [
    "school",
    "15:45-16:45 chem cram Validation: final check",
    "17:00-17:45 meth Test 6: weak spots",
    "18:00-18:45 spec Test 4: weak spots",
    "18:50-19:50 sport Spring netball",
    "20:00-20:30 meth cram Test 6 formulas",
    "20:30-21:00 spec cram Test 4 formulas"
  ],
  Thu: [
    "school",
    "15:45-16:45 hbio Lab skills: final prep",
    "18:00-19:00 tutor Laura tutoring",
    "19:30-20:00 hbio cram Equipment names + safety"
  ],
  Fri: [
    "school",
    "15:45-16:45 eng Exam: list texts, essay plan",
    "17:00-17:45 spec Exam: topic checklist"
  ],
  Sat: [
    "9:00-10:00 meth Rev Test 2 prep",
    "10:15-11:00 hbio Exam revision: start",
    "11:15-12:00 spec Past exam questions",
    "15:00-17:00 event Party setup",
    "19:00-24:00 event Halloween party (hosting)"
  ],
  Sun: [
    "11:00-12:00 meth Rev Test 2 practice",
    "12:30-13:15 rel Assessment 6 prep",
    "14:00-14:45 eng Essay plan",
    "15:00-15:45 chem Exam: topic checklist"
  ],
},

{
  name: "Week 4", start: "2026-11-02",
  focus: "Methods Rev Test 2 and R&L Assessment 6 are Tuesday. After that it's exam revision across all five, weighted to English since it's the first exam. Saturday is a full timed English paper.",
  due: { Tue: "Methods Rev Test 2 · R&L Assessment 6", Sun: "English exam tomorrow" },
  Mon: [
    "school",
    "15:45-16:45 meth Rev Test 2: final practice",
    "19:00-20:00 rel Assessment 6 Explanation",
    "20:15-20:45 meth cram Rev Test 2: formulas"
  ],
  Tue: [
    "school",
    "15:30-16:30 eng Timed essay",
    "16:45-17:45 tutor Leo tutoring",
    "20:00-20:45 chem Exam: stoichiometry"
  ],
  Wed: [
    "school",
    "15:45-17:00 hbio Exam: unit review",
    "18:50-19:50 cut Netball (skip if you can)",
    "20:00-21:00 spec Exam: past paper section"
  ],
  Thu: [
    "school",
    "15:30-16:30 chem Exam: weak topics",
    "18:00-19:00 tutor Laura tutoring",
    "19:30-20:30 eng Essay plans"
  ],
  Fri: [
    "school",
    "15:45-16:45 meth Exam: past paper section",
    "19:00-20:00 hbio Past questions"
  ],
  Sat: [
    "9:00-12:00 eng FULL timed English paper",
    "13:00-13:45 eng Review the paper",
    "14:30-15:30 spec Past paper section"
  ],
  Sun: [
    "10:00-11:00 eng Essay plans for every text",
    "11:30-12:30 hbio Diagrams + definitions",
    "14:00-15:00 chem Past questions",
    "19:00-20:00 eng cram Read plans, then sleep early"
  ],
},

{
  name: "Exams 1", start: "2026-11-09", exam: true,
  focus: "English, Human Bio and Spec this week. The next exam always gets the most time, but Chem and Methods get a block most days so they're not cold next week. Cram blocks sit the night before and morning of each exam.",
  due: { Mon: "English exam", Thu: "Human Bio exam", Fri: "Spec exam" },
  Mon: [
    "7:15-8:15 eng cram Quotes + essay plans",
    "8:45-11:45 exam ENGLISH EXAM",
    "14:00-15:30 hbio Unit review",
    "16:00-16:45 chem Light topic review",
    "17:00-17:45 meth Light topic review"
  ],
  Tue: [
    "8:30-10:30 hbio Weakest topics",
    "11:00-12:30 spec Past questions",
    "14:00-15:30 hbio Diagrams + definitions",
    "15:45-16:30 meth Practice questions",
    "16:45-17:45 cut Leo tutoring (pause)"
  ],
  Wed: [
    "8:45-11:45 hbio Timed Human Bio paper",
    "13:00-15:00 spec Past paper sections",
    "15:30-16:15 chem Practice questions",
    "18:50-19:50 cut Netball",
    "20:00-21:00 hbio cram Definitions, diagrams, key terms"
  ],
  Thu: [
    "8:00-9:30 hbio cram Flashcards + key diagrams",
    "10:00-11:00 hbio Light review",
    "13:15-16:15 exam HUMAN BIO EXAM",
    "18:00-19:00 cut Laura tutoring (pause)",
    "19:15-20:30 spec cram Formula sheet + one section"
  ],
  Fri: [
    "8:30-10:30 spec cram Redo every question you got wrong",
    "13:15-15:45 exam SPEC EXAM"
  ],
  Sat: [
    "9:00-12:00 chem Timed Chem paper",
    "13:00-14:30 chem Review + weak topics",
    "15:30-16:30 meth Practice questions"
  ],
  Sun: [
    "9:30-12:00 chem Weak topics + calculations",
    "13:30-15:00 meth Past paper section",
    "19:00-20:00 chem cram Summary sheet + key equations"
  ],
},

{
  name: "Exams 2", start: "2026-11-16", exam: true,
  focus: "Chem Monday, one full day for Methods, then Methods Wednesday morning and you're done.",
  due: { Mon: "Chemistry exam", Wed: "Methods exam (last one)" },
  Mon: [
    "7:00-8:00 chem cram Summary sheet",
    "8:45-11:45 exam CHEMISTRY EXAM",
    "14:00-15:30 meth Unit review",
    "16:00-17:30 meth Practice questions"
  ],
  Tue: [
    "9:00-11:30 meth Timed Methods paper",
    "13:00-15:30 meth Review + weak areas",
    "16:45-17:45 cut Leo tutoring (pause)",
    "20:00-21:00 meth cram Rules + formula sheet"
  ],
  Wed: [
    "7:00-8:00 meth cram Formula sheet",
    "8:45-11:15 exam METHODS EXAM",
    "12:00-14:00 event Exams done",
    "18:50-19:50 cut Netball"
  ],
}
];
