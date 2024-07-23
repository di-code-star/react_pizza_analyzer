import { useState } from 'react'
import './App.css'
import Header from './component/Header';
import OutputCard from './component/OutputCard';

function App() {
  const [diameter, setDiameter] = useState(0);
  const [cost, setCost] = useState(0);
  const [area, setArea] = useState(0);
  const [noOfSlices, setNoOfSlices] = useState(0);
  const [costPerSquareInch, setCostPerSquareInch] = useState(0);
  const [costPerSlice, setCostPerSlice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let radius = 0
    let area = 0;
    let costPerSquareInch = 0;
    let costPerSlice = 0;
    if (diameter !== null && diameter >= 0) {
      radius = diameter / 2;
    }
    if (radius !== 0) {

      area = Math.PI * (radius * radius);
    }
    if (cost !== null && cost !== 0) {
      costPerSquareInch = cost / area;

    }
    else {
      costPerSquareInch = 0;
    }
    if (cost !== null && cost !== 0) {

      costPerSlice = cost / noOfSlices;
    }
    else {
      costPerSlice = 0;
    }
    "Cost: " + cost +
      "Size: " + diameter +
      "Area: " + area
    setArea(area);
    setCostPerSquareInch(costPerSquareInch);
    setCostPerSlice(costPerSlice);

  }


  return (
    <>
      <Header>
      </Header>
      <main className=''>
        <section className="container mx-auto p-4 flex justify-center items-center h-1/2">
          <div className="max-w-md w-full bg-white shadow-lg rounded p-4 border-2 border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-center">Enter Pizza Details</h2>
            <form id="pizza-form" className='text-2xl'>

              <label htmlFor="cost" className="block my-1">
                Cost of Pizza:
              </label>
              <input type="number" id="cost" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="₨ 0.00"
                onChange={(e) => { setCost(e.target.value) }} />

              <label htmlFor="size" className="block my-1">
                Size of Pizza:
              </label>
              <input type="number" id="size" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="14 inches"
                onChange={(e) => { setDiameter(e.target.value) }} />

              <label htmlFor="slices" className="block my-1">
                Slices of Pizza:
              </label>

              <input type="number" id="slices" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="8 slices of 14 inches pizza"
                onChange={(e) => { setNoOfSlices(e.target.value) }} />

              <button id="analyze-btn" className="bg-gradient-to-tl from-red-700 to-blue-600 hover:bg-red-800 text-white font-bold my-2 py-2 px-4 rounded w-full"
                onClick={handleSubmit}>
                Analyze Pizza
              </button>
            </form>
          </div>
        </section>
        <br className='' />
        <section id="analysis-section" className='container mx-auto p-4'>
          <h2 className="text-3xl font-bold mb-4 mx-auto text-center">
            Pizza Analysis
          </h2>
          <div className="flex flex-wrap justify-center">

            <OutputCard
              htmlPId={"area"}
              cardTitle={"Area"}
              cardDetail={area + " Square Inches"}>
            </OutputCard>

            <OutputCard
              htmlPId={"cost-per-square-inch"}
              cardTitle={"Cost per Square Inch"}
              cardDetail={"₨ " + costPerSquareInch}>
            </OutputCard>

            <OutputCard
              htmlPId={"cost-per-slice"}
              cardTitle={"Cost per Slice"}
              cardDetail={"₨ " + costPerSlice}>
            </OutputCard>

          </div>
        </section>
      </main >

    </>
  )
}

export default App;
