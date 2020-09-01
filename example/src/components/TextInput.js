import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: white;
  padding: 0.25rem;
`;

const TextInput = React.memo(({ placeholder, value, onChange }) => {
  return <Input placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />;
});

export default TextInput;
