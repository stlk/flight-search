import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import AutocompleteContainer from './AutocompleteContainer';
import DatepickerContainer from './DatepickerContainer';

const Search = styled.div`

  input {
    font-size: 13px;
    border-radius: 4px;
    box-shadow: inset 0 2px 2px #e9e9e9;
    border: 1px solid #aeaeae;
    line-height: 16px;
    padding: 6px 10px 5px;
    margin: 5px;
  }
`;

export default ({ from, to, date }) =>
  <Search>
    <form
      action="/flights"
      onSubmit={event => {
        event.preventDefault();
        const query = Array.from(
          event.target
        ).reduce((accumulator, formItem) => {
          accumulator[formItem.name] = formItem.value;
          return accumulator;
        }, {});
        Router.push({
          pathname: '/flights',
          query
        });
      }}
    >
      <label>
        From:
        <AutocompleteContainer name="from" defaultValue={from} />
      </label>
      <label>
        To:
        <AutocompleteContainer name="to" defaultValue={to} />
      </label>
      <label>
        When:
        <DatepickerContainer defaultValue={date} />
      </label>
      <input type="submit" value="Search" />
    </form>
  </Search>;
