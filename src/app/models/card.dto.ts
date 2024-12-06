export interface CardDto{
    title: string;
    image: string;
    description: string;
    questions: Question[];
}

export interface Question{
    id: number;
    title: string;
    options: string[];
    answer: string;
    explanation: string;
    difficulty: string;
}
