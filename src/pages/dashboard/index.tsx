import React, { PureComponent } from 'react';
import { Box, Button,  Divider, Typography } from '@mui/material'
import Wrapper from '../../components/Wrapper'
import UIPanel from '../../components/UIPanel'
import PrayerCard from '../../components/PrayerCard'
import CounselingCard from '../../components/CounselingCard'
import Agenda from '../../components/Agenda';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  
const data = [
  {
    name: 'Set',
    Missions: 4000,
    Tithe: 2400,
    amt: 2400,
  },
  {
    name: 'Out',
    Missions: 3000,
    Tithe: 1398,
    amt: 2210,
  },
  {
    name: 'Nov',
    Missions: 2000,
    Tithe: 9800,
    amt: 2290,
  },
  {
    name: 'Dez',
    Missions: 2780,
    Tithe: 3908,
    amt: 2000,
  },
  {
    name: 'Jan',
    Missions: 1890,
    Tithe: 4800,
    amt: 2181,
  },
  {
    name: 'Fev',
    Missions: 2390,
    Tithe: 3800,
    amt: 2500,
  },
];
  
  return (
    <>
      <Wrapper/>
      <Box style={{display: "flex", flexWrap: "wrap", marginTop: 80}} paddingLeft={{ xs: 2, sm: 36}}>
        <UIPanel title='Agenda'>
          <Agenda/>
        </UIPanel>
        <UIPanel title='Counseling'>
          <Box sx={{display:"flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: 4, paddingRight: 15}}>
            {["Name", "Resume", "Date"].map((title, key) => (
              <Typography key={key} color="#545454" fontSize="small">{title}</Typography>
            ))}
          </Box>
          <Divider/>
          <CounselingCard name={'Priscila'} resume="job" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Paulo Lucas'} resume=" marriage advice" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Elaine Jesus'} resume="Mental Health" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Sarah Morales'} resume="---" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Ana Paula'} resume="Finance" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Priscila'} resume="job" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Paulo Lucas'} resume=" marriage advice" date={'22/11/2022 | 10:30am'} />
          <CounselingCard name={'Elaine Jesus'} resume="Mental Health" date={'22/11/2022 | 10:30am'} />
        </UIPanel>
        <UIPanel title='Prayer'>
        <PrayerCard title='Marcos' data="15 days ago" pray='Christine Caine fala sobre a história em que Jesus alimentou cinco mil pessoas. Deus não está nos pedindo para fazermos tudo, ele está nos pedindo para darmos aquilo que temos em nossas mãos. Não se trata de quem eu não sou ou daquilo que eu não tenho, se trata de quem Ele é!'/>
          <Divider/>
          <PrayerCard title='Marcos' data="15 days ago" pray='Christine Caine fala sobre a história em que Jesus alimentou cinco mil pessoas. Deus não está nos pedindo para fazermos tudo, ele está nos pedindo para darmos aquilo que temos em nossas mãos. Não se trata de quem eu não sou ou daquilo que eu não tenho, se trata de quem Ele é!'/>
          <Divider/>
          <div style={{width: "100%", textAlign:"end"}}>
            <Button sx={{textTransform: "none", marginRight: 2}} variant='text'>See more</Button>
          </div>
        </UIPanel>
        <UIPanel title='Finance'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Tithe" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Missions" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </UIPanel>
      </Box>
      
     </>
  )
}
