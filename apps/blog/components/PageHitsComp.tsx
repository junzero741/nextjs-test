'use client';

import React from 'react';

export default function PageHitsComp() {
	return (
		<>
			<a href='https://hits.seeyoufarm.com'>
				<img
					src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${window.location.href}&count_bg=%23B2B2B2&title_bg=%23000000&title=조회수&edge_flat=false`}
					alt='hits'
				/>
			</a>
		</>
	);
}
