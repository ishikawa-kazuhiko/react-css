/**
 * cssと同じような記述ができる
 * ただし、hoverが効かない
 * sassのプラグインを追加することにより、補完することができる模様
 */
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-Styled Jsx-</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex; /**横並び */
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          /** Styled Jsxの場合はこのhoverは効かない*/
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
