import { Layout } from './components/layout/Layout'
import { Button } from './components/UI/Button/Button'
import { tickets } from './utils/data'

function App() {
    console.log('@', tickets)

    return (
        <Layout>
            <div className="text-3xl font-bold">Hello world!</div>
            <Button>Button</Button>
        </Layout>
    )
}

export default App
