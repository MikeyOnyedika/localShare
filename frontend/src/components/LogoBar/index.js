import './styles.css'
import NavBar from '../NavBar'
import NavbarItem from '../NavbarItem'
import AudioIcon from '../../assets/images/audio.svg'
import DocumentIcon from '../../assets/images/document.svg'
import VideoIcon from '../../assets/images/video.svg'

const LogoBar = () => {
    const navbarItems = [
        { id: 1,  name: "Audio", path: "/category/audio", icon: AudioIcon},
        { id: 2, name: "Video", path: '/category/video', icon: VideoIcon },
        { id: 3, name: 'Document', path: '/category/document', icon: DocumentIcon }
    ]

    return (
        <section className='logo-bar'>
            <div className="logo">
                <h1>LocalShare</h1>
            </div>

            <div className='nav-wrapper'>
                {/* navigation menu */}
                <NavBar>
                    {navbarItems.map(item => {
                        return <NavbarItem name={item.name} path={item.path} key={item.id} icon={item.icon}/>
                    })}
                </NavBar>
            </div>
        </section>
    )
}

export default LogoBar