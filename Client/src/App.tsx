 import { useEffect, useState } from 'react';
import './App.css'
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

function App() {
 const [activities, setActivities] = useState<Activity[]>([]);
//  useEffect(()=>{
// fetch ('https://localhost:5001/api/activities')
// .then(response=>response.json())
// .then(data=>setActivities(data))
//  },[])
useEffect(()=>{
axios.get<Activity[]> ('https://localhost:5001/api/activities')
.then(response=>setActivities(response.data))
 },[])
const title="Welcome to Reactitivities"
  return (
    <>
      <Typography  variant='h3' className='app' style={{color:"red"}}>{title}</Typography>
      <List>
        {activities.map(activity=><ListItem key={activity.id}>
        <ListItemText>{activity.title}</ListItemText></ListItem>)}
      </List>
    </>
  )
}

export default App
