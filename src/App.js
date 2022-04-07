import logo from './logo.svg';
import './App.css';

function App() {

  const links=["Service", "Projects", "About"]
  return (
    <div className="App">
      <div><img src='https://dynamic.brandcrowd.com/preview/logodraft/bb1ab8b5-e740-4cfd-983c-a7b2e2124176/image/large.png' 
      height="40px"
      width="100px"
      /></div>
      <div className='linkss'>
        {links.map((el)=>{
          return <Link link={el} />;
        })}
      </div>
      <div><button className='btn'>Contact</button></div>

    </div>
  );
}
function Link(props){
  console.log(props);
  return <a className="text" href='#'>{props.link}</a> ;
}


export default App;
