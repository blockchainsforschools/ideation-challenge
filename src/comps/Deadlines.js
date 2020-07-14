import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import ImportantDeadlines from './ImportantDeadlines';
import RecommendedTimeline from './RecommendedTimeline';
import MinRequirementsTimeline from './MinRequirementsTimeline';

const Deadlines = () => {
	return (
		<Grid style={{ maxWidth: '80vw' }}>
			<GridCell span={4} tablet={8} phone={12}>
				<ImportantDeadlines />
			</GridCell>
			<GridCell span={4} tablet={8} phone={12}>
				<RecommendedTimeline />
			</GridCell>
			<GridCell span={4} tablet={8} phone={12}>
				<MinRequirementsTimeline />
			</GridCell>
		</Grid>
	);
};

export default Deadlines;
