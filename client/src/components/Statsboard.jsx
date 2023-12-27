export default function Statsboard() {
    return (
      <div className="relative text-white mt-10">
        <img alt="Background" className="absolute inset-0 h-full w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/habricks-fullstack.appspot.com/o/HB-proj1.png?alt=media&token=1f26b727-d06b-488d-b5d6-41d2814186ee" />
        <div className="relative bg-slate-700  p-8 flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-3xl font-bold items-center flex flex-col">Over 50 Projects Completed</h2>
            <p className="mt-2 items-center flex flex-col">
              Our team has consistently delivered outstanding results across a wide range of projects.
            </p>
          </div>
          <div className="mr-3 grid grid-cols-3">
            <div>
              <h3 className="text-5xl font-bold">Over 80+</h3>
              <p>Clients Served</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">$5M+</h3>
              <p>Revenue</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">11,000+</h3>
              <p>SQM Developed</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  