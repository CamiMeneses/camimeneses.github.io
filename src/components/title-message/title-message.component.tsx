import Typewriter from "typewriter-effect";
import "./title-message.style.scss";

import { useTranslation } from "i18n";

const TitleMessage = () => {
  const { t, language } = useTranslation();
  const { welcome } = t;

  const messages = [
    `${welcome.hello} <br/> ${welcome.im} <contrast> ${welcome.name} </contrast> `,
    `${welcome.welcomeTo} <contrast> ${welcome.website} </contrast>`,
    `${welcome.knowMore} <contrast> ${welcome.aboutMe} </contrast>`,
  ];

  return (
    <div className="message">
      <Typewriter
        key={language}
        options={{
          strings: messages,
          autoStart: true,
          loop: true,
          delay: 20,
          cursor: "|",
          deleteSpeed: 0.5,
        }}
      />
    </div>
  );
};

export default TitleMessage;
