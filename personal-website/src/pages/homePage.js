import '../assets/styles/homePage.css';
import HelloText from '../components/helloText'

function hello() {
  console.log('asdsadsa');
}

function HomePage() {
hello();

  return (

    
    <div className="homePage">
      <header className="App-header">
        <div id="HomePageContent">
          <HelloText/>
          <p>I'm Alex, a 2nd Year Computer Engineering student at the University of Waterloo.</p>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
