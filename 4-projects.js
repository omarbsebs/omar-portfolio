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
  { id: 47, group: "Egy Power", title: "Egy Power", category: "filmed", orientation: "portrait", form: "short", driveId: "12Q4T21So9PL-Uk2mQn6UcjeRr8jHZ3_S", year: "2025" }
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
