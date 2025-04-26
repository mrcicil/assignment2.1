import profile_pic from './assets/profile_pic.png'
import styles from './Picture.module.css'


function Picture(){
    return <>
    <img className={styles.placing} src={profile_pic} alt="my profile pic" height={250} width={200}/></>
}

export default Picture;