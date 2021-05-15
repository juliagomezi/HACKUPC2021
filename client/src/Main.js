import React, { Component } from 'react';

import './Main.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Main extends Component {

	render() {
		return (
			<div>
				<Card className="root">
					<CardContent>
						<Typography className="title" color="textSecondary" gutterBottom>
							Word of the Day
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default Main;