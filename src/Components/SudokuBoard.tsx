import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CellSize, BorderWidth, BoardWidth } from './GlobalStyle';
import Cell from './Cell';

const BLOCK_INDEXES = [...Array(9).keys()];
const CELL_INDEXES = [...Array(9).keys()];

type SudokuBoardProps = {
    grid: (number | null)[][];
    given: boolean[][];
    selected: { row: number; col: number } | null;
    onCellPress: (args: { row: number; col: number; value: number | null; isGiven: boolean }) => void;
};

const SudokuBoard: React.FC<SudokuBoardProps> = ({ grid, given, selected, onCellPress }) => {
    return (
        <View style={styles.boardContainer}>
            <View style={styles.board}>
                {BLOCK_INDEXES.map(block => (
                    <View key={`block-${block}`} style={styles.block}>
                        {CELL_INDEXES.map(i => {
                            const x = (block % 3) * 3 + (i % 3);  // col
                            const y = Math.floor(block / 3) * 3 + Math.floor(i / 3); // row

                            const value = grid?.[y]?.[x] ?? null;
                            const isGiven = given?.[y]?.[x] ?? false;
                            const isSelected = selected && selected.row === y && selected.col === x;
                            const isSameRow = !!(selected && selected.row === y);
                            const isSameCol = !!(selected && selected.col === x);

                            return (
                                <Cell
                                    key={`cell-${y}-${x}`}
                                    row={y}
                                    col={x}
                                    value={value}
                                    isGiven={isGiven}
                                    isSelected={!!isSelected}
                                    isSameRow={isSameRow}
                                    isSameCol={isSameCol}
                                    onPress={onCellPress}
                                />
                            );
                        })}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boardContainer: {
        marginTop: 20,
        alignItems: 'center',
        width: BoardWidth,
    },
    board: {
        width: CellSize * 9 + BorderWidth * 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#000000', // outer grid color
        padding: BorderWidth / 2,   // outer border thickness
    },
    block: {
        margin: BorderWidth / 2,    // inner borders: two margins add up
        width: CellSize * 3,
        height: CellSize * 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default SudokuBoard;
