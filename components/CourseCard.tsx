import { Course } from "@/lib/courses";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-blue-600">
            {course.language}
          </span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-sm">
            <span className="font-semibold">{course.duration}</span>
          </span>
          <span className="text-2xl font-bold text-blue-600">
            ${course.price}
          </span>
        </div>
        <Link
          href="/contact"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
