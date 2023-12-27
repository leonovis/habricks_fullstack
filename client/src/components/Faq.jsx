
export default function Faq() {
    return (
      <div className="bg-gray-100 p-8">
        <div className="text-center">
            <h6 className='text-3xl text-slate-500'>FAQ's</h6>
            <br />
          <h2 className="text-4xl font-bold text-gray-900">You have Questions?</h2>
          <p className="text-lg text-gray-500 mt-2">
            And we have got answers to all of them.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
            <button className="flex justify-between w-full text-left">
              <span className="font-semibold text-gray-700">Does Habricks offer Off plan construction for Unique requirements?</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </button>
            <p className="text-gray-500 mt-2">Yes, we do. Our primary business model is to co-oprerate with customers to come up with design solutions that best fit their needs i.e. location, size of building, architectural styling & more. And executing it from construction stage to term.</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
            <button className="flex justify-between w-full text-left">
              <span className="font-semibold text-gray-700">Does Habricks work with external teams?</span>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </button>
            <p className="text-gray-500 mt-2">WE leverage a high density network of  cross-functional teams (internal & external) across different cities to enable us delivery best in class quality across our projects. </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
            <button className="flex justify-between w-full text-left">
              <span className="font-semibold text-gray-700">Is there a reward system for people who can refer prospective customers for Real Estate Sales?</span>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </button>
            <p className="text-gray-500 mt-2">We reward individuals who can facilitate & refer Full sales of any of our For Sale listings. contact us for more details.</p>
          </div>
        </div>
      </div>
    )
  }
  
  function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  };
