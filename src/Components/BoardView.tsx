
import React from "react";
import { View, StyleSheet } from "react-native";
import { Board } from "../Logic/Sudoku";
import { Cell } from "./Cell";

type BoardViewProps = {
    board: Board;
    onCellPress: (row: number, col: number) => void;
};

export const BoardView: React.FC<BoardViewProps> = ({ board, onCellPress }) => {
    return (
        <View style={styles.board}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((value, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={value}
                            row={rowIndex}
                            col={colIndex}
                            onPress={onCellPress}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        width: 380,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "#000000",
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
});