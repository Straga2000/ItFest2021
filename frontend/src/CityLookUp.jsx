import React from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class CityLookUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
          <p style={{width:"30%",marginTop:"20px",marginLeft:"650px"}}>Select Country</p>
         <CountryDropdown style={{width:"30%",marginTop:"5px",marginLeft:"650px"}}
          value={country}
          onChange={(val) => this.selectCountry(val)} />
          <p  style={{width:"30%",marginTop:"20px",marginLeft:"650px"}}>Select City</p>
         <RegionDropdown style={{width:"30%",marginTop:"5px",marginLeft:"650px"}}
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} /> 
      </div>
    );
  }
}
export default CityLookUp;