import React from 'react';

const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];

export default function NewsletterBox({date}) {
    return (
        <div className="newsletter-box">
            <div className="newsletter-box__day">{date.getDate()}</div>
            <div className="newsletter-box__month-year">{months[date.getMonth()]} {date.getFullYear()}</div>
            <div className="newsletter-box__point"></div>
        </div>
    )
}