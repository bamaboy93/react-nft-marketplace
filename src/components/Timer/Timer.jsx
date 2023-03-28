import { useTimer } from "react-timer-hook";
import {
  Desc,
  Notification,
  Numbers,
  Time,
  NumbersRow,
  Row,
  Wrapper,
} from "./Timer.styled";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => restart(expiryTimestamp),
  });
  return (
    <Wrapper>
      <Notification>Auction ends in:</Notification>
      <Time>
        <NumbersRow>
          <Numbers>{hours}</Numbers>:<Numbers>{minutes}</Numbers>:
          <Numbers>{seconds}</Numbers>
        </NumbersRow>

        <Row>
          <Desc>Hours</Desc>
          <Desc>Minutes</Desc>
          <Desc>Seconds</Desc>
        </Row>
      </Time>
    </Wrapper>
  );
};

export default Timer;
