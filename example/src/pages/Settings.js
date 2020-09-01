import React from 'react';
import { connect } from 'telereact';
import SpacedContainer from '../components/SpacedContainer';
import TextInput from '../components/TextInput';

const Checkbox = ({ id, label, checked, onChange }) => (
  <SpacedContainer row>
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    />
    <label htmlFor={id}>{label}</label>
  </SpacedContainer>
);

const Settings = ({ setState, settings }) => {
  return (
    <div>
      <h1>Settings</h1>
      <SpacedContainer>
        <h3>Account</h3>
        <TextInput
          placeholder="Name"
          value={settings.account.name}
          onChange={v => setState({ settings: { account: { name: v } } }, { deepMerge: true })}
        />
        <TextInput
          placeholder="Username"
          value={settings.account.username}
          onChange={v => setState({ settings: { account: { username: v } } }, { deepMerge: true })}
        />
        <h3>Notifications</h3>
        <Checkbox
          id="enabled"
          label="enabled"
          checked={settings.notifications.enabled}
          onChange={b =>
            setState({ settings: { notifications: { enabled: b } } }, { deepMerge: true })
          }
        />
        <Checkbox
          id="qualityFilter"
          label="qualityFilter"
          checked={settings.notifications.qualityFilter}
          onChange={b =>
            setState({ settings: { notifications: { qualityFilter: b } } }, { deepMerge: true })
          }
        />
      </SpacedContainer>
    </div>
  );
};

export default connect('settings')(Settings);
