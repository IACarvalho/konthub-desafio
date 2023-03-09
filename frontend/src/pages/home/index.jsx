import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import AssistantDirectionSharpIcon from '@mui/icons-material/AssistantDirectionSharp'
import IconButton from '@mui/material/IconButton';

import { UserCard } from '../../components/UserCard'

import classes from '../../styles/Home.module.css'

export function Home() {
    const [inputValue, setInputCValue] = useState('')
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)

    const formHandler = () => {
        if(!inputValue){
            return validator()
        }
        return handleApiRequest()
    }
    const validator = () => {
        const input = document.querySelector('#input')
        input.style.border = '2px solid red'
        const validator = document.querySelector('#validator')
        validator.style.display = 'block'
    }
    const handleApiRequest = async () => {
        setUser(null)
        setRepos(null)
        await fetch(`http://localhost:8080/user/${inputValue}`)
            .then(response => response.json())
            .then(data => setUser(data))

    }

    const showRepositoriesButtonHandler = async () => {
        await fetch(`http://localhost:8080/user/repos/${user.login}`)
         .then(response => response.json())
         .then(data => setRepos(data))
    }

    const handlerIconClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className={classes.main}>
            <div>
                <input 
                    type="text" 
                    name="input" 
                    id="input"
                    className={classes.input}
                    onChangeCapture={(e) => setInputCValue(e.target.value)}
                    placeholder='Entre com o nome de usuário'/>
                <input 
                    type="button" 
                    value="Buscar"
                    onClick={() => formHandler()}
                    className='button'/>
                <span id='validator' className={classes.validator}>*Por favor insira o nome de usuário</span>
            </div>

            {
                user !== null?
                <div className={classes.resultBody}>
                    <UserCard 
                        avatarUrl={user.avatar_url}
                        userName={user.login}
                        name={user.name}
                        location={user.location}
                    />
                {
                    user.login ?
                    <input 
                        type="button"
                        value="Mostrar repositórios"
                        className='button'
                        onClick={() => showRepositoriesButtonHandler()}
                    />
                    : null
                }
                {
                    repos?
                        <List 
                            sx={{ 
                            width: '50rem', 
                            bgcolor: '#212529',
                            color: '#fff', 
                            marginTop: '2rem', 
                            height: '30rem',
                            position: 'relative',
                            overflow: 'auto', 
                        }}

                        >
                                {repos.map((value) => (
                                    <ListItem
                                    key={value}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton 
                                        onClick={() => handlerIconClick(value.html_url)}>
                                            <AssistantDirectionSharpIcon sx={{
                                                color: '#fff'
                                            }} />
                                        </IconButton>
                                    }
                                    >
                                        <ListItemText primary={`${value.name}`} style={{paddingLeft: '1rem'}} />
                                        <ListItemText primary={`⭐️: ${value.stargazers_count}`} />
                                    </ListItem>
                                ))}
                        </List>
                    :null
                }

                </div>
                : null
            }
        </div>
    )
}