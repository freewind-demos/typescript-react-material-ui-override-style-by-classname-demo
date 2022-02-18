import {TextField} from '@material-ui/core'
import React, {FC, useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import './hello.css';

type Option = { label: string, value: string }

const options: Option[] = [
  {label: 'aaa', value: 'aaa'},
  {label: 'bbb', value: 'bbb'},
  {label: 'ccc', value: 'ccc'},
  {label: 'ddd', value: 'ddd'},
]

export const Hello: FC = () => {
  // Notice: the initial value should be passed explicitly
  // if no initialState provided, it will be undefined and we will get error:
  // `Material-UI: A component is changing the uncontrolled value state of Autocomplete to be controlled.`
  const [selected, setSelected] = useState<Option | null>(null)

  return <div className={'Hello'}>
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={selected}
      onChange={(_, value) => setSelected(value)}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
    />
  </div>
}
