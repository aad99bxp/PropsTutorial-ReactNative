import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';


//creating a buttonn and creating a event to pass data on Press


const App: () => Node = () => {
  //let name='Pater'; - since we cannot update the Varibale directly and we need to use state
  //creating a state below
  const [name,setName]=useState("Bruce") //Bruce is the default value
  return (
    <View>
      <Text style={{fontSize: 30}}>Props in React JS</Text>
      {/* Here below, instead of creating a separate function and calling on press event, we create a arrow function here itself
      which uses state useState setName...this will update the name from Bruce to Peter */}
      <Button title=' Update Props' onPress={()=>setName("Peter")} />
      <User name={name} age={29}/> 
      {/*if we remove the name arguement from the above User component, it will not display
      any name....so first we neeed to define props in the component then pass it to the child component
      i.e. we cannot use state directly to transfer data from one component to another but always done through props, here name and age are props*/}
    </View>
    
  );
};

//We can use more than one prop
//While using props, we can send data from parent to child component..but is possible to send data from child to parent ?
//Yes, but it is possible but complicated with the help of lifting up state 

const User=(props)=>{
  return (
    <View>
      <Text style={{fontSize: 30}}>{props.name}</Text>
      <Text style={{fontSize: 30}}>{props.age}</Text>
    </View>
  )
}



export default App;
