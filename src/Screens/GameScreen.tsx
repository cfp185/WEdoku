import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { initialBoard, Board } from "../Logic/Sudoku";
import { BoardView } from "../Components/BoardView";
import { NumberBar } from "../Components/NumberBar";

export const GameScreen: React.FC = () => {
    const [board, setBoard] = useState<Board>(initialBoard);
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    
    const handleCellPress = (row: number, col: number) => {
        if (selectedNumber == null)
            return;
        
        setBoard((prev) => {
            const copy = prev.map((r) => [...r]);
            copy[row][col] = selectedNumber;
            return copy;
        });
    };

    return (
        <View style={styles.container}>
            <BoardView board={board} onCellPress={handleCellPress} />
            <NumberBar selected={selectedNumber} onSelect={setSelectedNumber} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
});