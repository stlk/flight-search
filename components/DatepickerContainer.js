import styled from 'styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class DatepickerContainer extends React.Component {
  state = {
    value: moment()
  };

  componentDidMount() {
    this.setState({ value: moment(this.props.defaultValue) });
  }

  handleChange = date => {
    this.setState({
      value: date
    });
  };

  render() {
    const { className } = this.props;
    const { value } = this.state;
    return (
      <div className={className}>
        <DatePicker selected={value} onChange={this.handleChange} />
        <input type="hidden" name="date" value={value.format('YYYY-MM-DD')} />
      </div>
    );
  }
}

export default styled(DatepickerContainer)`
  display: inline-block;
`;
