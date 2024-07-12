import "./Team.scss";
import teamImg from "/src/assets/images/icons/team-img.svg";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
    onFrame: (props) => {
      // Clamp the value to a maximum of 100
      props.number = Math.min(props.number, 100);
    },
  });

  const animatedNumber = number.to((n) => n.toFixed(0));

  // Ishga tushgandan so'ng + belgisini paydo qilish
  const animatedNumberWithPlus = animatedNumber.to((n) =>
    n === "100" ? `${n}+` : n
  );

  return <animated.div>{animatedNumberWithPlus}</animated.div>;
}
function Team() {
  return (
    <section className="team-section" id="command">
      <div className="container">
        <h2
          className="team-wrapper__start-title"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Team
        </h2>
        <div className="team-wrapper">
          <div
            className="team-wrapper__start"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p className="team-wrapper__start-desc">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <p className="team-wrapper__start-num" data-aos="fade-up">
              <Number n={100} />
            </p>
            <p className="team-wrapper__start-text">Dedicated team</p>
          </div>
          <div className="team-wrapper__end">
            <img data-aos="zoom-in" src={teamImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
