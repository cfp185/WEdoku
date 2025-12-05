import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CellSize } from './GlobalStyle';

type EraseButtonProps = {
    onErase: () => void;
    disabled?: boolean;
};

export const EraseButton: React.FC<EraseButtonProps> = ({ onErase, disabled=false }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, disabled && styles.buttonDisabled]}
                onPress={onErase}
                disabled={disabled}
            >
                {/* FontAwesome icon for eraser */}
                <MaterialCommunityIcons
                     name="eraser"
                     size={CellSize * 0.8}
                     color={disabled ? "#AAAAAA" : "#555555"}
                />
            </Pressable>
            <Text style={[styles.label, disabled && styles.labelDisabled]}>
                Erase
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 4,
        alignItems: "center",
    },
    button: {
        width: CellSize * 1.4,
        height: CellSize * 1.4,
        borderRadius: CellSize * 0.7,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDisabled: {
        opacity: 0.4,
    },
    label: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: "700",
        color: "#555",
    },
    labelDisabled: {
        color: "#AAAAAA",
    },
});