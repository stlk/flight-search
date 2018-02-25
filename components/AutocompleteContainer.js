import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';

import { getLocations } from '../lib/graphql';

class AutocompleteContainer extends React.Component {
  state = {
    value: '',
    items: []
  };

  componentDidMount() {
    this.setState({ value: this.props.defaultValue });
  }

  render() {
    const { name, label, className } = this.props;
    return (
      <div className={className}>
        <Autocomplete
          inputProps={{ id: name, name }}
          value={this.state.value}
          items={this.state.items}
          getItemValue={item => item.node.name}
          onSelect={(value, item) => {
            this.setState({ value, items: [] });
          }}
          onChange={async (event, value) => {
            this.setState({ value });
            let result = [];
            try {
              result = await getLocations(value);
            } catch (e) {
              result = [];
              console.log(e);
            }
            this.setState({ items: result.allLocations.edges });
          }}
          renderMenu={children =>
            <div className="menu">
              {children}
            </div>}
          renderItem={(item, isHighlighted) =>
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.node.name}
            >
              {item.node.name}
            </div>}
        />
      </div>
    );
  }
}

export default styled(AutocompleteContainer)`
  display: inline-block;
  position: relative;

  .menu {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid var(--black-color);
    background: #fff;
  }

  .item {
    padding: 2px 6px;
  }

  .item-highlighted {
    color: #fff;
    background-color: var(--secondary-color);
  }
`;
