import Card from "./components/Card"
import MyHeader from "./components/MyHeader/MyHeader"
import NotificationButton from "./components/NotificationButton/NotificationButton"

function App() {
  return (
    <>
      <MyHeader />
      <NotificationButton />
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
