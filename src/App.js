import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

function App() {
  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
