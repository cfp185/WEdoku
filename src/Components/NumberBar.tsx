import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

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
                        style={[styles.button, isActive && styles.active]}
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
        marginTop: 20,
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
    },
    active: {
        backgroundColor: "#333333",
        borderColor: "#333333",
    },
    text: {
        fontSize: 18,
        color: "#333333",
    },
});