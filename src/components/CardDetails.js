import React from 'react';

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.location.pathname,
      data: {},
      loader: true
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      return;
    }
    this.getJson();
  }

  componentDidMount() {
    this.getJson();
  }

  getJson() {
    const {currentPage} = this.state;
    fetch(`https://swapi.co/api${currentPage}/?format=json`)
    .then(resolve => resolve.json())
    .then(data => this.setState((prevState) => {
      return {
        data: data,
        loader: false
      }
    }));
  }

  render() {
  const {data} = this.state;
    console.log(this.props);
  let idCharacter = this.props.location.pathname.split('/')[2];
  return (
    <div className="card-details">
      <div className="left-block">
        <img className="character-img" src={`https://starwars-visualguide.com/assets/img/characters/${idCharacter}.jpg`} />
      </div>
      <div className="right-block">
      
        <table>
        <tbody>
          <tr>
            <td style={{fontSize: '29px'}}>{data.name}</td>
          </tr>
          <tr>
            <td>Birth Year: {data.birth_year}</td>
          </tr>
          <tr>
            <td>Height: {data.height}</td>
          </tr>
          <tr>
            <td>Mass: {data.mass} </td>
          </tr>
          <tr>
            <td>Gender: {data.gender}</td>
          </tr>
          <tr>
            <td>Hair Color: {data.hair_color}</td>
          </tr>
          <tr>
            <td>Skin Color: {data.skin_color} </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
 
}
