// Course content is versioned with the source code. All educational links are open URLs.
export const syllabus = [
  { id: 'm01', number: '01', title: 'Fundamente AI', summary: 'Modele, algoritmi, inference, training și feedback.', lessons: ['m01l01','m01l02','m01l03'], status: 'available' },
  { id: 'm02', number: '02', title: 'Computing & Infrastructure', summary: 'CPU, GPU, memorie, servere, API și cloud.', lessons: ['m02l01','m02l02'], status: 'available' },
  { id: 'm03', number: '03', title: 'Python pentru AI', summary: 'Python, NumPy, fișiere, date și integrare.', lessons: [], status: 'planned' },
  { id: 'm04', number: '04', title: 'Matematica modelelor', summary: 'Vectori, matrici, derivate, probabilități.', lessons: [], status: 'planned' },
  { id: 'm05', number: '05', title: 'Machine Learning', summary: 'Loss functions, optimizare, generalizare.', lessons: [], status: 'planned' },
  { id: 'm06', number: '06', title: 'Deep Learning', summary: 'Neuroni, backpropagation, Transformers.', lessons: [], status: 'planned' },
  { id: 'm07', number: '07', title: 'Modele moderne', summary: 'LLM, vision, OCR, embeddings, RAG.', lessons: [], status: 'planned' },
  { id: 'm08', number: '08', title: 'Build & Train', summary: 'Model Zero, fine-tuning și dataset-uri.', lessons: [], status: 'planned' },
  { id: 'm09', number: '09', title: 'AI Trains AI', summary: 'Distillation, synthetic data, self-play și limite.', lessons: [], status: 'planned' },
  { id: 'm10', number: '10', title: 'Production & MLOps', summary: 'Serving, deployment, evaluări, monitorizare.', lessons: [], status: 'planned' },
  { id: 'm11', number: '11', title: 'Riscuri & Governance', summary: 'Securitate, date, licențe, reglementare.', lessons: [], status: 'planned' },
  { id: 'm12', number: '12', title: 'AI Incubator', summary: 'Arhitectură, pricing și model de business.', lessons: [], status: 'planned' }
];

export const resources = [
  { id:'3b1b-neuron', title:'But what is a Neural Network?', author:'3Blue1Brown', kind:'Video', topic:'Fundamente', duration:'19 min', url:'https://www.youtube.com/watch?v=Ilg3g-GewQ5', description:'Introducere vizuală în neuroni, weights și layers.', priority:'Essential' },
  { id:'nielsen', title:'Neural Networks and Deep Learning', author:'Michael Nielsen', kind:'Book', topic:'Fundamente', duration:'Capitolul 1', url:'http://neuralnetworksanddeeplearning.com/chap1.html', description:'Explicații despre rețele neuronale, training și cifre scrise de mână.', priority:'Essential' },
  { id:'google-ml', title:'Machine Learning Crash Course', author:'Google for Developers', kind:'Course', topic:'Machine Learning', duration:'În ritm propriu', url:'https://developers.google.com/machine-learning/crash-course', description:'ML, regresie, clasificare, rețele, date și exerciții.', priority:'Optional' },
  { id:'karpathy', title:'Neural Networks: Zero to Hero', author:'Andrej Karpathy', kind:'Video', topic:'Build', duration:'Serie', url:'https://karpathy.ai/zero-to-hero.html', description:'Construirea rețelelor neuronale și a unui mic GPT de la bază.', priority:'Essential' },
  { id:'pytorch', title:'PyTorch — Learn the Basics', author:'PyTorch', kind:'Documentation', topic:'Build', duration:'Tutorial', url:'https://docs.pytorch.org/tutorials/beginner/basics/intro.html', description:'Tensors, datasets, models, optimizers și salvare.', priority:'Essential' },
  { id:'sutton', title:'The Bitter Lesson', author:'Rich Sutton', kind:'Essay', topic:'AI Philosophy', duration:'~10 min', url:'http://www.incompleteideas.net/IncIdeas/BitterLesson.html', description:'Rolul metodelor generale, al învățării și al calculului.', priority:'Essential' },
  { id:'distill', title:'Distilling the Knowledge in a Neural Network', author:'Hinton, Vinyals & Dean (2015)', kind:'Paper', topic:'AI Trains AI', duration:'Paper', url:'https://arxiv.org/abs/1503.02531', description:'Transferul cunoștințelor între modele teacher și student.', priority:'Essential' },
  { id:'self-instruct', title:'Self-Instruct', author:'Wang et al. (2022)', kind:'Paper', topic:'AI Trains AI', duration:'Paper', url:'https://arxiv.org/abs/2212.10560', description:'Generarea de exemple de instruire cu ajutorul unui model.', priority:'Essential' },
  { id:'collapse', title:'AI Models Collapse When Trained on Recursively Generated Data', author:'Shumailov et al. (Nature, 2024)', kind:'Paper', topic:'AI Trains AI', duration:'Paper', url:'https://www.nature.com/articles/s41586-024-07566-y', description:'Riscurile antrenării recursive pe date sintetice.', priority:'Essential' },
  { id:'attention', title:'Attention Is All You Need', author:'Vaswani et al. (2017)', kind:'Paper', topic:'Deep Learning', duration:'Paper', url:'https://arxiv.org/abs/1706.03762', description:'Lucrarea de referință despre Transformer.', priority:'Optional' },
  { id:'cs336', title:'Stanford CS336 — Language Modeling from Scratch', author:'Stanford', kind:'Course', topic:'Build', duration:'Avansat', url:'https://cs336.stanford.edu/', description:'Modelare lingvistică din perspectiva implementării.', priority:'Advanced' },
  { id:'deepmind', title:'AlphaZero and MuZero', author:'Google DeepMind', kind:'Research', topic:'AI Trains AI', duration:'Overview', url:'https://deepmind.google/research/alphazero-and-muzero/', description:'Self-play și sisteme care învață prin experiență.', priority:'Optional' },
  { id:'supabase-rls', title:'Row Level Security', author:'Supabase Docs', kind:'Documentation', topic:'Infrastructure', duration:'Reference', url:'https://supabase.com/docs/guides/database/postgres/row-level-security', description:'Controlul accesului la date între utilizatori.', priority:'Optional' },
  { id:'python-tutorial', title:'The Python Tutorial', author:'Python Software Foundation', kind:'Documentation', topic:'Python', duration:'Reference', url:'https://docs.python.org/3/tutorial/', description:'Python oficial, util pentru tranziția din C/Java.', priority:'Optional' },
];

export const lessons = [
  {
    id:'m01l01', module:'m01', index:'1.1', title:'Ce este un model AI?', duration:9, concepts:['model','algoritm','aplicație','pipeline'], resourceIds:['3b1b-neuron','nielsen'],
    intro:'Înțelege diferența dintre un produs AI și matematica pe care o folosește.',
    blocks:[
      {type:'p',text:'Imaginează-ți că primești 500 de facturi, toate cu aspect diferit. Vrei să extragi automat data, furnizorul și suma. În programarea clasică poți scrie reguli pentru poziții, cuvinte-cheie și expresii regulate. Dar fiecare format nou poate cere noi reguli.'},
      {type:'h2',text:'De la reguli la modele'},
      {type:'p',text:'În Machine Learning, modelul folosește parametri ajustați în timpul antrenării pentru a aproxima o relație între input și output. Modelul nu este o colecție de răspunsuri exacte memorate: obiectivul este să generalizeze la exemple noi.'},
      {type:'compare',leftTitle:'Programare clasică',left:'Date + reguli definite de programator → rezultat.',rightTitle:'Machine Learning',right:'Date + model cu parametri învățați → predicție.'},
      {type:'h2',text:'Model ≠ aplicație'},
      {type:'p',text:'Un model poate estima valori, recunoaște obiecte sau genera text. Aplicația din jur se ocupă de autentificare, interfață, stocare, prelucrarea datelor, verificare și export.'},
      {type:'callout',title:'Billy, concret',text:'BillyDPI este aplicația; pipeline-ul ei decide când și cum să proceseze documentele; modelele AI contribuie la interpretarea imaginilor și textului. Folosirea unui model prin API nu înseamnă că acel model îți aparține.'},
      {type:'h2',text:'Patru lucruri pe care le separăm'},
      {type:'list',items:['Algoritm — o metodă sau o succesiune de pași.','Model — structură matematică și parametrii săi ajustați.','Engine / pipeline — coordonează modele, reguli și verificări.','Produs — experiența completă oferită utilizatorului.']},
      {type:'note',text:'Simplificare utilă: nu toate sistemele numite „AI” folosesc machine learning, iar unele produse combină metode statistice, reguli și modele de învățare.'},
    ],
    quiz:[
      {q:'Un site folosește prin API un model dezvoltat de altă companie. Ce deține, în mod automat, creatorul site-ului?',options:['Parametrii modelului','Codul și funcțiile aplicației proprii','Datele cu care a fost antrenat modelul'],correct:1,explanation:'Integrarea prin API nu implică proprietatea asupra weights-urilor sau a datelor de training ale furnizorului.'},
      {q:'Care componentă decide că un document trebuie verificat de un al doilea model?',options:['De regulă, orchestrarea / pipeline-ul','RAM-ul calculatorului','Tokenizer-ul'],correct:0,explanation:'Decizia de apelare a altor modele este implementată în orchestrarea sistemului, prin reguli sau mecanisme specializate.'},
      {q:'Ce este generalizarea?',options:['Salvarea fiecărei imagini din training','Funcționarea utilă și pe exemple nevăzute','Accesul la internet'],correct:1,explanation:'Generalizarea înseamnă performanță pe date care nu au fost folosite direct la antrenare.'}
    ]
  },
  {
    id:'m01l02',module:'m01',index:'1.2',title:'Training vs. Inference',duration:11,concepts:['training','inference','feedback','evaluation'],resourceIds:['google-ml','collapse'],
    intro:'De ce salvarea unei corecții nu înseamnă automat că AI a învățat.',
    blocks:[
      {type:'p',text:'Două operații diferite pot folosi același model: antrenarea lui și folosirea lui pentru a produce rezultate.'},
      {type:'compare',leftTitle:'Training',left:'Calculăm erori și ajustăm parametrii modelului pentru a îmbunătăți un obiectiv.',rightTitle:'Inference',right:'Păstrăm parametrii fixați și calculăm predicția pentru un input nou.'},
      {type:'h2',text:'Cum funcționează un ciclu simplu de training?'},
      {type:'steps',items:['Prezinți modelului un exemplu și eticheta așteptată.','Modelul produce o predicție.','O funcție loss măsoară diferența dintre predicție și obiectiv.','Un algoritm de optimizare ajustează parametrii pentru a reduce loss-ul.','Repetăm și testăm pe date separate, nevăzute la training.']},
      {type:'h2',text:'Unde intră feedback-ul uman?'},
      {type:'p',text:'Un operator corectează o valoare extrasă greșit. Corecția poate fi salvată ca exemplu validat. Dar modelul nu își schimbă weights-urile doar pentru că baza de date conține această corecție.'},
      {type:'callout',title:'Caz Billy',text:'Dacă un bon de carburant este citit greșit de două ori, sunt mai multe opțiuni: reutilizarea unei corecții existente, îmbunătățirea promptului, extragerea unei alte regiuni, apelarea unui alt model sau fine-tuning. E important să testăm separat care variantă ajută.'},
      {type:'h2',text:'Evaluation ≠ Training'},
      {type:'p',text:'O evaluare independentă folosește exemple păstrate în afara antrenării. Dacă testezi doar pe fotografii pe care modelul le-a văzut deja, rezultatul poate supraestima performanța reală.'},
      {type:'note',text:'Un sistem poate avea memorie sau retrieval fără să își actualizeze weights-urile. Pentru experiența utilizatorului, poate părea că „învață”, dar mecanismele sunt distincte.'}
    ],
    quiz:[
      {q:'Operatorul corectează o valoare și este salvată în baza de date. Ce putem afirma?',options:['Modelul a fost automat reantrenat','Corecția poate fi reutilizată, dar weights-urile nu se schimbă automat','Modelul a devenit 100% sigur'],correct:1,explanation:'Salvarea datelor și actualizarea modelului sunt operații diferite.'},
      {q:'La ce folosește un set de test separat?',options:['La verificarea performanței pe date neutilizate în training','La stocarea parolelor','La înlocuirea GPU-ului'],correct:0,explanation:'Setul de test permite măsurarea mai credibilă a generalizării.'},
      {q:'În timpul inference-ului standard, ce se întâmplă cu parametrii?',options:['Se actualizează după fiecare răspuns','Rămân fixați','Sunt șterși'],correct:1,explanation:'Inference-ul standard produce predicții fără optimizarea parametrilor.'}
    ]
  },
  {
    id:'m01l03',module:'m01',index:'1.3',title:'Weights, Biases & Tokens',duration:12,concepts:['weights','bias','token','parameters'],resourceIds:['3b1b-neuron','karpathy'],
    intro:'Ce se află în interiorul unui model și ce înseamnă să îl antrenezi.',
    blocks:[
      {type:'h2',text:'Un neuron simplificat'},
      {type:'p',text:'Un neuron artificial simplificat combină inputuri cu ponderi (weights), adaugă un bias și aplică o funcție de activare. În cazul unui singur input, putem scrie y = σ(w·x + b), unde σ este funcția sigmoid.'},
      {type:'formula',text:'y = σ(wx + b)    σ(z) = 1 / (1 + e^(−z))'},
      {type:'p',text:'Weight-ul w stabilește cât influențează x rezultatul. Bias-ul b deplasează pragul. Antrenarea ajustează aceste valori, nu „introduce” manual o definiție de inteligență.'},
      {type:'callout',title:'Experiment',text:'Deschide Lab → Single Neuron. Modifică weight și bias, urmărește predicțiile și apasă Train pentru a observa loss-ul. Laboratorul implementează un pas real de gradient descent pentru un exemplu foarte mic.'},
      {type:'h2',text:'Parametri și arhitectură'},
      {type:'p',text:'Arhitectura descrie cum sunt conectate operațiile din model. Parametrii sunt valorile numerice învățate. Două modele cu aceeași arhitectură, dar weights diferite, pot produce răspunsuri diferite.'},
      {type:'h2',text:'Ce este un token?'},
      {type:'p',text:'Un model lingvistic nu primește text ca o singură entitate magică. Un tokenizer îl transformă într-o secvență de identificatori numerici, care corespund unor unități de text. Un token poate fi un cuvânt, o parte de cuvânt sau chiar un simbol; depinde de tokenizer.'},
      {type:'compare',leftTitle:'Tokenizer',left:'Transformă textul în ID-uri, conform unui vocabular.',rightTitle:'Language model',right:'Procesează tokenii și estimează distribuții pentru tokenii următori.'},
      {type:'note',text:'Termenul „parametri” poate desemna și setări de aplicație. Aici ne referim la parametrii antrenabili ai modelului.'}
    ],
    quiz:[
      {q:'Care sunt valorile ajustate la antrenarea neuronului simplificat y = σ(wx+b)?',options:['w și b','Numele fișierului și extensia','Frecvența monitorului'],correct:0,explanation:'Weight-ul și bias-ul sunt parametri ajustabili.'},
      {q:'Tokenizarea înseamnă în mod obligatoriu câte un cuvânt per token?',options:['Da','Nu','Doar când folosești GPU'],correct:1,explanation:'Tokenii pot fi subcuvinte, simboluri sau alte unități, în funcție de tokenizer.'},
      {q:'Pot două modele cu aceeași arhitectură să producă predicții diferite?',options:['Nu, ar fi identice','Da, dacă au parametri diferiți','Doar în cloud'],correct:1,explanation:'Arhitectura și parametrii învățați sunt lucruri distincte.'}
    ]
  },
  {
    id:'m02l01',module:'m02',index:'2.1',title:'CPU, GPU, RAM & VRAM',duration:10,concepts:['CPU','GPU','RAM','VRAM'],resourceIds:['pytorch'],
    intro:'Cum se mapează calculul AI pe hardware și unde apar limitele practice.',
    blocks:[
      {type:'p',text:'La nivel hardware, AI înseamnă foarte multe operații numerice: înmulțiri de matrici, adunări și transformări ale datelor. Hardware-ul influențează timpul și dimensiunea modelelor pe care le poți rula.'},
      {type:'compare',leftTitle:'CPU',left:'Versatil, potrivit pentru logica aplicației și sarcini diverse.',rightTitle:'GPU',right:'Specializat pentru multe operații numerice executate în paralel.'},
      {type:'h2',text:'RAM vs. VRAM'},
      {type:'p',text:'RAM este memoria principală utilizată de CPU și procesele sistemului. VRAM este memoria asociată GPU-ului. Un model trebuie să încapă în memoria disponibilă pentru strategia de execuție aleasă; la training există și memorie pentru activări, gradienți și optimizer.'},
      {type:'h2',text:'De ce 7B parameters nu înseamnă automat 7 GB'},
      {type:'p',text:'Stocarea aproximativă a weights-urilor depinde de numărul de biți folosiți pentru fiecare parametru. 7 miliarde × 16 biți ≈ 14 GB numai pentru weights, înainte de overhead. La 4 biți, ar fi ≈ 3,5 GB teoretic, dar rularea reală implică și alte costuri de memorie.'},
      {type:'formula',text:'Memorie weights ≈ număr parametri × biți/parametru ÷ 8'},
      {type:'callout',title:'Consecință de business',text:'Alegerea dintre API extern, server GPU închiriat și un model local depinde de latență, volum, cost, protecția datelor și performanța cerută — nu doar de numărul de parametri.'}
    ],
    quiz:[
      {q:'La aceeași precizie, ce model ocupă mai multă memorie pentru weights?',options:['7 miliarde parametri','700 milioane parametri','Au neapărat aceeași dimensiune'],correct:0,explanation:'Cu același număr de biți per parametru, memoria weights-urilor crește aproximativ proporțional cu numărul de parametri.'},
      {q:'Ce rol are VRAM?',options:['Memorie folosită de GPU','Este un tip de conexiune la internet','Este numai spațiu de stocare permanentă'],correct:0,explanation:'VRAM este memoria pentru operațiile GPU și datele asociate.'},
      {q:'Memoria pentru training include doar weights?',options:['Da','Nu, și alte structuri precum gradienți/activări','Doar fișierele JSON'],correct:1,explanation:'Trainingul are de regulă cerințe de memorie suplimentare față de simpla stocare a weights-urilor.'}
    ]
  },
  {
    id:'m02l02',module:'m02',index:'2.2',title:'API, Backend & Database',duration:12,concepts:['API','backend','database','cloud'],resourceIds:['supabase-rls'],
    intro:'Cum vorbește o aplicație cu un model și cum persistă datele.',
    blocks:[
      {type:'p',text:'O interfață este doar partea vizibilă. În spate, o aplicație poate avea servicii care validează datele, trimit cereri către modele, înregistrează rezultate și aplică permisiuni.'},
      {type:'steps',items:['Utilizatorul încarcă o imagine în frontend.','Backend-ul verifică autentificarea, fișierul și regulile aplicației.','Un serviciu procesează imaginea și apelează modelul prin API.','Răspunsul este validat și salvat în bază.','Frontend-ul afișează rezultatul și permite corecturi.']},
      {type:'h2',text:'Ce este un API?'},
      {type:'p',text:'Un Application Programming Interface este un contract de comunicare între componente software. Într-un API HTTP, un client poate trimite o cerere, de exemplu POST /documents, iar serverul întoarce un status și date structurate.'},
      {type:'code',language:'json',text:'{\n  "document_id": "doc_001",\n  "status": "review_required",\n  "fields": { "fuel_liters": 1800 }\n}'},
      {type:'h2',text:'Ce trebuie păstrat pe server'},
      {type:'p',text:'Cheile secrete pentru servicii AI, credentialele administrative și operațiile privilegiate nu trebuie expuse direct în frontend. Accesul utilizatorului la date trebuie limitat pe server sau cu politici de securitate în bază.'},
      {type:'callout',title:'Platforma acestui curs',text:'Progresul se salvează local în prima versiune. Structura Supabase separată permite ulterior autentificare și sincronizare între dispozitive. Fără sincronizare activată, datele locale nu apar automat pe alt telefon sau calculator.'}
    ],
    quiz:[
      {q:'Unde ar trebui stocată o cheie secretă de furnizor AI?',options:['În JavaScript public, accesibil în browser','Pe un server sau mediu securizat','În textul unui quiz'],correct:1,explanation:'Cheile secrete nu trebuie expuse clienților publici.'},
      {q:'Ce face un backend?',options:['Doar modifică aspectul site-ului','Poate valida cereri, executa logică și comunica cu servicii și baze de date','Înlocuiește automat toate modelele AI'],correct:1,explanation:'Backend-ul gestionează logica și integrarea serviciilor din spatele interfeței.'},
      {q:'Progresul salvat exclusiv în localStorage se sincronizează automat între dispozitive?',options:['Da','Nu'],correct:1,explanation:'Este nevoie de un serviciu de sincronizare și o identitate de utilizator.'}
    ]
  }
];
export const lessonById = Object.fromEntries(lessons.map(l => [l.id,l]));
export const resourceById = Object.fromEntries(resources.map(r => [r.id,r]));
export const totalAvailableLessons = lessons.length;
