import React, { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { CellSize, BorderWidth } from './GlobalStyle';

type CellProps = {
    row: number;
    col: number;
    value: number | null;
    isGiven?: boolean;
    isSelected?: boolean;
    isSameRow?: boolean;
    isSameCol?: boolean;
    onPress?: (args: { row: number; col: number; value: number | null; isGiven: boolean }) => void;
};

const Cell: React.FC<CellProps> = ({
                   row, col, value, isGiven = false, isSelected = false,
                   isSameRow = false, isSameCol = false, onPress }) => {
    
    const handlePress = () => {
        if (!isGiven) {
            onPress && onPress({ row, col, value, isGiven });
        }
        onPress && onPress({ row, col, value, isGiven });
    };

    const displayValue = typeof value === 'number' ? value : '';

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                styles.cell,
                displayValue !== '' && styles.filledCell,
                (isSameRow || isSameCol) && styles.lineHighlight
            ]}
        >
            <Text style={[styles.text, isGiven && styles.givenText]}>
                {displayValue}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: CellSize,
        height: CellSize,
        backgroundColor: '#FFFFFF', // background color of empty cells
        borderColor: '#DCDCDC',     // border of each cell
        borderWidth: StyleSheet.hairlineWidth*1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filledCell: {
        //backgroundColor: '#FFFFFF', // background color for filled cells
    },
    givenCell: {
        backgroundColor: '#eaf3ea',
    },
    givenText: {
        color: '#555',
        fontWeight: '600',
    },
    lineHighlight: {
        backgroundColor: '#eaf3ea',
    },
    selectedCell: {
        backgroundColor: '#c2e2c1',
    },
    pressedCell: {
        backgroundColor: '#purple',
    },
    text: {
        color: '#555',
        fontWeight: '600',
        fontSize: CellSize * 0.6,
    },
});

export default Cell;
