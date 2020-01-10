import React from 'react'

import Aux from '../../hoc/Auxiliary'
import styles from './Layout.module.css'

const layout = props => {

    return (
    <Aux>
        <div>toolbar, side bar, backdrop</div>
        <main className={styles.main}>{props.children}</main>
    </Aux>
    )
}

export default layout