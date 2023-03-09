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
  year: string;
  make: string;
  model: string;
  value: string;
};

export const VehicleForm = (props:VehicleFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<VehicleState>(state => state.year)
  const { register, handleSubmit} = useForm({})

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      console.log(data.year)
      console.log(data.make)
      console.log(data.model)
      console.log(data.value)
      setTimeout( () => {window.location.reload()}, 10000);
      event.target.reset();
    }else{
      console.log(data.year)
      dispatch(chooseyear(data.year));
      console.log(data.make)
      dispatch(choosemake(data.make));
      console.log(data.model)
      dispatch(choosemodel(data.model));
      console.log(data.value)
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
          <Input {...register('year')} name='year' placeholder='Year'/>
        </div>
        <div>
          <label htmlFor="make">Vehicle Make</label>
          <Input {...register('make')} name='make' placeholder='Make'/>
        </div>
        <div>
          <label htmlFor="model">Vehicle Model</label>
          <Input {...register('model')} name='model' placeholder='Model'/>
        </div>
        <div>
          <label htmlFor="msrp">MSRP</label>
          <Input {...register('value')} name='value' placeholder='MSRP'/>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}