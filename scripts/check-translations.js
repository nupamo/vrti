import fs from 'fs';
import path from 'path';

const SCRIPTS = {
  hangul: /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/,
  kana: /[\u3040-\u309F\u30A0-\u30FF]/,
  hanzi: /[\u4E00-\u9FFF]/,
};

const FILES = [
  'src/data/indicators.ts',
  'src/data/results.ts',
  'src/data/questions.ts',
  'src/App.tsx'
];

function checkFile(filePath) {
  console.log(`\nChecking ${filePath}...`);
  const content = fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
  
  const langKeys = ['ko', 'en', 'ja', 'zh'];
  const lines = content.split('\n');
  
  let errors = 0;
  let checks = 0;

  lines.forEach((line, index) => {
    langKeys.forEach(lang => {
      const regex = new RegExp(`${lang}\\s*:\\s*["'\`](.*?)["'\`]`, 'g');
      let m;
      while ((m = regex.exec(line)) !== null) {
        const text = m[1];
        if (!text || text.trim() === '') continue; 
        
        checks++;
        
        // Remove allowed placeholders
        let cleanText = text.replace(/\{code\}|\{nickname\}|#\w+|[✨✅❌⭕]/g, '');
        
        let forbidden = [];
        
        if (lang === 'ko') {
          if (SCRIPTS.kana.test(cleanText)) forbidden.push('Japanese (Kana)');
        } else if (lang === 'ja') {
          if (SCRIPTS.hangul.test(cleanText)) forbidden.push('Korean (Hangul)');
        } else if (lang === 'zh') {
          if (SCRIPTS.hangul.test(cleanText)) forbidden.push('Korean (Hangul)');
          if (SCRIPTS.kana.test(cleanText)) forbidden.push('Japanese (Kana)');
        } else if (lang === 'en') {
          if (SCRIPTS.hangul.test(cleanText)) forbidden.push('Korean (Hangul)');
          if (SCRIPTS.kana.test(cleanText)) forbidden.push('Japanese (Kana)');
          if (SCRIPTS.hanzi.test(cleanText)) forbidden.push('Chinese/Japanese (Hanzi/Kanji)');
        }

        if (forbidden.length > 0) {
          console.error(`[Line ${index + 1}] [${lang}] Foreign script detected (${forbidden.join(', ')}): "${text}"`);
          errors++;
        }
      }
    });
  });

  const koCount = (content.match(/ko\s*:/g) || []).filter(m => !m.includes('import')).length;
  const zhCount = (content.match(/zh\s*:/g) || []).length;
  
  if (koCount !== zhCount) {
    console.error(`Missing translations: Found ${koCount} 'ko' keys but ${zhCount} 'zh' keys.`);
    errors++;
  }

  console.log(`Finished checking ${filePath}. ${checks} language strings verified. ${errors} found.`);
  return errors;
}

let totalErrors = 0;
FILES.forEach(file => {
  totalErrors += checkFile(file);
});

if (totalErrors > 0) {
  console.log(`\nVerification FAILED with ${totalErrors} total errors.`);
  process.exit(1);
} else {
  console.log(`\nVerification PASSED! No mixed foreign scripts detected.`);
  process.exit(0);
}
