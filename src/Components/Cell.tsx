import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type CellProps = {
    value: number;
    row: number;
    col: number;
    onPress: (row: number, col: number) => void;
};

export const Cell: React.FC<CellProps> = ({ value, row, col, onPress }) => {
    const display = value === 0 ? "" : String(value);
    
    // 3x3 block boundaries.
    const isBlockTop = row > 0 && row % 3 == 0;
    const isBlockLeft = col > 0 && col % 3 == 0;
    //const isBlockLastRow  = col == 8; // last row.
    //const isBlockLastCol = row == 8;    // last column.
    
    const cellStyle = [
        styles.cell,
        {
            // thin base grid lines.
            borderTopWidth: isBlockTop ? 2 : 1,
            borderLeftWidth: isBlockLeft ? 2 : 1,
            //borderRightWidth: isBlockLastRow ? 2 : 0,
            //borderBottomWidth: isBlockLastCol ? 2 : 0,
            
            // colors: light gray for normal, black for 3x3 borders.
            borderTopColor: isBlockTop ? "#000000" : "#CCCCCC",
            borderLeftColor: isBlockLeft ? "#000000" : "#CCCCCC",
            //borderRightColor: isBlockLastRow ? "#000000" : "#CCCCCC",
            //borderBottomColor: isBlockLastCol ? "#000000" : "#CCCCCC",
            
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
    ];
    
    return (
        <Pressable style={cellStyle} onPress={() => onPress(row, col)}>
            <Text style={styles.text}>{display}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    text: {
        fontSize: 20,
        color: "#333333",
    },
});