import classes from '../styles/UserCard.module.css'

export function UserCard({avatarUrl, userName, name, location}) {
    if(userName) {
        return (
            <div className={classes.main}>
                <img src={avatarUrl} alt="avatar" className={classes.avatar}/>
                <div className={classes.informations}>
                    <span className={classes.info}><b>Login</b>: {userName}</span>
                    <span className={classes.info}><b>Nome</b>: {name}</span>
                    <span className={classes.info}><b>Localização</b>: {location}</span>
                </div>
            </div>
        )
    }
    return (
        <h1>Usuário não encontrado</h1>
    )
    
}