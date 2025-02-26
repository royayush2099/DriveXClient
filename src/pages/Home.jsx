import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaMapMarkedAlt, FaUserGraduate } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="text-center">
      {/* Header with Clerk Authentication */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">DriveX</h1>
        <div>
          <SignedOut>
            <SignInButton className="btn-primary" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-gray-100 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Master Driving with <span className="text-yellow-300">DriveX</span>
        </h1>
        <p className="text-lg mb-6 max-w-lg opacity-90">
          Join expert instructors and driving schools to gain real-world driving skills with real-time tracking and personalized lessons.
        </p>

       
      </motion.section>

      {/* Onboarding Steps Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          How DriveX Works?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <motion.div
            className="card text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserGraduate className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Sign Up</h3>
            <p className="text-gray-600 mt-2">
              Register as a student, instructor, or driving school.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="card text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaCar className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Find Courses</h3>
            <p className="text-gray-600 mt-2">
              Browse and choose the best driving lessons.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="card text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaMapMarkedAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Start Learning</h3>
            <p className="text-gray-600 mt-2">
              Get practical training and track your progress.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
