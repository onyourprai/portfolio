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
    place: 'Shinkanzen Sushi · PTT · Thaifex · Dek-D',
    title: 'Part-Time & Event Staff',
    date: '2023 – 2026',
    points: [
      'Worked with team members to deliver excellent customer service and achieve event and store objectives.',
      'Built strong communication and problem-solving skills in fast-paced, dynamic environments.',
      'Worked with Dek-D twice, once earlier and again in 2026.',
    ],
  },
  {
    side: 'right',
    place: 'Tokio Marine',
    title: 'IT Career Camp: Workshop Participant',
    date: 'WORKSHOP',
    points: [
      'Joined a beginner-friendly workshop to explore real-world IT practices.',
      'Gained guided, introductory experience calling APIs and using Visual Studio.',
    ],
  },
  {
    side: 'left',
    place: 'KMUTNB',
    title: 'Electronics Engineering Technology (Computer)',
    date: '2023 – PRESENT',
    points: ["King Mongkut's University of Technology North Bangkok, Year 4. GPA 3.25."],
  },
  {
    side: 'right',
    place: 'Satri Nonthaburi School',
    title: 'Secondary School (M.1 – M.6)',
    date: 'SECONDARY',
    points: ['Completed lower and upper secondary education at Satri Nonthaburi School.'],
  },
]

export const projects = [
  {
    tag: 'Web Application',
    title: 'Sports Facility Booking',
    description:
      'An online platform for managing and booking sports facilities. It eliminates double bookings and lets users see available time slots and reserve a court instantly.',
    stack: 'Next.js · React · TypeScript · Tailwind · Firebase · Docker',
    live: 'https://courthub-web.vercel.app/',
    github: 'https://github.com/Chinnawan/courthub-web',
  },
  {
    tag: 'Mobile Application',
    title: 'Pocket Trip',
    description:
      'A trip-prep mobile app with an AI assistant that suggests what to pack for your destination, plus a checklist where you can add your own notes, so nothing gets forgotten before you leave.',
    stack: 'Flutter · Dart · Firebase',
    live: null,
    github: 'https://github.com/onyourprai/mobile-app-first',
  },
  {
    tag: 'Hardware / Electronics',
    title: 'AC 220V to DC 12V Power Supply',
    description:
      'A working power supply built from scratch: hand-wound transformer coils, components soldered onto the controller board, and everything assembled into a finished, usable enclosure.',
    stack: 'Transformer Winding · Soldering · Circuit Assembly',
    live: null,
    github: null,
  },
  {
    tag: 'Hardware / PCB Design',
    title: 'Custom Microcontroller PCB',
    description:
      'A PCB for Arduino, ESP32 and other microcontrollers. Laid out in EasyEDA, then etched and soldered by hand.',
    stack: 'EasyEDA · Arduino · ESP32 · PCB Etching · Soldering',
    live: null,
    github: null,
  },
]

export const skillFilters = [
  { key: 'all', label: 'All' },
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'databases', label: 'Database & Cloud' },
  { key: 'tools', label: 'Tools' },
  { key: 'hardware', label: 'Hardware & Core' },
  { key: 'media', label: 'Media' },
]

export const skills = [
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'languages' },
  { name: 'C / C++', icon: 'devicon-cplusplus-plain colored', category: 'languages' },
  { name: 'Java', icon: 'devicon-java-plain colored', category: 'languages' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'languages' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'languages' },
  { name: 'PHP', icon: 'devicon-php-plain colored', category: 'languages' },
  { name: 'Dart', icon: 'devicon-dart-plain colored', category: 'languages' },
  { name: 'HTML', icon: 'devicon-html5-plain colored', category: 'languages' },
  { name: 'CSS', icon: 'devicon-css3-plain colored', category: 'languages' },
  { name: 'React', icon: 'devicon-react-original colored', category: 'frameworks' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'frameworks' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'frameworks' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored', category: 'frameworks' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', category: 'frameworks' },
  { name: 'OpenCV', icon: 'devicon-opencv-plain colored', category: 'frameworks' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'databases' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', category: 'databases' },
  { name: 'Microsoft Azure', icon: 'devicon-azure-plain colored', category: 'databases' },
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'tools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'tools' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'tools' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'tools' },
  { name: 'EasyEDA', icon: 'fa-solid fa-diagram-project', category: 'tools' },
  { name: 'ESP32', icon: 'fa-solid fa-microchip', category: 'hardware' },
  { name: 'Arduino', icon: 'devicon-arduino-plain colored', category: 'hardware' },
  { name: 'PCB Design & Etching', icon: 'fa-solid fa-memory', category: 'hardware' },
  { name: 'Soldering & Circuits', icon: 'fa-solid fa-screwdriver-wrench', category: 'hardware' },
  { name: 'Transformer Winding', icon: 'fa-solid fa-bolt', category: 'hardware' },
  { name: 'Machine Learning & DL', icon: 'fa-solid fa-brain', category: 'hardware' },
  { name: 'Data Structures & Algorithms', icon: 'fa-solid fa-sitemap', category: 'hardware' },
  { name: 'OOP', icon: 'fa-solid fa-cubes', category: 'hardware' },
  { name: 'Premiere Pro', icon: 'devicon-premierepro-plain colored', category: 'media' },
  { name: 'Photoshop', icon: 'devicon-photoshop-plain colored', category: 'media' },
  { name: 'Video Editing', icon: 'fa-solid fa-film', category: 'media' },
  { name: 'Photography', icon: 'fa-solid fa-camera', category: 'media' },
]
