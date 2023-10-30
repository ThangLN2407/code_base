import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

const BaseRadio = (props) => {
  const { field, form, label, options, customOnChange, ...rest } = props;

  const handleChange = (e) => {
    const { target } = e;
    form.setFieldValue(field.name, target.value);

    if (customOnChange) {
      customOnChange(e);
    }
  };

  return (
    <div>
      <RadioGroup {...field} {...rest} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText error={form.touched[field.name] && Boolean(form.errors[field.name])}>
        {form.touched[field.name] && form.errors[field.name]}
      </FormHelperText>
    </div>
  );
};

export default BaseRadio;
