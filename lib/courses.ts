export interface Course {
  id: string;
  title: string;
  description: string;
  language: string;
  level: string;
  duration: string;
  price: number;
  instructor: string;
  image: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "English for Beginners",
    description: "Start your English journey with our comprehensive beginner course. Learn basic grammar, vocabulary, and conversation skills.",
    language: "English",
    level: "Beginner",
    duration: "8 weeks",
    price: 199,
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=300&fit=crop",
    features: [
      "24/7 access to course materials",
      "Live weekly sessions",
      "Personalized feedback",
      "Certificate of completion"
    ]
  },
  {
    id: "2",
    title: "Spanish Intermediate",
    description: "Take your Spanish to the next level with intermediate grammar, advanced vocabulary, and cultural immersion lessons.",
    language: "Spanish",
    level: "Intermediate",
    duration: "10 weeks",
    price: 249,
    instructor: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&h=300&fit=crop",
    features: [
      "Interactive exercises",
      "Native speaker practice",
      "Cultural workshops",
      "Progress tracking"
    ]
  },
  {
    id: "3",
    title: "French for Travelers",
    description: "Learn essential French phrases and cultural tips for your next trip to France. Perfect for tourists and business travelers.",
    language: "French",
    level: "Beginner",
    duration: "4 weeks",
    price: 149,
    instructor: "Pierre Dubois",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop",
    features: [
      "Travel-focused vocabulary",
      "Real-world scenarios",
      "Audio pronunciation guide",
      "Quick reference cards"
    ]
  },
  {
    id: "4",
    title: "German Business",
    description: "Master German for professional settings. Learn business terminology, formal writing, and workplace communication.",
    language: "German",
    level: "Advanced",
    duration: "12 weeks",
    price: 349,
    instructor: "Hans Mueller",
    image: "https://images.unsplash.com/photo-1555625932-8b45d21f72fc?w=500&h=300&fit=crop",
    features: [
      "Business case studies",
      "Industry-specific vocabulary",
      "Mock interviews",
      "Networking opportunities"
    ]
  },
  {
    id: "5",
    title: "Japanese Comprehensive",
    description: "Complete Japanese course covering Hiragana, Katakana, basic Kanji, grammar, and conversation. From zero to conversational.",
    language: "Japanese",
    level: "Beginner",
    duration: "16 weeks",
    price: 399,
    instructor: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=500&h=300&fit=crop",
    features: [
      "Writing system mastery",
      "Speaking practice",
      "Cultural lessons",
      "Study materials included"
    ]
  },
  {
    id: "6",
    title: "Italian Conversation",
    description: "Improve your Italian speaking skills through real conversations, role-plays, and interactive dialogue exercises.",
    language: "Italian",
    level: "Intermediate",
    duration: "8 weeks",
    price: 229,
    instructor: "Luca Rossi",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=500&h=300&fit=crop",
    features: [
      "Speaking-focused curriculum",
      "Partner practice sessions",
      "Conversation topics",
      "Fluency building"
    ]
  }
];
