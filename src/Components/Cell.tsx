import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CellSize, BorderWidth } from './GlobalStyle';

type CellProps = {
    row: number;
    col: number;
    value: number | null;
    isGiven?: boolean;
    isSelected?: boolean;
    onPress?: (args: { row: number; col: number; value: number | null; isGiven: boolean }) => void;
};

const Cell: React.FC<CellProps> = ({ row, col, value, isGiven = false, isSelected = false, onPress }) => {
    const handlePress = () => {
        onPress && onPress({ row, col, value, isGiven });
    };

    const displayValue = typeof value === 'number' ? value : '';

    return (
        <TouchableOpacity
            style={[
                styles.cell,
                isGiven && styles.givenCell,
                //isSelected && styles.selectedCell,
                displayValue !== '' && styles.filledCell,
            ]}
            activeOpacity={isGiven ? 1 : 0.7}
            onPress={handlePress}
        >
            <Text style={[styles.text, isGiven && styles.givenText]}>
                {displayValue}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: CellSize,
        height: CellSize,
        backgroundColor: '#FFFFFF', // background color of empty cells
        borderColor: '#DCDCDC', // border of each cell
        borderWidth: StyleSheet.hairlineWidth*1.5,
        //borderRadius: BorderWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filledCell: {
        backgroundColor: '#FFFFFF', // background color for filled cells
    },
    givenCell: {
        backgroundColor: 'p',
    },
    givenText: {
        color: '#555', // numbers on grid
        fontWeight: '600',
    },
    // selectedCell: {
    //     backgroundColor: '#8C00FF', // after clicking a cell
    // },
    text: {
        color: '#333',
        fontSize: CellSize * 0.6,
    },
});

export default Cell;
