
const Boxes = ({numberOfUnitsPerRow, numberOfUnitsCompleted, numberOfBoxes}: {numberOfUnitsPerRow: number, numberOfUnitsCompleted: number, numberOfBoxes:  number})=>{
  const boxes = new Array(numberOfBoxes).fill(null);

  const className= numberOfUnitsPerRow===10? 'grid grid-cols-10 gap-3': numberOfUnitsPerRow===36? 'grid grid-cols-36 gap-3' : 'grid grid-cols-52 gap-3'

  return  <div className={className}>
        {boxes.map((_, index) => (
          <div
            className={`w-0.5 aspect-square p-1 rounded-sm hover:cursor-pointer hover:bg-blue-500 ${index< numberOfUnitsCompleted? 'bg-blue-500': 'bg-white'}`}
            key={index}
          ></div>
        ))}
      </div>
}

export default Boxes;