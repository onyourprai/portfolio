export const navItems = [
  { id: 'home', icon: 'house', label: 'Home' },
  { id: 'about', icon: 'user', label: 'About' },
  { id: 'experience', icon: 'briefcase', label: 'Journey' },
  { id: 'projects', icon: 'code', label: 'Projects' },
  { id: 'skills', icon: 'layer-group', label: 'Skills' },
  { id: 'profiles', icon: 'globe', label: 'Profiles' },
  { id: 'contact', icon: 'envelope', label: 'Contact' },
]

export const timeline = [
  {
    side: 'left',
    place: 'KMUTNB',
    title: 'B.Eng. Electronic Engineering Technology (Computer)',
    date: '2023 – PRESENT',
    points: [
      "King Mongkut's University of Technology North Bangkok. Currently in the fourth year, GPA 3.25.",
    ],
  },
  {
    side: 'right',
    place: 'Tokio Marine',
    title: 'IT Career Camp',
    date: 'WORKSHOP',
    points: [
      'Took part in an entry-level workshop that introduced how IT teams work in practice.',
      'Tried calling APIs and working in Visual Studio for the first time with a mentor guiding each step.',
    ],
  },
  {
    side: 'left',
    place: 'Shinkanzen Sushi · PTT · Thaifex · Dek-D',
    title: 'Part-Time & Event Staff',
    date: '2023 – 2026',
    points: [
      'Served customers and supported on-site events as part of a team, helping each store or event hit its targets.',
      'Learned to communicate clearly and fix problems quickly when the pace picked up.',
      'Joined Dek-D for a second time in 2026.',
    ],
  },
  {
    side: 'right',
    place: 'Satri Nonthaburi School',
    title: 'Secondary Education (M.1 – M.6)',
    date: 'SECONDARY',
    points: ['Finished six years of secondary school at Satri Nonthaburi School.'],
  },
]

export const projects = [
  {
    tag: 'Web Application',
    title: 'CourtHub: Court Booking System',
    description:
      'A booking website for sports courts. Users browse open time slots and reserve one in a few clicks, and the system stops two people from taking the same slot.',
    stack: 'Next.js · React · TypeScript · Tailwind · Firebase · Docker',
    live: 'https://courthub-web.vercel.app/',
    github: 'https://github.com/Chinnawan/courthub-web',
  },
  {
    tag: 'Mobile Application',
    title: 'Pocket Trip',
    description:
      'A packing helper for travellers. Tell it where you are going and the AI suggests what to bring, then keep your own checklist of notes so nothing is left behind.',
    stack: 'Flutter · Dart · Firebase',
    live: null,
    github: 'https://github.com/onyourprai/mobile-app-first',
  },
  {
    tag: 'Hardware / Electronics',
    title: '12V DC Power Supply from 220V AC',
    description:
      'A power supply made entirely by hand: transformer coils wound myself, parts soldered to the control board, and the whole unit fitted into a working case.',
    stack: 'Transformer Winding · Soldering · Circuit Assembly',
    live: null,
    github: null,
  },
  {
    tag: 'Hardware / PCB Design',
    title: 'Microcontroller Development Board',
    description:
      'A circuit board that fits Arduino, ESP32 and similar microcontrollers. I drew the layout in EasyEDA, etched the copper and soldered every component by hand.',
    stack: 'EasyEDA · Arduino · ESP32 · PCB Etching · Soldering',
    live: null,
    github: null,
  },
]

export const skillFilters = [
  { key: 'all', label: 'All' },
  { key: 'programming', label: 'Programming' },
  { key: 'webapp', label: 'Web & App' },
  { key: 'data', label: 'Data & Cloud' },
  { key: 'devtools', label: 'Dev Tools' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'creative', label: 'Creative' },
]

export const skills = [
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'programming' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'programming' },
  { name: 'PHP', icon: 'devicon-php-plain colored', category: 'programming' },
  { name: 'C / C++', icon: 'devicon-cplusplus-plain colored', category: 'programming' },
  { name: 'Java', icon: 'devicon-java-plain colored', category: 'programming' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'programming' },
  { name: 'Dart', icon: 'devicon-dart-plain colored', category: 'programming' },
  { name: 'Data Structures & Algorithms', icon: 'fa-solid fa-sitemap', category: 'programming' },
  { name: 'OOP', icon: 'fa-solid fa-cubes', category: 'programming' },
  { name: 'Machine Learning & DL', icon: 'fa-solid fa-brain', category: 'programming' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored', category: 'webapp' },
  { name: 'React', icon: 'devicon-react-original colored', category: 'webapp' },
  { name: 'HTML', icon: 'devicon-html5-plain colored', category: 'webapp' },
  { name: 'CSS', icon: 'devicon-css3-plain colored', category: 'webapp' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'webapp' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', category: 'webapp' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'webapp' },
  { name: 'OpenCV', icon: 'devicon-opencv-plain colored', category: 'webapp' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', category: 'data' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'data' },
  { name: 'Microsoft Azure', icon: 'devicon-azure-plain colored', category: 'data' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'devtools' },
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'devtools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'devtools' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devtools' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'devtools' },
  { name: 'Arduino', icon: 'devicon-arduino-plain colored', category: 'electronics' },
  { name: 'ESP32', icon: 'fa-solid fa-microchip', category: 'electronics' },
  { name: 'EasyEDA', icon: 'fa-solid fa-diagram-project', category: 'electronics' },
  { name: 'PCB Design & Etching', icon: 'fa-solid fa-memory', category: 'electronics' },
  { name: 'Soldering & Circuits', icon: 'fa-solid fa-screwdriver-wrench', category: 'electronics' },
  { name: 'Transformer Winding', icon: 'fa-solid fa-bolt', category: 'electronics' },
  { name: 'Photoshop', icon: 'devicon-photoshop-plain colored', category: 'creative' },
  { name: 'Premiere Pro', icon: 'devicon-premierepro-plain colored', category: 'creative' },
  { name: 'Video Editing', icon: 'fa-solid fa-film', category: 'creative' },
  { name: 'Photography', icon: 'fa-solid fa-camera', category: 'creative' },
]
