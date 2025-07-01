// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>
//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About Sahand' Blog
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//               Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
//               as a personal project to share his thoughts and ideas with the
//               world. Sahand is a passionate developer who loves to write about
//               technology, coding, and everything in between.
//             </p>

//             <p>
//               On this blog, you'll find weekly articles and tutorials on topics
//               such as web development, software engineering, and programming
//               languages. Sahand is always learning and exploring new
//               technologies, so be sure to check back often for new content!
//             </p>

//             <p>
//               We encourage you to leave comments on our posts and engage with
//               other readers. You can like other people's comments and reply to
//               them as well. We believe that a community of learners can help
//               each other grow and improve.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl transition-colors duration-300">
        {/* IMAGE SECTION */}
        <div className="w-full mb-6">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coding workspace"
            className="rounded-xl w-full h-64 object-cover shadow-sm"
          />
        </div>

        {/* HEADING */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            About{" "}
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl">
              ThoughtfulSphere
            </span>
          </h1>
          <p className="text-md text-gray-500 dark:text-gray-400 italic mb-6">
            "Where ideas take shape, and knowledge becomes impact."
          </p>
        </div>

        {/* CONTENT */}
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
          <p>
            <strong>ThoughtfulSphere</strong> isn't just a blog—it's a digital space crafted for the curious mind. Born from the passion of developers who believe in continuous learning and open collaboration, it serves as a creative lab where thoughts are transformed into solutions, and concepts evolve into innovation.
          </p>

          <p>
            Our mission is simple yet powerful: to make complex technology approachable. Whether you're a beginner exploring React, a developer diving into the depths of Node.js, or an enthusiast interested in the latest frontend trends, you’ll find something here that speaks to you.
          </p>

          <p>
            What makes <strong>ThoughtfulSphere</strong> special is its focus on depth and thoughtfulness. We don’t just publish tutorials — we tell the story behind the code. You'll find insights into why certain patterns are used, real-world challenges faced in development, architectural decision breakdowns, and sometimes... experiments that completely failed (and what we learned from them).
          </p>

          <p>
            From hands-on guides and technical breakdowns to career tips and developer mindsets, our content is shaped by the philosophy that knowledge shared is power multiplied.
          </p>

          <p>
            Beyond the code, we also write about productivity, the mental game of software development, design thinking, and the art of balancing creativity with logic. Because we believe that developers are more than just engineers — they’re problem solvers, artists, architects, and lifelong learners.
          </p>

          <p>
            <strong>Community is at our core.</strong> Readers are encouraged to comment, ask questions, challenge ideas, and share their own insights. Every article is an invitation to start a conversation. Let’s grow together — one line of code, one thoughtful idea at a time.
          </p>

          <p className="text-center text-indigo-600 dark:text-indigo-400 font-semibold">
            ✨ Welcome to the Sphere. Let’s build something meaningful.
          </p>
        </div>
      </div>
    </div>
  );
}
