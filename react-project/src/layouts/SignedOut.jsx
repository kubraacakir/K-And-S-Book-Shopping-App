import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button color='violet' onClick={signIn}>Üye Giriş</Button>
                <Button color='violet' style = {{marginLeft:"0.5em"}}>Üye Ol</Button>
            </Menu.Item>

        </div>
    )
}
