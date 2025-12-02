import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const CellSize = Math.floor(SCREEN_WIDTH / 10);
export const BorderWidth = 2;
export const BoardWidth = CellSize * 9 + BorderWidth * 6;