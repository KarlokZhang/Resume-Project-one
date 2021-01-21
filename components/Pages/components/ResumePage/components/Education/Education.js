import Timeline from "../Timeline/Timeline";

const Education = () => (
  <div>
    <h3 className="resumeSub__title">Education</h3>
    <Timeline
      items={[
        {
          key: "KEY0",
          title: "Monash University",
          year: "2020",
          company: "Monash University",
          description:
            "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
        },
        {
          key: "KEY1",
          title: "Monash University",
          year: "2020",
          company: "Monash University",
          description:
            "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
        },
        {
          key: "KEY2",
          title: "Apple",
          year: "2020",
          company: "Apple Inc",
          description:
            "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.",
        },
      ]}
    />
  </div>
);

export default Education;
