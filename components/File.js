import styled from 'styled-components';

const Pre = styled.pre`
  font-size: 12px;
  background: #eee;
  padding: 1rem;
  width: 700px;
  height: 100px;
  overflow: hidden;
`;

export default ({ filename, gist: { files, html_url } }) =>
  <div>
    <h4>{filename}</h4>
    <a href={html_url}>
      <code>
        <Pre>
          {files[filename].content}
        </Pre>
      </code>
    </a>
  </div>;
