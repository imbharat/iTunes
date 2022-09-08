import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Footer from './Footer';
import Search from './Search';
import SongsList from './SongsList';

type Props = {
    data: unknown
}

function App({ data }: Props){
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <Search />
                        <SongsList initialData={data}/>
                    </>
                } />
                {/* <Route path='/search' element={
                    <>
                        <Search />
                        <SongsList initialData={data}/>
                    </>
                } /> */}
                <Route path='/about' element={ <About initialData={data}/> }/>
            </Routes>
            {/* <Footer /> */}
        </>
    )
}

export default App;