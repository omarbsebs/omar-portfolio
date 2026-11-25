/**
 * ============================================================
 *  OMAR BSEBS PORTFOLIO — projects.js
 *  ملف إعداد المشاريع (متصل بـ Google Drive)
 * ============================================================
 */

const PROJECTS = [
  // ── Qasr Al-Asnan (14 Reels) ── Filmed & Edited
  { id: 1,  group: "Qasr Al-Asnan", title: "Dec 1",   category: "filmed", orientation: "portrait", form: "short", driveId: "1GvSyOtEd7xjAcX8NJgPSfH75qDKse05c", year: "2025" },
  { id: 2,  group: "Qasr Al-Asnan", title: "Dec 2",   category: "filmed", orientation: "portrait", form: "short", driveId: "1n7mY01K16FSCIHk4nxH0MwgojAxYPuT7", year: "2025" },
  { id: 3,  group: "Qasr Al-Asnan", title: "Dec 3",   category: "filmed", orientation: "portrait", form: "short", driveId: "19DK2-4en9_-fVS4ZngUBvrSG0Jn1Its6", year: "2025" },
  { id: 4,  group: "Qasr Al-Asnan", title: "Dec 4",   category: "filmed", orientation: "portrait", form: "short", driveId: "1KTPBbl7-LwtFMZhhvXGzSkaVLYjQd-SU", year: "2025" },
  { id: 5,  group: "Qasr Al-Asnan", title: "Dec 5",   category: "filmed", orientation: "portrait", form: "short", driveId: "1FlCnn31AmLn0ulIZxs4crS2_S6anVWrl", year: "2025" },
  { id: 6,  group: "Qasr Al-Asnan", title: "Dec 6",   category: "filmed", orientation: "portrait", form: "short", driveId: "1WSoQWSm-qCbw905h-vkqrkRpYCSbSuhy", year: "2025" },
  { id: 7,  group: "Qasr Al-Asnan", title: "Nov 1",   category: "filmed", orientation: "portrait", form: "short", driveId: "1iYdemRO9nwu-bAeukHK0by8Mb4vU4WUD", year: "2025" },
  { id: 8,  group: "Qasr Al-Asnan", title: "Nov 2",   category: "filmed", orientation: "portrait", form: "short", driveId: "10SPf_YDmaBVxt6wJX_tbE8BGEC5qMakf", year: "2025" },
  { id: 9,  group: "Qasr Al-Asnan", title: "Nov 3",   category: "filmed", orientation: "portrait", form: "short", driveId: "1_slMnBPEUU0MSq9WZ4gmCTyc7yyxe9sI", year: "2025" },
  { id: 10, group: "Qasr Al-Asnan", title: "Nov 4",   category: "filmed", orientation: "portrait", form: "short", driveId: "1flQnluIszGeGPgl44ZsKdWQ0PKPJIpg3", year: "2025" },
  { id: 11, group: "Qasr Al-Asnan", title: "Nov 5",   category: "filmed", orientation: "portrait", form: "short", driveId: "1CPg-fOXMJhx_6JtagFg98MoC35rdT7PB", year: "2025" },
  { id: 12, group: "Qasr Al-Asnan", title: "Nov 6",   category: "filmed", orientation: "portrait", form: "short", driveId: "1D65T1zyeGjQSw_bKQn86iI_m9jkrAhXB", year: "2025" },
  { id: 13, group: "Qasr Al-Asnan", title: "Nov 7",   category: "filmed", orientation: "portrait", form: "short", driveId: "1eKAy7rIMlZNbXoEZrqbBCuwOqtOlkH4N", year: "2025" },
  { id: 14, group: "Qasr Al-Asnan", title: "Nov 8",   category: "filmed", orientation: "portrait", form: "short", driveId: "1S0P_DlRNYGh4ZAWTG_6HgGzOIZ5IsVyr", year: "2025" },

  // ── Rokkna (13 Reels — includes ROKNA) ── Filmed & Edited
  { id: 15, group: "Rokkna", title: "Reel 1 (Oct)", category: "filmed", orientation: "portrait", form: "short", driveId: "1idvoBNxtU0sS1TqvGmxEr2JjQovSJIuG", year: "2025" },
  { id: 16, group: "Rokkna", title: "Dec 1",        category: "filmed", orientation: "portrait", form: "short", driveId: "1suKtmQG1fVA7vYETxUUFrEos3TeQZHNx", year: "2025" },
  { id: 17, group: "Rokkna", title: "Dec 2",        category: "filmed", orientation: "portrait", form: "short", driveId: "1LYS_wZXJW2KVDMRsnxIY8RefjLxbtMqL", year: "2025" },
  { id: 18, group: "Rokkna", title: "Dec 3",        category: "filmed", orientation: "portrait", form: "short", driveId: "12_BOTAAyh-0ud2-Cu7ym-utvXW0t36iU", year: "2025" },
  { id: 19, group: "Rokkna", title: "Dec 4",        category: "filmed", orientation: "portrait", form: "short", driveId: "1DzFGWXoWfSSFQkwLEGbcLQh-J3RghqiU", year: "2025" },
  { id: 20, group: "Rokkna", title: "Dec 5",        category: "filmed", orientation: "portrait", form: "short", driveId: "16LOGCqXD7KIlqzwQ9VGKjPvu4iKTRfc4", year: "2025" },
  { id: 21, group: "Rokkna", title: "Dec 6",        category: "filmed", orientation: "portrait", form: "short", driveId: "1N7lx8Hb45h4N5q8TMW6KX36mPec4Vqsv", year: "2025" },
  { id: 22, group: "Rokkna", title: "Dec 8",        category: "filmed", orientation: "portrait", form: "short", driveId: "1w3fa-pjFRSKs5SokTuFPh1v8w7VGDMT1", year: "2025" },
  { id: 23, group: "Rokkna", title: "Dec 9",        category: "filmed", orientation: "portrait", form: "short", driveId: "17CXDM5uMUUQaOiidjpq2YZulHqT9dJQg", year: "2025" },
  { id: 24, group: "Rokkna", title: "Dec 10",       category: "filmed", orientation: "portrait", form: "short", driveId: "1aNsldkmD4V12zm6cH7YualAYPlnul1cF", year: "2025" },
  { id: 25, group: "Rokkna", title: "Dec 11",       category: "filmed", orientation: "portrait", form: "short", driveId: "13yMoBvINPntvrN0iRGnFvzsCFKZPogyQ", year: "2025" },
  { id: 26, group: "Rokkna", title: "Dec 12",       category: "filmed", orientation: "portrait", form: "short", driveId: "1tkZ6ZzbnzgxyiqBybHhzXtyQCF81wIur", year: "2025" },
  { id: 27, group: "Rokkna", title: "Feb 1",        category: "filmed", orientation: "portrait", form: "short", driveId: "1TaPnRzQcrOI4X_HJ6Bs50N9xPl4dhA86", year: "2025" },

  // ── Pro Max (6 Reels) ── Filmed & Edited
  { id: 28, group: "Pro Max", title: "Nov 1",      category: "filmed", orientation: "portrait", form: "short", driveId: "1dnWOFm-TYTkxCErJiJyKIgmHKylEVrNI", year: "2025" },
  { id: 29, group: "Pro Max", title: "Nov 2",      category: "filmed", orientation: "portrait", form: "short", driveId: "1jHi1MGb27eq8YS9KSvWJcxA7Bl5MFE0j", year: "2025" },
  { id: 30, group: "Pro Max", title: "Nov 3",      category: "filmed", orientation: "portrait", form: "short", driveId: "14uqfqxJ0mvn71YDbV8ItpXUj-7HLbsbc", year: "2025" },
  { id: 31, group: "Pro Max", title: "Nov 5",      category: "filmed", orientation: "portrait", form: "short", driveId: "17s8sPOpB_hEjgWn0S6BoXi9kHZfTyxfy", year: "2025" },
  { id: 32, group: "Pro Max", title: "Nov 6",      category: "filmed", orientation: "portrait", form: "short", driveId: "1rquNntuYbAG9FaGk4Q3BwG_q9aOZgLRg", year: "2025" },
  { id: 33, group: "Pro Max", title: "Reel Nov 1", category: "filmed", orientation: "portrait", form: "short", driveId: "1MCo3cQ3bV-Jbb8xVnJ4PYXre07DgGrMh", year: "2025" },

  // ── Rahiq (4 Reels) ── Filmed & Edited
  { id: 34, group: "Rahiq", title: "Nov 1", category: "filmed", orientation: "portrait", form: "short", driveId: "1uPUx_Ox4VujzEG_UhCbGP9ydSGhQw1lJ", year: "2025" },
  { id: 35, group: "Rahiq", title: "Nov 2", category: "filmed", orientation: "portrait", form: "short", driveId: "1z-VAzusgP82Wj-L3CGe_38Cc0u3J3_eu", year: "2025" },
  { id: 36, group: "Rahiq", title: "Nov 3", category: "filmed", orientation: "portrait", form: "short", driveId: "1ClkUvFeKZfNadKLQdF6BG7_fc-GQP-DA", year: "2025" },
  { id: 37, group: "Rahiq", title: "Nov 4", category: "filmed", orientation: "portrait", form: "short", driveId: "1TD7kY-qWsJ6_VPT-O4z7eUgwGWU7IXuH", year: "2025" },

  // ── Sabah W Masa (3 Reels) ── Filmed & Edited
  { id: 38, group: "Sabah W Masa", title: "Reel 1 (25-3)", category: "filmed", orientation: "portrait", form: "short", driveId: "144Iam1oKtQo58IMZ636DvWdqMyYPu3FV", year: "2025" },
  { id: 39, group: "Sabah W Masa", title: "Reel 2 (25-5)", category: "filmed", orientation: "portrait", form: "short", driveId: "1kXJZwKLMKjABw9jwCPV3b3mwGxKdJMqz", year: "2025" },
  { id: 40, group: "Sabah W Masa", title: "Reel 3 (29-3)", category: "filmed", orientation: "portrait", form: "short", driveId: "1xWuJRqh3jgmufkfOiyoew7BKQs7JA97x", year: "2025" },

  // ── Face To Face (2 Reels) ── Filmed & Edited
  { id: 41, group: "Face To Face", title: "Reel 1",       category: "filmed", orientation: "portrait", form: "short", driveId: "1tT-wL4xfJqxoR9ZkHyPtxLQ0r_kIVmfm", year: "2025" },
  { id: 42, group: "Face To Face", title: "Reel 2 (25-8)", category: "filmed", orientation: "portrait", form: "short", driveId: "1HWmKSv4wg7OXfR07KgFqfiZmbTP2YbCf", year: "2025" },

  // ── Resala (5 Reels) ── Filmed & Edited
  { id: 43, group: "Resala", title: "Hoor",             category: "filmed", orientation: "portrait", form: "short", driveId: "10lUiccr6vIK-6CN5riKsz7AilbxiF9Tk", year: "2025" },
  { id: 44, group: "Resala", title: "Jan 1",            category: "filmed", orientation: "portrait", form: "short", driveId: "19ePlEyDKznaR_n8Ye6xasAgmGvwF3BJv", year: "2025" },
  { id: 48, group: "Resala", title: "Qafilat Risaluh",  category: "filmed", orientation: "portrait", form: "short", driveId: "1cx4qF79BcxaGwm0qx8o78c8pd-bDwKxr", year: "2025" },
  { id: 49, group: "Resala", title: "Kasa' Aleid",      category: "filmed", orientation: "portrait", form: "short", driveId: "1euX2cpjwWqb_G4fOI_8pqdVkVAcJERRF", year: "2025" },
  { id: 50, group: "Resala", title: "Aftar Makfufin",   category: "filmed", orientation: "portrait", form: "short", driveId: "1BMA9AciZlzK_hNHwT49g4fr4BAIE7pmG", year: "2025" },

  // ── Gangum (2 Reels) ── Filmed & Edited
  { id: 45, group: "Gangum", title: "Reel 1", category: "filmed", orientation: "portrait", form: "short", driveId: "1iJX3O_VHCL7pkjOTdPqbhSoDhIaE_yUl", year: "2025" },
  { id: 46, group: "Gangum", title: "Reel 3", category: "filmed", orientation: "portrait", form: "short", driveId: "14vyTKvDx-L6osy6D5JtcDwwnuCXqj8vn", year: "2025" },

  // ── Standalone Projects ── Filmed & Edited
  { id: 47, group: "Egy Power", title: "Egy Power", category: "filmed", orientation: "portrait", form: "short", driveId: "12Q4T21So9PL-Uk2mQn6UcjeRr8jHZ3_S", year: "2025" },

  // ══════════════════════════════════════════════════════════
  //  VIDEO EDITING ONLY (84 Reels)
  // ══════════════════════════════════════════════════════════

  // ── Dr. Salma (35 Reels) ── Video Editing
  { id: 51, group: "Dr. Salma", title: "Feb 1",     category: "video", orientation: "portrait", form: "short", driveId: "1SNIMmoeZb5kLoSzr0e2fROGjIm9btXHL", year: "2025" },
  { id: 52, group: "Dr. Salma", title: "March 2",   category: "video", orientation: "portrait", form: "short", driveId: "1yNCwQzu2HMN6HhQkxbpGQSq88gFm2mWz", year: "2025" },
  { id: 53, group: "Dr. Salma", title: "March 3",   category: "video", orientation: "portrait", form: "short", driveId: "13Yt_w0kyqhGlA7O3_ujwAZwNyI9Zs70a", year: "2025" },
  { id: 54, group: "Dr. Salma", title: "March 4",   category: "video", orientation: "portrait", form: "short", driveId: "1MEg_dud2UqyQDhrwYRNQKd5OuryKUvlH", year: "2025" },
  { id: 55, group: "Dr. Salma", title: "March 5",   category: "video", orientation: "portrait", form: "short", driveId: "173hZHes4767XwI0P3uhJlmFDuwWn7EIh", year: "2025" },
  { id: 56, group: "Dr. Salma", title: "March 6",   category: "video", orientation: "portrait", form: "short", driveId: "1QLQh6UQ2AI9cILZGx4pks-xhASn0J955", year: "2025" },
  { id: 57, group: "Dr. Salma", title: "March 7",   category: "video", orientation: "portrait", form: "short", driveId: "1mSPH_ibfvdmSeFKbCgpko-wcvPVDc_o4", year: "2025" },
  { id: 58, group: "Dr. Salma", title: "March 8",   category: "video", orientation: "portrait", form: "short", driveId: "1JjldIUtvoWd2DMP2ManGPSHlhymO5fY4", year: "2025" },
  { id: 59, group: "Dr. Salma", title: "March 9",   category: "video", orientation: "portrait", form: "short", driveId: "1y6MKmB9qPb98Z6lHBiPigrH_PC2NeLbd", year: "2025" },
  { id: 60, group: "Dr. Salma", title: "March 10",  category: "video", orientation: "portrait", form: "short", driveId: "1CDfyjjty73fUr8ygpBB8RbwfNLiJWr6b", year: "2025" },
  { id: 61, group: "Dr. Salma", title: "March 11",  category: "video", orientation: "portrait", form: "short", driveId: "1jdC9-eA4W2u0BYQbtyiJt-AzrhgGbaNl", year: "2025" },
  { id: 62, group: "Dr. Salma", title: "March 12",  category: "video", orientation: "portrait", form: "short", driveId: "1-ysk7rYlc0B5GYL2QFjtoSpPoFxXFVQt", year: "2025" },
  { id: 63, group: "Dr. Salma", title: "March 13",  category: "video", orientation: "portrait", form: "short", driveId: "1r1OPsyLa2ETeAJop31YgpxJUq_Quxsno", year: "2025" },
  { id: 64, group: "Dr. Salma", title: "March 14",  category: "video", orientation: "portrait", form: "short", driveId: "1rvxW-qfVbYYCjzQz-hrfa9bftgeiWHT-", year: "2025" },
  { id: 65, group: "Dr. Salma", title: "March 15",  category: "video", orientation: "portrait", form: "short", driveId: "1B_Er_Afe3s40Ml9YFkJCPWGq-8nP0XV1", year: "2025" },
  { id: 66, group: "Dr. Salma", title: "March 16",  category: "video", orientation: "portrait", form: "short", driveId: "17Nh_BoH1EYshIUzyAA4gbEMvnD_Hf3Jd", year: "2025" },
  { id: 67, group: "Dr. Salma", title: "March 17",  category: "video", orientation: "portrait", form: "short", driveId: "1jq9AUhEY0aZWmB5F2oopd0nX5aKjEsjZ", year: "2025" },
  { id: 68, group: "Dr. Salma", title: "April 1",   category: "video", orientation: "portrait", form: "short", driveId: "1p1ErSpBUibRdKtacd59oOY6ndvM4Eu7R", year: "2025" },
  { id: 69, group: "Dr. Salma", title: "April 2",   category: "video", orientation: "portrait", form: "short", driveId: "1n0H_oRv5uY94hnyy7XtTxEUKxOOIc3Tl", year: "2025" },
  { id: 70, group: "Dr. Salma", title: "April 3",   category: "video", orientation: "portrait", form: "short", driveId: "1wY2GVlmWzHwfKeRPlBww2pEEPNnUrvam", year: "2025" },
  { id: 71, group: "Dr. Salma", title: "April 4",   category: "video", orientation: "portrait", form: "short", driveId: "16i45RKtZ7f9y7-sCn46cfKF4lO-8c6i7", year: "2025" },
  { id: 72, group: "Dr. Salma", title: "April 5",   category: "video", orientation: "portrait", form: "short", driveId: "1SmLEzc5qWZXgQ7Dsn96VBPy6iyjq9WP2", year: "2025" },
  { id: 73, group: "Dr. Salma", title: "April 6",   category: "video", orientation: "portrait", form: "short", driveId: "1-UdEzMkk5SgrMvs1AaaS_d543OKrkRu5", year: "2025" },
  { id: 74, group: "Dr. Salma", title: "July 2 (v1)", category: "video", orientation: "portrait", form: "short", driveId: "1Bd0gCCVgA9ajx98xucZE5kRwVlmg3uS-", year: "2025" },
  { id: 75, group: "Dr. Salma", title: "July 2 (v2)", category: "video", orientation: "portrait", form: "short", driveId: "18qeuRb2rAB8QW-nV0jXlpdY5k6D6Bw5h", year: "2025" },
  { id: 76, group: "Dr. Salma", title: "July 3",    category: "video", orientation: "portrait", form: "short", driveId: "1IMj2Z7r52V55UsHXlEN2Q-c0bTQhb-mK", year: "2025" },
  { id: 77, group: "Dr. Salma", title: "July 5",    category: "video", orientation: "portrait", form: "short", driveId: "1L9Ok-YtiQYBZUOau-5dPyP4wvc_97734", year: "2025" },
  { id: 78, group: "Dr. Salma", title: "July 6",    category: "video", orientation: "portrait", form: "short", driveId: "1F8F-ziGHfkd5iONrFDw17JuzGJT94S7q", year: "2025" },
  { id: 79, group: "Dr. Salma", title: "July 7 (v1)", category: "video", orientation: "portrait", form: "short", driveId: "1eHtkfJWHw3C0AtsFKX_aGewVOGwJ1v80", year: "2025" },
  { id: 80, group: "Dr. Salma", title: "July 7 (v2)", category: "video", orientation: "portrait", form: "short", driveId: "13gUlJSHgVs-IwG1E5ypWDpUTps5fNAiu", year: "2025" },
  { id: 81, group: "Dr. Salma", title: "July 8",    category: "video", orientation: "portrait", form: "short", driveId: "1zUKk1jMQrFdD7-KOw55K7aGs6Ni1Kh9P", year: "2025" },
  { id: 82, group: "Dr. Salma", title: "July 9",    category: "video", orientation: "portrait", form: "short", driveId: "1ZP-9RW6LQ7W33aZgWQH2KYQjZYjC8TOr", year: "2025" },
  { id: 83, group: "Dr. Salma", title: "July 10",   category: "video", orientation: "portrait", form: "short", driveId: "1R0w3G4rgkRQgj3s_vj3bniyVoJe4NaWS", year: "2025" },
  { id: 84, group: "Dr. Salma", title: "July 11",   category: "video", orientation: "portrait", form: "short", driveId: "10t_O_uOu7HH1hHuTAiG8lp871Xo1-Vla", year: "2025" },
  { id: 85, group: "Dr. Salma", title: "July 12",   category: "video", orientation: "portrait", form: "short", driveId: "1S2N8SIxGw94A1EtbMm1MWEkP7OVj7ZuN", year: "2025" },

  // ── Healthy Way (11 Reels) ── Video Editing
  { id: 86, group: "Healthy Way", title: "March 1", category: "video", orientation: "portrait", form: "short", driveId: "1LAzSoalY7BK64H8FZl95Rjp6sN7sWO8p", year: "2025" },
  { id: 87, group: "Healthy Way", title: "May 1",   category: "video", orientation: "portrait", form: "short", driveId: "1X3jYoePdHbChCrJ5CdLENnHA7Az2IJe5", year: "2025" },
  { id: 88, group: "Healthy Way", title: "May 2",   category: "video", orientation: "portrait", form: "short", driveId: "1fOiFLXpQR2en6V9RM8XJcdfxEo-bV5yZ", year: "2025" },
  { id: 89, group: "Healthy Way", title: "Jun 1",   category: "video", orientation: "portrait", form: "short", driveId: "1062gah-El5voE9bwOwTmUpxRtjYPOGIO", year: "2025" },
  { id: 90, group: "Healthy Way", title: "Jun 2",   category: "video", orientation: "portrait", form: "short", driveId: "1wuOBWTy0SU-bXJ1q5pTOljV9YGZudgGA", year: "2025" },
  { id: 91, group: "Healthy Way", title: "Jun 3",   category: "video", orientation: "portrait", form: "short", driveId: "17EwTmCzHa6Jj-yVbq0nFMV20lx6o4_7J", year: "2025" },
  { id: 92, group: "Healthy Way", title: "Jun 4",   category: "video", orientation: "portrait", form: "short", driveId: "12FjMterxZWFvd7zMiJJ6VHi9f5-M65pM", year: "2025" },
  { id: 93, group: "Healthy Way", title: "Jun 5",   category: "video", orientation: "portrait", form: "short", driveId: "1bGLQ2mTNWiAToTNWuk4x0v2eQlqyew7s", year: "2025" },
  { id: 94, group: "Healthy Way", title: "Jun 6",   category: "video", orientation: "portrait", form: "short", driveId: "1ENUuhpC7nrjVBauAyojksOw7I9lA8EUk", year: "2025" },
  { id: 95, group: "Healthy Way", title: "Jun 7",   category: "video", orientation: "portrait", form: "short", driveId: "1CXrNnIl32RbH-fVI9o5TE_KxjkTvQmoP", year: "2025" },
  { id: 96, group: "Healthy Way", title: "Jun 8",   category: "video", orientation: "portrait", form: "short", driveId: "19dfQawMNeb1bME9t6DemspI99VkjhVqA", year: "2025" },

  // ── Camys Cake (8 Reels) ── Video Editing
  { id: 97,  group: "Camys Cake", title: "March 3", category: "video", orientation: "portrait", form: "short", driveId: "14t9ohZMDODsjN6945TKd2qH22kmdUS1l", year: "2025" },
  { id: 98,  group: "Camys Cake", title: "April 1", category: "video", orientation: "portrait", form: "short", driveId: "1iUJ1G4kNqdCpDbVlmBXM7XUvYDXZPXcK", year: "2025" },
  { id: 99,  group: "Camys Cake", title: "April 2", category: "video", orientation: "portrait", form: "short", driveId: "1CmtSf4ceqptSHlds5s-7Y-a7MRZRoP0W", year: "2025" },
  { id: 100, group: "Camys Cake", title: "April 3", category: "video", orientation: "portrait", form: "short", driveId: "1VSaBlyjAULssXokWtuczGAD4zGmv4-p1", year: "2025" },
  { id: 101, group: "Camys Cake", title: "April 4", category: "video", orientation: "portrait", form: "short", driveId: "12JE8dAat1-Y_8h2xekNwm6jV_P2CZwHp", year: "2025" },
  { id: 102, group: "Camys Cake", title: "April 5", category: "video", orientation: "portrait", form: "short", driveId: "1HN_GKxept9J-u6JhC5pnBYAS-RWG23Ey", year: "2025" },
  { id: 103, group: "Camys Cake", title: "April 6", category: "video", orientation: "portrait", form: "short", driveId: "1_nqEjioFRST1fLrKDshmb_FdeAd0kLSd", year: "2025" },
  { id: 104, group: "Camys Cake", title: "April 7", category: "video", orientation: "portrait", form: "short", driveId: "1bDzyvffR6itHYlKvyZgmx4OC4U7QIlo2", year: "2025" },

  // ── Bonds & Beyonds (4 Reels) ── Video Editing
  { id: 105, group: "Bonds & Beyonds", title: "Feb 1",   category: "video", orientation: "portrait", form: "short", driveId: "1edGAflmGUlZ3bi2CxX2dlhC4g1kWvIaK", year: "2025" },
  { id: 106, group: "Bonds & Beyonds", title: "March 4", category: "video", orientation: "portrait", form: "short", driveId: "1rVH4vhsVLH-NGX5a8h4QIPujDBP5eWBA", year: "2025" },
  { id: 107, group: "Bonds & Beyonds", title: "March 6", category: "video", orientation: "portrait", form: "short", driveId: "1p_-VbXRKmUQwQmHSiVmj2Xqw3qTX7iB7", year: "2025" },
  { id: 108, group: "Bonds & Beyonds", title: "March 7", category: "video", orientation: "portrait", form: "short", driveId: "1cckN4rULBnW0bDha34-JZB4_U68IcaYM", year: "2025" },

  // ── Adelina Clinic (3 Reels) ── Video Editing
  { id: 109, group: "Adelina Clinic", title: "Reel 1 Nov", category: "video", orientation: "portrait", form: "short", driveId: "1EkaOES-iUvCLUMj8y4nI_TVgwqRBzbXG", year: "2025" },
  { id: 110, group: "Adelina Clinic", title: "Reel 2",     category: "video", orientation: "portrait", form: "short", driveId: "1ARSs887_KkVw4VaY3chrGNV4ZIEQrBwr", year: "2025" },
  { id: 111, group: "Adelina Clinic", title: "Reel 2 Nov", category: "video", orientation: "portrait", form: "short", driveId: "1MKPztcjOYhnI3cv4oFsaqooVpQ05V_Iz", year: "2025" },

  // ── Good Motors (2 Reels) ── Video Editing
  { id: 112, group: "Good Motors", title: "April 1", category: "video", orientation: "portrait", form: "short", driveId: "1aOb-VHciK3BWez52_yDDscAUO_H4J0ez", year: "2025" },
  { id: 113, group: "Good Motors", title: "April 2", category: "video", orientation: "portrait", form: "short", driveId: "1rdG0X1FiqJcInaniDaAa62HChIyxpRBM", year: "2025" },

  // ── Daytona (2 Reels) ── Video Editing
  { id: 114, group: "Daytona", title: "Reel 1", category: "video", orientation: "portrait", form: "short", driveId: "1XXA0fYD69D9uTmElMhJCsRiLZce8cKkK", year: "2025" },
  { id: 115, group: "Daytona", title: "Reel 2", category: "video", orientation: "portrait", form: "short", driveId: "150bQdLKtJoKRXeW5vMLIR6gk1q0Ix48T", year: "2025" },

  // ── Eljoker Oud (2 Reels) ── Video Editing
  { id: 116, group: "Eljoker Oud", title: "Feb 1", category: "video", orientation: "portrait", form: "short", driveId: "1WHCua3t5cHY5LL853HkugnbyP3biZbyw", year: "2025" },
  { id: 117, group: "Eljoker Oud", title: "Feb 3", category: "video", orientation: "portrait", form: "short", driveId: "13xqh7ofybu7P8UAvpNbnD8T_C6Dt0Kx1", year: "2025" },

  // ── Hurghada Real Estate (2 Reels) ── Video Editing
  { id: 118, group: "Hurghada Real Estate", title: "Reel 1 Nov", category: "video", orientation: "portrait", form: "short", driveId: "1XJKS86Ky99infSj4istQDjngqMAuFf3r", year: "2025" },
  { id: 119, group: "Hurghada Real Estate", title: "Reel 2 Nov", category: "video", orientation: "portrait", form: "short", driveId: "10wLcGMGVfmk41vfqCQSXM9-BhdeRXC1R", year: "2025" },

  // ── Standalone Projects ── Video Editing
  { id: 120, group: "2 Qahwa",             title: "2 Qahwa",             category: "video", orientation: "portrait", form: "short", driveId: "1R7qr-n7COb9-6uvCaMr_xSwXgdvcf3jB", year: "2025" },
  { id: 121, group: "Ali Qais",            title: "Ali Qais",            category: "video", orientation: "portrait", form: "short", driveId: "1eG28ounGLfKUN-2WLom_zowGDxDg70-Y", year: "2025" },
  { id: 122, group: "Alsnafi",             title: "Alsnafi",             category: "video", orientation: "portrait", form: "short", driveId: "1PDBEj5dVjrPoprqzXr6yv50CU5vGLyIq", year: "2025" },
  { id: 123, group: "Bites Tray",          title: "Bites Tray",          category: "video", orientation: "portrait", form: "short", driveId: "1jJbYyp8gKSlyXrJAPyCgqoqELEumNElq", year: "2025" },
  { id: 124, group: "Community Developer", title: "Community Developer", category: "video", orientation: "portrait", form: "short", driveId: "1wX5Zl2S5WYIxMQmRA7PK_-BgAgtxLytT", year: "2025" },
  { id: 125, group: "Dar Elfoad",          title: "Dar Elfoad",          category: "video", orientation: "portrait", form: "short", driveId: "1vdo7CX0q_atoO5v84oWooEw3guQojvam", year: "2025" },
  { id: 126, group: "El Chief",            title: "El Chief",            category: "video", orientation: "portrait", form: "short", driveId: "1iW-mAcCFlyWdjGeltBgX7LRf7fFe1bJi", year: "2025" },
  { id: 127, group: "هيئة البيئة",         title: "هيئة البيئة",         category: "video", orientation: "portrait", form: "short", driveId: "1JQxaSgx-5xf3kSW3zqW3GjXdNUeja-1e", year: "2025" },
  { id: 128, group: "Ahmed Elsory",        title: "Ahmed Elsory",        category: "video", orientation: "portrait", form: "short", driveId: "17JkHxj-luEzMTDJQZrzoEFV3QMOx149I", year: "2025" },
  { id: 129, group: "Alaraqah Furniture",  title: "Alaraqah Furniture",  category: "video", orientation: "portrait", form: "short", driveId: "1574djvukCG_kA4YoCkLdro5ElwqSmrxw", year: "2025" },
  { id: 130, group: "Aljazeera Kitchens",  title: "Aljazeera Kitchens",  category: "video", orientation: "portrait", form: "short", driveId: "1ww9soiMvkdKB8TDG9uQpzx5iNctJa1nl", year: "2025" },
  { id: 131, group: "Elegant Suit",        title: "Elegant Suit",        category: "video", orientation: "portrait", form: "short", driveId: "1UknZXjTbv8VpBCo2ayRSNzI8wHYc9KEb", year: "2025" },
  { id: 132, group: "Hi Home",             title: "Hi Home",             category: "video", orientation: "portrait", form: "short", driveId: "13_sxnUE1VrqifVS6csF25pu1Ad2ANk3u", year: "2025" },
  { id: 133, group: "Q Agency",            title: "Q Agency",            category: "video", orientation: "portrait", form: "short", driveId: "19nepDs3UTExjmakZoubfsoDZ8ITYvndC", year: "2025" },
  { id: 134, group: "Unity",               title: "Unity",               category: "video", orientation: "portrait", form: "short", driveId: "1OO-Ci8lEpuTTbf-oMTgpaUah45YRph7W", year: "2025" }
];

/**
 * استخرج File ID من أي لينك Google Drive
 */
function extractDriveId(url) {
  if (!url || url.includes("PASTE_YOUR")) return null;
  const match1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match1) return match1[1];
  const match2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match2) return match2[1];
  const match3 = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (match3) return match3[1];
  if (/^[a-zA-Z0-9_-]{20,}$/.test(url)) return url;
  return null;
}

/**
 * اعمل Thumbnail URL من Drive ID
 */
function getDriveThumbnail(id) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
}

/**
 * اعمل Open URL من Drive ID
 */
function getDriveOpenUrl(id) {
  return `https://drive.google.com/file/d/${id}/view?usp=sharing`;
}

/**
 * اعمل Embed Preview URL من Drive ID
 */
function getDrivePreviewUrl(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

const CATEGORY_ICONS = {
  filmed: "🎥",
  video: "▶",
  photo: "📷",
  motion: "✨"
};

const CATEGORY_LABELS = {
  filmed: "Filmed & Edited",
  video: "Video Editing",
  photo: "Photography",
  motion: "Motion Graphics"
};
