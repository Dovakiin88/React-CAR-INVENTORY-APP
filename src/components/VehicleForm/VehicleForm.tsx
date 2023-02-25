import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseyear, choosemake, choosemodel, choosevalue } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents';
import { Button } from '@material-ui/core';
import { server_calls } from '../api';

interface VehicleFormProps{
  id?:string;
  data?:{}
}

interface VehicleState{
  name: string;
  email: string;
  address: string;
  Phone_number: string;
};

export const VehicleForm = (props:VehicleFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<VehicleState>(state => state.name)
  const { register, handleSubmit} = useForm({})

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    }else{
      dispatch(chooseyear(data.year));
      dispatch(choosemake(data.make));
      dispatch(choosemodel(data.model));
      dispatch(choosevalue(data.value));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Year of Vehicle</label>
          <Input {...register('name')} name='name' placeholder='Name'/>
        </div>
        <div>
          <label htmlFor="email">Vehicle Make</label>
          <Input {...register('email')} name='email' placeholder='Email'/>
        </div>
        <div>
          <label htmlFor="phone_number">Vehicle Model</label>
          <Input {...register('phone_number')} name='phone_number' placeholder='Phone Number'/>
        </div>
        <div>
          <label htmlFor="address">MSRP</label>
          <Input {...register('address')} name='address' placeholder='Address'/>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}