// import CallToAction from '../components/CallToAction';

// export default function Projects() {
//   return (
//     <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
//       <h1 className='text-3xl font-semibold'>Pojects</h1>
//       <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
//       <CallToAction />
//     </div>
//   )
// }

import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-12 flex justify-center items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_vector-1734441200831-d0694bfb3111?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3QlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Developer working on projects"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Explore Hands-On Projects
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Welcome to the project zone of <span className="font-semibold text-indigo-600 dark:text-indigo-400">ThoughtfulSphere</span>! Whether you're a beginner or brushing up on core skills, hands-on projects are the best way to solidify your learning.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
            In this section, you'll find a curated set of mini-projects built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>—ranging from interactive UI components and animations to small web apps and games.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            These projects are not only educational but also fun, practical, and perfect for adding to your portfolio. Start small, iterate often, and soon you'll be building full-stack applications with confidence.
          </p>

          <CallToAction />
        </div>
      </div>
    </div>
  );
}
