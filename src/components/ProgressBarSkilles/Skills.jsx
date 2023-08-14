import ProgressBar from './ProgressBar';
import ProgressBarCircle from './ProgressBarCircle';

const Skills = () => {
  return (
    <div className="p-5 space-y-4">
      <h1 className='font-bold text-xl border-b-2 rounded-full border-amber-500 text-center'> Skills Language</h1>
      <div>
          <ProgressBar label="Kurdish" percentage={90} />
          <ProgressBar label="English" percentage={60} />
          <ProgressBar label="Arabic" percentage={40} />
      </div>
      <h1 className='font-bold text-xl border-b-2 rounded-full border-amber-500 text-center'> Skills Programing Language</h1>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-6'>
          <ProgressBarCircle label="HTML" percentage={90} />
          <ProgressBarCircle label="CSS" percentage={75} />
          <ProgressBarCircle label="JavaScript" percentage={70} />
          <ProgressBarCircle label="Reactjs" percentage={60} />
          <ProgressBarCircle label="Typescript" percentage={50} />
          <ProgressBarCircle label="php" percentage={40} />
      </div>
    </div>
  );
};

export default Skills;
