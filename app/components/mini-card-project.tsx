import {
    UserCircle,
    Users,
} from "lucide-react";
import { Project } from '@/app/types/project'
type MiniCardProp = {
    project: Project
}

export default function MiniCardProject({ project }: MiniCardProp) {
    return (
        <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-custom-palette-500">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="bg-custom-palette-600/70 rounded-lg p-0.5">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                        <UserCircle className="h-4 w-4" />
                        <span>{project.author}</span>
                    </div>
                    <span className="text-muted-foreground">
                        {project.timeAgo}
                    </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>
                            {project.currentParticipants}/{project.participantLimit}
                        </span>
                    </div>
                    <div
                    >
                        {project.currentParticipants < project.participantLimit
                            ? "Abierto"
                            : "Completo"}
                    </div>
                </div>
            </div>
        </div>
    )
}

