import { useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [userName, setUserName] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [allResponses, setAllResponses] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const questions = [
    {
      id: 1,
      question: "איך אתם מעדיפים לבלות את הזמן החופשי?",
      emoji: "🏡",
      options: [
        { label: "לארח חברים ומשפחה בבית", value: "A", emoji: "👨‍👩‍👧‍👦" },
        { label: "להיות בחוץ בטבע", value: "B", emoji: "🌲" },
        { label: "ליצור או לקשט משהו", value: "C", emoji: "🎨" },
        { label: "להירגע עם ספר טוב או סרט", value: "D", emoji: "📚" },
        { label: "לנסות אוכל חדש או לבשל", value: "E", emoji: "🍳" }
      ]
    },
    {
      id: 2,
      question: "מה החופשה האידיאלית שלכם?",
      emoji: "✈️",
      options: [
        { label: "בקתה נעימה בהרים", value: "A", emoji: "🏔️" },
        { label: "קמפינג תחת הכוכבים", value: "B", emoji: "⛺" },
        { label: "עיר צבעונית ותוססת עם הרבה תרבות", value: "C", emoji: "🏙️" },
        { label: "אתר נופש שקט על החוף", value: "D", emoji: "🏖️" },
        { label: "סיור אוכל בערים שונות", value: "E", emoji: "🍜" }
      ]
    },
    {
      id: 3,
      question: "בחרו מזג אויר:",
      emoji: "🌤️",
      options: [
        { label: "חם ושמשי", value: "A", emoji: "☀️" },
        { label: "רוח קרירה, מעונן חלקית", value: "B", emoji: "🌥️" },
        { label: "יום סתיו בהיר וצלול", value: "C", emoji: "🍂" },
        { label: "גשם קל (מושלם להישאר בפנים)", value: "D", emoji: "🌧️" },
        { label: "מזג אוויר מושלם לצלייה", value: "E", emoji: "🔥" }
      ]
    },
    {
      id: 4,
      question: "מה התפקיד שלכם במסיבה?",
      emoji: "🎉",
      options: [
        { label: "המארח שמוודא שכולם מרגישים בנוח", value: "A", emoji: "🤗" },
        { label: "זה שמציע פעילויות בחוץ", value: "B", emoji: "🚴" },
        { label: "המעצב שגורם לכל דבר להיראות מדהים", value: "C", emoji: "✨" },
        { label: "השיחן השקט בפינה", value: "D", emoji: "💭" },
        { label: "האחראי על האוכל", value: "E", emoji: "👨‍🍳" }
      ]
    },
    {
      id: 5,
      question: "בחרו פרי:",
      emoji: "🍎",
      options: [
        { label: "תפוח (קלאסי ואמין)", value: "A", emoji: "🍎" },
        { label: "מנגו (טרופי והרפתקני)", value: "B", emoji: "🥭" },
        { label: "רימון (ייחודי ויפה)", value: "C", emoji: "🍒" },
        { label: "ענבים (פשוט ומתוק)", value: "D", emoji: "🍇" },
        { label: "הדרים (רענן ומרענן)", value: "E", emoji: "🍋" }
      ]
    },
    {
      id: 6,
      question: "איך אתם מתמודדים עם פרויקט חדש?",
      emoji: "📋",
      options: [
        { label: "מזמין את כולם לשתף פעולה", value: "A", emoji: "🤝" },
        { label: "לוקח אותו החוצה למקום מעורר השראה", value: "B", emoji: "🌍" },
        { label: "עושה אותו מושך חזותית", value: "C", emoji: "🎭" },
        { label: "לוקח את הזמן ומחשיב היטב", value: "D", emoji: "🧠" },
        { label: "מתחיל מהבסיס ובונה משם", value: "E", emoji: "🧱" }
      ]
    },
    {
      id: 7,
      question: "מה המסורת החגיגית האהובה עליכם?",
      emoji: "🎊",
      options: [
        { label: "מפגשי משפחה גדולים", value: "A", emoji: "👪" },
        { label: "להיות בחוץ, לא משנה מה הפעילות", value: "B", emoji: "🌳" },
        { label: "לקשט ולהפוך דברים לחגיגיים", value: "C", emoji: "🎀" },
        { label: "הרהור שקט והודיה", value: "D", emoji: "🕯️" },
        { label: "מאכלי חג מיוחדים", value: "E", emoji: "🍽️" }
      ]
    },
    {
      id: 8,
      question: "בחרו תכונת בית שאי אפשר בלעדיה:",
      emoji: "🏠",
      options: [
        { label: "שולחן אוכל גדול", value: "A", emoji: "🪑" },
        { label: "מרפסת או פטיו", value: "B", emoji: "🌺" },
        { label: "תאורה טובה ועיצוב יפה", value: "C", emoji: "💡" },
        { label: "פינת קריאה נעימה", value: "D", emoji: "🛋️" },
        { label: "מטבח מאובזר היטב", value: "E", emoji: "🔪" }
      ]
    },
    {
      id: 9,
      question: "החברים שלכם היו מתארים אתכם בתור:",
      emoji: "👥",
      options: [
        { label: "המחבר החברתי", value: "A", emoji: "🌟" },
        { label: "ההרפתקן", value: "B", emoji: "🧭" },
        { label: "היצירתי", value: "C", emoji: "🎨" },
        { label: "המאזין המתחשב", value: "D", emoji: "👂" },
        { label: "הנותן/המטפל", value: "E", emoji: "💝" }
      ]
    },
    {
      id: 10,
      question: "מה גורם לכם להיות הכי מאושרים?",
      emoji: "😊",
      options: [
        { label: "להיות מוקף באנשים אהובים", value: "A", emoji: "❤️" },
        { label: "אוויר צח ושטחים פתוחים", value: "B", emoji: "🌈" },
        { label: "סביבה יפה וצבעונית", value: "C", emoji: "🌸" },
        { label: "שלווה ושקט", value: "D", emoji: "🧘" },
        { label: "ארוחה טעימה עם אחרים", value: "E", emoji: "🥘" }
      ]
    }
  ];

  const results = {
    A: {
      title: "הסוכה עצמה! 🏠",
      emoji: "🏠",
      description: "אתם כולכם על חיבור אנשים! כמו הסוכה שמקבלת אורחים, אתם הלב החם והמכיל של כל מפגש.",
      activities: "תכננו ארוחות שיתופיות, פעילויות בניית צוות, אירועי קבלת פנים",
      color: "#F59E0B"
    },
    B: {
      title: "הסכך (הגג)! ☁️",
      emoji: "☁️",
      description: "אתם המחבר הטבעי בין שמיים וארץ! אתם אוהבים להיות בחוץ ולהביא פרספקטיבה רעננה.",
      activities: "תכננו פעילויות חוץ, טיולי טבע, אירועים על הגג, יציאות צוות באוויר הפתוח",
      color: "#10B981"
    },
    C: {
      title: "הקישוטים! 🎨",
      emoji: "🎨",
      description: "אתם הרוח היצירתית שהופכת הכל ליפה! כמו השרשראות והפירות הצבעוניים שמקשטים את הסוכה, אתם מביאים שמחה חזותית.",
      activities: "תכננו סדנאות יצירה, תחרויות קישוט, פרויקטים יצירתיים לצוות",
      color: "#8B5CF6"
    },
    D: {
      title: "האושפיזין (האורחים הרוחניים)! ✨",
      emoji: "✨",
      description: "אתם מהורהרים ומחשיבים, מביאים עומק לכל אינטראקציה. כמו האורחים המיסטיים שאנו מזמינים, אתם מוסיפים משמעות.",
      activities: "תכננו דיונים משמעותיים, מעגלי הודיה, פעילויות הרהור",
      color: "#6366F1"
    },
    E: {
      title: "האתרוג! 🍋",
      emoji: "🍋",
      description: "אתם המרכיב החיוני שהופך הכל לטוב יותר! כמו האתרוג הריחני, אתם מביאים תבלין ותוכן.",
      activities: "תכננו שיעורי בישול, טעימות אוכל, ארוחות קהילתיות, חילופי מתכונים",
      color: "#EAB308"
    },
    AB: {
      title: "הקירות הפתוחים! 🌬️",
      emoji: "🌬️",
      description: "אתם מאזנים הכנסת אורחים עם חופש! כמו המבנה הפתוח של הסוכה, אתם יוצרים מרחבים מזמינים שאינם מגבילים.",
      activities: "תכננו מפגשי חוץ לא פורמליים, מפגשים גמישים, אירועי בוא-ולך",
      color: "#14B8A6"
    },
    CE: {
      title: "אגודת ארבעת המינים! 🌿",
      emoji: "🌿",
      description: "אתם החבילה השלמה! כמו אגודת הלולב שמשלבת אלמנטים שונים, אתם מביאים גיוון.",
      activities: "תכננו אירועי רב-פעילות, מסיבות נושאיות, סדנאות חוויתיות",
      color: "#A855F7"
    },
    AD: {
      title: "ברכת הסוכות! 🙏",
      emoji: "🙏",
      description: "אתם יוצרים קשרים משמעותיים! כמו הברכות המיוחדות, אתם עוזרים לאנשים להרגיש אסירי תודה ומחוברים.",
      activities: "תכננו אירועי הערכה, פעילויות הכרה בצוות, יוזמות הודיה",
      color: "#EC4899"
    },
    BC: {
      title: "נושא הקציר! 🌾",
      emoji: "🌾",
      description: "אתם על חגיגת שפע ויופי בטבע! כמו היבט חג האסיף, אתם מעריכים את מתנות האדמה.",
      activities: "תכננו טיולים לשוק האיכרים, פרויקטי גינון, יוזמות קיימות",
      color: "#F97316"
    },
    DE: {
      title: "הארוחות החגיגיות! 🍽️",
      emoji: "🍽️",
      description: "אתם יוצרים חוויות מזינות במספר רמות! כמו הארוחות החגיגיות בסוכה, אתם מזינים גוף ונפש.",
      activities: "תכננו ארוחות אינטימיות, אירועי אוכל משמעותיים, חוויות אוכל איטי",
      color: "#F43F5E"
    }
  };

  const calculateResult = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    Object.values(answers).forEach(answer => {
      counts[answer]++;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    if (sorted[0][1] > sorted[1][1]) {
      return sorted[0][0];
    }
    
    const topTwo = sorted.slice(0, 2).map(([letter]) => letter).sort().join('');
    return results[topTwo] ? topTwo : sorted[0][0];
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const resultKey = calculateResult();
        const finalResult = results[resultKey];
        setResult(finalResult);
        
        const response = {
          name: userName,
          timestamp: new Date().toISOString(),
          answers: answers,
          result: finalResult.title
        };
        
        const stored = JSON.parse(localStorage.getItem('sukkotResponses') || '[]');
        stored.push(response);
        localStorage.setItem('sukkotResponses', JSON.stringify(stored));
      }
    }, 200);
  };

  const startQuiz = () => {
    if (userName.trim()) {
      setCurrentQuestion(0);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(-1);
    setAnswers({});
    setResult(null);
    setUserName('');
  };

  const viewResults = () => {
    const stored = JSON.parse(localStorage.getItem('sukkotResponses') || '[]');
    setAllResponses(stored);
    setShowResults(true);
  };

  const exportCSV = () => {
    const stored = JSON.parse(localStorage.getItem('sukkotResponses') || '[]');
    
    if (stored.length === 0) {
      alert('אין עדיין תשובות לייצוא!');
      return;
    }
    
    const BOM = '\uFEFF';
    const headers = ['שם', 'תאריך', 'שעה', 'תוצאה'];
    for (let i = 1; i <= 10; i++) {
      headers.push(`תשובה שאלה ${i}`);
    }
    
    const rows = stored.map(response => {
      const date = new Date(response.timestamp);
      const row = [
        response.name,
        date.toLocaleDateString('he-IL'),
        date.toLocaleTimeString('he-IL'),
        response.result
      ];
      
      for (let i = 1; i <= 10; i++) {
        row.push(response.answers[i] || '');
      }
      
      return row;
    });
    
    const csvContent = BOM + [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `תוצאות-חידון-סוכות-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const progress = currentQuestion >= 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      padding: '20px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif",
      direction: 'rtl'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .emoji-bounce { display: inline-block; animation: bounce 2s ease-in-out infinite; }
        .option-card:hover {
          transform: translateX(-8px) scale(1.02);
          border-color: #F59E0B;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .button-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.2); }
        .button-primary:active { transform: translateY(0); }
        input:focus { outline: none; border-color: #F59E0B; box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1); }
      `}</style>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px', animation: 'fadeInUp 500ms ease-out' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }} className="emoji-bounce">🍋🌿✨</div>
          <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#78350F', marginBottom: '8px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            מה רוח הסוכות שלך?
          </h1>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '3px solid #F59E0B', animation: 'fadeInScale 500ms ease-out' }}>
          {currentQuestion === -1 && !result && (
            <div style={{ animation: 'fadeInUp 400ms ease-out' }}>
              <p style={{ fontSize: '18px', color: '#92400E', textAlign: 'center', marginBottom: '32px', lineHeight: '1.6' }}>
                גלו את התפקיד הייחודי שלכם בחגיגת הסוכות!
              </p>
              
              <div style={{ background: 'linear-gradient(135deg, #F59E0B15 0%, #10B98115 100%)', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '16px', fontWeight: '500', color: '#78350F', marginBottom: '12px' }}>
                  👋 מה השם שלך?
                </label>
                <input
                  type="text"
                  placeholder="הכניסו את שמכם כאן..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  style={{ width: '100%', padding: '16px', fontSize: '18px', borderRadius: '8px', border: '2px solid #FDE68A', transition: 'all 200ms ease-out', fontFamily: "inherit", textAlign: 'right' }}
                  onKeyPress={(e) => e.key === 'Enter' && startQuiz()}
                />
              </div>
              
              <button 
                onClick={startQuiz} 
                disabled={!userName.trim()}
                className="button-primary"
                style={{ width: '100%', padding: '18px', fontSize: '18px', fontWeight: '600', color: 'white', background: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)', border: 'none', borderRadius: '12px', cursor: userName.trim() ? 'pointer' : 'not-allowed', transition: 'all 200ms ease-out', opacity: userName.trim() ? 1 : 0.5, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                🚀 בואו נתחיל!
              </button>
              
              <button 
                onClick={() => setIsAdmin(!isAdmin)} 
                style={{ width: '100%', padding: '14px', fontSize: '14px', fontWeight: '500', color: '#78350F', backgroundColor: 'transparent', border: '2px solid #FDE68A', borderRadius: '8px', cursor: 'pointer', marginTop: '12px', transition: 'all 200ms ease-out' }}
              >
                {isAdmin ? '🔒 הסתר' : '🔓 הצג'} פאנל ניהול
              </button>
              
              {isAdmin && (
                <div style={{ marginTop: '24px', padding: '24px', background: 'linear-gradient(135deg, #8B5CF615 0%, #F59E0B15 100%)', borderRadius: '12px', border: '2px dashed #D97706', animation: 'fadeInUp 300ms ease-out' }}>
                  <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: '600', color: '#78350F' }}>📊 לוח בקרה למנהל</h3>
                  <button 
                    onClick={viewResults} 
                    style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: '500', color: 'white', background: '#8B5CF6', border: 'none', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px', transition: 'all 200ms ease-out' }}
                  >
                    👀 צפייה בכל התשובות ({JSON.parse(localStorage.getItem('sukkotResponses') || '[]').length})
                  </button>
                  <button 
                    onClick={exportCSV}
                    style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: '500', color: 'white', background: '#10B981', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 200ms ease-out' }}
                  >
                    📥 הורדת קובץ CSV
                  </button>
                  
                  {showResults && allResponses.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      <h4 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '500', color: '#78350F' }}>תשובות אחרונות:</h4>
                      {allResponses.slice(-5).reverse().map((response, idx) => (
                        <div key={idx} style={{ padding: '12px', marginBottom: '8px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #FDE68A', fontSize: '14px' }}>
                          <div style={{ fontWeight: '600', color: '#78350F', marginBottom: '4px' }}>{response.name}</div>
                          <div style={{ color: '#92400E', fontSize: '13px' }}>{response.result}</div>
                          <div style={{ fontSize: '12px', color: '#A16207', marginTop: '4px' }}>{new Date(response.timestamp).toLocaleString('he-IL')}</div>
                        </div>
                      ))}
                      {allResponses.length > 5 && (
                        <p style={{ fontSize: '12px', color: '#A16207', marginTop: '8px', textAlign: 'center' }}>
                          מוצגות 5 תשובות אחרונות. הורידו CSV לנתונים מלאים.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {currentQuestion >= 0 && currentQuestion < questions.length && !result && (
            <div key={currentQuestion}>
              <div style={{ height: '8px', backgroundColor: '#FEF3C7', borderRadius: '4px', marginBottom: '24px', overflow: 'hidden', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg, #F59E0B 0%, #10B981 100%)', transition: 'width 400ms ease-out', width: `${progress}%`, borderRadius: '4px' }} />
              </div>
              
              <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600', color: '#F59E0B', textAlign: 'center' }}>
                שאלה {currentQuestion + 1} מתוך {questions.length}
              </div>
              
              <div style={{ textAlign: 'center', fontSize: '48px', marginBottom: '16px', animation: 'pulse 2s ease-in-out infinite' }}>
                {questions[currentQuestion].emoji}
              </div>
              
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#78350F', marginBottom: '28px', animation: 'fadeInUp 400ms ease-out', textAlign: 'center', lineHeight: '1.4' }}>
                {questions[currentQuestion].question}
              </h2>
              
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                  className="option-card"
                  style={{ width: '100%', padding: '18px 20px', marginBottom: '12px', fontSize: '16px', fontWeight: '500', color: '#78350F', backgroundColor: 'white', border: '2px solid #FDE68A', borderRadius: '12px', cursor: 'pointer', textAlign: 'right', transition: 'all 150ms ease-out', display: 'flex', alignItems: 'center', gap: '12px', animation: `fadeInUp ${400 + idx * 50}ms ease-out` }}
                >
                  <span style={{ fontSize: '24px' }}>{option.emoji}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          )}

          {result && (
            <div style={{ animation: 'fadeInScale 500ms ease-out', textAlign: 'center', position: 'relative' }}>
              <div style={{ fontSize: '72px', marginBottom: '24px', animation: 'bounce 2s ease-in-out infinite' }}>{result.emoji}</div>
              
              <div style={{ padding: '24px', background: `linear-gradient(135deg, ${result.color}20 0%, ${result.color}40 100%)`, borderRadius: '16px', marginBottom: '24px', border: `3px solid ${result.color}` }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#78350F', marginBottom: '16px' }}>{result.title}</h2>
                <p style={{ fontSize: '16px', color: '#92400E', lineHeight: '1.6', marginBottom: '20px' }}>{result.description}</p>
              </div>
              
              <div style={{ padding: '20px', backgroundColor: '#FEF3C7', borderRadius: '12px', marginBottom: '24px', border: '2px dashed #D97706' }}>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#78350F', marginBottom: '12px' }}>💡 הפעילויות המושלמות עבורכם:</div>
                <p style={{ margin: 0, color: '#92400E', fontSize: '15px', lineHeight: '1.6' }}>{result.activities}</p>
              </div>
              
              <button 
                onClick={restartQuiz}
                className="button-primary"
                style={{ width: '100%', padding: '18px', fontSize: '18px', fontWeight: '600', color: 'white', background: `linear-gradient(135deg, ${result.color} 0%, #F59E0B 100%)`, border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 200ms ease-out', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                🔄 ענו על השאלון שוב
              </button>
              
              <p style={{ marginTop: '24px', fontSize: '16px', fontWeight: '600', color: '#F59E0B' }}>חג שמח! 🎉✨</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;