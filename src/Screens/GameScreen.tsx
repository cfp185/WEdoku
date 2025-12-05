import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SudokuBoard from '../Components/SudokuBoard';
import {EraseButton} from '../Components/EraseButton';
import {NumberBar} from '../Components/NumberBar';

const initialGrid: (number | null)[][] = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
];

const initialGiven = initialGrid.map(row => row.map(cell => cell !== null));

const GameScreen: React.FC = () => {
    const [grid, setGrid] = useState(initialGrid);
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
    const [lastNumber, setLastNumber] = useState<number | null>(null);

    const handleCellPress = ({ row, col, value, isGiven }: {
        row: number;
        col: number;
        value: number | null;
        isGiven: boolean;
    }) => {
        setSelectedCell({row, col});
    };
    
    // When user taps a number in the bar
    const handleNumberSelect = (num: number) => {
        if (!selectedCell) return;

        const {row, col} = selectedCell;
        const cellIsGiven = initialGiven[row][col];
        
        if (cellIsGiven)
            return; // Cannot change numbers of initially filled cells

        setGrid(prev => {
            const next = prev.map(r => [...r]);
            next[row][col] = num;
            return next;
        });
    };

    return (
        <View style={styles.container}>
            <SudokuBoard
                grid={grid}
                given={initialGiven}
                selected={selectedCell}
                onCellPress={handleCellPress}
            />
            <EraseButton
                onErase={() => {
                    if (!selectedCell) return;
                    const { row, col } = selectedCell;
                    
                    // don't erase givens
                    if (initialGiven[row][col])
                        return;
                    
                    setGrid(prev => {
                        const next = prev.map(r => [...r]);
                        next[row][col] = null;  // clear value
                        return next;
                    });
                }}
            />
            <NumberBar
                selected={null} //{lastNumber}
                onSelect={handleNumberSelect}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

export default GameScreen;
