import React from 'react'

class Sidebar extends React.Component{
    render () {
        return(
            <div className="Sidebar flex-initial bg-green-dark p-2 min-h-full w-max ">
                <ul>
                    <li>
                        Account
                    </li>
                    <hr/>
                    <li>
                        How to use ?
                    </li>
                    <hr/>
                    <li>
                        Hardware
                    </li>
                    <hr/>
                    <li>
                        F.A.Q.
                    </li>
                </ul>
            </div>
        )
    }
}
export default Sidebar