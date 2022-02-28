import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UseContext'
import { User } from './components/context/User'
import { MutableRef } from './components/ref/MutableRef';

function App() {

  // const personName ={
  //   first:'Bruce',
  //   last: 'Wayne',
  // }

  // const nameList =[
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]

  return (
    <div className="App">
      {/*<Container styles={{border: '1px solid black', padding: '1rem'}} />
      <Button 
         handleClick={(event, id)=>{
        console.log('Button clicked', event, id)
      }} 
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Greet name='Dulat'  isLoggedIn={false}/>
      <Person  name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicaprio</Heading>
      </Oscar> 
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>*/}
      <MutableRef />
    </div>
  );
}

export default App;
