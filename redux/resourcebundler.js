import Logo from '../assets/resources/logo.png'

import Active_Cart from '@/assets/resources/icons/Acart.png'
import Active_Home from '@/assets/resources/icons/Ahome.png'
import Active_Profile from '@/assets/resources/icons/Auser.png'
import Cart from '@/assets/resources/icons/cart.png'
import Home from '@/assets/resources/icons/home.png'
import Search from '@/assets/resources/icons/search.png'
import Profile from '@/assets/resources/icons/user.png'
// sample
import PC from '@/assets/resources/samples/pc.jpg'

const staticImages={
    Logo,
}

const icons = {
    Home,
    Search,
    Profile,
    Cart,
    Active_Cart,
    Active_Home,
    Active_Profile
}

const SampleAadvertData = [
    {
        title: 'Cosmic Express With the New Rog Nexus 2.0',
        thumbnail: PC,
        id: 1001
    },
    {
        title: 'X-BOX controller Genesis Edititon',
        thumbnail: PC,
        id: 1002
    },
    {
        title: 'Iphone X. Second Hand',
        thumbnail: PC,
        id: 1003
    },
    {
        title: 'Cosmic Express With the New Rog Nexus 2.0',
        thumbnail: PC,
        id: 1008
    },
]

export { icons, SampleAadvertData, staticImages }

