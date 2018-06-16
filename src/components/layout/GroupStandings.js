import React from 'react'
import { Grid } from '@material-ui/core';
import { Sidebar } from '../containers'
import { GroupTables } from '../containers'

const GroupStandings = () => (
  <Grid container>
    <Grid item xs>
      <Sidebar>
        <GroupTables />
      </Sidebar>
    </Grid>
  </Grid>
)

export default GroupStandings