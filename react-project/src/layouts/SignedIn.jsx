import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" src = "https://media.licdn.com/dms/image/D4D03AQGwGwj92kqZEQ/profile-displayphoto-shrink_800_800/0/1683448122446?e=2147483647&v=beta&t=DkBqSlBVjTUdahpVUDMzy4Mycxw-aAHAU0Da0yXb1XI"/>
            <Dropdown pointing = "top right" text = "Kübra">
                <Dropdown.Menu>
                    <Dropdown.Item text = "My Information" icon = "info"/>
                    <Dropdown.Item onClick={signOut} text = "Sign Out" icon = "sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
