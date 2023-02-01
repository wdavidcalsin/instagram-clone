import styled from 'styled-components';

const CommentInputStyle = styled.textarea`
  resize: none;
  width: 100%;
  height: auto;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 10px;
  background: white;
  border: none;
  color: rgb(38, 38, 38);
  border-bottom: 1px solid #dbdbdb;
  border-radius: 3px;

  &:focus-visible {
    outline: none;
  }
`;

const CommentInput = () => {
  return <CommentInputStyle autoFocus placeholder="Add comment" />;
};

export default CommentInput;
