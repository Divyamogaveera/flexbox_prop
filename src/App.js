import './App.css';

function App() {
  const plans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["5 GB storage", "10 Projects"]
    }, {
      title: "Standard",
      price: "$20/month",
      features: ["30 GB storage", "50 Projects"]
    }, {
      title: "Premium",
      price: "$30/month",
      features: [" unlimited storage", "Unlimited Projects"]
    },
  ]
  return (
    <>
      <header className='text-center bg-purple-700 text-white py-8'>
        <h1 className='text-3xl font-bold'>
          Our pricing plancs
        </h1>
        <p className="mt-2 text-lg">choose a plan that works best for you</p>
      </header>

      <main className='flex justify-center gap-6 p-6'>
        {plans.map((plan, index) => (
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg  p-6 text-center flex flex-col w-80" key={index}>
            <h2 className="text-2xl font-semibold text-purple-700">{plan.title}</h2>
            <h2 className="text-xl font-bold text-gray-800 my-4">{plan.price}</h2>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600" >{feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition">
              Sign Up
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
