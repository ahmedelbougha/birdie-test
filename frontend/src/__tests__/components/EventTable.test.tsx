import renderer from 'react-test-renderer';
import EventTable from '../../components/EventTable';
import { TableProps } from '../../components/EventTable.d';
import { buildEventTableEvents } from '../../utils/functions';

const tableProps: TableProps = {
  summaryTypes: {
    alert_qualified: '5',
    catheter_observation: '12',
    medication_schedule_created: '10',
  },
  eventTypes: buildEventTableEvents(),
};

describe('Event Table', () => {
  it('renders', () => {
    const component = renderer.create(<EventTable {...tableProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
