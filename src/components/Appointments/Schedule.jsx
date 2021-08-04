import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../../data/appointments';
import { Typography } from '@material-ui/core';
const currentDate = '2018-06-27';

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#3FC7DB',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

export default () => (
  <Paper>
    <Scheduler
      data={appointments}
      height={660}
    >
      <Typography align='center' variant='h3'>July</Typography>
      <ViewState
        defaultCurrentDate={currentDate}
      />
      <WeekView
        startDayHour={9}
        endDayHour={19}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);
