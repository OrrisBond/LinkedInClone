import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article'>
            <div className="widgets-articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle }</p>
            </div>
        </div>
    )
  return (
      <div className='widgets'>
          <div className="widgets-header">
              <h2>LinkedIn News</h2>
              <InfoIcon/>
          </div>
          {newsArticle('Orris just won his 9th Ballon dor ', 'Top news - 9099 readers')}
          {newsArticle('Orris just broke the goal record', 'Top news - 1008 readers')}
          {newsArticle('Orris signed for a record breaking amount of $300m', 'Top news - 886 readers')}
          {newsArticle('Ronaldo on Orris `he is the greatest player i have seen`', 'Top news - 799 readers')}
          {newsArticle('Orris just became the most followed person on instagram', 'Top news - 2050 readers')}
    </div>
  )
}

export default Widgets