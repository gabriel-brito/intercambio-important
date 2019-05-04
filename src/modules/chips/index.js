import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';
import LocationCity from '@material-ui/icons/LocationCity';
import DateRange from '@material-ui/icons/DateRange';
import Language from '@material-ui/icons/Language';
import Clear from '@material-ui/icons/Clear';
import SwapHoriz from '@material-ui/icons/SwapHoriz'

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexGrow: 1,
      },
};

function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }

const Chips = () => {
    return (
        <div style={styles.root}>
            <h4>Seu objetivo é: Estudar</h4>
            <Chip
                avatar={
                <Avatar>
                    <SwapHoriz />
                </Avatar>
                }
                label="High School"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
                />

            <Chip
                avatar={
                <Avatar>
                    <LocationCity />
                </Avatar>
                }
                label="Irlanda"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
            />

            <Chip
                avatar={
                <Avatar>
                    <Language />
                </Avatar>
                }
                label="Ingles"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
            />

            <Chip
                avatar={
                <Avatar>
                    <School />
                </Avatar>
                }
                label="Escola: Particular"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
            />

            <Chip
                avatar={
                <Avatar>
                    <Home />
                </Avatar>
                }
                label="Casa de família e residência estudantil (boarding)"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
            />

            <Chip
                avatar={
                <Avatar>
                    <DateRange />
                </Avatar>
                }
                label="Início das aulas 1º semestre"
                deleteIcon={<Clear />}
                onDelete={handleDelete}
            />
    </div>
    )
}

export default withStyles(styles)(Chips)