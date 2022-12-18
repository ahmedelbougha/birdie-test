import placeHolderImage from '../assets/images/placeholder.png';

export const theme = {
  colors: {
    header: {
      backgroundColor: '#00264d',
      color: '#fff',
    },
    body: {
      backgroundColor: '#e3fffe',
      color: '#00264d',
    },
    footer: {
      backgroundColor: '#00264d',
      color: '#fff',
    },
    card: {
      backgroundColor: '#fbfbfb',
      color: '#000',
    },
  },
  placeHolderImage,
};

export const EventTypes: {
  [key: string]: {
    color: string;
    background: string;
    iconStyle: string;
    extraData: string[];
  };
} = {
  alert_qualified: {
    color: '#fff',
    background: '#961e1e',
    iconStyle: '#1e96f3',
    extraData: [],
  },
  alert_raised: {
    color: '#fff',
    background: '#fa1e1e',
    iconStyle: '#1e96f3',
    extraData: ['alert_severity'],
  },
  catheter_observation: {
    color: '#fff',
    background: '#de6cec',
    iconStyle: '#1e96f3',
    extraData: ['volume_ml'],
  },
  check_in: {
    color: '#fff',
    background: '#01d5aa',
    iconStyle: '#1e96f3',
    extraData: [],
  },
  check_out: {
    color: '#fff',
    background: '#cacf9e',
    iconStyle: '#1e96f3',
    extraData: [],
  },
  concern_raised: {
    color: '#fff',
    background: '#8d528a',
    iconStyle: '#1e96f3',
    extraData: ['severity'],
  },
  fluid_intake_observation: {
    color: '#fff',
    background: '#87bef7',
    iconStyle: '#1e96f3',
    extraData: ['consumed_volume_ml'],
  },
  food_intake_observation: {
    color: '#fff',
    background: '#201cc4',
    iconStyle: '#1e96f3',
    extraData: ['meal', 'note'],
  },
  general_observation: {
    color: '#fff',
    background: '#0e699f',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  incontinence_pad_observation: {
    color: '#fff',
    background: '#ee1f4f',
    iconStyle: '#1e96f3',
    extraData: ['pad_condition'],
  },
  medication_schedule_created: {
    color: '#fff',
    background: '#29a88e',
    iconStyle: '#1e96f3',
    extraData: ['note', 'type', 'dose_size'],
  },
  medication_schedule_updated: {
    color: '#fff',
    background: '#dca534',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  mental_health_observation: {
    color: '#fff',
    background: '#b5df79',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  mood_observation: {
    color: '#fff',
    background: '#5d6a9f',
    iconStyle: '#1e96f3',
    extraData: ['mood'],
  },
  no_medication_observation_received: {
    color: '#fff',
    background: '#91e2e7',
    iconStyle: '#1e96f3',
    extraData: ['medication_type', 'expected_dose_timestamp'],
  },
  physical_health_observation: {
    color: '#fff',
    background: '#322c6b',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  regular_medication_maybe_taken: {
    color: '#fff',
    background: '#506c57',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  regular_medication_not_taken: {
    color: '#fff',
    background: '#698bd5',
    iconStyle: '#1e96f3',
    extraData: ['note', 'medication_type', 'medication_failure_reason'],
  },
  regular_medication_partially_taken: {
    color: '#fff',
    background: '#ec8dda',
    iconStyle: '#1e96f3',
    extraData: ['note', 'medication_type'],
  },
  regular_medication_taken: {
    color: '#fff',
    background: '#398c53',
    iconStyle: '#1e96f3',
    extraData: ['medication_type'],
  },
  task_completed: {
    color: '#fff',
    background: '#28b5bd',
    iconStyle: '#1e96f3',
    extraData: ['task_schedule_note', 'task_definition_description'],
  },
  task_completion_reverted: {
    color: '#fff',
    background: '#23b798',
    iconStyle: '#1e96f3',
    extraData: ['task_schedule_note', 'task_definition_description'],
  },
  task_schedule_created: {
    color: '#fff',
    background: '#ff856f',
    iconStyle: '#1e96f3',
    extraData: ['note'],
  },
  toilet_visit_recorded: {
    color: '#fff',
    background: '#e2a6ea',
    iconStyle: '#1e96f3',
    extraData: ['visit_type', 'visit_count', 'note', 'observed'],
  },
  visit_cancelled: {
    color: '#fff',
    background: '#a5e7fc',
    iconStyle: '#1e96f3',
    extraData: [],
  },
  visit_completed: {
    color: '#fff',
    background: '#4bdcbc',
    iconStyle: '#1e96f3',
    extraData: [],
  },
};
