import './App.css';
import Layout from '../src/components/UI/Layout'
import Header from './components/UI/Header';
import About from './components/Pages/About';

function App() {
  return (
      <Layout>
        <Header />
        <About />
      </Layout>
  );
}

export default App;
