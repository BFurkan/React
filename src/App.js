
function App(props) {
    const currDate = new Date();

  return (
    <div>
   <h1>Hello World</h1>
   <h1>welcome</h1>
   <h2>The time now is {currDate.toLocaleTimeString() + (" ") + currDate.toLocaleDateString()}</h2>
    </div>

  );
}

export default App;
