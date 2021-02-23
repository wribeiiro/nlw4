import { useState } from 'react';
import { Header } from './styles';
import { ProgressBarContainer, ProgressBar, CurrentExperience } from './styles';

export function ExperienceBar() {
  const [level, setLevel] = useState(75);

  return (
    <Header>
		<span>0 xp</span>
		<ProgressBarContainer>
			<ProgressBar level={level} />
			<CurrentExperience level={level}>
				{level} xp
			</CurrentExperience>
		</ProgressBarContainer>
		<span>37 xp</span>
    </Header>
  );
}