import React from 'react'
import MovieShowcase from '../../Components/Home/MoveShowcase'
import NormalCards from '../../Components/Home/NormalCards'
import MovieSlider from '../../Components/Home/SlidersCards'
import HighlightSection from '../../Components/Home/HeilightSection'
const Home = () => {
    return (
        <>
            <div className='bg-black'>
                <MovieShowcase />
                <MovieSlider />
                <NormalCards />
                <HighlightSection/>
            </div>
        </>
    )
}

export default Home
















