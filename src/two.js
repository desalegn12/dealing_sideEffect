import One from "./one";

function Two({ ...threeProps }, { ...data }) {
  return (
    <div>
      <One {...data} />
      <Three {...threeProps} />
    </div>
  );
}

export default Two;

function Three({ l, h, m }) {
  return (
    <div>
      {l}
      {h}
      {m}
    </div>
  );
}
