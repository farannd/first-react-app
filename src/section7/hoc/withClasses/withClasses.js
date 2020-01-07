import React from 'react'

const withClasses = (WrappedComponent, className) => {
    return props => {
        return (
            <div className={className}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default withClasses