#################### **useState** ####################
# 1. When we update state with in component, component will re-render ? 
Yes (*NOTE: 1*: Even chuild components will also re-render)
*NOTE: 2* : If we try to update 2 states with in same function, component will not rerender 2 times, because state will schedule batch updates, so with in batch updates all states are updated once. For this reason component will not re-render twice.
*NOTE: 3* : while updating state with previous values make sure to update in immutable way
############# *Example* for 3rd Note ##############
const [students, setStudents] = useState([]);
setStudents((prevStudents) => {
    const prevValue = JSON.parse(JSON.stringfy(prevStudents))
    // update prevValue;
    return prevValue;
})
############################################################################################################################

#################### **Ref** ####################
# the main difference b/w useState and useRef is that, when we update state component will re-render, for ref component doesn't re-render
############################################################################################################################

#################### **useEffect** ####################
# make sure not to use strict mode when working with this, it will render useEffect twice always

# all the vatiables that causes rerender when whanged can be added as a dependencies to this use effect
variables that can go as dependencies are below
#  context
#  state
#  props
# redux variables
############################################################################################################################

######################## *Shortcuts* ##########################################
# rafce - create component
##################################################################

# we could always render jsx from java-script - like how i handeled if condition in 
/Users/bhargavrg/react-apps/turotial/src/App.js - line 23

# useState 
    1. needs to be updated in a immutable way

# useEffect (make sure not to use strict mode when working with this, it will render useEffect twice always)
    1. can we used as a constructor and onInit etc etc, but its dependencies(state props) needs to be configured accordingly

# contextAPI is equalent to behaviour subject 



# Routing
Link
NavLink
errorElement
index route 
useNavigate() hook => Programatically navigating..
useParams() - to get all the parrams from URL(i.e id's from dynamic ids etc..)

Absolute( starts with /) vs Relative path
loaders() - same as route resolver
useLoaderData() is used to get the data that loader() returns
json()

# npm install redux react-redux