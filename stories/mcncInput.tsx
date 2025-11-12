import React from 'react';
import './mcncInput.css';

export interface McncInputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Is disabled? */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (value: string) => void;
}

/** Simple input component */
export const McncInput = ({
  label,
  placeholder = 'Enter text...',
  value = '',
  disabled = false,
  onChange,
}: McncInputProps) => {
  return (
    <div className="mcnc-input-wrapper">
      {label && <label className="mcnc-input-label">{label}</label>}
      <input
        type="text"
        className="mcnc-input"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
