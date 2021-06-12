import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu inverted vertical>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
                />
            </Menu>
        </div>
    )
}
