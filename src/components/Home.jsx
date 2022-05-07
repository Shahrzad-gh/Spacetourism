import styled from "styled-components"

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const TitleH1 = styled.h1`
  font-family: 'Bellefair', serif;
  font-size: 150px;
  text-align: center;
  color: #fff;
  margin:0;
`;
const TitleH5 = styled.h5`
  font-family: 'Barlow Condensed', serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  text-align: center;
  color: rgba(208, 214, 249, 1);
  margin:0;
`;
const CONTENT = styled.p`
  font-family: 'Barlow Condensed', serif;
  font-size: 18px;
  line-height: 32px;
  width: 30vw;
  text-align: left;
  color: #fff;
  margin:0;
`;
const MAINBTN = styled.button`
  font-family: 'Bellefair', serif;
  font-size: 32px;
  letter-spacing: 2px;
  text-align: center;
  color: #000;
  background-color: #fff;
  width:274px;
  height:274px;
  border-Radius: 50%;
  border: none;

`;

function Home() {
  return (
    <div className="home">
      <div className="space-main">
        <TitleH5>SO, YOU WANT TO TRAVEL TO</TitleH5>
        <TitleH1>SPACE</TitleH1>
        <CONTENT>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</CONTENT>
      </div >
      <div className="explor-btn">
        <MAINBTN>EXPLOR</MAINBTN>
      </div >
    </div>
  )
}

export default Home