/* ============================================================
   BACKEND DATA — Planning & Development Console
   planningTeam[]: management, then Planning Team Lead, then Planning Coordinators.
   tasks[]: {id, assignee, title, course, priority, due, status, notes}.
     status in taskStatuses. Add/assign tasks here (read-only front-end).
   ============================================================ */
window.PD_DATA = {
 "courses": [
  {
   "id": 1,
   "name": "FRCA OSCE & SOE",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Anil -CEO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 28000,
    "prep": 25000,
    "ai": 19500,
    "review": 23500,
    "writing": 52000,
    "shoot": 60000,
    "other": 12000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Nov",
   "delayReason": ""
  },
  {
   "id": 2,
   "name": "FRCS Section 1 (General Surgery)",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Harsha MG",
   "director": "Dr. Subhash Patil",
   "mentorPanel": "Yes",
   "proposedBy": "Anil -CEO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-01-01",
   "assigned": "Harsha",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 45000,
    "prep": 20000,
    "ai": 15000,
    "review": 20000,
    "writing": 35000,
    "shoot": 0,
    "other": 10000,
    "note": "Sample — replace",
    "source": "Company sample figures"
   },
   "completionMonth": "",
   "delayReason": ""
  },
  {
   "id": 3,
   "name": "MRE",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "Dr. Sirisha",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-02-01",
   "assigned": "Shahadhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 40000,
    "prep": 25000,
    "ai": 15000,
    "review": 20000,
    "writing": 30000,
    "shoot": 60000,
    "other": 5000,
    "note": "Sample — replace",
    "source": "Company sample figures"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 4,
   "name": "AMC Clinical",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "Dr. Vishwesh",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-05-05",
   "assigned": "Shahadhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 24500,
    "prep": 22000,
    "ai": 12500,
    "review": 17500,
    "writing": 40000,
    "shoot": 44000,
    "other": 9500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jul",
   "delayReason": ""
  },
  {
   "id": 5,
   "name": "EDAIC Part 1",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Saniya",
   "director": "Dr. Ann Susan",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-02-01",
   "assigned": "Saniya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 35500,
    "prep": 24500,
    "ai": 14500,
    "review": 22500,
    "writing": 43000,
    "shoot": 46500,
    "other": 13500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jul",
   "delayReason": ""
  },
  {
   "id": 6,
   "name": "FRCpath Part 1 (Histo-Pathology)",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Anil -CEO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "2026-02-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 43500,
    "prep": 30000,
    "ai": 22000,
    "review": 28000,
    "writing": 57500,
    "shoot": 74000,
    "other": 15000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 7,
   "name": "MRCPsych PAPER B",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Vidhya Vijayan",
   "director": "",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-05-05",
   "assigned": "Vidhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 34500,
    "prep": 23000,
    "ai": 18000,
    "review": 24000,
    "writing": 42500,
    "shoot": 57000,
    "other": 11000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jul",
   "delayReason": ""
  },
  {
   "id": 8,
   "name": "DHA Nursing Exam",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 40000,
    "prep": 37500,
    "ai": 23000,
    "review": 37500,
    "writing": 73000,
    "shoot": 69500,
    "other": 19500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 9,
   "name": "Kuwait MOH Prometric Nursing Exam",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 47000,
    "prep": 39500,
    "ai": 26500,
    "review": 38000,
    "writing": 56000,
    "shoot": 84500,
    "other": 18000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 10,
   "name": "NCLEX-RN Exam – Canada",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 33500,
    "prep": 21000,
    "ai": 14500,
    "review": 21500,
    "writing": 46000,
    "shoot": 52500,
    "other": 11000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 11,
   "name": "NCLEX-RN Exam – UK",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 33000,
    "prep": 25000,
    "ai": 15500,
    "review": 25500,
    "writing": 36000,
    "shoot": 44500,
    "other": 10500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 12,
   "name": "Qatar Prometric Nurse Exam",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 34500,
    "prep": 28000,
    "ai": 19500,
    "review": 31000,
    "writing": 45500,
    "shoot": 56000,
    "other": 15500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 13,
   "name": "Saudi Nursing Licensing Exam",
   "segment": "Exam Preparatory",
   "audience": "Nurses",
   "focus": "",
   "status": "On Hold",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 43500,
    "prep": 34500,
    "ai": 23000,
    "review": 39000,
    "writing": 68000,
    "shoot": 62000,
    "other": 20000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 14,
   "name": "Fellowship in Radiology",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Harsha MG",
   "director": "Dr. Sachin Baluthar",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-02-10",
   "assigned": "Harsha",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 83000,
    "prep": 59500,
    "ai": 41000,
    "review": 67500,
    "writing": 97000,
    "shoot": 106500,
    "other": 25500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 15,
   "name": "Fellowship in GS",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Harsha MG",
   "director": "Dr. Sujay",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-03-01",
   "assigned": "Harsha",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 84000,
    "prep": 71000,
    "ai": 45000,
    "review": 59500,
    "writing": 145500,
    "shoot": 125500,
    "other": 39500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 16,
   "name": "Fellowship in Orthopedics",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Vidhya Vijayan",
   "director": "Dr. Rashith Chakrawarthy",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-03-10",
   "assigned": "Vidhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 65000,
    "prep": 54500,
    "ai": 31500,
    "review": 54000,
    "writing": 81000,
    "shoot": 121000,
    "other": 23000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 17,
   "name": "Fellowship in Pediatrics",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Vidhya Vijayan",
   "director": "Dr. Balaji Chinnaswami",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-05-01",
   "assigned": "Vidhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 86000,
    "prep": 77500,
    "ai": 46000,
    "review": 82000,
    "writing": 149000,
    "shoot": 157000,
    "other": 33000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 18,
   "name": "Approach to Chest Pain in the Outpatient Setting",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-04-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 6500,
    "prep": 5000,
    "ai": 4000,
    "review": 5000,
    "writing": 9000,
    "shoot": 13000,
    "other": 2500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 19,
   "name": "Growth Monitoring & Nutrition in Under-5s",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-04-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 13000,
    "prep": 9500,
    "ai": 6500,
    "review": 10000,
    "writing": 19500,
    "shoot": 23500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jun",
   "delayReason": ""
  },
  {
   "id": 20,
   "name": "Breaking Bad News",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Saniya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-03-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 9500,
    "prep": 8000,
    "ai": 5000,
    "review": 7500,
    "writing": 15000,
    "shoot": 13500,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 21,
   "name": "Common Childhood Rashes: Diagnosis & When to Refer",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-04-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 8500,
    "ai": 5000,
    "review": 8500,
    "writing": 15500,
    "shoot": 16000,
    "other": 4500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jun",
   "delayReason": ""
  },
  {
   "id": 22,
   "name": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Harsha MG",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-05-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11500,
    "prep": 9500,
    "ai": 7000,
    "review": 8000,
    "writing": 19000,
    "shoot": 21500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jul",
   "delayReason": ""
  },
  {
   "id": 23,
   "name": "Acute Abdomen: GP Red Flags & Initial Steps",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Vidhya Vijayan",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-05-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 9500,
    "prep": 7000,
    "ai": 5000,
    "review": 7000,
    "writing": 13500,
    "shoot": 17000,
    "other": 3500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jul",
   "delayReason": ""
  },
  {
   "id": 24,
   "name": "Chest X-Ray Interpretation for Non-Radiologists",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "2026-04-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11000,
    "prep": 9000,
    "ai": 6500,
    "review": 8500,
    "writing": 17500,
    "shoot": 19000,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jun",
   "delayReason": ""
  },
  {
   "id": 25,
   "name": "Fellowship in EM",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Vidhya Vijayan",
   "director": "Dr.Nikhil Paul",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-03-20",
   "assigned": "Vidhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 67000,
    "prep": 44000,
    "ai": 35500,
    "review": 53500,
    "writing": 81500,
    "shoot": 108500,
    "other": 20500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 26,
   "name": "Fellowship in OBG",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Harsha MG",
   "director": "Dr. Priti Anandh",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "High",
   "actualInit": "2026-04-01",
   "assigned": "Harsha",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 80500,
    "prep": 65500,
    "ai": 33000,
    "review": 52500,
    "writing": 119000,
    "shoot": 134000,
    "other": 26500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "May",
   "delayReason": ""
  },
  {
   "id": 27,
   "name": "Reproductive Medicine Fellowship- Sali Hospital",
   "segment": "Skill Enhancement",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Hybrid",
   "coordinator": "Shabna",
   "director": "Dr. Dhavashree",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q1",
   "priority": "",
   "actualInit": "",
   "assigned": "Shabna",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 53000,
    "prep": 49000,
    "ai": 28000,
    "review": 43000,
    "writing": 78000,
    "shoot": 99500,
    "other": 19500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": ""
  },
  {
   "id": 28,
   "name": "USMLE 3",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "Dr. Zayed Shaik",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "High",
   "actualInit": "2026-03-18",
   "assigned": "Delsy",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 50000,
    "prep": 30000,
    "ai": 15000,
    "review": 25000,
    "writing": 45000,
    "shoot": 80000,
    "other": 0,
    "note": "Sample — replace",
    "source": "Company sample figures"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 29,
   "name": "EDAIC Oral",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Saniya",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "High",
   "actualInit": "2026-06-01",
   "assigned": "Saniya",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 24500,
    "prep": 17500,
    "ai": 12500,
    "review": 19000,
    "writing": 32000,
    "shoot": 44000,
    "other": 11000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 30,
   "name": "Fellowship in Speech and Language Therapy",
   "segment": "Skill Enhancement",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Harsha MG",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "2026-06-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 88500,
    "prep": 64000,
    "ai": 47500,
    "review": 57000,
    "writing": 117000,
    "shoot": 125000,
    "other": 31000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 31,
   "name": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Saniya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-06-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 13000,
    "prep": 8500,
    "ai": 6000,
    "review": 10000,
    "writing": 20000,
    "shoot": 18500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 32,
   "name": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Vidhya Vijayan",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-08-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 8500,
    "ai": 5500,
    "review": 9000,
    "writing": 15000,
    "shoot": 20000,
    "other": 4500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 33,
   "name": "Home-Based Palliative Care for Terminal Illness",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Saniya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-08-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11000,
    "prep": 8500,
    "ai": 5500,
    "review": 9000,
    "writing": 18000,
    "shoot": 18000,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 34,
   "name": "Recognizing Depression in Primary Care",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Harsha MG",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-07-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 10500,
    "ai": 8500,
    "review": 12000,
    "writing": 22500,
    "shoot": 21000,
    "other": 6500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 35,
   "name": "Postpartum Complications & Emergency Referrals",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Delsy Davis",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-07-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10000,
    "prep": 7500,
    "ai": 5500,
    "review": 7500,
    "writing": 15500,
    "shoot": 14000,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 36,
   "name": "Basic MSK Imaging in Primary Care",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-06-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 5500,
    "ai": 3500,
    "review": 6500,
    "writing": 9000,
    "shoot": 10500,
    "other": 2500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 37,
   "name": "Ovulation Induction : what to choose for whom-",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "",
   "actualInit": "2026-06-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 14000,
    "prep": 10500,
    "ai": 7500,
    "review": 9000,
    "writing": 19000,
    "shoot": 21500,
    "other": 5500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 38,
   "name": "Global Medical Library",
   "segment": "Skill Enhancement",
   "audience": "Doctors, Nurses, Allied health",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Aishwarya",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Anil -CEO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "High",
   "actualInit": "",
   "assigned": "Anshitha",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 29500,
    "prep": 24000,
    "ai": 14000,
    "review": 20500,
    "writing": 44500,
    "shoot": 54000,
    "other": 13500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": ""
  },
  {
   "id": 39,
   "name": "BPT",
   "segment": "Exam Preparatory",
   "audience": "Allied health",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Ansitha",
   "director": "Dr. Aboobacker sabith",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q2",
   "priority": "Medium",
   "actualInit": "2026-02-14",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 39500,
    "prep": 26000,
    "ai": 18000,
    "review": 27000,
    "writing": 48000,
    "shoot": 58000,
    "other": 14000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 40,
   "name": "FRCR -2B",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ongoing",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "Dr. Ebinesh",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "",
   "assigned": "Shahadhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "In Progress",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 41500,
    "prep": 32500,
    "ai": 27000,
    "review": 41000,
    "writing": 62000,
    "shoot": 88000,
    "other": 18500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 41,
   "name": "AMC CAT MCQ",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "Dr.Thanmay",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2025-05-01",
   "assigned": "Shahadhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 21500,
    "prep": 18000,
    "ai": 12500,
    "review": 20500,
    "writing": 39500,
    "shoot": 37000,
    "other": 11000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 42,
   "name": "IBCLC",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "Dr. Charu Karla",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2025-05-02",
   "assigned": "Shahadhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 34500,
    "prep": 27000,
    "ai": 20000,
    "review": 27500,
    "writing": 60500,
    "shoot": 66000,
    "other": 14000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 43,
   "name": "MRCPsych PAPER A",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Vidhya Vijayan",
   "director": "Dr. Raga Sandhya Gandhi",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "",
   "assigned": "Vidhiya",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 33500,
    "prep": 23500,
    "ai": 18000,
    "review": 28500,
    "writing": 46000,
    "shoot": 59500,
    "other": 11500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Oct",
   "delayReason": ""
  },
  {
   "id": 44,
   "name": "MSRA",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "Dr. Hari",
   "mentorPanel": "Yes",
   "proposedBy": "Anil -CEO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2025-08-25",
   "assigned": "Delsy",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 44000,
    "prep": 31500,
    "ai": 27000,
    "review": 33000,
    "writing": 68500,
    "shoot": 65500,
    "other": 21000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jan",
   "delayReason": ""
  },
  {
   "id": 45,
   "name": "Fellowship in Critical Care Nursing",
   "segment": "Skill Enhancement",
   "audience": "Nurses",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 55000,
    "prep": 41500,
    "ai": 34500,
    "review": 53500,
    "writing": 77000,
    "shoot": 114000,
    "other": 25000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Logistical issues since face to face training at the moment is not possible"
  },
  {
   "id": 46,
   "name": "Fellowship in Emergency & Trauma Nursing",
   "segment": "Skill Enhancement",
   "audience": "Nurses",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 100500,
    "prep": 76500,
    "ai": 44000,
    "review": 78500,
    "writing": 146500,
    "shoot": 129500,
    "other": 35000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Logistical issues since face to face training at the moment is not possible"
  },
  {
   "id": 47,
   "name": "Fellowship in Geriatric Nursing",
   "segment": "Skill Enhancement",
   "audience": "Nurses",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 71000,
    "prep": 58000,
    "ai": 33500,
    "review": 61500,
    "writing": 92500,
    "shoot": 107500,
    "other": 25500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Logistical issues since face to face training at the moment is not possible"
  },
  {
   "id": 48,
   "name": "Fellowship in Midwifery Nursing",
   "segment": "Skill Enhancement",
   "audience": "Nurses",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 91000,
    "prep": 60000,
    "ai": 40000,
    "review": 76000,
    "writing": 125500,
    "shoot": 147000,
    "other": 40000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Logistical issues since face to face training at the moment is not possible"
  },
  {
   "id": 49,
   "name": "Fellowship in Neonatal Nursing",
   "segment": "Skill Enhancement",
   "audience": "Nurses",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 99000,
    "prep": 61500,
    "ai": 43000,
    "review": 70500,
    "writing": 119000,
    "shoot": 149000,
    "other": 38000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Logistical issues since face to face training at the moment is not possible"
  },
  {
   "id": 50,
   "name": "FRCA Primary",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Anil -CEO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "Medium",
   "actualInit": "2026-07-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 38500,
    "prep": 28500,
    "ai": 19000,
    "review": 37500,
    "writing": 57500,
    "shoot": 60500,
    "other": 18500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Nov",
   "delayReason": ""
  },
  {
   "id": 51,
   "name": "FRCpath Part 2 (Histo-Pathology)",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2026-07-01",
   "assigned": "Shabna",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 37000,
    "prep": 29000,
    "ai": 17500,
    "review": 27000,
    "writing": 49000,
    "shoot": 56000,
    "other": 15000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Nov",
   "delayReason": ""
  },
  {
   "id": 52,
   "name": "MRCPsych CASC",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Vidhya Vijayan",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2026-08-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 32500,
    "prep": 26000,
    "ai": 20000,
    "review": 25500,
    "writing": 51000,
    "shoot": 62000,
    "other": 12500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Dec",
   "delayReason": ""
  },
  {
   "id": 53,
   "name": "Precocious Puberty",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Aishwarya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 13500,
    "prep": 11500,
    "ai": 8000,
    "review": 13000,
    "writing": 19500,
    "shoot": 22500,
    "other": 5500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 54,
   "name": "Antibiotic Stewardship",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Aishwarya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 6500,
    "ai": 5500,
    "review": 6500,
    "writing": 13500,
    "shoot": 16500,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Aug",
   "delayReason": ""
  },
  {
   "id": 55,
   "name": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Harsha MG",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "",
   "actualInit": "2026-09-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 14500,
    "prep": 13000,
    "ai": 7000,
    "review": 10500,
    "writing": 20000,
    "shoot": 22500,
    "other": 5500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Nov",
   "delayReason": ""
  },
  {
   "id": 56,
   "name": "Chronic Disease Counselling & Goal Setting with Families",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Shahdiya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "",
   "actualInit": "2026-09-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 5500,
    "ai": 3500,
    "review": 6000,
    "writing": 11500,
    "shoot": 14000,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Nov",
   "delayReason": ""
  },
  {
   "id": 57,
   "name": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Delsy Davis",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "",
   "actualInit": "2026-10-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11500,
    "prep": 9000,
    "ai": 6500,
    "review": 8500,
    "writing": 20000,
    "shoot": 20500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Dec",
   "delayReason": ""
  },
  {
   "id": 58,
   "name": "Breaking Mental Health Stigma in Clinical Consultations",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "",
   "actualInit": "2026-11-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 11000,
    "ai": 6500,
    "review": 10500,
    "writing": 19500,
    "shoot": 22000,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jan",
   "delayReason": ""
  },
  {
   "id": 59,
   "name": "Polypharmacy & Deprescribing in the Elderly",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Saniya",
   "director": "Dr. Sowmya NS",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-01-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10000,
    "prep": 8000,
    "ai": 5500,
    "review": 9000,
    "writing": 15500,
    "shoot": 16500,
    "other": 4500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Mar",
   "delayReason": ""
  },
  {
   "id": 60,
   "name": "Sepsis Management",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-02-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 11500,
    "prep": 10000,
    "ai": 5500,
    "review": 8500,
    "writing": 18000,
    "shoot": 16500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 61,
   "name": "Diabetic Ketoacidosis in Pregnancy",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Vidhya Vijayan",
   "director": "Dr. Sowmya NS",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-01-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 11500,
    "ai": 8000,
    "review": 10500,
    "writing": 20500,
    "shoot": 24500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Mar",
   "delayReason": ""
  },
  {
   "id": 62,
   "name": "NEET PG",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "Dr. Sowmya NS",
   "mentorPanel": "No",
   "proposedBy": "Anil -CEO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "High",
   "actualInit": "2026-02-26",
   "assigned": "Delsy",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 26000,
    "prep": 18500,
    "ai": 11000,
    "review": 20500,
    "writing": 38000,
    "shoot": 37000,
    "other": 9000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Feb",
   "delayReason": ""
  },
  {
   "id": 63,
   "name": "Fellowship in Geriatric Physiotherapy",
   "segment": "Skill Enhancement",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 81500,
    "prep": 54500,
    "ai": 38000,
    "review": 66500,
    "writing": 120500,
    "shoot": 138000,
    "other": 31500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 64,
   "name": "Managing Febrile Seizures in Children",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Harsha MG",
   "director": "Dr. Sowmya NS",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-01-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7000,
    "prep": 5500,
    "ai": 4000,
    "review": 5500,
    "writing": 13000,
    "shoot": 12500,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Mar",
   "delayReason": ""
  },
  {
   "id": 65,
   "name": "Antenatal Red Flags: What GPs Should Never Miss",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Shahdiya",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-02-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 9500,
    "ai": 6500,
    "review": 9500,
    "writing": 20500,
    "shoot": 23500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 66,
   "name": "Basic Assessment of Infertility in Primary Care",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2026-02-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12000,
    "prep": 9500,
    "ai": 7500,
    "review": 10500,
    "writing": 21500,
    "shoot": 25000,
    "other": 6500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 67,
   "name": "FRCS Section 2 (General Surgery)",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Harsha MG",
   "director": "Dr. Akshay Bavikatte",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q3",
   "priority": "High",
   "actualInit": "2026-05-01",
   "assigned": "Harsha",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 32000,
    "prep": 23000,
    "ai": 16500,
    "review": 24000,
    "writing": 42000,
    "shoot": 59000,
    "other": 12500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Sep",
   "delayReason": ""
  },
  {
   "id": 68,
   "name": "Fellowship in Cardiorespiratory Physiotherapy",
   "segment": "Skill Enhancement",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q4",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 88000,
    "prep": 67000,
    "ai": 44000,
    "review": 82000,
    "writing": 137500,
    "shoot": 150000,
    "other": 41500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Mar",
   "delayReason": ""
  },
  {
   "id": 69,
   "name": "Fellowship in Neuro Rehabilitation",
   "segment": "Skill Enhancement",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Saniya",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q4",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 85500,
    "prep": 63500,
    "ai": 46500,
    "review": 76000,
    "writing": 116500,
    "shoot": 149500,
    "other": 32500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 70,
   "name": "Fellowship in Trauma & Sports Medicine",
   "segment": "Skill Enhancement",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "Anshitha",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q4",
   "priority": "Medium",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 60000,
    "prep": 40500,
    "ai": 28000,
    "review": 48500,
    "writing": 81500,
    "shoot": 100500,
    "other": 21000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Dec",
   "delayReason": ""
  },
  {
   "id": 71,
   "name": "PLAB 2",
   "segment": "Exam Preparatory",
   "audience": "Doctors",
   "focus": "",
   "status": "Ready for Launch",
   "type": "Exam Prep",
   "mode": "Online",
   "coordinator": "Delsy Davis",
   "director": "Dr. Ashitha Nair",
   "mentorPanel": "Yes",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "25-26",
   "quarter": "Q4",
   "priority": "High",
   "actualInit": "2025-09-27",
   "assigned": "Delsy",
   "remarks": "",
   "stages": [
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Not Required",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    },
    {
     "status": "Completed",
     "approvals": {
      "pc": "Approved",
      "coo": "Approved",
      "vp": "Approved",
      "manager": "Approved"
     }
    }
   ],
   "cost": {
    "pc": 41500,
    "prep": 29000,
    "ai": 22000,
    "review": 31500,
    "writing": 54500,
    "shoot": 56000,
    "other": 15500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Jan",
   "delayReason": ""
  },
  {
   "id": 72,
   "name": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Delsy Davis",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2027-02-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 8000,
    "ai": 5500,
    "review": 10000,
    "writing": 19000,
    "shoot": 22500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Apr",
   "delayReason": ""
  },
  {
   "id": 73,
   "name": "HIV: Clinical Updates for Non-Specialists",
   "segment": "CPD",
   "audience": "Doctors",
   "focus": "",
   "status": "Pending",
   "type": "Skill Enhancement",
   "mode": "",
   "coordinator": "Shabna",
   "director": "",
   "mentorPanel": "",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "26-27",
   "quarter": "Q4",
   "priority": "",
   "actualInit": "2027-01-01",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11500,
    "prep": 8500,
    "ai": 6000,
    "review": 11000,
    "writing": 18500,
    "shoot": 20500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "Mar",
   "delayReason": ""
  },
  {
   "id": 74,
   "name": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11000,
    "prep": 10500,
    "ai": 7000,
    "review": 9000,
    "writing": 18000,
    "shoot": 21000,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 75,
   "name": "Common Pediatric Emergencies & Diagnostic Pathways",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7000,
    "prep": 6500,
    "ai": 4000,
    "review": 6000,
    "writing": 11000,
    "shoot": 13500,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 76,
   "name": "Diagnosing Infectious Diseases in Africa",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 7000,
    "ai": 5500,
    "review": 8500,
    "writing": 14000,
    "shoot": 19000,
    "other": 3500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 77,
   "name": "Diagnosing Labor Complications & Partograph Use",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 9000,
    "prep": 5500,
    "ai": 3500,
    "review": 6000,
    "writing": 12000,
    "shoot": 12000,
    "other": 3500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 78,
   "name": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 5500,
    "ai": 4500,
    "review": 6000,
    "writing": 12500,
    "shoot": 12500,
    "other": 2500,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 79,
   "name": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7000,
    "prep": 6500,
    "ai": 4000,
    "review": 6500,
    "writing": 12000,
    "shoot": 12000,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 80,
   "name": "First Trimester Bleeding: Diagnosis & Management",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 6000,
    "ai": 4000,
    "review": 5500,
    "writing": 8500,
    "shoot": 10000,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 81,
   "name": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 12500,
    "prep": 10000,
    "ai": 6000,
    "review": 9500,
    "writing": 21500,
    "shoot": 22500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 82,
   "name": "Infertility Evaluation in Primary Care",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 8000,
    "ai": 5000,
    "review": 8500,
    "writing": 13500,
    "shoot": 18500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 83,
   "name": "Integrated Diagnostics for Non-Communicable Diseases",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 4500,
    "ai": 3500,
    "review": 5500,
    "writing": 10000,
    "shoot": 11500,
    "other": 2000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 84,
   "name": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 15000,
    "prep": 9500,
    "ai": 6500,
    "review": 10000,
    "writing": 20000,
    "shoot": 26000,
    "other": 6000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 85,
   "name": "Neonatal Diagnostics in Low-Resource Settings",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 9500,
    "prep": 9500,
    "ai": 5000,
    "review": 7500,
    "writing": 17000,
    "shoot": 16500,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 86,
   "name": "Obstetric Ultrasound for GPs and Residents",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 10500,
    "prep": 8000,
    "ai": 5500,
    "review": 7500,
    "writing": 15500,
    "shoot": 18000,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 87,
   "name": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 7500,
    "prep": 6000,
    "ai": 4500,
    "review": 7000,
    "writing": 11000,
    "shoot": 12000,
    "other": 3000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 88,
   "name": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 11500,
    "prep": 9500,
    "ai": 5500,
    "review": 8000,
    "writing": 13000,
    "shoot": 17500,
    "other": 4000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  },
  {
   "id": 89,
   "name": "Triage & Syndromic Diagnostic Reasoning",
   "segment": "CPD",
   "audience": "Allied health",
   "focus": "",
   "status": "Rejected",
   "type": "Skill Enhancement",
   "mode": "Online",
   "coordinator": "",
   "director": "",
   "mentorPanel": "No",
   "proposedBy": "Dr.Sowmya -COO",
   "fy": "",
   "quarter": "",
   "priority": "",
   "actualInit": "",
   "assigned": "Anshitha",
   "remarks": "",
   "stages": [
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Not Required",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    },
    {
     "status": "Not Started",
     "approvals": {
      "pc": "Pending",
      "coo": "Pending",
      "vp": "Pending",
      "manager": "Pending"
     }
    }
   ],
   "cost": {
    "pc": 15500,
    "prep": 11500,
    "ai": 6500,
    "review": 10000,
    "writing": 18500,
    "shoot": 25500,
    "other": 5000,
    "note": "",
    "source": "Estimate — replace with finance actuals"
   },
   "completionMonth": "",
   "delayReason": "Planning to replace with other courses"
  }
 ],
 "accreditations": [
  {
   "id": "ACC-016",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "American Board of Emergency Medicine (ABEM)",
   "country": "United States",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-017",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "European Society For Emergency Medicine",
   "country": "Belgium",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-020",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "International Federation for Emergency Medicine (IFEM)",
   "country": "Australia",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-021",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "Royal College of Emergency Medicine",
   "country": "United Kingdom",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-022",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "Society for Emergency Medicine India (SEMI)",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-023",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "United Kingdom Accreditation Forum",
   "country": "London",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-024",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "American College of Surgeons Accredited Education Institutes (ACS AEI)",
   "country": "United States",
   "level": "International",
   "type": "Institutional",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-026",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Association of Surgeons of India (ASI)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-027",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Indian Association of Gastrointestinal Endo Surgeons (IAGES)",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-028",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Royal College of Surgeons in Ireland (RCSI)",
   "country": "Ireland",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-029",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Royal College of Surgeons of Edinburgh (RCSEd)",
   "country": "United Kingdom",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-030",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Royal College of Surgeons of England (RCS England)",
   "country": "United Kingdom",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-031",
   "program": "FELLOWSHIP IN OBG",
   "body": "American College of Obstetricians and Gynecologists (ACOG) Joint Providership",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-032",
   "program": "FELLOWSHIP IN OBG",
   "body": "Amrutha University",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-033",
   "program": "FELLOWSHIP IN OBG",
   "body": "College of Sexual and Reproductive Healthcare (CoSRH, formerly FSRH)",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-034",
   "program": "FELLOWSHIP IN OBG",
   "body": "Dr. M.G.R. Medical University",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-035",
   "program": "FELLOWSHIP IN OBG",
   "body": "Federation of Obstetric and Gynaecological Societies of India and ICOG (FOGSI and ICOG)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-036",
   "program": "FELLOWSHIP IN OBG",
   "body": "International Board of Medical Practitioners",
   "country": "United States",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-037",
   "program": "FELLOWSHIP IN OBG",
   "body": "International Federation of Gynecology and Obstetrics (FIGO)",
   "country": "United Kingdom",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-038",
   "program": "FELLOWSHIP IN OBG",
   "body": "Kalinga University of Medical Sciences",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-039",
   "program": "FELLOWSHIP IN OBG",
   "body": "Royal Australian and New Zealand College of Obstetricians and Gynaecologists (RANZCOG) CPD Activity Approval",
   "country": "Australia",
   "level": "Specialty-Specific",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-040",
   "program": "FELLOWSHIP IN OBG",
   "body": "Royal college of obstetricians and gynaecologists",
   "country": "London",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-041",
   "program": "FELLOWSHIP IN OBG",
   "body": "Royal College of Obstetricians and Gynaecologists (RCOG) International Accreditation",
   "country": "United Kingdom",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-042",
   "program": "FELLOWSHIP IN OBG",
   "body": "Royal college of physicians and surgeons of glasgow",
   "country": "Glasgow",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-043",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "American Academy of Orthopaedic Surgeons (AAOS) Joint Providership",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-044",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "AO Foundation and AO Trauma CME Accreditation",
   "country": "Switzerland",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-045",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "Association of Spine Surgeons of India (ASSI)",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-046",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "British Orthopaedic Association and RCS England CPD Accreditation",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-047",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "Indian Orthopaedic Association (IOA)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-048",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "Indian Orthopaedic Research Group and IGOF Fellowship Network",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "On Hold",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-049",
   "program": "FELLOWSHIP IN ORTHOPAEDICS",
   "body": "SICOT, International Society of Orthopaedic Surgery and Traumatology",
   "country": "Belgium",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-050",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "American Academy of Pediatrics (AAP) Joint Providership",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-051",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "European Academy of Paediatrics (EAP)",
   "country": "Belgium",
   "level": "Specialty-Specific",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-052",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "Indian Academy of Pediatrics and Indian College of Pediatrics (IAP and ICP)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-054",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "Royal Australasian College of Physicians (RACP) CPD Recognition and Assessment Framework",
   "country": "Australia",
   "level": "Specialty-Specific",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-055",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "Royal College of Paediatrics and Child Health (RCPCH) CPD Approval",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-056",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "Royal College of Paediatrics and Child Health (RCPCH) Educational Endorsement",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-057",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "American Society for Reproductive Medicine (ASRM)",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-058",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "British Fertility Society (BFS)",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-059",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "College of Sexual and Reproductive Healthcare (CoSRH, formerly FSRH)",
   "country": "United Kingdom",
   "level": "Specialty-Specific",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-060",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "ESHRE and EBCOG Accreditation of MAR Centres for Reproductive Medicine Training",
   "country": "Belgium",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-061",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "Indian Fertility Society (IFS)",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-062",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "Indian Society for Assisted Reproduction (ISAR)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-063",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "International Board of Medical Practitioners",
   "country": "Middletown",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-064",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "International Federation of Fertility Societies (IFFS)",
   "country": "United States",
   "level": "International",
   "type": "College Approval",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-065",
   "program": "FELLOWSHIP IN REPRODUCTIVE MEDICINE",
   "body": "The College of Sexual & Reproductive Healthcare",
   "country": "London",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-066",
   "program": "MRCS PART A",
   "body": "Royal College of Edinburg",
   "country": "Scotland",
   "level": "International",
   "type": "Exam Prep",
   "priority": "",
   "status": "In Review",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-014",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "UEMS European Accreditation Council for Continuing Medical Education (EACCME)",
   "country": "Belgium",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Evaluation Pending",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-001",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Accreditation Council for Continuing Medical Education (ACCME)",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-008",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Joint Accreditation for Interprofessional Continuing Education",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-012",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Royal College of Physicians and Surgeons of Canada, MOC CPD Accreditation",
   "country": "Canada",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-002",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Accreditation Service for International Schools, Colleges and Universities (ASIC)",
   "country": "United Kingdom",
   "level": "Institutional",
   "type": "Institutional",
   "priority": "",
   "status": "On Hold",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-011",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Quality Licence Scheme",
   "country": "United Kingdom",
   "level": "Institutional",
   "type": "Other",
   "priority": "",
   "status": "On Hold",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-007",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "International Association for Continuing Education and Training (IACET)",
   "country": "United States",
   "level": "International",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-003",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "ACGME International (ACGME-I)",
   "country": "United States",
   "level": "International",
   "type": "Fellowship",
   "priority": "",
   "status": "On Hold",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-009",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "National Board of Examinations in Medical Sciences (NBEMS) and NMC recognition route",
   "country": "India",
   "level": "National",
   "type": "Fellowship",
   "priority": "",
   "status": "On Hold",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-005",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Dubai Health Authority (DHA) CPD Accreditation",
   "country": "United Arab Emirates",
   "level": "National",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-004",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Department of Health Abu Dhabi (DoH) CPD Provider and Program Approval",
   "country": "United Arab Emirates",
   "level": "National",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-006",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Emirates Health Services (EHS) CPD Accreditation",
   "country": "United Arab Emirates",
   "level": "National",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-013",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Saudi Commission for Health Specialties (SCFHS) CPD Activities Accreditation",
   "country": "Saudi Arabia",
   "level": "National",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-010",
   "program": "ALL FELLOWSHIP PROGRAMS",
   "body": "Qatar Ministry of Public Health, Department of Healthcare Professions CPD Accreditation",
   "country": "Qatar",
   "level": "National",
   "type": "CME/CPD",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-015",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "Academic College of Emergency Experts in India (ACEE-India)",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "New Lead",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-019",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "Indian Society of Critical Care Medicine (ISCCM)",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-018",
   "program": "FELLOWSHIP IN EMERGENCY MEDICINE",
   "body": "Healthcare Sector Skill Council (HSSC) with SEMI emergency courses",
   "country": "India",
   "level": "National",
   "type": "Programmatic",
   "priority": "",
   "status": "Researching",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-025",
   "program": "FELLOWSHIP IN GENERAL SURGERY",
   "body": "Association of Minimal Access Surgeons of India (AMASI)",
   "country": "India",
   "level": "Specialty-Specific",
   "type": "Fellowship",
   "priority": "",
   "status": "New Lead",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  },
  {
   "id": "ACC-053",
   "program": "FELLOWSHIP IN PEDIATRICS",
   "body": "Indian Academy of Pediatrics and Indian College of Pediatrics (IAP/ICP)",
   "country": "India",
   "level": "National",
   "type": "College Approval",
   "priority": "",
   "status": "New Lead",
   "owner": "",
   "appDate": "",
   "validFrom": "",
   "validTill": "",
   "renewal": "",
   "fee": 0,
   "feeStatus": "",
   "notes": ""
  }
 ],
 "mentors": [
  {
   "id": 1,
   "course": "FRCA OSCE & SOE",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 2,
   "course": "FRCS Section 1 (General Surgery)",
   "name": "Dr. Subhash Patil",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "subhash.p@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 3,
   "course": "FRCS Section 1 (General Surgery)",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 4,
   "course": "FRCS Section 1 (General Surgery)",
   "name": "Dr. Subhash Patil",
   "role": "Mentor",
   "qualification": "MS, FRCS",
   "specialty": "General Surgery",
   "email": "subhash.p@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 5,
   "course": "MRE",
   "name": "Dr. Sirisha",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sirisha@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 6,
   "course": "MRE",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 7,
   "course": "MRE",
   "name": "Dr. Sirisha",
   "role": "Mentor",
   "qualification": "MD",
   "specialty": "Radiology",
   "email": "sirisha@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 8,
   "course": "AMC Clinical",
   "name": "Dr. Vishwesh",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "vishwesh@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 9,
   "course": "AMC Clinical",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 10,
   "course": "EDAIC Part 1",
   "name": "Dr. Ann Susan",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "ann@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 11,
   "course": "EDAIC Part 1",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 12,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 13,
   "course": "MRCPsych PAPER B",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 14,
   "course": "Fellowship in Radiology",
   "name": "Dr. Sachin Baluthar",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sachin@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 15,
   "course": "Fellowship in Radiology",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 16,
   "course": "Fellowship in GS",
   "name": "Dr. Sujay",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sujay@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 17,
   "course": "Fellowship in GS",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 18,
   "course": "Fellowship in Orthopedics",
   "name": "Dr. Rashith Chakrawarthy",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "rashith@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 19,
   "course": "Fellowship in Orthopedics",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 20,
   "course": "Fellowship in Pediatrics",
   "name": "Dr. Balaji Chinnaswami",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "balaji@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 21,
   "course": "Fellowship in Pediatrics",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 22,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 23,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 24,
   "course": "Breaking Bad News",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 25,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 26,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 27,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 28,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 29,
   "course": "Fellowship in EM",
   "name": "Dr.Nikhil Paul",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "nikhil@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 30,
   "course": "Fellowship in EM",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 31,
   "course": "Fellowship in OBG",
   "name": "Dr. Priti Anandh",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "priti@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 32,
   "course": "Fellowship in OBG",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 33,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "name": "Dr. Dhavashree",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "dhavashree@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 34,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 35,
   "course": "USMLE 3",
   "name": "Dr. Zayed Shaik",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "zayed@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 36,
   "course": "USMLE 3",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 37,
   "course": "USMLE 3",
   "name": "Dr. Zayed Shaik",
   "role": "Mentor",
   "qualification": "MD",
   "specialty": "Internal Medicine",
   "email": "zayed@example.com",
   "phone": "",
   "link": ""
  },
  {
   "id": 38,
   "course": "EDAIC Oral",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 39,
   "course": "Fellowship in Speech and Language Therapy",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 40,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 41,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 42,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 43,
   "course": "Recognizing Depression in Primary Care",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 44,
   "course": "Postpartum Complications & Emergency Referrals",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 45,
   "course": "Basic MSK Imaging in Primary Care",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 46,
   "course": "Ovulation Induction : what to choose for whom-",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 47,
   "course": "Global Medical Library",
   "name": "Aishwarya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "aishwarya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 48,
   "course": "BPT",
   "name": "Dr. Aboobacker sabith",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "aboobacker@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 49,
   "course": "BPT",
   "name": "Ansitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "ansitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 50,
   "course": "FRCR -2B",
   "name": "Dr. Ebinesh",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "ebinesh@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 51,
   "course": "FRCR -2B",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 52,
   "course": "AMC CAT MCQ",
   "name": "Dr.Thanmay",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "thanmay@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 53,
   "course": "AMC CAT MCQ",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 54,
   "course": "IBCLC",
   "name": "Dr. Charu Karla",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "charu@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 55,
   "course": "IBCLC",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 56,
   "course": "MRCPsych PAPER A",
   "name": "Dr. Raga Sandhya Gandhi",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "raga@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 57,
   "course": "MRCPsych PAPER A",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 58,
   "course": "MSRA",
   "name": "Dr. Hari",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "hari@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 59,
   "course": "MSRA",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 60,
   "course": "FRCA Primary",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 61,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 62,
   "course": "MRCPsych CASC",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 63,
   "course": "Precocious Puberty",
   "name": "Aishwarya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "aishwarya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 64,
   "course": "Antibiotic Stewardship",
   "name": "Aishwarya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "aishwarya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 65,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 66,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 67,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 68,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 69,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "name": "Dr. Sowmya NS",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 70,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 71,
   "course": "Sepsis Management",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 72,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "name": "Dr. Sowmya NS",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 73,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "name": "Vidhya Vijayan",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 74,
   "course": "NEET PG",
   "name": "Dr. Sowmya NS",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 75,
   "course": "NEET PG",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 76,
   "course": "Fellowship in Geriatric Physiotherapy",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 77,
   "course": "Managing Febrile Seizures in Children",
   "name": "Dr. Sowmya NS",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 78,
   "course": "Managing Febrile Seizures in Children",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 79,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "name": "Shahdiya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 80,
   "course": "Basic Assessment of Infertility in Primary Care",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 81,
   "course": "FRCS Section 2 (General Surgery)",
   "name": "Dr. Akshay Bavikatte",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "akshay@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 82,
   "course": "FRCS Section 2 (General Surgery)",
   "name": "Harsha MG",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "harsha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 83,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 84,
   "course": "Fellowship in Neuro Rehabilitation",
   "name": "Saniya",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "saniya@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 85,
   "course": "Fellowship in Trauma & Sports Medicine",
   "name": "Anshitha",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 86,
   "course": "PLAB 2",
   "name": "Dr. Ashitha Nair",
   "role": "CD",
   "qualification": "",
   "specialty": "",
   "email": "ashitha@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 87,
   "course": "PLAB 2",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 88,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "name": "Delsy Davis",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "delsy@studymedic.example",
   "phone": "",
   "link": ""
  },
  {
   "id": 89,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "name": "Shabna",
   "role": "PC",
   "qualification": "",
   "specialty": "",
   "email": "shabna@studymedic.example",
   "phone": "",
   "link": ""
  }
 ],
 "payments": [
  {
   "id": 1,
   "course": "FRCS Section 1 (General Surgery)",
   "mentor": "Dr. Subhash Patil",
   "agreed": 150000,
   "paid": 75000,
   "lastDate": "",
   "notes": "",
   "payhead": "CD allowance"
  },
  {
   "id": 2,
   "course": "MRE",
   "mentor": "Dr. Sirisha",
   "agreed": 120000,
   "paid": 120000,
   "lastDate": "",
   "notes": "",
   "payhead": "CD allowance"
  },
  {
   "id": 3,
   "course": "USMLE 3",
   "mentor": "Dr. Zayed Shaik",
   "agreed": 100000,
   "paid": 0,
   "lastDate": "",
   "notes": "",
   "payhead": "CD allowance"
  },
  {
   "course": "FRCS Section 1 (General Surgery)",
   "mentor": "Harsha MG",
   "payhead": "PC allowance",
   "agreed": 50000,
   "paid": 25000,
   "id": 4,
   "lastDate": "",
   "notes": "Sample — replace with actuals"
  },
  {
   "course": "MRE",
   "mentor": "Shahdiya",
   "payhead": "PC allowance",
   "agreed": 40000,
   "paid": 40000,
   "id": 5,
   "lastDate": "",
   "notes": "Sample — replace with actuals"
  },
  {
   "course": "USMLE 3",
   "mentor": "Assistant Coordinator",
   "payhead": "ACD allowance",
   "agreed": 30000,
   "paid": 0,
   "id": 6,
   "lastDate": "",
   "notes": "Sample — replace with actuals"
  },
  {
   "course": "MRE",
   "mentor": "Video Production Team",
   "payhead": "Preparatory Videos allowance",
   "agreed": 60000,
   "paid": 20000,
   "id": 7,
   "lastDate": "",
   "notes": "Sample — replace with actuals"
  },
  {
   "course": "FRCS Section 1 (General Surgery)",
   "mentor": "Miscellaneous",
   "payhead": "Others",
   "agreed": 15000,
   "paid": 15000,
   "id": 8,
   "lastDate": "",
   "notes": "Sample — replace with actuals"
  }
 ],
 "content": [
  {
   "id": 1,
   "course": "FRCA OSCE & SOE",
   "ctype": "Summary",
   "planned": 142,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 2,
   "course": "FRCA OSCE & SOE",
   "ctype": "Audio Podcast",
   "planned": 140,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 3,
   "course": "FRCA OSCE & SOE",
   "ctype": "Flashcard",
   "planned": 436,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 4,
   "course": "FRCA OSCE & SOE",
   "ctype": "MCQ",
   "planned": 970,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 5,
   "course": "FRCA OSCE & SOE",
   "ctype": "SAQ",
   "planned": 282,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 6,
   "course": "FRCA OSCE & SOE",
   "ctype": "LAQ",
   "planned": 315,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 7,
   "course": "FRCA OSCE & SOE",
   "ctype": "Video",
   "planned": 51,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 8,
   "course": "FRCA OSCE & SOE",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 9,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "Summary",
   "planned": 169,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 10,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "Audio Podcast",
   "planned": 144,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 11,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "Flashcard",
   "planned": 396,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 12,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "MCQ",
   "planned": 1080,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 13,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "SAQ",
   "planned": 330,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 14,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "LAQ",
   "planned": 345,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 15,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "Video",
   "planned": 61,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 16,
   "course": "FRCS Section 1 (General Surgery)",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 17,
   "course": "MRE",
   "ctype": "Summary",
   "planned": 172,
   "done": 172,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 18,
   "course": "MRE",
   "ctype": "Audio Podcast",
   "planned": 163,
   "done": 163,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 19,
   "course": "MRE",
   "ctype": "Flashcard",
   "planned": 424,
   "done": 424,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 20,
   "course": "MRE",
   "ctype": "MCQ",
   "planned": 960,
   "done": 960,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 21,
   "course": "MRE",
   "ctype": "SAQ",
   "planned": 333,
   "done": 333,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 22,
   "course": "MRE",
   "ctype": "LAQ",
   "planned": 258,
   "done": 258,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 23,
   "course": "MRE",
   "ctype": "Video",
   "planned": 67,
   "done": 67,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 24,
   "course": "MRE",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 11,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 25,
   "course": "AMC Clinical",
   "ctype": "Summary",
   "planned": 171,
   "done": 86,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 26,
   "course": "AMC Clinical",
   "ctype": "Audio Podcast",
   "planned": 153,
   "done": 76,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 27,
   "course": "AMC Clinical",
   "ctype": "Flashcard",
   "planned": 368,
   "done": 184,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 28,
   "course": "AMC Clinical",
   "ctype": "MCQ",
   "planned": 1110,
   "done": 555,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 29,
   "course": "AMC Clinical",
   "ctype": "SAQ",
   "planned": 342,
   "done": 171,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 30,
   "course": "AMC Clinical",
   "ctype": "LAQ",
   "planned": 294,
   "done": 147,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 31,
   "course": "AMC Clinical",
   "ctype": "Video",
   "planned": 56,
   "done": 28,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 32,
   "course": "AMC Clinical",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 4,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 33,
   "course": "EDAIC Part 1",
   "ctype": "Summary",
   "planned": 148,
   "done": 74,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 34,
   "course": "EDAIC Part 1",
   "ctype": "Audio Podcast",
   "planned": 152,
   "done": 76,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 35,
   "course": "EDAIC Part 1",
   "ctype": "Flashcard",
   "planned": 444,
   "done": 222,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 36,
   "course": "EDAIC Part 1",
   "ctype": "MCQ",
   "planned": 910,
   "done": 455,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 37,
   "course": "EDAIC Part 1",
   "ctype": "SAQ",
   "planned": 261,
   "done": 130,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 38,
   "course": "EDAIC Part 1",
   "ctype": "LAQ",
   "planned": 345,
   "done": 172,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 39,
   "course": "EDAIC Part 1",
   "ctype": "Video",
   "planned": 52,
   "done": 26,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 40,
   "course": "EDAIC Part 1",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 41,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "Summary",
   "planned": 148,
   "done": 74,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 42,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "Audio Podcast",
   "planned": 147,
   "done": 74,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 43,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "Flashcard",
   "planned": 436,
   "done": 218,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 44,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "MCQ",
   "planned": 870,
   "done": 435,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 45,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "SAQ",
   "planned": 309,
   "done": 154,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 46,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "LAQ",
   "planned": 282,
   "done": 141,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 47,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "Video",
   "planned": 62,
   "done": 31,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 48,
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 49,
   "course": "MRCPsych PAPER B",
   "ctype": "Summary",
   "planned": 148,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 50,
   "course": "MRCPsych PAPER B",
   "ctype": "Audio Podcast",
   "planned": 160,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 51,
   "course": "MRCPsych PAPER B",
   "ctype": "Flashcard",
   "planned": 364,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 52,
   "course": "MRCPsych PAPER B",
   "ctype": "MCQ",
   "planned": 850,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 53,
   "course": "MRCPsych PAPER B",
   "ctype": "SAQ",
   "planned": 333,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 54,
   "course": "MRCPsych PAPER B",
   "ctype": "LAQ",
   "planned": 267,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 55,
   "course": "MRCPsych PAPER B",
   "ctype": "Video",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 56,
   "course": "MRCPsych PAPER B",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 57,
   "course": "DHA Nursing Exam",
   "ctype": "Summary",
   "planned": 165,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 58,
   "course": "DHA Nursing Exam",
   "ctype": "Audio Podcast",
   "planned": 136,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 59,
   "course": "DHA Nursing Exam",
   "ctype": "Flashcard",
   "planned": 396,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 60,
   "course": "DHA Nursing Exam",
   "ctype": "MCQ",
   "planned": 950,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 61,
   "course": "DHA Nursing Exam",
   "ctype": "SAQ",
   "planned": 315,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 62,
   "course": "DHA Nursing Exam",
   "ctype": "LAQ",
   "planned": 315,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 63,
   "course": "DHA Nursing Exam",
   "ctype": "Video",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 64,
   "course": "DHA Nursing Exam",
   "ctype": "Mock Test",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 65,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "Summary",
   "planned": 159,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 66,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "Audio Podcast",
   "planned": 135,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 67,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "Flashcard",
   "planned": 340,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 68,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "MCQ",
   "planned": 860,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 69,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "SAQ",
   "planned": 327,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 70,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "LAQ",
   "planned": 309,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 71,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "Video",
   "planned": 56,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 72,
   "course": "Kuwait MOH Prometric Nursing Exam",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 73,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "Summary",
   "planned": 142,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 74,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "Audio Podcast",
   "planned": 166,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 75,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "Flashcard",
   "planned": 400,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 76,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "MCQ",
   "planned": 1120,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 77,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "SAQ",
   "planned": 255,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 78,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "LAQ",
   "planned": 327,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 79,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "Video",
   "planned": 60,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 80,
   "course": "NCLEX-RN Exam – Canada",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 81,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "Summary",
   "planned": 160,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 82,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "Audio Podcast",
   "planned": 147,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 83,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "Flashcard",
   "planned": 424,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 84,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "MCQ",
   "planned": 910,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 85,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "SAQ",
   "planned": 306,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 86,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "LAQ",
   "planned": 312,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 87,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "Video",
   "planned": 53,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 88,
   "course": "NCLEX-RN Exam – UK",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 89,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "Summary",
   "planned": 130,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 90,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "Audio Podcast",
   "planned": 163,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 91,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "Flashcard",
   "planned": 380,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 92,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "MCQ",
   "planned": 1120,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 93,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "SAQ",
   "planned": 318,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 94,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "LAQ",
   "planned": 303,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 95,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "Video",
   "planned": 58,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 96,
   "course": "Qatar Prometric Nurse Exam",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 97,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "Summary",
   "planned": 152,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 98,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "Audio Podcast",
   "planned": 135,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 99,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "Flashcard",
   "planned": 356,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 100,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "MCQ",
   "planned": 1090,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 101,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "SAQ",
   "planned": 294,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 102,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "LAQ",
   "planned": 291,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 103,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "Video",
   "planned": 66,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 104,
   "course": "Saudi Nursing Licensing Exam",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 105,
   "course": "Fellowship in Radiology",
   "ctype": "Summary",
   "planned": 97,
   "done": 97,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 106,
   "course": "Fellowship in Radiology",
   "ctype": "Audio Podcast",
   "planned": 86,
   "done": 86,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 107,
   "course": "Fellowship in Radiology",
   "ctype": "Flashcard",
   "planned": 204,
   "done": 204,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 108,
   "course": "Fellowship in Radiology",
   "ctype": "MCQ",
   "planned": 372,
   "done": 372,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 109,
   "course": "Fellowship in Radiology",
   "ctype": "SAQ",
   "planned": 142,
   "done": 142,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 110,
   "course": "Fellowship in Radiology",
   "ctype": "LAQ",
   "planned": 172,
   "done": 172,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 111,
   "course": "Fellowship in Radiology",
   "ctype": "Video",
   "planned": 90,
   "done": 90,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 112,
   "course": "Fellowship in Radiology",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 113,
   "course": "Fellowship in GS",
   "ctype": "Summary",
   "planned": 102,
   "done": 102,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 114,
   "course": "Fellowship in GS",
   "ctype": "Audio Podcast",
   "planned": 70,
   "done": 70,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 115,
   "course": "Fellowship in GS",
   "ctype": "Flashcard",
   "planned": 182,
   "done": 182,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 116,
   "course": "Fellowship in GS",
   "ctype": "MCQ",
   "planned": 400,
   "done": 400,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 117,
   "course": "Fellowship in GS",
   "ctype": "SAQ",
   "planned": 171,
   "done": 171,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 118,
   "course": "Fellowship in GS",
   "ctype": "LAQ",
   "planned": 130,
   "done": 130,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 119,
   "course": "Fellowship in GS",
   "ctype": "Video",
   "planned": 77,
   "done": 77,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 120,
   "course": "Fellowship in GS",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 121,
   "course": "Fellowship in Orthopedics",
   "ctype": "Summary",
   "planned": 113,
   "done": 113,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 122,
   "course": "Fellowship in Orthopedics",
   "ctype": "Audio Podcast",
   "planned": 76,
   "done": 76,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 123,
   "course": "Fellowship in Orthopedics",
   "ctype": "Flashcard",
   "planned": 196,
   "done": 196,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 124,
   "course": "Fellowship in Orthopedics",
   "ctype": "MCQ",
   "planned": 440,
   "done": 440,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 125,
   "course": "Fellowship in Orthopedics",
   "ctype": "SAQ",
   "planned": 148,
   "done": 148,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 126,
   "course": "Fellowship in Orthopedics",
   "ctype": "LAQ",
   "planned": 158,
   "done": 158,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 127,
   "course": "Fellowship in Orthopedics",
   "ctype": "Video",
   "planned": 87,
   "done": 87,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 128,
   "course": "Fellowship in Orthopedics",
   "ctype": "Mock Test",
   "planned": 4,
   "done": 4,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 129,
   "course": "Fellowship in Pediatrics",
   "ctype": "Summary",
   "planned": 113,
   "done": 113,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 130,
   "course": "Fellowship in Pediatrics",
   "ctype": "Audio Podcast",
   "planned": 79,
   "done": 79,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 131,
   "course": "Fellowship in Pediatrics",
   "ctype": "Flashcard",
   "planned": 178,
   "done": 178,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 132,
   "course": "Fellowship in Pediatrics",
   "ctype": "MCQ",
   "planned": 416,
   "done": 416,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 133,
   "course": "Fellowship in Pediatrics",
   "ctype": "SAQ",
   "planned": 171,
   "done": 171,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 134,
   "course": "Fellowship in Pediatrics",
   "ctype": "LAQ",
   "planned": 154,
   "done": 154,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 135,
   "course": "Fellowship in Pediatrics",
   "ctype": "Video",
   "planned": 86,
   "done": 86,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 136,
   "course": "Fellowship in Pediatrics",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 137,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "Summary",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 138,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 139,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "Flashcard",
   "planned": 46,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 140,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "MCQ",
   "planned": 51,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 141,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "SAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 142,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "LAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 143,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 144,
   "course": "Approach to Chest Pain in the Outpatient Setting",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 145,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 146,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 147,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "Flashcard",
   "planned": 43,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 148,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "MCQ",
   "planned": 52,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 149,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "SAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 150,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "LAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 151,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 152,
   "course": "Growth Monitoring & Nutrition in Under-5s",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 153,
   "course": "Breaking Bad News",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 154,
   "course": "Breaking Bad News",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 155,
   "course": "Breaking Bad News",
   "ctype": "Flashcard",
   "planned": 36,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 156,
   "course": "Breaking Bad News",
   "ctype": "MCQ",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 157,
   "course": "Breaking Bad News",
   "ctype": "SAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 158,
   "course": "Breaking Bad News",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 159,
   "course": "Breaking Bad News",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 160,
   "course": "Breaking Bad News",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 161,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 162,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 163,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "Flashcard",
   "planned": 41,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 164,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "MCQ",
   "planned": 58,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 165,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "SAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 166,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "LAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 167,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 168,
   "course": "Common Childhood Rashes: Diagnosis & When to Refer",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 169,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 170,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 171,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "Flashcard",
   "planned": 36,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 172,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "MCQ",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 173,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 174,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 175,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 176,
   "course": "Starting Insulin in Type 2 Diabetes: A Practical Guide",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 177,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 178,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "Audio Podcast",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 179,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "Flashcard",
   "planned": 40,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 180,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "MCQ",
   "planned": 64,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 181,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "SAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 182,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 183,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 184,
   "course": "Acute Abdomen: GP Red Flags & Initial Steps",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 185,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "Summary",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 186,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 187,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "Flashcard",
   "planned": 42,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 188,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "MCQ",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 189,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 190,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 191,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 192,
   "course": "Chest X-Ray Interpretation for Non-Radiologists",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 193,
   "course": "Fellowship in EM",
   "ctype": "Summary",
   "planned": 85,
   "done": 85,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 194,
   "course": "Fellowship in EM",
   "ctype": "Audio Podcast",
   "planned": 76,
   "done": 76,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 195,
   "course": "Fellowship in EM",
   "ctype": "Flashcard",
   "planned": 226,
   "done": 226,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 196,
   "course": "Fellowship in EM",
   "ctype": "MCQ",
   "planned": 448,
   "done": 448,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 197,
   "course": "Fellowship in EM",
   "ctype": "SAQ",
   "planned": 166,
   "done": 166,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 198,
   "course": "Fellowship in EM",
   "ctype": "LAQ",
   "planned": 153,
   "done": 153,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 199,
   "course": "Fellowship in EM",
   "ctype": "Video",
   "planned": 78,
   "done": 78,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 200,
   "course": "Fellowship in EM",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 5,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 201,
   "course": "Fellowship in OBG",
   "ctype": "Summary",
   "planned": 109,
   "done": 109,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 202,
   "course": "Fellowship in OBG",
   "ctype": "Audio Podcast",
   "planned": 78,
   "done": 78,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 203,
   "course": "Fellowship in OBG",
   "ctype": "Flashcard",
   "planned": 178,
   "done": 178,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 204,
   "course": "Fellowship in OBG",
   "ctype": "MCQ",
   "planned": 352,
   "done": 352,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 205,
   "course": "Fellowship in OBG",
   "ctype": "SAQ",
   "planned": 172,
   "done": 172,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 206,
   "course": "Fellowship in OBG",
   "ctype": "LAQ",
   "planned": 172,
   "done": 172,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 207,
   "course": "Fellowship in OBG",
   "ctype": "Video",
   "planned": 73,
   "done": 73,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 208,
   "course": "Fellowship in OBG",
   "ctype": "Mock Test",
   "planned": 4,
   "done": 4,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 209,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "Summary",
   "planned": 90,
   "done": 90,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 210,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "Audio Podcast",
   "planned": 75,
   "done": 75,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 211,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "Flashcard",
   "planned": 196,
   "done": 196,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 212,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "MCQ",
   "planned": 396,
   "done": 396,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 213,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "SAQ",
   "planned": 138,
   "done": 138,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 214,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "LAQ",
   "planned": 154,
   "done": 154,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 215,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "Video",
   "planned": 79,
   "done": 79,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 216,
   "course": "Reproductive Medicine Fellowship- Sali Hospital",
   "ctype": "Mock Test",
   "planned": 6,
   "done": 6,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 217,
   "course": "USMLE 3",
   "ctype": "Summary",
   "planned": 140,
   "done": 70,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 218,
   "course": "USMLE 3",
   "ctype": "Audio Podcast",
   "planned": 136,
   "done": 68,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 219,
   "course": "USMLE 3",
   "ctype": "Flashcard",
   "planned": 356,
   "done": 178,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 220,
   "course": "USMLE 3",
   "ctype": "MCQ",
   "planned": 960,
   "done": 480,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 221,
   "course": "USMLE 3",
   "ctype": "SAQ",
   "planned": 339,
   "done": 170,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 222,
   "course": "USMLE 3",
   "ctype": "LAQ",
   "planned": 282,
   "done": 141,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 223,
   "course": "USMLE 3",
   "ctype": "Video",
   "planned": 55,
   "done": 28,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 224,
   "course": "USMLE 3",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 4,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 225,
   "course": "EDAIC Oral",
   "ctype": "Summary",
   "planned": 136,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 226,
   "course": "EDAIC Oral",
   "ctype": "Audio Podcast",
   "planned": 147,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 227,
   "course": "EDAIC Oral",
   "ctype": "Flashcard",
   "planned": 412,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 228,
   "course": "EDAIC Oral",
   "ctype": "MCQ",
   "planned": 860,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 229,
   "course": "EDAIC Oral",
   "ctype": "SAQ",
   "planned": 294,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 230,
   "course": "EDAIC Oral",
   "ctype": "LAQ",
   "planned": 288,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 231,
   "course": "EDAIC Oral",
   "ctype": "Video",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 232,
   "course": "EDAIC Oral",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 233,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "Summary",
   "planned": 92,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 234,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "Audio Podcast",
   "planned": 79,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 235,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "Flashcard",
   "planned": 210,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 236,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "MCQ",
   "planned": 424,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 237,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "SAQ",
   "planned": 168,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 238,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "LAQ",
   "planned": 148,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 239,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "Video",
   "planned": 80,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 240,
   "course": "Fellowship in Speech and Language Therapy",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 241,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "Summary",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 242,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 243,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 244,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "MCQ",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 245,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "SAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 246,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "LAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 247,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 248,
   "course": "Skin Infections vs. Eczema: A Diagnostic Approach",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 249,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "Summary",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 250,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 251,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "Flashcard",
   "planned": 44,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 252,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "MCQ",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 253,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "SAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 254,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 255,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 256,
   "course": "Hypothyroidism in Primary Care: Diagnosis & Long-Term Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 257,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "Summary",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 258,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 259,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "Flashcard",
   "planned": 39,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 260,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "MCQ",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 261,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 262,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 263,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 264,
   "course": "Home-Based Palliative Care for Terminal Illness",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 265,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 266,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 267,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "Flashcard",
   "planned": 40,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 268,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "MCQ",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 269,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "SAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 270,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 271,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 272,
   "course": "Recognizing Depression in Primary Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 273,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "Summary",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 274,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 275,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "Flashcard",
   "planned": 43,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 276,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "MCQ",
   "planned": 61,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 277,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "SAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 278,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 279,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 280,
   "course": "Postpartum Complications & Emergency Referrals",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 281,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "Summary",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 282,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 283,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "Flashcard",
   "planned": 36,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 284,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "MCQ",
   "planned": 61,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 285,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 286,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 287,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 288,
   "course": "Basic MSK Imaging in Primary Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 289,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "Summary",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 290,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 291,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "Flashcard",
   "planned": 38,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 292,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "MCQ",
   "planned": 62,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 293,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 294,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "LAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 295,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 296,
   "course": "Ovulation Induction : what to choose for whom-",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 297,
   "course": "Global Medical Library",
   "ctype": "Summary",
   "planned": 92,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 298,
   "course": "Global Medical Library",
   "ctype": "Audio Podcast",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 299,
   "course": "Global Medical Library",
   "ctype": "Flashcard",
   "planned": 198,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 300,
   "course": "Global Medical Library",
   "ctype": "MCQ",
   "planned": 452,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 301,
   "course": "Global Medical Library",
   "ctype": "SAQ",
   "planned": 165,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 302,
   "course": "Global Medical Library",
   "ctype": "LAQ",
   "planned": 158,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 303,
   "course": "Global Medical Library",
   "ctype": "Video",
   "planned": 82,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 304,
   "course": "Global Medical Library",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 305,
   "course": "BPT",
   "ctype": "Summary",
   "planned": 160,
   "done": 80,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 306,
   "course": "BPT",
   "ctype": "Audio Podcast",
   "planned": 158,
   "done": 79,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 307,
   "course": "BPT",
   "ctype": "Flashcard",
   "planned": 440,
   "done": 220,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 308,
   "course": "BPT",
   "ctype": "MCQ",
   "planned": 930,
   "done": 465,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 309,
   "course": "BPT",
   "ctype": "SAQ",
   "planned": 318,
   "done": 159,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 310,
   "course": "BPT",
   "ctype": "LAQ",
   "planned": 297,
   "done": 148,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 311,
   "course": "BPT",
   "ctype": "Video",
   "planned": 58,
   "done": 29,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 312,
   "course": "BPT",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 6,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 313,
   "course": "FRCR -2B",
   "ctype": "Summary",
   "planned": 172,
   "done": 86,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 314,
   "course": "FRCR -2B",
   "ctype": "Audio Podcast",
   "planned": 153,
   "done": 76,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 315,
   "course": "FRCR -2B",
   "ctype": "Flashcard",
   "planned": 392,
   "done": 196,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 316,
   "course": "FRCR -2B",
   "ctype": "MCQ",
   "planned": 950,
   "done": 475,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 317,
   "course": "FRCR -2B",
   "ctype": "SAQ",
   "planned": 321,
   "done": 160,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 318,
   "course": "FRCR -2B",
   "ctype": "LAQ",
   "planned": 336,
   "done": 168,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 319,
   "course": "FRCR -2B",
   "ctype": "Video",
   "planned": 52,
   "done": 26,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 320,
   "course": "FRCR -2B",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 6,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 321,
   "course": "AMC CAT MCQ",
   "ctype": "Summary",
   "planned": 144,
   "done": 144,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 322,
   "course": "AMC CAT MCQ",
   "ctype": "Audio Podcast",
   "planned": 148,
   "done": 148,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 323,
   "course": "AMC CAT MCQ",
   "ctype": "Flashcard",
   "planned": 380,
   "done": 380,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 324,
   "course": "AMC CAT MCQ",
   "ctype": "MCQ",
   "planned": 1060,
   "done": 1060,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 325,
   "course": "AMC CAT MCQ",
   "ctype": "SAQ",
   "planned": 336,
   "done": 336,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 326,
   "course": "AMC CAT MCQ",
   "ctype": "LAQ",
   "planned": 255,
   "done": 255,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 327,
   "course": "AMC CAT MCQ",
   "ctype": "Video",
   "planned": 60,
   "done": 60,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 328,
   "course": "AMC CAT MCQ",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 11,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 329,
   "course": "IBCLC",
   "ctype": "Summary",
   "planned": 150,
   "done": 150,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 330,
   "course": "IBCLC",
   "ctype": "Audio Podcast",
   "planned": 146,
   "done": 146,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 331,
   "course": "IBCLC",
   "ctype": "Flashcard",
   "planned": 424,
   "done": 424,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 332,
   "course": "IBCLC",
   "ctype": "MCQ",
   "planned": 1050,
   "done": 1050,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 333,
   "course": "IBCLC",
   "ctype": "SAQ",
   "planned": 276,
   "done": 276,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 334,
   "course": "IBCLC",
   "ctype": "LAQ",
   "planned": 291,
   "done": 291,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 335,
   "course": "IBCLC",
   "ctype": "Video",
   "planned": 53,
   "done": 53,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 336,
   "course": "IBCLC",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 10,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 337,
   "course": "MRCPsych PAPER A",
   "ctype": "Summary",
   "planned": 156,
   "done": 156,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 338,
   "course": "MRCPsych PAPER A",
   "ctype": "Audio Podcast",
   "planned": 136,
   "done": 136,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 339,
   "course": "MRCPsych PAPER A",
   "ctype": "Flashcard",
   "planned": 380,
   "done": 380,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 340,
   "course": "MRCPsych PAPER A",
   "ctype": "MCQ",
   "planned": 900,
   "done": 900,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 341,
   "course": "MRCPsych PAPER A",
   "ctype": "SAQ",
   "planned": 309,
   "done": 309,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 342,
   "course": "MRCPsych PAPER A",
   "ctype": "LAQ",
   "planned": 324,
   "done": 324,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 343,
   "course": "MRCPsych PAPER A",
   "ctype": "Video",
   "planned": 66,
   "done": 66,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 344,
   "course": "MRCPsych PAPER A",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 9,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 345,
   "course": "MSRA",
   "ctype": "Summary",
   "planned": 171,
   "done": 171,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 346,
   "course": "MSRA",
   "ctype": "Audio Podcast",
   "planned": 165,
   "done": 165,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 347,
   "course": "MSRA",
   "ctype": "Flashcard",
   "planned": 344,
   "done": 344,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 348,
   "course": "MSRA",
   "ctype": "MCQ",
   "planned": 880,
   "done": 880,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 349,
   "course": "MSRA",
   "ctype": "SAQ",
   "planned": 300,
   "done": 300,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 350,
   "course": "MSRA",
   "ctype": "LAQ",
   "planned": 264,
   "done": 264,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 351,
   "course": "MSRA",
   "ctype": "Video",
   "planned": 61,
   "done": 61,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 352,
   "course": "MSRA",
   "ctype": "Mock Test",
   "planned": 12,
   "done": 12,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 353,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "Summary",
   "planned": 112,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 354,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "Audio Podcast",
   "planned": 83,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 355,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "Flashcard",
   "planned": 190,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 356,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "MCQ",
   "planned": 424,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 357,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "SAQ",
   "planned": 158,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 358,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "LAQ",
   "planned": 171,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 359,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "Video",
   "planned": 74,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 360,
   "course": "Fellowship in Critical Care Nursing",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 361,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "Summary",
   "planned": 88,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 362,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "Audio Podcast",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 363,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "Flashcard",
   "planned": 180,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 364,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "MCQ",
   "planned": 364,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 365,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "SAQ",
   "planned": 150,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 366,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "LAQ",
   "planned": 152,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 367,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "Video",
   "planned": 77,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 368,
   "course": "Fellowship in Emergency & Trauma Nursing",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 369,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "Summary",
   "planned": 91,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 370,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "Audio Podcast",
   "planned": 79,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 371,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "Flashcard",
   "planned": 174,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 372,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "MCQ",
   "planned": 376,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 373,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "SAQ",
   "planned": 154,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 374,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "LAQ",
   "planned": 147,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 375,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "Video",
   "planned": 79,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 376,
   "course": "Fellowship in Geriatric Nursing",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 377,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "Summary",
   "planned": 114,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 378,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "Audio Podcast",
   "planned": 77,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 379,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "Flashcard",
   "planned": 200,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 380,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "MCQ",
   "planned": 400,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 381,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "SAQ",
   "planned": 172,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 382,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "LAQ",
   "planned": 172,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 383,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "Video",
   "planned": 82,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 384,
   "course": "Fellowship in Midwifery Nursing",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 385,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "Summary",
   "planned": 86,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 386,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "Audio Podcast",
   "planned": 86,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 387,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "Flashcard",
   "planned": 174,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 388,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "MCQ",
   "planned": 456,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 389,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "SAQ",
   "planned": 148,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 390,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "LAQ",
   "planned": 129,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 391,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "Video",
   "planned": 90,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 392,
   "course": "Fellowship in Neonatal Nursing",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 393,
   "course": "FRCA Primary",
   "ctype": "Summary",
   "planned": 144,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 394,
   "course": "FRCA Primary",
   "ctype": "Audio Podcast",
   "planned": 135,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 395,
   "course": "FRCA Primary",
   "ctype": "Flashcard",
   "planned": 400,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 396,
   "course": "FRCA Primary",
   "ctype": "MCQ",
   "planned": 1050,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 397,
   "course": "FRCA Primary",
   "ctype": "SAQ",
   "planned": 327,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 398,
   "course": "FRCA Primary",
   "ctype": "LAQ",
   "planned": 339,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 399,
   "course": "FRCA Primary",
   "ctype": "Video",
   "planned": 56,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 400,
   "course": "FRCA Primary",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 401,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "Summary",
   "planned": 144,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 402,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "Audio Podcast",
   "planned": 130,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 403,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "Flashcard",
   "planned": 460,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 404,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "MCQ",
   "planned": 990,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 405,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "SAQ",
   "planned": 327,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 406,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "LAQ",
   "planned": 258,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 407,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "Video",
   "planned": 62,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 408,
   "course": "FRCpath Part 2 (Histo-Pathology)",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 409,
   "course": "MRCPsych CASC",
   "ctype": "Summary",
   "planned": 138,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 410,
   "course": "MRCPsych CASC",
   "ctype": "Audio Podcast",
   "planned": 171,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 411,
   "course": "MRCPsych CASC",
   "ctype": "Flashcard",
   "planned": 380,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 412,
   "course": "MRCPsych CASC",
   "ctype": "MCQ",
   "planned": 1100,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 413,
   "course": "MRCPsych CASC",
   "ctype": "SAQ",
   "planned": 321,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 414,
   "course": "MRCPsych CASC",
   "ctype": "LAQ",
   "planned": 324,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 415,
   "course": "MRCPsych CASC",
   "ctype": "Video",
   "planned": 69,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 416,
   "course": "MRCPsych CASC",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 417,
   "course": "Precocious Puberty",
   "ctype": "Summary",
   "planned": 18,
   "done": 18,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 418,
   "course": "Precocious Puberty",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 9,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 419,
   "course": "Precocious Puberty",
   "ctype": "Flashcard",
   "planned": 41,
   "done": 41,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 420,
   "course": "Precocious Puberty",
   "ctype": "MCQ",
   "planned": 54,
   "done": 54,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 421,
   "course": "Precocious Puberty",
   "ctype": "SAQ",
   "planned": 18,
   "done": 18,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 422,
   "course": "Precocious Puberty",
   "ctype": "LAQ",
   "planned": 23,
   "done": 23,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 423,
   "course": "Precocious Puberty",
   "ctype": "Video",
   "planned": 7,
   "done": 7,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 424,
   "course": "Precocious Puberty",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 2,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 425,
   "course": "Antibiotic Stewardship",
   "ctype": "Summary",
   "planned": 22,
   "done": 22,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 426,
   "course": "Antibiotic Stewardship",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 11,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 427,
   "course": "Antibiotic Stewardship",
   "ctype": "Flashcard",
   "planned": 39,
   "done": 39,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 428,
   "course": "Antibiotic Stewardship",
   "ctype": "MCQ",
   "planned": 56,
   "done": 56,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 429,
   "course": "Antibiotic Stewardship",
   "ctype": "SAQ",
   "planned": 17,
   "done": 17,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 430,
   "course": "Antibiotic Stewardship",
   "ctype": "LAQ",
   "planned": 17,
   "done": 17,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 431,
   "course": "Antibiotic Stewardship",
   "ctype": "Video",
   "planned": 9,
   "done": 9,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 432,
   "course": "Antibiotic Stewardship",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 2,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 433,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 434,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 435,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "Flashcard",
   "planned": 35,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 436,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "MCQ",
   "planned": 67,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 437,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "SAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 438,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 439,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 440,
   "course": "Recognizing and Managing Hypertensive Emergencies in Primary Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 441,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 442,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 443,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "Flashcard",
   "planned": 45,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 444,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "MCQ",
   "planned": 55,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 445,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 446,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 447,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 448,
   "course": "Chronic Disease Counselling & Goal Setting with Families",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 449,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 450,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 451,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "Flashcard",
   "planned": 45,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 452,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "MCQ",
   "planned": 59,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 453,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "SAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 454,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 455,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 456,
   "course": "Fever in the Returning Traveler (Malaria, Typhoid, etc.)",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 457,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 458,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 459,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 460,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "MCQ",
   "planned": 59,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 461,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 462,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "LAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 463,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 464,
   "course": "Breaking Mental Health Stigma in Clinical Consultations",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 465,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 466,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 467,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "Flashcard",
   "planned": 39,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 468,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "MCQ",
   "planned": 66,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 469,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "SAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 470,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 471,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 472,
   "course": "Polypharmacy & Deprescribing in the Elderly",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 473,
   "course": "Sepsis Management",
   "ctype": "Summary",
   "planned": 17,
   "done": 17,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 474,
   "course": "Sepsis Management",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 9,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 475,
   "course": "Sepsis Management",
   "ctype": "Flashcard",
   "planned": 36,
   "done": 36,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 476,
   "course": "Sepsis Management",
   "ctype": "MCQ",
   "planned": 62,
   "done": 62,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 477,
   "course": "Sepsis Management",
   "ctype": "SAQ",
   "planned": 23,
   "done": 23,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 478,
   "course": "Sepsis Management",
   "ctype": "LAQ",
   "planned": 18,
   "done": 18,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 479,
   "course": "Sepsis Management",
   "ctype": "Video",
   "planned": 7,
   "done": 7,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 480,
   "course": "Sepsis Management",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 2,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 481,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "Summary",
   "planned": 22,
   "done": 22,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 482,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 10,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 483,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "Flashcard",
   "planned": 46,
   "done": 46,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 484,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "MCQ",
   "planned": 62,
   "done": 62,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 485,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "SAQ",
   "planned": 19,
   "done": 19,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 486,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "LAQ",
   "planned": 20,
   "done": 20,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 487,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "Video",
   "planned": 7,
   "done": 7,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 488,
   "course": "Diabetic Ketoacidosis in Pregnancy",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 2,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 489,
   "course": "NEET PG",
   "ctype": "Summary",
   "planned": 134,
   "done": 134,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 490,
   "course": "NEET PG",
   "ctype": "Audio Podcast",
   "planned": 156,
   "done": 156,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 491,
   "course": "NEET PG",
   "ctype": "Flashcard",
   "planned": 420,
   "done": 420,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 492,
   "course": "NEET PG",
   "ctype": "MCQ",
   "planned": 1070,
   "done": 1070,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 493,
   "course": "NEET PG",
   "ctype": "SAQ",
   "planned": 312,
   "done": 312,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 494,
   "course": "NEET PG",
   "ctype": "LAQ",
   "planned": 330,
   "done": 330,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 495,
   "course": "NEET PG",
   "ctype": "Video",
   "planned": 59,
   "done": 59,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 496,
   "course": "NEET PG",
   "ctype": "Mock Test",
   "planned": 10,
   "done": 10,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 497,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "Summary",
   "planned": 115,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 498,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "Audio Podcast",
   "planned": 75,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 499,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "Flashcard",
   "planned": 170,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 500,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "MCQ",
   "planned": 388,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 501,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "SAQ",
   "planned": 162,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 502,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "LAQ",
   "planned": 169,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 503,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "Video",
   "planned": 91,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 504,
   "course": "Fellowship in Geriatric Physiotherapy",
   "ctype": "Mock Test",
   "planned": 4,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 505,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 506,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 507,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 508,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "MCQ",
   "planned": 62,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 509,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "SAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 510,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 511,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 512,
   "course": "Managing Febrile Seizures in Children",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 513,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 514,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 515,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "Flashcard",
   "planned": 37,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 516,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "MCQ",
   "planned": 61,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 517,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "SAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 518,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 519,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 520,
   "course": "Antenatal Red Flags: What GPs Should Never Miss",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 521,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 522,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 523,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "Flashcard",
   "planned": 40,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 524,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "MCQ",
   "planned": 60,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 525,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "SAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 526,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "LAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 527,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 528,
   "course": "Basic Assessment of Infertility in Primary Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 529,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "Summary",
   "planned": 162,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 530,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "Audio Podcast",
   "planned": 138,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 531,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "Flashcard",
   "planned": 352,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 532,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "MCQ",
   "planned": 1030,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 533,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "SAQ",
   "planned": 276,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 534,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "LAQ",
   "planned": 288,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 535,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "Video",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 536,
   "course": "FRCS Section 2 (General Surgery)",
   "ctype": "Mock Test",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 537,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "Summary",
   "planned": 106,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 538,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "Audio Podcast",
   "planned": 79,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 539,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "Flashcard",
   "planned": 178,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 540,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "MCQ",
   "planned": 396,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 541,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "SAQ",
   "planned": 159,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 542,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "LAQ",
   "planned": 138,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 543,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "Video",
   "planned": 78,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 544,
   "course": "Fellowship in Cardiorespiratory Physiotherapy",
   "ctype": "Mock Test",
   "planned": 4,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 545,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "Summary",
   "planned": 97,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 546,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "Audio Podcast",
   "planned": 82,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 547,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "Flashcard",
   "planned": 196,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 548,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "MCQ",
   "planned": 364,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 549,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "SAQ",
   "planned": 129,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 550,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "LAQ",
   "planned": 172,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 551,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "Video",
   "planned": 81,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 552,
   "course": "Fellowship in Neuro Rehabilitation",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 553,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "Summary",
   "planned": 91,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 554,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "Audio Podcast",
   "planned": 68,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 555,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "Flashcard",
   "planned": 184,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 556,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "MCQ",
   "planned": 388,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 557,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "SAQ",
   "planned": 132,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 558,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "LAQ",
   "planned": 141,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 559,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "Video",
   "planned": 82,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 560,
   "course": "Fellowship in Trauma & Sports Medicine",
   "ctype": "Mock Test",
   "planned": 5,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 561,
   "course": "PLAB 2",
   "ctype": "Summary",
   "planned": 128,
   "done": 128,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 562,
   "course": "PLAB 2",
   "ctype": "Audio Podcast",
   "planned": 134,
   "done": 134,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 563,
   "course": "PLAB 2",
   "ctype": "Flashcard",
   "planned": 368,
   "done": 368,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 564,
   "course": "PLAB 2",
   "ctype": "MCQ",
   "planned": 960,
   "done": 960,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 565,
   "course": "PLAB 2",
   "ctype": "SAQ",
   "planned": 291,
   "done": 291,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 566,
   "course": "PLAB 2",
   "ctype": "LAQ",
   "planned": 285,
   "done": 285,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 567,
   "course": "PLAB 2",
   "ctype": "Video",
   "planned": 62,
   "done": 62,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 568,
   "course": "PLAB 2",
   "ctype": "Mock Test",
   "planned": 9,
   "done": 9,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 569,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "Summary",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 570,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 571,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 572,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "MCQ",
   "planned": 63,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 573,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 574,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 575,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 576,
   "course": "Differentiating Scabies, Fungal Infections, and Bacterial Skin Lesions",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 577,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 578,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 579,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 580,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "MCQ",
   "planned": 69,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 581,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 582,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "LAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 583,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 584,
   "course": "HIV: Clinical Updates for Non-Specialists",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 585,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 586,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 587,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "Flashcard",
   "planned": 44,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 588,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "MCQ",
   "planned": 62,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 589,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 590,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 591,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 592,
   "course": "Cervical Cancer Screening & Diagnostic Follow-Up",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 593,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 594,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 595,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "Flashcard",
   "planned": 37,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 596,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "MCQ",
   "planned": 56,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 597,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 598,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 599,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 600,
   "course": "Common Pediatric Emergencies & Diagnostic Pathways",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 601,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 602,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "Audio Podcast",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 603,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "Flashcard",
   "planned": 44,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 604,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "MCQ",
   "planned": 63,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 605,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 606,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 607,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 608,
   "course": "Diagnosing Infectious Diseases in Africa",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 609,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "Summary",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 610,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 611,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "Flashcard",
   "planned": 44,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 612,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "MCQ",
   "planned": 69,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 613,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "SAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 614,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "LAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 615,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 616,
   "course": "Diagnosing Labor Complications & Partograph Use",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 617,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 618,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 619,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "Flashcard",
   "planned": 41,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 620,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "MCQ",
   "planned": 60,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 621,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "SAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 622,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "LAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 623,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 624,
   "course": "Essentials of Emergency Diagnostics in Low-Resource Settings",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 625,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "Summary",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 626,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 627,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "Flashcard",
   "planned": 36,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 628,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "MCQ",
   "planned": 55,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 629,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 630,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "LAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 631,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 632,
   "course": "Evaluation of Abnormal Uterine Bleeding (AUB)",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 633,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "Summary",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 634,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 635,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "Flashcard",
   "planned": 46,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 636,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "MCQ",
   "planned": 53,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 637,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "SAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 638,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "LAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 639,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 640,
   "course": "First Trimester Bleeding: Diagnosis & Management",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 641,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "Summary",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 642,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 643,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "Flashcard",
   "planned": 44,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 644,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "MCQ",
   "planned": 63,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 645,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "SAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 646,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 647,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 648,
   "course": "Hypertensive Disorders in Pregnancy: Diagnostic Mastery",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 649,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 650,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 651,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "Flashcard",
   "planned": 34,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 652,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "MCQ",
   "planned": 51,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 653,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 654,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 655,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 656,
   "course": "Infertility Evaluation in Primary Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 657,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "Summary",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 658,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 659,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "Flashcard",
   "planned": 37,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 660,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "MCQ",
   "planned": 62,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 661,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "SAQ",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 662,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "LAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 663,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 664,
   "course": "Integrated Diagnostics for Non-Communicable Diseases",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 665,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "Summary",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 666,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 667,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "Flashcard",
   "planned": 45,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 668,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "MCQ",
   "planned": 65,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 669,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "SAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 670,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 671,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 672,
   "course": "Interpreting Chest X-Rays & ECGs in Urgent Care",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 673,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 674,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 675,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "Flashcard",
   "planned": 42,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 676,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "MCQ",
   "planned": 59,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 677,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "SAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 678,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "LAQ",
   "planned": 23,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 679,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "Video",
   "planned": 8,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 680,
   "course": "Neonatal Diagnostics in Low-Resource Settings",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 681,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 682,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "Audio Podcast",
   "planned": 10,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 683,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "Flashcard",
   "planned": 39,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 684,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "MCQ",
   "planned": 52,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 685,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "SAQ",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 686,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 687,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "Video",
   "planned": 9,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 688,
   "course": "Obstetric Ultrasound for GPs and Residents",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 689,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 690,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 691,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "Flashcard",
   "planned": 37,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 692,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "MCQ",
   "planned": 51,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 693,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "SAQ",
   "planned": 19,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 694,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "LAQ",
   "planned": 22,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 695,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 696,
   "course": "Point-of-Care Ultrasound (POCUS) for GPs & Emergency Physicians",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 697,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "Summary",
   "planned": 18,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 698,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 699,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "Flashcard",
   "planned": 39,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 700,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "MCQ",
   "planned": 54,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 701,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "SAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 702,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "LAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 703,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 704,
   "course": "Postpartum Hemorrhage (PPH): Early Recognition & Diagnostics",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 705,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "Summary",
   "planned": 17,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 706,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "Audio Podcast",
   "planned": 11,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 707,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "Flashcard",
   "planned": 41,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 708,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "MCQ",
   "planned": 59,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 709,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "SAQ",
   "planned": 21,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 710,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "LAQ",
   "planned": 20,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 711,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "Video",
   "planned": 7,
   "done": 0,
   "assigned": "",
   "notes": ""
  },
  {
   "id": 712,
   "course": "Triage & Syndromic Diagnostic Reasoning",
   "ctype": "Mock Test",
   "planned": 2,
   "done": 0,
   "assigned": "",
   "notes": ""
  }
 ],
 "updated": "2026-07-01",
 "currency": "INR",
 "people": [
  {
   "name": "Dr. Subhash Patil",
   "email": "subhash.p@example.com",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "General Surgery",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Sirisha",
   "email": "sirisha@example.com",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "Radiology",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Zayed Shaik",
   "email": "zayed@example.com",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "Internal Medicine",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Anshitha",
   "email": "anshitha@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Anil -CEO",
   "email": "anil@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Harsha MG",
   "email": "harsha@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Shahdiya",
   "email": "shahdiya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr.Sowmya -COO",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Vishwesh",
   "email": "vishwesh@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Saniya",
   "email": "saniya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Ann Susan",
   "email": "ann@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Shabna",
   "email": "shabna@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Vidhya Vijayan",
   "email": "vidhya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Sachin Baluthar",
   "email": "sachin@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Sujay",
   "email": "sujay@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Rashith Chakrawarthy",
   "email": "rashith@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Balaji Chinnaswami",
   "email": "balaji@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Delsy Davis",
   "email": "delsy@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr.Nikhil Paul",
   "email": "nikhil@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Priti Anandh",
   "email": "priti@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Dhavashree",
   "email": "dhavashree@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Aishwarya",
   "email": "aishwarya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Ansitha",
   "email": "ansitha@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Aboobacker sabith",
   "email": "aboobacker@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Ebinesh",
   "email": "ebinesh@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr.Thanmay",
   "email": "thanmay@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Charu Karla",
   "email": "charu@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Raga Sandhya Gandhi",
   "email": "raga@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Hari",
   "email": "hari@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Sowmya NS",
   "email": "sowmya@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Akshay Bavikatte",
   "email": "akshay@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  },
  {
   "name": "Dr. Ashitha Nair",
   "email": "ashitha@studymedic.example",
   "phone": "",
   "photo": "",
   "resume": "",
   "specialty": "",
   "dept": "",
   "note": "Placeholder profile — add photo, phone and résumé link in pd_data.js"
  }
 ],
 "stageNames": [
  "Research Phase",
  "Feasibility Study",
  "Curriculum Development",
  "Content Development",
  "Content Review",
  "Uploading",
  "Course Library Completion"
 ],
 "approvers": {
  "coo": {
   "label": "COO",
   "name": "Dr. Sowmya"
  },
  "vp": {
   "label": "VP",
   "name": "Sreeraj"
  },
  "manager": {
   "label": "Manager",
   "name": "Athul"
  },
  "pc": {
   "label": "PC",
   "name": "Program Coordinator (per course)"
  }
 },
 "teamRoles": [
  "PC",
  "CD",
  "ACD",
  "Mentor",
  "Academic Adviser",
  "YouTube Influencer"
 ],
 "payHeads": [
  "PC allowance",
  "CD allowance",
  "ACD allowance",
  "Preparatory Videos allowance",
  "Others"
 ],
 "contentElements": [
  "Summary",
  "Audio Podcast",
  "Flashcard",
  "MCQ",
  "SAQ",
  "LAQ",
  "Video",
  "Mock Test"
 ],
 "planningTeam": [
  {
   "name": "Dr. Sowmya",
   "role": "COO",
   "dept": "Planning & Development",
   "responsibilities": "Final sign-off on every stage; strategic oversight of the P&D pipeline and course prioritisation."
  },
  {
   "name": "Sreeraj",
   "role": "VP",
   "dept": "Planning & Development",
   "responsibilities": "Stage-level approvals; resource allocation and cross-course planning."
  },
  {
   "name": "Athul",
   "role": "Manager",
   "dept": "Planning & Development",
   "responsibilities": "Day-to-day stage sign-offs; coordinates the planning team and tracks delivery timelines."
  },
  {
   "name": "Aishwarya",
   "role": "Planning Team Lead",
   "dept": "Planning & Development",
   "responsibilities": "Leads the planning coordinators; assigns and tracks tasks, consolidates stage progress and escalates blockers to management."
  },
  {
   "name": "Anshitha",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Harsha MG",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Shahdiya",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Saniya",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Shabna",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Vidhya Vijayan",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Delsy Davis",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  },
  {
   "name": "Ansitha",
   "role": "Planning Coordinator",
   "dept": "Planning & Development",
   "responsibilities": "Coordinates course development end-to-end; drives stages to completion and liaises with directors, mentors and reviewers."
  }
 ],
 "tasks": [
  {
   "id": "T-001",
   "assignee": "Aishwarya",
   "title": "Consolidate Q2 content plan across coordinators",
   "course": "",
   "priority": "High",
   "due": "2026-07-15",
   "status": "In Progress",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-002",
   "assignee": "Aishwarya",
   "title": "Review weekly stage-progress reports",
   "course": "",
   "priority": "Medium",
   "due": "2026-07-10",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-003",
   "assignee": "Anshitha",
   "title": "Advance FRCA OSCE & SOE to next stage",
   "course": "FRCA OSCE & SOE",
   "priority": "High",
   "due": "2026-07-20",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-004",
   "assignee": "Harsha MG",
   "title": "Advance FRCS Section 1 (General Surgery) to next stage",
   "course": "FRCS Section 1 (General Surgery)",
   "priority": "High",
   "due": "2026-07-20",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-005",
   "assignee": "Shahdiya",
   "title": "Advance MRE to next stage",
   "course": "MRE",
   "priority": "High",
   "due": "2026-07-20",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-006",
   "assignee": "Saniya",
   "title": "Advance EDAIC Part 1 to next stage",
   "course": "EDAIC Part 1",
   "priority": "High",
   "due": "2026-07-20",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  },
  {
   "id": "T-007",
   "assignee": "Shabna",
   "title": "Advance FRCpath Part 1 (Histo-Pathology) to next stage",
   "course": "FRCpath Part 1 (Histo-Pathology)",
   "priority": "High",
   "due": "2026-07-20",
   "status": "Assigned",
   "notes": "Sample task — edit or add in pd_data.js"
  }
 ],
 "taskStatuses": [
  "Assigned",
  "In Progress",
  "Done",
  "Blocked"
 ]
};
