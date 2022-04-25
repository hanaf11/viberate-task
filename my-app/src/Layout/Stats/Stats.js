
import React from 'react';
import StatsBar from '../../Components/StatsBar/StatsBar';
import '../../html-css-sample/styles/styles.css'

function Stats() {  
	
  return (
    <div className="col stats">

								<div className="col-content">

									<div className="stats-sheet">
										<label>Most popular in</label>
										<StatsBar/>
										
									</div>

								</div>

	</div>
  );
}

export default Stats;
