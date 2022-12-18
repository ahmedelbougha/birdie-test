import renderer from 'react-test-renderer';
import { EventTimelineElementProps } from '../../components/EventTimelineElement.d';
import EventTimelineElement from '../../components/EventTimelineElement';

const timelineElementProps: EventTimelineElementProps = {
  event: {
    id: 'c6626ebd-dc8e-4b4e-b25c-170c1338df4a',
    care_recipient_id: 'df50cac5-293c-490d-a06c-ee26796f850d',
    event_type: 'task_completed',
    timestamp: '2019-05-12T18:54:09.116Z',
    payload: {
      id: 'c6626ebd-dc8e-4b4e-b25c-170c1338df4a',
      visit_id: '5cd753f0-8b66-f8a8-43f7-330f62a3e1d6',
      timestamp: '2019-05-12T18:54:09.116Z',
      event_type: 'task_completed',
      caregiver_id: 'f7a00df5-bbc4-4ad7-9918-c07e16e709f6',
      task_instance_id:
        'dHw2YzBjZGViMy1mNzhlLTQwNTUtYmRlMy1kMmVmYTdlMmFmNjZ8MjAxOS0wNS0xMlQxOTowMDowMC4wMDBafEVWRU5JTkc=',
      task_schedule_id: '6c0cdeb3-f78e-4055-bde3-d2efa7e2af66',
      care_recipient_id: 'df50cac5-293c-490d-a06c-ee26796f850d',
      task_definition_id: 'f71f00c2-ed7e-4366-a2be-d2abc6eb939b',
      task_schedule_note: 'Please change my pad and give me a freshen up',
      task_definition_description: 'Assist to change incontinence pants',
    },
  },
};

describe('Event Timeline Element', () => {
  it('renders', () => {
    const component = renderer.create(
      <EventTimelineElement {...timelineElementProps} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
