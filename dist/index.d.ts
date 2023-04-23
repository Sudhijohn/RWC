import React, { ChangeEventHandler } from 'react';

interface CheckboxProps {
    id?: string;
    label?: string;
    checked?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Checkbox for input selection
 */
declare const Checkbox: React.FC<CheckboxProps>;

export { Checkbox };
