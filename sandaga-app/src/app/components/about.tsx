import React from "react";
import sandaga from "../../../public/sandaga.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Image src={sandaga} alt="" />
      </div>
      <p>
        私は、フロントエンドエンジニアとして3年の実務経験を持つ、SANDAGAです。
        WebサイトやWebアプリケーションの開発を中心に、UI/UXデザインやSEO対策なども担当してきました。
        私の強みは、 * 最新の技術やトレンドを積極的に学び、取り入れられること *
        ユーザーの視点に立ったUI/UXデザインができること *
        チームで協力して成果を出すことができる ことです。
        今後は、自分のスキルや経験を活かして、より多くのユーザーに喜ばれるWebサービスを開発していきたいと考えています。
      </p>
      <h2>Project Summary</h2>
      <ul>
        <li>
          <h3>Project Title</h3>
          <p>
            Client: [クライアント] Period: [制作期間] Technology:
            [使用した技術やフレームワーク] Achievement: [成果や工夫]
          </p>
        </li>
        <li>
          <h3>Project Title</h3>
          <p>
            Client: [クライアント] Period: [制作期間] Technology:
            [使用した技術やフレームワーク] Achievement: [成果や工夫]
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
