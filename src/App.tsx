import { Button } from './components/UI/Button/Button'
import { tickets } from './utils/data'

function App() {
    console.log('@', tickets)

    return (
        <div className="mx-20">
            <h1 className="text-3xl font-bold">
                Hello world!
                <Button>Button</Button>
            </h1>
        </div>
    )
}

export default App
