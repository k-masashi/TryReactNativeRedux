export interface CounterProps {
  count: number;
  increment: (val: number) => void;
  clear: () => void;
}

export const Counter = ({count, increment, clear}: CounterProps) => {
  return (
    <>
      <p>本日は晴天なり</p>
    </>
  );
};
