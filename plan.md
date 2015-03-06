Plan:


MVP:
	A comment board that people can post to
	Comments being stored in a central server
	Date created tags
	The ability to upvote comments
	The ability to edit and remove comments
	Login capacities
	Different user permissions
	Higher voted comments/older floating to the top / Sorting mechanism
	A daily 'answer rate' chart
	Storing answered/older comments in a database

Technologies:
	Production - 	React, (Flux?), MongoDB, react-route, socket.io
	Development - 	React, Gulp, Reactify, Watchify, Jest,  

Stages:
	Basic react version using props
	Introducing state, socket.io, a basic server
	React-route for auth and general routing
	D3 for graph creation
	MongoDB for old comment storage

Components:
	- Whiteboard app
		- Whiteboard
			- Comments list
				- Comments with:
					i) 	Edit state 
					ii)	Confirm/delete state
			- (Old comments accessor)

		- Comment Box
			- Submission Form
			- Login form 
				- Should take you back to the page list you were 	previously on.

		- Graph 
			- Daily, Weekly, 8 week views
