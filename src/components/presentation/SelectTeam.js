import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class SelectTeam extends Component{

  constructor(){
    super()
    this.state = {
      selectedTeam: '',
      availableTeams: ['Ireland', 'France', 'Germany', 'Spain', 'Brazil']
    }
  }

  handleChange(event){
    this.setState({
      selectedTeam: event.target.value
    })
  }

  render(){
    const options = this.state.availableTeams.map((team, index) => {
      return <FormControlLabel key={index} value={team} control={<Radio />} label={team} />
    })

    return(
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Team</FormLabel>
          <RadioGroup
            aria-label="team"
            name="availableTeams"
            value={this.state.selectedTeam}
            onChange={this.handleChange.bind(this)}
          >
            {options}
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

export default SelectTeam