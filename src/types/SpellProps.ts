interface SpellProps {
  name: string;
  desc: [string];
  range: string;
  components: [string?];
  material?: string;
  ritual: boolean;
  duration: string;
  casting_time: string;
  level: number;
  attack_type?: string;
}

export default SpellProps;
