import { Course, FacultyMember, AcademicClassOption, ProgrammeOption } from '../types';

export const ACADEMIC_CLASSES: AcademicClassOption[] = [
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

export const PROGRAMME_OPTIONS: ProgrammeOption[] = [
  'NEET Preparation',
  'JEE Preparation',
  'CBSE Board Coaching',
  'N/A',
];

export const INSTITUTE_CONFIG = {
  name: 'Step By Step Coaching Centre',
  alternateName: 'Step By Step Study Centre',
  tagline: 'Towards Success',
  classRange: 'Coaching for Classes 5 to 12',
  classRangeHighlight: 'Building Strong Foundations from Class 5 to Class 12',
  logoUrl: '/assets/aistudio/image_e825b472.png',
  phoneDisplay: '+91 84478 32910',
  phoneRaw: '918447832910',
  telLink: 'tel:+918447832910',
  whatsappBaseUrl: 'https://wa.me/918447832910',
  address: {
    line1: 'B-145/2, Thokar Number 8',
    locality: 'Shaheen Bagh, Jamia Nagar, Okhla',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110025',
    full: 'B-145/2, Thokar Number 8, Shaheen Bagh, Jamia Nagar, Okhla, New Delhi, Delhi 110025',
  },
  timings: {
    weekdays: 'Monday to Saturday: 4:00 PM – 9:00 PM',
    sunday: 'Sunday: Closed',
    badge: 'Mon–Sat: 4:00 PM – 9:00 PM',
  },
  colors: {
    primaryRed: '#C8102E',
    deepRed: '#A80F25',
    primaryBlack: '#111111',
    darkBg: '#171717',
    pureWhite: '#FFFFFF',
    lightBg: '#F7F7F7',
    secondaryGrey: '#6B7280',
  },
  teachingPhilosophy:
    'Every strong academic journey begins with a clear understanding of the basics. At Step By Step, our focus is on helping students develop strong concepts, improve their understanding, and progress towards their academic goals.',
  aboutIntroduction:
    'Step By Step Study Centre is an educational institution providing quality education and academic support from Class 5 to Class 12, with a vision to build strong academic foundations.',
  vision:
    'To provide quality education and help students develop a strong academic foundation.',
  mission:
    'To nurture intellectual curiosity, conceptual understanding, and consistent academic discipline from Class 5 through Class 12, providing structured step-by-step guidance towards success in school, board, and entrance examinations.',
  teachingApproachPillars: [
    {
      title: 'Learning Concepts from the Basics',
      description:
        'We begin from foundational fundamentals before moving to complex problem-solving, ensuring no gaps in core comprehension.',
    },
    {
      title: 'Developing Conceptual Clarity',
      description:
        'Rigorous subject explanations that break down theories into clear, digestible principles students can confidently apply.',
    },
    {
      title: 'Regular Academic Practice',
      description:
        'Continuous problem-solving exercises, numerical drills, and question reviews to reinforce classroom understanding.',
    },
    {
      title: 'Understanding Rather Than Memorising',
      description:
        'Encouraging analytical reasoning and deep comprehension over rote memorisation, fostering lasting subject mastery.',
    },
    {
      title: 'Building Confidence Through Learning',
      description:
        'A constructive, supportive atmosphere that empowers students to ask doubts freely and build academic self-belief.',
    },
  ],
  whyChooseUsValues: [
    {
      title: 'Conceptual Understanding',
      description:
        'Deep emphasis on understanding the underlying logic of every formula, theorem, and scientific principle.',
    },
    {
      title: 'Strong Foundation Building',
      description:
        'Systematic syllabus progression from Class 5 through Class 12 designed to strengthen fundamentals for long-term academic excellence.',
    },
    {
      title: 'Supportive Teaching Approach',
      description:
        'Dedicated mentors who prioritize individual doubt clearance and attentive, approachable classroom engagement.',
    },
    {
      title: 'Regular Academic Guidance',
      description:
        'Structured assessments, regular progress evaluation, and continuous conceptual feedback throughout the academic year.',
    },
    {
      title: 'Focus on Student Development',
      description:
        'Holistic development emphasizing disciplined study habits, exam composure, and intellectual confidence.',
    },
  ],
  subjects: [
    {
      name: 'Physics',
      category: 'Core Science',
      description:
        'Master mechanics, electromagnetism, optics, and modern physics through conceptual problem solving and mathematical modeling.',
    },
    {
      name: 'Chemistry',
      category: 'Core Science',
      description:
        'In-depth study of Physical Chemistry principles, Inorganic reactions and periodicity, and Organic reaction mechanisms.',
    },
    {
      name: 'Mathematics',
      category: 'Analytical',
      description:
        'Step-by-step mastery of algebra, calculus, coordinate geometry, arithmetic, and trigonometry with rigorous practice.',
    },
    {
      name: 'Biology',
      category: 'Life Sciences',
      description:
        'Comprehensive exploration of Botany and Zoology, cellular processes, genetics, physiology, and ecological systems.',
    },
  ],
};

export const COURSES: Course[] = [
  {
    id: 'cbse',
    title: 'CBSE Board Coaching',
    shortDescription:
      'Regular academic coaching and foundation building designed to support students studying under the CBSE curriculum from Class 5 to Class 12.',
    detailedDescription:
      'Targeted school board coaching and foundation development covering Class 5 to Class 12. Emphasizes textbook clarity, accurate presentation of answers, step-by-step numerical methodology, and thorough syllabus mastery across Science and Mathematics.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    targetAudience: 'Students from Class 5 to Class 12 (CBSE Curriculum)',
    iconName: 'GraduationCap',
    badge: 'Classes 5 to 12',
  },
  {
    id: 'neet',
    title: 'NEET Preparation',
    shortDescription:
      'Structured coaching for students preparing for the National Eligibility cum Entrance Test.',
    detailedDescription:
      'A comprehensive, concept-oriented preparation programme tailored specifically for medical aspirants. Designed to develop rigorous conceptual mastery in Physics, Chemistry, and Biology with targeted medical entrance problem-solving approaches.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    targetAudience: 'Medical Entrance Aspirants (Classes 11, 12 & Droppers)',
    iconName: 'Stethoscope',
    badge: 'Medical Entrance',
  },
  {
    id: 'jee',
    title: 'JEE Preparation',
    shortDescription:
      'Academic preparation for students aiming to strengthen their understanding of concepts required for engineering entrance examinations.',
    detailedDescription:
      'An intensive, analytical coaching programme focused on strengthening fundamental principles and developing advanced problem-solving techniques in Physics, Chemistry, and Mathematics for engineering entrance aspirations.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    targetAudience: 'Engineering Entrance Aspirants (Classes 11, 12 & Droppers)',
    iconName: 'Compass',
    badge: 'Engineering Entrance',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'saqib-sir',
    name: 'Saqib Sir',
    initials: 'SS',
    role: 'Senior Faculty Member',
    focus: 'Conceptual Learning & Student Mentorship',
  },
  {
    id: 'faizan-sir',
    name: 'Faizan Sir',
    initials: 'FS',
    role: 'Senior Faculty Member',
    focus: 'Foundational Excellence & Academic Guidance',
  },
];
