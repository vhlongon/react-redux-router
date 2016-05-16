redux

**Reducers

Are a normal function that returns data (export the reducer)

Then We create a reducers index that combine all different reducers using Redux combineReducers function (export the combined reducers)


Containers are know as 'smart' components because the connect a react view with redux piece of data. It is good practice to separate those in their
own folder called 'containers'. Uses rect-redux connect

**Actions

Are used to interact / change the application data/ state. They are trigged by events performed by the user.

Action creators are functions fired when a action is triggered and returns an object with a type property and data that describes that action.

To use action creators we usually implement switch statements on the reducers


Process:

- create an action creator, normal js function with a type and a (optional payload)
- the creator dispatches that action and send to all the reducers
- bind the action on the component container through bindActionCreators on mapStateToProps (like with reducers)
- if a reducer cares about the action it returns a new piece of state to the application state
- when the app state changes on the views change since they are connected
