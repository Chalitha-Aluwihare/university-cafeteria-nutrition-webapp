const nutritionHistory = [
  {
    userId: "U001",
    date: "2025-01-01",
    year: 2025,
    month: "January",
    day: "Wednesday",
    dayNo: 1,
    index: "01",
    meals: {
      breakfast: { calories: 320, carbs: 45, protein: 15, fat: 10 },
      lunch: { calories: 550, carbs: 70, protein: 25, fat: 20 },
      dinner: { calories: 480, carbs: 65, protein: 20, fat: 15 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-02",
    year: 2025,
    month: "January",
    day: "Thursday",
    dayNo: 2,
    index: "02",
    meals: {
      breakfast: { calories: 300, carbs: 40, protein: 12, fat: 8 },
      lunch: { calories: 600, carbs: 80, protein: 30, fat: 25 },
      dinner: { calories: 500, carbs: 60, protein: 22, fat: 18 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-03",
    year: 2025,
    month: "January",
    day: "Friday",
    dayNo: 3,
    index: "03",
    meals: {
      breakfast: { calories: 350, carbs: 48, protein: 18, fat: 9 },
      lunch: { calories: 580, carbs: 75, protein: 28, fat: 22 },
      dinner: { calories: 520, carbs: 68, protein: 24, fat: 17 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-04",
    year: 2025,
    month: "January",
    day: "Saturday",
    dayNo: 4,
    index: "04",
    meals: {
      breakfast: { calories: 310, carbs: 42, protein: 14, fat: 10 },
      lunch: { calories: 590, carbs: 78, protein: 27, fat: 21 },
      dinner: { calories: 510, carbs: 66, protein: 23, fat: 16 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-05",
    year: 2025,
    month: "January",
    day: "Sunday",
    dayNo: 5,
    index: "05",
    meals: {
      breakfast: { calories: 330, carbs: 44, protein: 16, fat: 9 },
      lunch: { calories: 620, carbs: 85, protein: 31, fat: 24 },
      dinner: { calories: 495, carbs: 63, protein: 21, fat: 14 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-06",
    year: 2025,
    month: "January",
    day: "Monday",
    dayNo: 6,
    index: "06",
    meals: {
      breakfast: { calories: 340, carbs: 46, protein: 17, fat: 11 },
      lunch: { calories: 610, carbs: 82, protein: 29, fat: 23 },
      dinner: { calories: 505, carbs: 67, protein: 22, fat: 15 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-07",
    year: 2025,
    month: "January",
    day: "Tuesday",
    dayNo: 7,
    index: "07",
    meals: {
      breakfast: { calories: 315, carbs: 41, protein: 13, fat: 9 },
      lunch: { calories: 580, carbs: 76, protein: 26, fat: 20 },
      dinner: { calories: 490, carbs: 64, protein: 20, fat: 14 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-08",
    year: 2025,
    month: "January",
    day: "Wednesday",
    dayNo: 8,
    index: "08",
    meals: {
      breakfast: { calories: 325, carbs: 43, protein: 15, fat: 10 },
      lunch: { calories: 590, carbs: 78, protein: 28, fat: 22 },
      dinner: { calories: 510, carbs: 65, protein: 23, fat: 16 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-09",
    year: 2025,
    month: "January",
    day: "Thursday",
    dayNo: 9,
    index: "09",
    meals: {
      breakfast: { calories: 335, carbs: 47, protein: 16, fat: 10 },
      lunch: { calories: 570, carbs: 74, protein: 27, fat: 21 },
      dinner: { calories: 525, carbs: 69, protein: 24, fat: 17 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-10",
    year: 2025,
    month: "January",
    day: "Friday",
    dayNo: 10,
    index: "10",
    meals: {
      breakfast: { calories: 345, carbs: 49, protein: 18, fat: 11 },
      lunch: { calories: 605, carbs: 81, protein: 29, fat: 23 },
      dinner: { calories: 515, carbs: 67, protein: 23, fat: 16 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-11",
    year: 2025,
    month: "January",
    day: "Saturday",
    dayNo: 11,
    index: "11",
    meals: {
      breakfast: { calories: 305, carbs: 42, protein: 14, fat: 9 },
      lunch: { calories: 585, carbs: 77, protein: 27, fat: 21 },
      dinner: { calories: 495, carbs: 64, protein: 21, fat: 15 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-12",
    year: 2025,
    month: "January",
    day: "Sunday",
    dayNo: 12,
    index: "12",
    meals: {
      breakfast: { calories: 355, carbs: 50, protein: 19, fat: 12 },
      lunch: { calories: 615, carbs: 83, protein: 30, fat: 24 },
      dinner: { calories: 530, carbs: 70, protein: 25, fat: 18 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-13",
    year: 2025,
    month: "January",
    day: "Monday",
    dayNo: 13,
    index: "13",
    meals: {
      breakfast: { calories: 365, carbs: 52, protein: 20, fat: 13 },
      lunch: { calories: 595, carbs: 79, protein: 28, fat: 22 },
      dinner: { calories: 540, carbs: 72, protein: 26, fat: 19 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-14",
    year: 2025,
    month: "January",
    day: "Tuesday",
    dayNo: 14,
    index: "14",
    meals: {
      breakfast: { calories: 375, carbs: 54, protein: 21, fat: 14 },
      lunch: { calories: 625, carbs: 85, protein: 32, fat: 25 },
      dinner: { calories: 550, carbs: 74, protein: 27, fat: 20 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-15",
    year: 2025,
    month: "January",
    day: "Wednesday",
    dayNo: 15,
    index: "15",
    meals: {
      breakfast: { calories: 385, carbs: 56, protein: 22, fat: 15 },
      lunch: { calories: 635, carbs: 87, protein: 33, fat: 26 },
      dinner: { calories: 560, carbs: 76, protein: 28, fat: 21 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-16",
    year: 2025,
    month: "January",
    day: "Thursday",
    dayNo: 16,
    index: "16",
    meals: {
      breakfast: { calories: 395, carbs: 58, protein: 23, fat: 16 },
      lunch: { calories: 645, carbs: 89, protein: 34, fat: 27 },
      dinner: { calories: 570, carbs: 78, protein: 29, fat: 22 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-17",
    year: 2025,
    month: "January",
    day: "Friday",
    dayNo: 17,
    index: "17",
    meals: {
      breakfast: { calories: 405, carbs: 60, protein: 24, fat: 17 },
      lunch: { calories: 655, carbs: 91, protein: 35, fat: 28 },
      dinner: { calories: 580, carbs: 80, protein: 30, fat: 23 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-18",
    year: 2025,
    month: "January",
    day: "Saturday",
    dayNo: 18,
    index: "18",
    meals: {
      breakfast: { calories: 415, carbs: 62, protein: 25, fat: 18 },
      lunch: { calories: 665, carbs: 93, protein: 36, fat: 29 },
      dinner: { calories: 590, carbs: 82, protein: 31, fat: 24 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-19",
    year: 2025,
    month: "January",
    day: "Sunday",
    dayNo: 19,
    index: "19",
    meals: {
      breakfast: { calories: 425, carbs: 64, protein: 26, fat: 19 },
      lunch: { calories: 675, carbs: 95, protein: 37, fat: 30 },
      dinner: { calories: 600, carbs: 84, protein: 32, fat: 25 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-20",
    year: 2025,
    month: "January",
    day: "Monday",
    dayNo: 20,
    index: "20",
    meals: {
      breakfast: { calories: 435, carbs: 66, protein: 27, fat: 20 },
      lunch: { calories: 685, carbs: 97, protein: 38, fat: 31 },
      dinner: { calories: 610, carbs: 86, protein: 33, fat: 26 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-21",
    year: 2025,
    month: "January",
    day: "Tuesday",
    dayNo: 21,
    index: "21",
    meals: {
      breakfast: { calories: 445, carbs: 68, protein: 28, fat: 21 },
      lunch: { calories: 695, carbs: 99, protein: 39, fat: 32 },
      dinner: { calories: 620, carbs: 88, protein: 34, fat: 27 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-22",
    year: 2025,
    month: "January",
    day: "Wednesday",
    dayNo: 22,
    index: "22",
    meals: {
      breakfast: { calories: 455, carbs: 70, protein: 29, fat: 22 },
      lunch: { calories: 705, carbs: 101, protein: 40, fat: 33 },
      dinner: { calories: 630, carbs: 90, protein: 35, fat: 28 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-23",
    year: 2025,
    month: "January",
    day: "Thursday",
    dayNo: 23,
    index: "23",
    meals: {
      breakfast: { calories: 465, carbs: 72, protein: 30, fat: 23 },
      lunch: { calories: 715, carbs: 103, protein: 41, fat: 34 },
      dinner: { calories: 640, carbs: 92, protein: 36, fat: 29 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-24",
    year: 2025,
    month: "January",
    day: "Friday",
    dayNo: 24,
    index: "24",
    meals: {
      breakfast: { calories: 475, carbs: 74, protein: 31, fat: 24 },
      lunch: { calories: 725, carbs: 105, protein: 42, fat: 35 },
      dinner: { calories: 650, carbs: 94, protein: 37, fat: 30 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-25",
    year: 2025,
    month: "January",
    day: "Saturday",
    dayNo: 25,
    index: "25",
    meals: {
      breakfast: { calories: 485, carbs: 76, protein: 32, fat: 25 },
      lunch: { calories: 735, carbs: 107, protein: 43, fat: 36 },
      dinner: { calories: 660, carbs: 96, protein: 38, fat: 31 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-26",
    year: 2025,
    month: "January",
    day: "Sunday",
    dayNo: 26,
    index: "26",
    meals: {
      breakfast: { calories: 495, carbs: 78, protein: 33, fat: 26 },
      lunch: { calories: 745, carbs: 109, protein: 44, fat: 37 },
      dinner: { calories: 670, carbs: 98, protein: 39, fat: 32 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-27",
    year: 2025,
    month: "January",
    day: "Monday",
    dayNo: 27,
    index: "27",
    meals: {
      breakfast: { calories: 505, carbs: 80, protein: 34, fat: 27 },
      lunch: { calories: 755, carbs: 111, protein: 45, fat: 38 },
      dinner: { calories: 680, carbs: 100, protein: 40, fat: 33 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-28",
    year: 2025,
    month: "January",
    day: "Tuesday",
    dayNo: 28,
    index: "28",
    meals: {
      breakfast: { calories: 515, carbs: 82, protein: 35, fat: 28 },
      lunch: { calories: 765, carbs: 113, protein: 46, fat: 39 },
      dinner: { calories: 690, carbs: 102, protein: 41, fat: 34 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-29",
    year: 2025,
    month: "January",
    day: "Wednesday",
    dayNo: 29,
    index: "29",
    meals: {
      breakfast: { calories: 525, carbs: 84, protein: 36, fat: 29 },
      lunch: { calories: 775, carbs: 115, protein: 47, fat: 40 },
      dinner: { calories: 700, carbs: 104, protein: 42, fat: 35 }
    }
  },
  {
    userId: "U001",
    date: "2025-01-30",
    year: 2025,
    month: "January",
    day: "Thursday",
    dayNo: 30,
    index: "30",
    meals: {
      breakfast: { calories: 535, carbs: 86, protein: 37, fat: 30 },
      lunch: { calories: 785, carbs: 117, protein: 48, fat: 41 },
      dinner: { calories: 710, carbs: 106, protein: 43, fat: 36 }
    },
  },
    
  // February 2025 Data
  {
    userId: "U001",
    date: "2025-02-01",
    year: 2025,
    month: "February",
    day: "Saturday",
    dayNo: 1,
    index: "31",
    meals: {
      breakfast: { calories: 520, carbs: 82, protein: 36, fat: 29 },
      lunch: { calories: 770, carbs: 115, protein: 47, fat: 40 },
      dinner: { calories: 700, carbs: 104, protein: 42, fat: 35 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-02",
    year: 2025,
    month: "February",
    day: "Sunday",
    dayNo: 2,
    index: "32",
    meals: {
      breakfast: { calories: 530, carbs: 85, protein: 37, fat: 30 },
      lunch: { calories: 780, carbs: 116, protein: 48, fat: 41 },
      dinner: { calories: 705, carbs: 105, protein: 43, fat: 36 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-03",
    year: 2025,
    month: "February",
    day: "Monday",
    dayNo: 3,
    index: "33",
    meals: {
      breakfast: { calories: 540, carbs: 87, protein: 38, fat: 31 },
      lunch: { calories: 790, carbs: 118, protein: 49, fat: 42 },
      dinner: { calories: 715, carbs: 107, protein: 44, fat: 37 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-04",
    year: 2025,
    month: "February",
    day: "Tuesday",
    dayNo: 4,
    index: "34",
    meals: {
      breakfast: { calories: 525, carbs: 83, protein: 36, fat: 30 },
      lunch: { calories: 775, carbs: 115, protein: 48, fat: 41 },
      dinner: { calories: 710, carbs: 106, protein: 43, fat: 36 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-05",
    year: 2025,
    month: "February",
    day: "Wednesday",
    dayNo: 5,
    index: "35",
    meals: {
      breakfast: { calories: 535, carbs: 86, protein: 37, fat: 31 },
      lunch: { calories: 785, carbs: 117, protein: 49, fat: 42 },
      dinner: { calories: 720, carbs: 108, protein: 44, fat: 37 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-06",
    year: 2025,
    month: "February",
    day: "Thursday",
    dayNo: 6,
    index: "36",
    meals: {
      breakfast: { calories: 545, carbs: 88, protein: 38, fat: 32 },
      lunch: { calories: 795, carbs: 119, protein: 50, fat: 43 },
      dinner: { calories: 725, carbs: 109, protein: 45, fat: 38 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-07",
    year: 2025,
    month: "February",
    day: "Friday",
    dayNo: 7,
    index: "37",
    meals: {
      breakfast: { calories: 550, carbs: 89, protein: 39, fat: 33 },
      lunch: { calories: 800, carbs: 120, protein: 51, fat: 44 },
      dinner: { calories: 730, carbs: 110, protein: 46, fat: 39 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-08",
    year: 2025,
    month: "February",
    day: "Saturday",
    dayNo: 8,
    index: "38",
    meals: {
      breakfast: { calories: 535, carbs: 86, protein: 37, fat: 32 },
      lunch: { calories: 790, carbs: 118, protein: 50, fat: 43 },
      dinner: { calories: 720, carbs: 108, protein: 45, fat: 38 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-09",
    year: 2025,
    month: "February",
    day: "Sunday",
    dayNo: 9,
    index: "39",
    meals: {
      breakfast: { calories: 525, carbs: 85, protein: 36, fat: 31 },
      lunch: { calories: 780, carbs: 116, protein: 49, fat: 42 },
      dinner: { calories: 710, carbs: 106, protein: 44, fat: 37 }
    }
  },
  {
    userId: "U001",
    date: "2025-02-10",
    year: 2025,
    month: "February",
    day: "Monday",
    dayNo: 10,
    index: "40",
    meals: {
      breakfast: { calories: 515, carbs: 83, protein: 35, fat: 30 },
      lunch: { calories: 770, carbs: 115, protein: 48, fat: 41 },
      dinner: { calories: 700, carbs: 105, protein: 43, fat: 36 }
    }
  },
  // Additional February days would continue here...
  {
    userId: "U001",
    date: "2025-02-28",
    year: 2025,
    month: "February",
    day: "Friday",
    dayNo: 28,
    index: "58",
    meals: {
      breakfast: { calories: 530, carbs: 85, protein: 37, fat: 31 },
      lunch: { calories: 780, carbs: 117, protein: 49, fat: 42 },
      dinner: { calories: 710, carbs: 106, protein: 44, fat: 37 }
    }
  }
];

export default nutritionHistory;

