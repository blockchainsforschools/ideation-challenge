import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import ImportantDeadlines from './ImportantDeadlines';
import RecommendedTimeline from './RecommendedTimeline';
import MinRequirementsTimeline from './MinRequirementsTimeline';

const Deadlines = () => {
	return (
		<Grid style={{ maxWidth: '85vw' }}>
			<GridCell span={4} tablet={8}>
				<ImportantDeadlines />
			</GridCell>
			<GridCell span={5} tablet={8} phone={4}>
				<RecommendedTimeline />
			</GridCell>
			<GridCell span={3} tablet={8} phone={4}>
				<MinRequirementsTimeline />
			</GridCell>
		</Grid>
	);
};

export default Deadlines;
