import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';


function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Bruce',
            last: 'Wayne'
        } 
    ]

    return (
        <div className="App">
            <Greet name='Adley' messageCount={3000} isLoggedIn={false} />
            <Person name={personName} />
            <PersonList names={nameList} />
        </div>
    );
}

export default App;
