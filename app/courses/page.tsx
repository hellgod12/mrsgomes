import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Language Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore our comprehensive language courses designed for all levels
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
