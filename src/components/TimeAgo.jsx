import React from 'react'
import {format,formatDistanceToNow, parseISO} from 'date-fns';


const TimeAgo = ({date}) => {

    let timeAgo = '';
    if(date){
        const time = parseISO(date)
        const dated = format(time , "MM/dd/yyyy pp")
        const timePeroid = formatDistanceToNow(time)
        timeAgo = ` ${timePeroid} ago ${dated}`
    }
  return (
    <span title={date}>
        &nbsp;{timeAgo}
    </span>
  )
}

export default TimeAgo