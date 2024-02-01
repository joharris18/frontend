import { styled } from "solid-styled-components";

/**
 * Container to prevent text overflow
 */
export const OverflowingText = styled("div")`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  font-weight: 700;

  * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
