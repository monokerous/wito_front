import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


export default function ModalGestionCours() {
    const useStyles = makeStyles(theme => ({
      form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
      },
      formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
      },
      formControlLabel: {
        marginTop: theme.spacing(1),
      },
    }));
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleMaxWidthChange = event => {
      setMaxWidth(event.target.value);
    };

    return(
   
      <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      modifier
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Ajouter cours</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="heureDebut"
            label="Heure de début"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom de la matière"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="salle"
            label="salle"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="heureFin"
            label="Heure de Fin"
            type="text"
            fullWidth
          />
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">classe</InputLabel>
              <Select
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="xs">L3 MIAGE APPRENTISSAGE</MenuItem>
                <MenuItem value="sm">M1 MIAGE APPRENTISSAGE</MenuItem>
                <MenuItem value="md">M2 MIAGE APPRENTISSAGE</MenuItem>
                <MenuItem value="lg">L3 MIAGE INITIAL</MenuItem>
                <MenuItem value="xl">M1 MIAGE INITIAL</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            modifier Cours
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
  );
}
