import React from 'react';

type Props = {
    data: unknown
}

function App({ data }: Props){
    console.log(data);
    return (
        <div>App</div>
    )
}

export default App;