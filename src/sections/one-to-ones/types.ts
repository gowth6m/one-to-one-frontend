// Types for WellbeingScores, GoneWell, Challenges, and Agenda

export interface WellbeingScores {
  workOverall: number;
  wellbeing: number;
  growth: number;
  workRelationships: number;
  impactAndProductivity: number;
}

export interface GoneWell {
  label: string;
  theme: string;
}

export interface Challenges {
  label: string;
  theme: string;
}

export interface Agenda {
  label: string;
}

// Type for UserSummary

export interface UserSummary {
  id?: string; // Optional as per `omitempty`
  email: string;
  firstName: string;
  lastName: string;
}

// Types for CreateWeeklyReportRequest and UpdateWeeklyReportRequest

export interface CreateWeeklyReportRequest {
  week: number;
  year: number;
  wellbeingScores: WellbeingScores;
  agendas: Agenda[];
  goneWell: GoneWell[];
  challenges: Challenges[];
}

export interface UpdateWeeklyReportRequest {
  id: string;
  week: number;
  year: number;
  wellbeingScores: WellbeingScores;
  agendas: Agenda[];
  goneWell: GoneWell[];
  challenges: Challenges[];
}

// Type for WeeklyReportResponse

export interface WeeklyReportResponse {
  id?: string; // Optional as per `omitempty`
  reportee: string;
  reportingTo: string;
  week: number;
  year: number;
  wellbeingScores: WellbeingScores;
  agendas: Agenda[];
  goneWell: GoneWell[];
  challenges: Challenges[];
  createdAt?: Date; // Optional as per `omitempty`
  updatedAt?: Date; // Optional as per `omitempty`
}

// Type for WeeklyReport

export interface WeeklyReport {
  id?: string; // Optional as per `omitempty`
  reportee: string;
  reportingTo: string;
  week: number;
  year: number;
  wellbeingScores: WellbeingScores;
  agendas: Agenda[];
  goneWell: GoneWell[];
  challenges: Challenges[];
  createdAt?: Date; // Optional as per `omitempty`
  updatedAt?: Date; // Optional as per `omitempty`
}
