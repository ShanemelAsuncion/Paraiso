import React from 'react';
import { Colors, Spacing, FontFamily, FontSize} from './styles';

export default function CustomButton({ children }) {
    return (
        <button 
            style={{
                color: Colors.black,
                borderColor: Colors.neutral,
                padding: `${Spacing.sm} ${Spacing.xl}`,
                textAlign: 'center',
                display: 'block',
                margin: 'auto',
                borderRadius: '30px',
                fontFamily: FontFamily.button,
                fontSize: FontSize.sm,
                backgroundColor: 'transparent',
                borderWidth: '2px',
                borderStyle: 'solid',
                cursor: 'pointer'
            }}>
            {children}
        </button>
    );
}
