export type CourseId = 'neet' | 'jee' | 'cbse' | 'na';

export type ProgrammeOption =
  | 'NEET Preparation'
  | 'JEE Preparation'
  | 'CBSE Board Coaching'
  | 'N/A';

export type AcademicClassOption =
  | 'Class 5'
  | 'Class 6'
  | 'Class 7'
  | 'Class 8'
  | 'Class 9'
  | 'Class 10'
  | 'Class 11'
  | 'Class 12';

export interface Course {
  id: CourseId;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  subjects: string[];
  targetAudience: string;
  iconName: 'Stethoscope' | 'Compass' | 'GraduationCap' | 'BookOpen';
  badge: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  focus: string;
}

export interface EnquiryFormData {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  currentClass: AcademicClassOption | string;
  interestedProgramme: ProgrammeOption | string;
  message?: string;
}

export interface FormErrors {
  studentName?: string;
  parentName?: string;
  phoneNumber?: string;
  currentClass?: string;
  interestedProgramme?: string;
  message?: string;
}

export type PageId = 'home' | 'about' | 'courses' | 'faculty' | 'contact';
