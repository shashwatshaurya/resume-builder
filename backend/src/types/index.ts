export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: Date;
    endDate?: Date;
  }>;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto
  extends Omit<User, "id" | "createdAt" | "updatedAt"> {}
