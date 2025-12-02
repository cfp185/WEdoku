import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SudokuBoard from '../Components/SudokuBoard';

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
    const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);

    const handleCellPress = ({ row, col, value, isGiven }: {
        row: number;
        col: number;
        value: number | null;
        isGiven: boolean;
    }) => {
        if (isGiven) return;

        setSelected({ row, col });

        setGrid(prev => {
            const next = prev.map(r => [...r]);
            next[row][col] = next[row][col] == null ? 1 : null;
            return next;
        });
    };

    return (
        <View style={styles.container}>
            <SudokuBoard
                grid={grid}
                given={initialGiven}
                selected={selected}
                onCellPress={handleCellPress}
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
