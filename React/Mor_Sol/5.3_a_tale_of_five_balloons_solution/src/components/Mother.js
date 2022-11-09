import Balloon from './Balloon';
import Child from './Child';

const Mother = () => {
  const arrOfColor = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];
  return (
    <div className='mother'>
      <h1>A Tale of Five Balloons</h1>
      <div class='mother_c'>
        <Child>
          <h3>{arrOfColor[0].name}</h3>
          <Balloon>{arrOfColor[0].color}</Balloon>
        </Child>
        <Child>
          <h3>{arrOfColor[1].name}</h3>
          <Balloon>{arrOfColor[1].color}</Balloon>
        </Child>
        <Child>
          <h3>{arrOfColor[2].name}</h3>
          <Balloon>{arrOfColor[2].color}</Balloon>
        </Child>
        <Child>
          <h3>{arrOfColor[3].name}</h3>
          <Balloon>{arrOfColor[3].color}</Balloon>
        </Child>
        <Child>
          <h3>{arrOfColor[4].name}</h3>
          <Balloon>{arrOfColor[4].color}</Balloon>
        </Child>
        {/* //* Easier way ↓ */}
        {/* {arrOfColor.map((kid) => {
            return (
              <Child>
                <h3>{kid.name}</h3>
                <Balloon>{kid.color}</Balloon>
              </Child>
            );
          })} */}
      </div>
    </div>
  );
};

export default Mother;
