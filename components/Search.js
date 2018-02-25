import Link from 'next/link';
import styled from 'styled-components';

import AutocompleteContainer from './AutocompleteContainer';

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
    <form action="/flights">
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
        <input type="text" name="date" defaultValue={date} />
      </label>
      <input type="submit" value="Search" />
    </form>
  </Search>;
