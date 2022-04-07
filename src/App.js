import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Typography, AppBar, CssBaseline, Toolbar, Grid, Container } from '@material-ui/core';
import { Work } from '@material-ui/icons';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import {useState} from 'react';
import './App.css'
function App() {
	const Div = styled('div')(({ theme }) => ({
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
		fontSize: 30,
	}));
	const [work, setWork] = useState([
	])
	const [newWork, setNewWork] = useState('')
	const saveWork = (event) => {
		event.preventDefault()
		const valueWork = {
			todo: newWork,
		}
		var value = true;
		work.forEach((x, i) => {
			if (x.todo === valueWork.todo) {
				value = false;
			}
		})
		if (value) {
			console.log(valueWork)
			setWork(work.concat(valueWork))
			setNewWork('')
		}
		else {
			alert(`'${valueWork.todo}' this note already exists`)
		}
	}
	const handleNotesChange = (event) => {
		setNewWork(event.target.value)
	}
	// <input value={newWork} onChange={handleNotesChange} />

	// <form onSubmit={saveWork}>

	// </form>

										// {work.map((wor, i) => <li key={i}>{wor.todo}</li>)}

	return (
		<>

			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<Work />
					<Typography variant='h6'>
						To-Do-List
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth='sm'>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							TO DO LIST
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Be productive with this amazing website. It helps you to manage your all work and task in one place without having any fear of losing track.
						</Typography>
						<div>
							<Grid container spacing={2} justify='center'>
								<Grid item>
									<Box onSubmit={saveWork}
										component="form"
										sx={{
											'& > :not(style)': { m: 1, width: '25ch' },
										}}
										noValidate
										autoComplete="off"
									>
										<TextField id="outlined-basic" label="Task" value={newWork} onChange={handleNotesChange} variant="outlined" />

										<Button variant='contained' endIcon={<SendIcon />} type='submit'> Save </Button>
									</Box>
								</Grid>
							</Grid>
							<Grid container spacing={2} justify='center'>
								<Grid item>
									<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
										{work.map((wor, i) => (
											<ListItem
												key={wor.todo}
												disableGutters
												secondaryAction={
													<IconButton>
														<CommentIcon />
													</IconButton>
												}
											>
												<ListItemText primary={`TASK: ${wor.todo}`} />
											</ListItem>
										))}
									</List>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		<footer className='footer'>Created by Aryan with ❤</footer>
		</>
	);


}
export default App;
