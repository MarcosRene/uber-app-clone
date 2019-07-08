import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const LocationBox = styled.View`
    background: #FFF;
    elevation: 1;
    border: 1px solid #DDD;
    border-radius: 3px;
    flex-diretion: row;

    ${Platform.select({
        android: css`
            margin-top: 10px;
            margin-left: 10px;
        ` 
    })}
`;

export const LocationText = styled.View`
    margin: 8px 10px;
    font-size: 14px;
    color: #333
`;

export const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;
`;

export const LocationTimeText = styled.View`
    color: #FFF;
    font-size: 12px;
    text-align: center;
`;

export const LocationTimeTextSmall = styled.View`
    color: #FFF;
    font-size: 10px;
    text-align: center;
`;
