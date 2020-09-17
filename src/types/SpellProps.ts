interface SpellProps {
  name: String;
  desc: [String];
  range: String;
  components: [String?];
  material?: String;
  ritual: Boolean;
  duration: String;
  casting_time: String;
  level: Number;
  attack_type?: String;
}

export default SpellProps;
