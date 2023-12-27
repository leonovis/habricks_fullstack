export default function Testimonial() {
    return (
      <div className="bg-white p-10">
        <div className="text-center">
          <h2 className="text-3xl text-slate-500">Testimonials</h2>
          <p className="text-4xl font-bold text-gray-500 mt-5">Customer's Review</p>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <div className="flex flex-col items-center">
            <img
              alt="Henrietta Jazz"
              className="w-30 h-30 rounded-full"
              height="96"
              src="https://firebasestorage.googleapis.com/v0/b/habricks-fullstack.appspot.com/o/customer2.jpeg?alt=media&token=fa060e11-aab6-4780-9c05-9eede3bf1a6b"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <blockquote className="mt-4 text-center text-gray-600">
              "Working with Habricks has been an absolute pleasure, From initial consultation to closing, the level of dedication shown to help me reach my goal on the perfect property was remarkable."
            </blockquote>
            <p className="mt-2 font-semibold text-gray-800">- HENRIETTA JAZZ</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="Alex"
              className="w-30 h-30 rounded-full"
              height="96"
              src="https://firebasestorage.googleapis.com/v0/b/habricks-fullstack.appspot.com/o/customer3.jpeg?alt=media&token=dead2053-5825-498f-8b39-3f6dc2a8eeaf"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <blockquote className="mt-4 text-center text-gray-600">
              "I highly recommend Habricks for anyone in search of a reliable and trustworthy partner in their real estate journey, you wont find a more pleasant experience."
            </blockquote>
            <p className="mt-2 font-semibold text-gray-800">- ALEX WABALI</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="Steven"
              className="w-30 h-30 rounded-full"
              height="96"
              src="https://firebasestorage.googleapis.com/v0/b/habricks-fullstack.appspot.com/o/customer1.png?alt=media&token=081e0100-26a8-460b-8040-cbd8c912c8de"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <blockquote className="mt-4 text-sm text-center text-gray-600">
              "Purchasing my off-plan home through HABRICKS was a delight, Their attention to detail & commitment shown was beyond my expectations. Highly recommend"
            </blockquote>
            <p className="mt-2 font-semibold text-gray-800">- STEVEN FREEMAN</p>
          </div>
        </div>
      </div>
    )
};


  
  