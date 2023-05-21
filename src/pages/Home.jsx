import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import SearchexErcises from '../components/SearchexErcises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroSection />
      <SearchexErcises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
}

export default Home