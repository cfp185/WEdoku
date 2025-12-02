import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CellSize, BorderWidth } from './GlobalStyle';

type CellProps = {
    row: number;
    col: number;
    value: number | null;
    isGiven?: boolean;
    isSelected?: boolean;
    onPress?: (args: { row: number; col: number; value: number | null; isGiven: boolean }) => void;
};

const Cell: React.FC<CellProps> = ({ row, col, value, isGiven = false, isSelected = false, onPress }) => {
    const handlePress = () => {
        onPress && onPress({ row, col, value, isGiven });
    };

    const displayValue = typeof value === 'number' ? value : '';

    return (
        <TouchableOpacity
            style={[
                styles.cell,
                isGiven && styles.givenCell,
                isSelected && styles.selectedCell,
                displayValue !== '' && styles.filledCell,
            ]}
            activeOpacity={isGiven ? 1 : 0.7}
            onPress={handlePress}
        >
            <Text style={[styles.text, isGiven && styles.givenText]}>
                {displayValue}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: CellSize,
        height: CellSize,
        backgroundColor: 'lightyellow',
        borderColor: 'orange',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: BorderWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filledCell: {
        backgroundColor: 'moccasin',
    },
    givenCell: {
        backgroundColor: 'khaki',
    },
    givenText: {
        color: '#555',
        fontWeight: '600',
    },
    selectedCell: {
        backgroundColor: 'peru',
    },
    text: {
        color: '#333',
        fontSize: CellSize * 0.6,
    },
});

export default Cell;
