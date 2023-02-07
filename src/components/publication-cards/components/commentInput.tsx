import styled from 'styled-components';

const CommentInputStyle = styled.textarea`
  resize: none;
  width: 100%;
  height: auto;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 10px;
  background: ${(props) => props.theme.palette.primary.main};
  border: none;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  border-bottom: 1px solid ${(props) => props.theme.palette.border.main};

  &:focus-visible {
    outline: none;
  }
`;

const CommentInput = () => {
  return <CommentInputStyle autoFocus placeholder="Add comment" />;
};

export default CommentInput;
