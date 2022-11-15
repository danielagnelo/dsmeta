import Card from "./components/Card"
import MyHeader from "./components/MyHeader/MyHeader"

function App() {
  return (
    <>
      <MyHeader />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Card />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
