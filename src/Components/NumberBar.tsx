import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { CellSize } from './GlobalStyle';
import Cell from "./Cell";

type NumberBarProps = {
    selected: number | null;
    onSelect: (num: number) => void;
};

export const NumberBar: React.FC<NumberBarProps> = ({ selected, onSelect }) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => {
                const isActive = num === selected;

                return (
                    <Pressable
                        key={num}
                        style={[styles.button]} 
                        onPress={() => onSelect(num)}
                    >
                        <Text style={styles.text}>{num}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        padding: 10,
        marginTop: 50,
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth*1.5,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: CellSize * 0.7,
        fontWeight: '600',
        color: "#555",
    },
});