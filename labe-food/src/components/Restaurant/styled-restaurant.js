import styled from 'styled-components';
import { Button, Card, CardMedia, Typography } from '@mui/material';
import { greyish } from '../../constants/colors';

export const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardRestaurant = styled(Card)`
    width: 95vw;
    margin: 10px;
`

export const CardProducts = styled(Card)`
    display: flex;
    width: 95vw;
    margin: 5px;
    position: relative;
    border: 1px solid ${greyish} !important;
`

export const ProductImage = styled(CardMedia)`
    max-width: 30vw;
    margin-right: 10px;
`
export const ProductText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95vw;
`

export const TypographyStyled = styled(Typography)`
    padding: 10px 0;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 95vw;
`

export const ButtonAdd = styled(Button)`
    height: 6vh;
    width: 20vw;
`
