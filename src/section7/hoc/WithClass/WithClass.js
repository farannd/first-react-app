import React from 'react'


//merupakan HOC yang berfungsi untuk mewrap dg menambahkan class CSS
const WithClass = props => (
    <div className={props.classes}>{props.children}</div>
)

export default WithClass