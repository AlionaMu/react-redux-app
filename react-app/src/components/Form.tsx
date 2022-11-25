import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { useDispatch } from 'react-redux'
import { create } from '../store/productsSlice';

enum GenderEnum {
  female = 'Female',
  male = 'Male'
}

enum CountryEnum {
  bel = 'Belarus',
  ind = 'India',
  aus = 'Australia',
  ven = 'Venesuela'
}

export interface FormInfo {
  userName: string;
  date: string;
  gender?: string;
  img: any;
  checkbox: boolean;
  select: string;
};

export const defaultValues: FormInfo = {
  userName: '',
  date: '',
  gender: '',
  img: '',
  checkbox: false,
  select: ''
}

const Form = () => {  

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit, control, formState: { errors }, } = useForm<FormInfo>({
    defaultValues
  });

  const createFormCard = (newCard: FormInfo) => {
    dispatch(create(newCard))
  }

  const onSubmit:SubmitHandler<FormInfo>  = data => {    
    data.img = URL.createObjectURL(data.img[0]);
    createFormCard(data);
  }

  const setButtonAble = () => {
    setDisabled(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} onChange={setButtonAble}>
      <label>
        Name:
        <input type="text" {...register('userName',
          { required: true, 
            minLength: {
              value: 3,
              message: 'This input must exceed 3 characters'
            },
            pattern: {
              value:  /^[A-Za-z]+$/i,
              message: 'This input is letters only.'
            },
          })} 
          aria-invalid={errors.userName ? 'true' : 'false'} 
          className="form__input" 
        />
        <p className='form__error'>{errors.userName && 'First name is required'}</p>
        <p className='form__error'>{errors.userName?.message}</p>
      </label>
      <label>
        Date:
        <input type="date" {...register('date', { required: true })} className="form__input" />
        <p className='form__error'>{errors.date && 'Date is required'}</p>
      </label>
      <fieldset>
        <label>Gender</label>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="gender" {...field}>
                <FormControlLabel
                  value={GenderEnum.female}
                  control={<Radio />}
                  label={GenderEnum.female}
                />
                <FormControlLabel
                  value={GenderEnum.male}
                  control={<Radio />}
                  label={GenderEnum.male}
                />
              </RadioGroup>
            )}
            name="gender"
            control={control}
          />
      </fieldset>
      <fieldset>
        <label>Select Country  </label>
          <Controller
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} style={{width: '150px'}}>
                <MenuItem value={CountryEnum.bel}>{CountryEnum.bel}</MenuItem>
                <MenuItem value={CountryEnum.aus}>{CountryEnum.aus}</MenuItem>
                <MenuItem value={CountryEnum.ind}>{CountryEnum.ind}</MenuItem>
                <MenuItem value={CountryEnum.ven}>{CountryEnum.ven}</MenuItem>
              </Select>
            )}
            name="select"
            control={control}
          />
          {errors.select && <p className='form__error'>Country is required</p>}
      </fieldset>
      <fieldset>
        <label>Do you agree to the processing of data?</label>
        <Controller
          name="checkbox"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) =>  <Checkbox {...field} />}
        />
        {errors.checkbox && <p className='form__error'>This field is required</p>}
      </fieldset>
      <label>
        Upload File:
        <input type="file" {...register('img', { required: true })} className="form__file-input" />
        <p className='form__error'>{errors.img && 'Image is required'}</p>
      </label>
      <input 
        type="submit" 
        value="Submit" 
        className='button form__button' 
        disabled={disabled} 
      >
      </input>
    </form>
  );
};

export default Form;
