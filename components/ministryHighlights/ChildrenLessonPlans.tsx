import Link from "next/link";

const ChildrenLessonPlans = async ({ lessonPlans }: { lessonPlans: any }) => {
  if (!lessonPlans || lessonPlans.length === 0) return null;

  return (
    <section className="lesson-plan-highlights">
      <div className="lesson-plan-wrapper">
        <div className="lesson-plan-content">
          <h2 className="lesson-plan-title">
            Latest Children Lesson Plans: What They’re Learning and How to
            Engage
          </h2>
        </div>
        <div className="lesson-plan-container">
          {lessonPlans.map((el: any, i: number) => {
            return (
              <div key={i} className="lesson-plan-individual-container">
                <h3>Lesson plans for {el.title}</h3>
                <div className="lesson-plan-link-container">
                  <Link
                    href={el.leaderLesson.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-button"
                    aria-label={`Leader PDF for ${el.title}`}
                  >
                    Leader Lesson
                  </Link>
                  <Link
                    href={el.parentLesson.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-button"
                    aria-label={`Parent Lesson PDF for ${el.title}`}
                  >
                    Parent Lesson
                  </Link>
                  <Link
                    href={el.lessonActivity.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-button"
                    aria-label={`Lesson Activity PDF for ${el.title}`}
                  >
                    Lesson Activity
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChildrenLessonPlans;
