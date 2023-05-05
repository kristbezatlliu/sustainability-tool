import { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/footer.js';
import HeaderBackground from '../components/HeaderBackground';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale ,Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Service = () => {
  const [selection, setSelection ] = useState(1);
  const [response, setResponse ] = useState(false);

  /* Transportation */
  const [personalCar, setPersonalCar ] = useState(0);
  const [bus, setBus] = useState(0);
  const [transit, setTransit] = useState(0);
  const [train, setTrain] = useState(0);

  const [shortFlights, setShortFlights] = useState(0);
  const [mediumFlights, setMediumFlights] = useState(0);
  const [longFlights, setLongFlights] = useState(0);
  const [extendedFlights, setExtendedFlights] = useState(0);
  
  /* Facilities */

  const [electricity, setElectricity] = useState(0);
  const [naturalGas, setNaturalGas] = useState(0);
  const [heatingOil, setHeatingOil] = useState(0);
  const [waste, setWaste] = useState(0);
  const [recycling, setRecycling] = useState(0);

  /* Procurements */

  const [paper, setPaper] = useState(0);
  const [printing, setPrinting] = useState(0);
  const [printedCircuits, setPrintedCircuits] = useState(0);
  const [desktopComputers, setDesktopComputers] = useState(0);
  const [computerEquiment, setComputerEquipment] = useState(0);
  const [communicationsEquipment, setCommunicationsEquipment] = useState(0);
  const [chemicalProducts, setChemicalProducts ] = useState(0);
  
  /* Totals */ 
  const [totalTransportationCO2, setTotalTransportationCO2] = useState(0);
  const [totalFacilitiesCO2, setTotalFacilitiesCO2] = useState(0);
  const [totalProcurementsCO2, setTotalProcurementsCO2] = useState(0);

  /* Totals Saved */

  const [totalTransportationCO2Saved, setTotalTransportationCO2Saved] = useState(0);
  const [totalFacilitiesCO2Saved, setTotalFacilitiesCO2Saved] = useState(0);
  const [totalProcurementsCO2Saved, setTotalProcurementsCO2Saved] = useState(0);

  /*VALUES */
  const checkedValues = {

  }

  const totalCO2_Transport = {
    personalCarCO2: personalCar *  0.000121,
    busCO2: bus * 0.0008222,
    transitCO2:  transit * 0.0000202,
    trainCO2: train * 0.000049,

    shortFlightsCO2: shortFlights * 0.12,
    mediumFlightsCO2: mediumFlights * 0.45,
    longFlightsCO2: longFlights * 0.9,
    extendedFlights: extendedFlights * 1.2,
  }

  const totalCO2_Facilities = {
    electricityCO2: electricity * 0.00037,
    naturalGasCO2: naturalGas * 0.0022,
    heatingOilCO2: heatingOil * 0.0026,
    wasteCO2: waste * 0.7,
    recyclingCO2: recycling * 1.8,
  }

  const totalCO2_Procurements = {
    paperCO2: paper * 0.00075,
    printingCO2: printing * 0.0000004,
    printedCircuitCO2: printedCircuits * 0.0125,
    desktopComputersCO2: desktopComputers * 0.00079,
    computerEquipmentCO2: computerEquiment * 0.0475,
    communicationsEquipmentCO2: communicationsEquipment * 0.0275,
    chemicalProductsCO2: chemicalProducts * 0.00115,
  }

  function calculateAllValues(){
    const totalCO2_V1 = Object.values(totalCO2_Transport).reduce((acc, val) => acc + val, 0);
    const totalCO2_V2 = Object.values(totalCO2_Facilities).reduce((acc, val) => acc + val, 0);
    const totalCO2_V3 = Object.values(totalCO2_Procurements).reduce((acc, val) => acc + val, 0);
    
    setTotalTransportationCO2(Number(totalCO2_V1.toFixed(4)));
    setTotalFacilitiesCO2(Number(totalCO2_V2.toFixed(4)));
    setTotalProcurementsCO2(Number(totalCO2_V3.toFixed(4)));
  }

  function calculateCO2Saved(){

  }

  /* GRAPH */
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  )

  const data={
    labels: ['Transportation', 'Facilities', 'Procurements'],
    datasets: [
      {
      label: 'CO2 Emitted',
      data: [totalTransportationCO2-totalTransportationCO2Saved, totalFacilitiesCO2-totalFacilitiesCO2Saved, totalProcurementsCO2-totalProcurementsCO2Saved],
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 1,
      }
      ,
      {
        label: 'CO2 Saved',
        data: [totalTransportationCO2Saved, totalFacilitiesCO2Saved, totalProcurementsCO2Saved],
        backgroundColor: 'lime',
        borderColor: 'black',
        borderWidth: 1,
      }
  ]}

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }

  return (
    <div className="Service">
        <Navbar />
        <HeaderBackground title={"Services"}/>
        
        <div className="selection">
          <button onClick={() => setSelection(1)}> Transport </button>
          <button onClick={() => setSelection(2)}> Facilities </button>
          <button onClick={() => setSelection(3)}> Procurement </button>
          <button onClick={() => setSelection(4)}> Summary </button>
        </div>

        {selection == 1 && <div id="box" className = "Transport">
          <div className="left_half">
            <div className="group">
              <div className="title">
                <h3> Transport </h3>
                <p> The kilometres per year of all employees that use public transportation.</p>
              </div>

              <ul className="input_list"> 
                <li> Personal Car <input className="personal_car_input" type="text" onInput={e => setPersonalCar(e.target.value)} value={personalCar}/></li>
                <li> Bus <input className="bus_input" type="text" onInput={e => setBus(e.target.value)} value={bus}/> </li>
                <li> Transit <input name="transit" className="transit_input" type="text" onInput={e => setTransit(e.target.value)} value={transit}/> </li>
                <li> Train <input name="train" className="train_input" type="text" onInput={e => setTrain(e.target.value)} value={train}/> </li>
              </ul>
            </div>

            <div className="group">
              <div className="title">
                <h3> Air Travel (Flights per year) </h3>
                <p> The total amount of flights per year done by the company's staff.</p>
              </div>

              <ul className="input_list"> 
                <li> Short Flight <input name="short_flight" className="short_flight_input" type="text" onInput={e => setShortFlights(e.target.value)} value={shortFlights}/> </li>
                <li> Medium Flight <input name="medium_flight" className="medium_flight_input" type="text" onInput={e => setMediumFlights(e.target.value)} value={mediumFlights}/> </li>
                <li> Long Flight <input name="long_flight" className="long_flight_input" type="text" onInput={e => setLongFlights(e.target.value)} value={longFlights}/></li>
                <li> Extended Flight <input name="extended_flight" className="extended_flight_input" type="text" onInput={e => setExtendedFlights(e.target.value)} value={extendedFlights}/></li>
              </ul>
            </div>
          </div>

          {/*pjesa djathtas behet me display flex, column dhe space-around qe elementi DIV dhe butoni te shkojn ne anet vertikale te divit kryesor right_half*/}
          <div className="right_half">
            <div className="top-bottom-seperated">
              <h2> Calculated Emission: </h2>
              <p className="counter"> {totalTransportationCO2}</p>
              <h3> Tonnes CO2 per year</h3>
            </div>

            <button onClick={calculateAllValues}> Calculate CO2 Emission </button>
          </div>
        </div>}

        {selection == 2 && <div id="box" className = "Facilities">
          <div className="left_half">
            <div className="group">
              <div className="Title">
                <h3> Facilities </h3>
                <p> Business yearly energy usage </p>
              </div>

              <ul className="input_list">
                <li> Electricity <input name="Electricity" className="Electricity_input" type="text" onInput={e => setElectricity(e.target.value)} value={electricity}/> </li>
                <li> Natural Gas <input name="Natural_Gas" className="Natural_Gas_input" type="text" onInput={e => setNaturalGas(e.target.value)} value={naturalGas}/> </li>
                <li> Heating Oil <input name="Heating_oil" className="Heating_oil_input" type="text" onInput={e => setHeatingOil(e.target.value)} value={heatingOil}/> </li> 
                <li> Waste <input name="Waste" className="Waste_input" type="text" onInput={e => setWaste(e.target.value)} value={waste}/> </li>
                <li> Recycling <input name="Recycling" className="Recycling_input" type="text" onInput={e => setRecycling(e.target.value)} value={recycling}/> </li>
              </ul>
            </div>
          </div>

          <div className="right_half">
            <div className="top-bottom-seperated">
              <h2> Calculated Emission: </h2>
              <p className="counter"> {totalFacilitiesCO2} </p>
              <h3> Tonnes CO2 per year</h3>
            </div>

            <button onClick={calculateAllValues}> Calculate CO2 Emission </button>
          </div>

        </div>}

        {selection == 3 && <div id="box" className = "Procurement">
          <div className="left_half">
            <div className="group">
              <div className="Title">
                <h3> Procurement </h3>
                <p> The total amount of Euros spent per year by the company on the following products/services:</p>
              </div>

              <ul className="input_list">
                <li> Paper <input name="Paper" className="Paper_input" type="text" onInput={e => setPaper(e.target.value)} value={paper}/></li>
                <li> Printing <input name="Printing" className="Printing_input" type="text" onInput={e => setPrinting(e.target.value)} value={printing}/></li>
                <li> Printed Circuits <input name="Printed_circuits" className="Printed_circuits_input" type="text" onInput={e => setPrintedCircuits(e.target.value)} value={printedCircuits}/> </li>              
                <li> Desktop Computers <input name="Desktop_computers" className="Desktop_computers_input" type="text" onInput={e => setDesktopComputers(e.target.value)} value={desktopComputers}/> </li>
                <li> Computer Equipment <input name="Computer_equipment" className="Computer_equipment_input" type="text" onInput={e => setComputerEquipment(e.target.value)} value={computerEquiment}/> </li>
                <li> Communications Equipment <input name="Communications_equipment" className="Communications_equipment_input" type="text" onInput={e => setCommunicationsEquipment(e.target.value)} value={communicationsEquipment}/> </li>
                <li> Cleaning chemical products <input name="Chemical_products" className="Chemical_products_input" type="text"onInput={e => setChemicalProducts(e.target.value)} value={chemicalProducts}/> </li>
              </ul>
            </div>
          </div>

          <div className="right_half">
            <div className="top-bottom-seperated">
              <h2> Calculated Emission: </h2>
              <p className="counter"> {totalProcurementsCO2} </p>
              <h3> Tonnes CO2 per year</h3>
            </div>

            <button onClick={calculateAllValues}> Calculate CO2 Emission </button>
          </div>
        </div>}

        {selection == 4 && <div id="box" className = "Summary">
          <div className="summary">
            <h2> Summary </h2>
            <p> Total CO2 emitted from yearly Transportation: {totalTransportationCO2} Tonnes per Year</p>
            <p> Total CO2 emitted from yearly Facilities: {totalFacilitiesCO2} Tonnes per Year</p>
            <p> Total CO2 emitted from yearly Procurements: {totalProcurementsCO2} Tonnes per Year</p>

            <h4> Total CO2 emitted from your business: {totalTransportationCO2 + totalFacilitiesCO2 + totalProcurementsCO2} Tonnes per Year</h4>

            <div className="graph">
              <Bar
                data={data}
                options={options}
              />
            </div>

            <div className="reduceOptionsList">
              <h2> You can reduce CO2 emissions from these actions: </h2>

              <ul>
                <li> <input type="checkbox"/> [91%] Switch to Green Electricity </li>
                <li> <input type="checkbox"/> [100%] Switch personal cars to Electric Cars </li>
                <li> <input type="checkbox"/> [92%] Switch Natural Gas Energy to Solar Panel Energy </li>
                <li> <input type="checkbox"/> [5%] Power Management of Computers </li>
                <li> <input type="checkbox"/> [25%] Reduce Waste </li>
                <li> <input type="checkbox"/> [30%] Reduce Flights </li>
                <li> <input type="checkbox"/> [35%] Purchase less Computer Equipment </li>
                <li> <input type="checkbox"/> [20%] Encourage workers to use public transportation more </li>
                <li> <input type="checkbox"/> [10%] Use cleaning products more efficiently </li>
                <li> <input type="checkbox"/> [50%] Print papers on both sides </li>
              </ul>
            </div>
          </div>
        </div>}

        <h2> selected: {selection} </h2>
        <Footer />
    </div>
  );
}

export default Service;

