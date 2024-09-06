import { TechnologiesTags } from "@/app/types/project"

// Mock projects data
export const projects = [
    {
      id: 1,
      title: "Aplicación de Gestión de Tareas",
      description:
        "Una aplicación web para gestionar tareas diarias y proyectos.",
      technologies: ["React", "TypeScript", "Node.js"] as TechnologiesTags[],
      author: "María García",
      timeAgo: "Hace 3 días",
      participantLimit: 5,
      currentParticipants: 3,
    },
    {
      id: 2,
      title: "Análisis de Datos de Ventas",
      description:
        "Script de Python para analizar y visualizar datos de ventas mensuales.",
      technologies: ["Python", "Pandas", "Matplotlib"] as TechnologiesTags[],
      author: "Carlos Rodríguez",
      timeAgo: "Hace 1 semana",
      participantLimit: 3,
      currentParticipants: 2,
    },
    {
      id: 3,
      title: "API de Servicios Financieros",
      description:
        "API RESTful para procesar transacciones financieras y generar informes.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"] as TechnologiesTags[],
      author: "Ana Martínez",
      timeAgo: "Hace 2 semanas",
      participantLimit: 4,
      currentParticipants: 4,
    },
    {
      id: 4,
      title: "Aplicación Móvil de Fitness",
      description:
        "App móvil para seguimiento de ejercicios y planes de nutrición.",
      technologies: ["React Native", "Firebase", "Redux"] as TechnologiesTags[],
      author: "David Sánchez",
      timeAgo: "Hace 1 mes",
      participantLimit: 6,
      currentParticipants: 4,
    },
    {
      id: 5,
      title: "Sistema de Recomendación de Películas",
      description:
        "Algoritmo de machine learning para recomendar películas basado en preferencias del usuario.",
      technologies: ["Python", "TensorFlow", "MongoDB"] as TechnologiesTags[],
      author: "Laura Fernández",
      timeAgo: "Hace 1 mes",
      participantLimit: 4,
      currentParticipants: 1,
    },
    {
      id: 6,
      title: "Plataforma de E-learning",
      description:
        "Plataforma web para cursos online con videos, quizzes y foros de discusión.",
      technologies: ["Vue.js", "Django", "PostgreSQL"] as TechnologiesTags[],
      author: "Javier López",
      timeAgo: "Hace 2 meses",
      participantLimit: 8,
      currentParticipants: 6,
    },
  ];
  