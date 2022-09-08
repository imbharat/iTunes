import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, Dialog, DialogContent } from '@mui/material';
import { StyledSong } from '../styled-components/StyledSong';
import { Song } from '../../redux/Songs/Types'

function Song({ song }: {song: Song}) {
    const {
        kind,
        artistName,
        collectionName,
        trackName,
        artworkUrl100
    } = song;

    const [viewDetails, setViewDetails] = useState(false);
    const handleClose = () => {
        setViewDetails(false);
    }

    return (
        <StyledSong>
            <Card onClick={() => setViewDetails(true)}>
                <CardMedia
                    component="img"
                    image={ artworkUrl100 }
                    alt={ trackName }
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" className='trackN'>
                        { trackName }
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" className='collectionN'>
                        { collectionName ? ( collectionName ) : ''}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" className='artistN'>
                        { artistName ? `-by: ${ artistName }` : ''}
                    </Typography>
                </CardContent>
            </Card>

            {/* <Dialog open={viewDetails} onClose={handleClose}>
                <DialogContent>
                    <Card>
                        <CardMedia
                            component="img"
                            image={ artworkUrl100 }
                            alt={ trackName }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" className='trackN'>
                                { trackName }
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className='collectionN'>
                                { collectionName ? ( collectionName ) : ''}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" className='artistN'>
                                { artistName ? `-by: ${ artistName }` : ''}
                            </Typography>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog> */}
        </StyledSong>
    )
}

export default Song