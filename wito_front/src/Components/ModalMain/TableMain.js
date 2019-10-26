import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     width: '100%',
//     overflowX: 'auto',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 650,
//   },
// }));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  row: {
    margin: 0,
  }
}));

export default function TableMain() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>        
        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item md={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        
        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item md={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={2}></Grid>
          <Grid item md={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>        
      </Grid>
    </div>

    // <div className={classes.root}>
    //   <Paper className={classes.paper}>
    //     <Table className={classes.table} size="small" aria-label="a dense table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell><b>Nom du cours</b></TableCell>
    //           <TableCell align="center"><b>Date</b></TableCell>
    //           <TableCell align="center"><b>Salle</b></TableCell>
    //           <TableCell align="center"><b>Heure de début de cours</b></TableCell>
    //           <TableCell align="center"><b>Heure de fin de cours</b></TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.map(row => (
    //           <TableRow key={row.name}>
    //             <TableCell component="th" scope="row">
    //               {row.name}
    //             </TableCell>
    //             <TableCell align="center">{row.calories}</TableCell>
    //             <TableCell align="center">{row.fat}</TableCell>
    //             <TableCell align="center">{row.carbs}</TableCell>
    //             <TableCell align="center">{row.fin}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </Paper>
    // </div>
  );
}