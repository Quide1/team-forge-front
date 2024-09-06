export type TechnologiesTags =
  | "React"
  | "TypeScript"
  | "Node.js"
  | "Java"
  | "Go"
  | "Python"
  | "Pandas"
  | "Matplotlib"
  | "Spring Boot"
  | "PostgreSQL"
  | "React Native"
  | "Firebase"
  | "Redux"
  | "TensorFlow"
  | "MongoDB"
  | "Vue.js"
  | "Django";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: TechnologiesTags[];
    author: string;
    timeAgo: string;
    participantLimit: number;
    currentParticipants: number;
}
