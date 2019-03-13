import React from 'react';
import Loader from 'react-loader-spinner';
import Pagination from './Pagination';
import {NavLink} from 'react-router-dom';
import CardDetails from '../components/CardDetails';


class CharactersPage extends React.Component {
  constructor(props){
    super(props);

    const urlParams = new URLSearchParams(props.location.search);
    const currentPage = +urlParams.get('page') || 1;
    this.state = {
      data: [],
      countPage: 0,
      currentPage,
      result: [],
      loader: true,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search === this.props.location.search) {
      return;
    }
    this.getJson();
  }

  componentDidMount() {
    this.getJson();
  }

  getJson() {
    const {currentPage} = this.state;
    fetch(`https://swapi.co/api/people/?page=${currentPage}&format=json`)
    .then(resolve => resolve.json())
    .then(data => this.setState((prevState) => {
      return {
        result: data,
        data: data.results,
        countPage: data.count,
        loader: false
      }
    }));
  }

  handleClick = (id) => {
    this.setState((prevState) => {
      this.props.history.push(`?page=${id}`);
      return {
        loading: true,
        currentPage: id,
      };
    });
  }

  handleChangePage = (button) => {
    const {currentPage} = this.state;
    this.setState(({currentPage})=>{
      if(button === 'previous'){
        this.props.history.push(`?page=${currentPage-1}`);
        return {
          currentPage: currentPage-=1 
        }
      }
      if(button === 'next') {
        this.props.history.push(`?page=${currentPage+1}`);
        return {
          currentPage: currentPage+=1 
        }
      } 
    })
      
 
  }

  render() {
    return (
      <>
        <Badge 
          state={this.state}
          handleClick={this.handleClick}
          handleChangePage={this.handleChangePage}
        />

      </>
    );
  }
}

const Badge = (props) => {
  const {countPage, currentPage, data, loader} = props.state;
  return (
    <>
    <Pagination 
    countPage={countPage} 
    currentPage={currentPage}
    handleClick={props.handleClick}
    handleChangePage={props.handleChangePage}
    />
    <div className="characters-page" >
    
    {!loader ? data.map((character) => {
     let idCharacter = character.url.split('/')[5];
     let imgLink = `https://starwars-visualguide.com/assets/img/characters/${idCharacter}.jpg`;
      return (
    
        <div className="character-card" key={character.name}>
          <div>
          <NavLink to={`people/${idCharacter}`} key={idCharacter}>
            <img src={imgLink} alt={character.name} className="character-img"/>
          </NavLink>
          </div>
          <div>
            <p className="character-name" >{character.name}</p>
          </div>
     </div>
    
      )
    }
   ) : <Loader type="ThreeDots" color="red" height={80} width={80} />}
  </div>
  </>
  );
}

export default CharactersPage;