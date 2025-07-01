// import { Button } from 'flowbite-react';

// export default function CallToAction() {
//   return (
//     <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
//         <div className="flex-1 justify-center flex flex-col">
//             <h2 className='text-2xl'>
//                 Want to learn more about JavaScript?
//             </h2>
//             <p className='text-gray-500 my-2'>
//                 Checkout these resources with 100 JavaScript Projects
//             </p>
//             <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
//                 <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
//                     100 JavaScript Projects
//                 </a>
//             </Button>
//         </div>
//         <div className="p-7 flex-1">
//             <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
//         </div>
//     </div>
//   )
// }








import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-4 border border-indigo-500 dark:border-purple-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center shadow-md bg-white dark:bg-gray-900 transition-all'>
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center sm:items-start px-4">
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white'>
          Feeling curious about JavaScript?
        </h2>
        <p className='text-gray-600 dark:text-gray-300 my-3 max-w-md'>
          From quirky quirks to powerful patterns — the world of JavaScript is vast, weird, and wonderful. Want a challenge? Build something weird today. Like a timer that counts down to pizza 🍕.
        </p>
        {/* <Button
          gradientDuoTone='purpleToPink'
          className='rounded-tl-xl rounded-bl-none mt-2'
          onClick={() => alert("Build something today. Even if it's weird. 🚀")}
        >
          Take the Challenge
        </Button> */}
      </div>

      {/* Image */}
      <div className="p-6 flex-1">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="JavaScript illustration"
          className='rounded-xl shadow-lg'
        />
      </div>
    </div>
  );
}
