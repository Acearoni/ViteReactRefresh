import './App.css'

function App() {
  
  return ( // Can only return ONE parent element //
    <>     {/* could be a div, but it's just called a jsx fragment */}
      <h1 className='purple'> Hello Vite </h1>
      <h2>My Hobbies</h2>
      <ul>
        <li>Coding</li>
        <li>Gaming</li>
        <li>Skating</li>
      </ul>
    </>
  )
}

export default App