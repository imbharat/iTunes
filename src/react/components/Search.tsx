import React, { useCallback, useEffect, useState } from 'react'
import { TextField, Button, Dialog, DialogActions, DialogContent, 
    Select, MenuItem, DialogTitle, FormControl,
    FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import useDebounce from '../../client/customHooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../redux/ReduxHooks';
import { updateFilterAndLoadSongs } from '../../redux/Songs/SongsActions';
import { Songs } from '../../redux/Songs/Types';
import { StyledSearch } from '../styled-components/StyledSearch';

function Search() {
    const [firstRender, setFirstRender] = useState(true);
    const [keywords, setKeywords] = useState('');
    const [searchKeywords, setSearchKeywords] = useState('');
    const [open, setOpen] = React.useState(false);

    const initialFilters = {
        country: 'US',
        media: 'all',
        entity: '',
        attribute: '',
        lang: 'en_us'
    }
    const [filters, setFilters] = useState(initialFilters)
    
    const debouncedKeywords = useCallback(
        useDebounce(setSearchKeywords, 1000), []
    );
    
    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(e.target.value);
        debouncedKeywords(e.target.value);
    }

    const dispatch = useAppDispatch();
    const filter = useAppSelector((state: Songs) => state.filter)

    const handleClose = (search: boolean) => {
        setOpen(false);
        search && dispatch(updateFilterAndLoadSongs({
            ...filter,
            page: 1,
            ...filters
        }, true));
        setFilters(initialFilters);
    };

    useEffect(() => {
        if(!firstRender){
            dispatch(updateFilterAndLoadSongs({
                ...filter,
                term: searchKeywords[0],
                page: 1
            }, true))
        }
        setFirstRender(false);
        return () => {
            //write cleanup code here
        }   
    }, [searchKeywords]);
    
    return (
        <StyledSearch>
            <TextField 
                placeholder='Type Keywords'
                data-testid='search'
                value={keywords}
                onChange={updateQuery}
                variant="outlined"
            />
            <Button
                data-testid='advanced-search'
                variant="contained"
                onClick={() => setOpen(true)}
            >
                Advanced Search
            </Button>

            {
                open && <Dialog data-testid='advanced-dialog' open={open} onClose={() => handleClose(false)}>
                    <DialogTitle>Advanced Search</DialogTitle>
                    <DialogContent className='advSearch'>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="country"
                            label="Country"
                            variant="standard"
                            style={{
                                marginRight: '5rem'
                            }}
                            value={filters.country}
                            onChange={(e) => setFilters({
                                ...filters,
                                country: e.target.value
                            })}
                        />
                        <FormControl>
                            <FormLabel id="demo-lang-radio-buttons-group-label">Language</FormLabel>
                            <RadioGroup
                                id="lang"
                                row
                                onChange={(e) => setFilters({
                                    ...filters,
                                    lang: e.target.value
                                })}
                                name="lang-radio-buttons-group"
                            >
                                <FormControlLabel value="en_us" control={<Radio />} label="EN" />
                                <FormControlLabel value="ja_jp" control={<Radio />} label="JP" />
                            </RadioGroup>
                        </FormControl>
                        <Select
                            id="media"
                            value={filters.media}
                            label="Media Type"
                            fullWidth
                            onChange={(e) => setFilters({
                                ...filters,
                                media: e.target.value
                            })}
                        >
                            <MenuItem value='all'>All</MenuItem>
                            <MenuItem value='movie'>Movie</MenuItem>
                            <MenuItem value='podcast'>Podcast</MenuItem>
                            <MenuItem value='music'>Music</MenuItem>
                            <MenuItem value='musicVideo'>Music Video</MenuItem>
                            <MenuItem value='audiobook'>Audio Book</MenuItem>
                            <MenuItem value='shortFilm'>Short Film</MenuItem>
                            <MenuItem value='tvShow'>TV Show</MenuItem>
                            <MenuItem value='software'>Software</MenuItem>
                            <MenuItem value='ebook'>E-Book</MenuItem>
                        </Select>
                        {/* <TextField
                            margin="dense"
                            id="entity"
                            label="Entity"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="attribute"
                            label="Attribute"
                            type="email"
                            fullWidth
                            variant="standard"
                        /> */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose(false)}>Cancel</Button>
                        <Button onClick={() => handleClose(true)}>Search</Button>
                    </DialogActions>
                </Dialog>
            }

        </StyledSearch>
    )
}

export default Search