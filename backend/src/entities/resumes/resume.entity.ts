import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "../users/user.entity";

export interface ResumeSection {
    id: string;
    type: 'personal' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'awards' | 'custom';
    title: string;
    data: any; // Flexible data structure for different section types
    order: number;
    isVisible: boolean;
}

export interface PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    website?: string;
    linkedin?: string;
    github?: string;
}

export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
    achievements: string[];
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    location?: string;
    startDate: string;
    endDate?: string;
    gpa?: string;
    honors?: string;
    description?: string;
}

export interface Skill {
    id: string;
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category?: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    startDate?: string;
    endDate?: string;
    url?: string;
    githubUrl?: string;
}

@Entity("resume")
export class Resume {
    @Index()
    @PrimaryGeneratedColumn({ type: "number" })
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description?: string;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ name: "user_id" })
    userId: number;

    @Column({ type: "json" })
    sections: ResumeSection[];

    @Column({ type: "text", nullable: true })
    htmlTemplate?: string;

    @Column({ type: "text", nullable: true })
    cssStyles?: string;

    @Column({ type: "json", nullable: true })
    themeConfig?: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        spacing: string;
        template: string; // template name/identifier
    };

    @Column({ default: false })
    isPublic: boolean;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    shareToken?: string; // For sharing resumes publicly

    @Column({ type: "json", nullable: true })
    metadata?: {
        totalViews?: number;
        lastViewedAt?: Date;
        pdfGeneratedAt?: Date;
        version?: number;
    };

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // Helper method to get sections by type
    getSectionsByType(type: ResumeSection['type']): ResumeSection[] {
        return this.sections.filter(section => section.type === type);
    }

    // Helper method to get visible sections ordered
    getVisibleSections(): ResumeSection[] {
        return this.sections
            .filter(section => section.isVisible)
            .sort((a, b) => a.order - b.order);
    }

    // Helper method to add a new section
    addSection(section: Omit<ResumeSection, 'id' | 'order'>): void {
        const newSection: ResumeSection = {
            ...section,
            id: `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            order: this.sections.length,
        };
        this.sections.push(newSection);
    }

    // Helper method to update a section
    updateSection(sectionId: string, updates: Partial<ResumeSection>): boolean {
        const sectionIndex = this.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return false;

        this.sections[sectionIndex] = { ...this.sections[sectionIndex], ...updates };
        return true;
    }

    // Helper method to remove a section
    removeSection(sectionId: string): boolean {
        const initialLength = this.sections.length;
        this.sections = this.sections.filter(s => s.id !== sectionId);
        return this.sections.length < initialLength;
    }

    // Helper method to reorder sections
    reorderSections(sectionIds: string[]): void {
        const reorderedSections: ResumeSection[] = [];

        sectionIds.forEach((id, index) => {
            const section = this.sections.find(s => s.id === id);
            if (section) {
                reorderedSections.push({ ...section, order: index });
            }
        });

        this.sections = reorderedSections;
    }
} 