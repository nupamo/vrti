const questions = [
  { text: "1", weights: [{ indicator: 'E', score: 0.9 }, { indicator: 'G', score: 0.101 }] },
  { text: "2", weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 0.1 }] },
  { text: "3", weights: [{ indicator: 'I', score: 0.501 }, { indicator: 'D', score: 0.1 }] },
  { text: "4", weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 1.0 }] },
  { text: "5", weights: [{ indicator: 'E', score: 1.1 }, { indicator: 'G', score: 0.501 }] },
  { text: "6", weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'E', score: 0.2 }] },
  { text: "7", weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.201 }] },
  { text: "8", weights: [{ indicator: 'C', score: 1.101 }, { indicator: 'D', score: 0.3 }, { indicator: 'I', score: 0.101 }] },
  { text: "9", weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.501 }] },
  { text: "10", weights: [{ indicator: 'C', score: 1.401 }, { indicator: 'D', score: 0.3 }] },
  { text: "11", weights: [{ indicator: 'D', score: 1.1 }, { indicator: 'S', score: 0.2 }] },
  { text: "12", weights: [{ indicator: 'D', score: 1.2 }] },
  { text: "13", weights: [{ indicator: 'D', score: 0.9 }, { indicator: 'I', score: 0.301 }] },
  { text: "14", weights: [{ indicator: 'G', score: 1.101 }, { indicator: 'I', score: 0.301 }] },
  { text: "15", weights: [{ indicator: 'G', score: 1.301 }, { indicator: 'E', score: 0.5 }] },
  { text: "16", weights: [{ indicator: 'U', score: 1.401 }] },
  { text: "17", weights: [{ indicator: 'A', score: 1.0 }, { indicator: 'C', score: 0.301 }] },
  { text: "18", weights: [{ indicator: 'A', score: 1.0 }] },
  { text: "19", weights: [{ indicator: 'A', score: 0.7 }, { indicator: 'S', score: 0.1 }] },
  { text: "20", weights: [{ indicator: 'U', score: 1.001 }, { indicator: 'G', score: 0.201 }] }
];

const counts = {};
const totalPatterns = Math.pow(2, questions.length);

for (let i = 0; i < totalPatterns; i++) {
  const scores = { E: 0, I: 0, S: 0, C: 0, D: 0, G: 0, A: 0, U: 0 };
  for (let j = 0; j < questions.length; j++) {
    if ((i >> j) & 1) {
      questions[j].weights.forEach(w => {
        // Scaling to avoid floats during analysis
        scores[w.indicator] += Math.round(w.score * 1000);
      });
    }
  }

  const getCode = (pos, neg) => {
    // Current Logic: if scores equal, return neg
    if (scores[pos] > scores[neg]) return pos;
    return neg;
  };

  const code = [getCode('E', 'I'), getCode('S', 'C'), getCode('D', 'G'), getCode('A', 'U')].join('');
  counts[code] = (counts[code] || 0) + 1;
}

const coreTypes = [
  "ESDA", "ESDU", "ESGA", "ESGU", "ECDA", "ECDU", "ECGA", "ECGU",
  "ISDA", "ISDU", "ISGA", "ISGU", "ICDA", "ICDU", "ICGA", "ICGU"
];

console.log("\n--- Final Final Distribution (0% Ties) ---");
const sortedResults = Object.entries(counts).sort((a, b) => b[1] - a[1]);

sortedResults.forEach(([code, count]) => {
  const percent = ((count / totalPatterns) * 100).toFixed(2);
  console.log(`${code}: ${count} (${percent}%)`);
});

const totalMatched = Object.values(counts).reduce((a, b) => a + b, 0);
console.log(`\nTotal Patterns: ${totalMatched} (Check: ${totalPatterns})`);
