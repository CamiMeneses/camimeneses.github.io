import styled from "styled-components";
import colors from "themes/theme";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px ${colors.teal};
  color: ${colors.white};
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <span> &gt; </span>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
