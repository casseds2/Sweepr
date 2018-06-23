import React from 'react'
import { connect } from 'react-redux'
import { sweepstakeActions } from '../../actions'
import { PaidMember, NonPaidMember } from '../presentation'
import { Grid } from '@material-ui/core'

class PaidUsers extends React.Component{

  constructor(){
    super()
    this.markMemberAsPaid = this.markMemberAsPaid.bind(this)
  }

  markMemberAsPaid(sweepstakeID, members, index){
    members[index]['paid'] = true
    this.props.markMemberAsPaid(sweepstakeID, members)
  }

  render(){

    const { current } = this.props.sweepstake
    const { members, owner, _id } = current
    const { user } = this.props.user
    const owns = (owner == user._id) ? true : false

    let content = members.map((member, index) => {
      return (member['paid'] == true) ? 
      <PaidMember 
        member={member} 
        key={index} 
      /> : 
      <NonPaidMember 
        addAsPaid={() => this.markMemberAsPaid(_id, members, index)} 
        member={member}
        owner={owns}
        key={index} />
    })

    return(
      <Grid container justify={'center'}>
        <Grid item xs={8}>
          <Grid container>
            { content }
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sweepstake: state.sweepstake,
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markMemberAsPaid: (id, members) => dispatch(sweepstakeActions.markMemberAsPaid(id, members))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaidUsers)