import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../../index.css'
import Fab from '@mui/material/Fab';
import MessageIcon from '@mui/icons-material/Message';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';

const EditContrtact = () => {
    return (<>
        <header>
        <div className="header-content">
            <h3 className="header-text">ФГБОУ ВО "ГГНТУ им. акад. М.Д. Миллионщикова"</h3>
            <a href="/login" className="exitLink">
            <svg className="exit-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg>
            </a>
        </div>
        </header>
        <div style={{ display: 'flex'}}>
            <main>
            <aside className="leftMenu">
                <div className="aside-nav">
                <a className="aside-nav-link" href="/">Профиль</a>
                <a className="aside-nav-link" href="/result">Результаты деятельности</a>
                <a className="aside-nav-link" href="/contract">Эффективный контракт</a>
                <a className="aside-nav-link" href="/">БРС</a>
                <a className="aside-nav-link" href="/">Расписание</a>
                </div>
            </aside>
            </main>
            <div style={{ width: '72%', margin: '0 auto'}}>
                <Paper style={{ margin: '25px auto',width: '100%', height: 100, display: 'flex', alignItems: 'center'}}>
                    <div>
                        <Paper style={{ padding: 20, textAlign: 'center', marginLeft: 15 }}>
                            <ArticleIcon style={{ fontSize: 28 }} />
                        </Paper>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, fontWeight: 500, margin: 5, marginLeft: 15}}>Эффективный контракт</p>
                    </div>
                </Paper>
                <Paper style={{ padding: 30}}>
                    <h2>Черновик</h2>
                    <TableContainer>
                        <Table>
                            <TableHead style={{ backgroundColor: 'rgb(223 225 226)'}}>
                                <TableRow>
                                    <TableCell align="center">
                                        Тип работы
                                    </TableCell>
                                    <TableCell align="center">
                                        Показатель эффективности
                                    </TableCell>
                                    <TableCell align="center">
                                        Баллы
                                    </TableCell>
                                    <TableCell align="center">
                                        Примечания
                                    </TableCell>
                                    <TableCell align="center">
                                        Редактировать
                                    </TableCell>
                                    <TableCell align="center">
                                        Удалить
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">
                                        111
                                    </TableCell>
                                    <TableCell align="center">
                                        111
                                    </TableCell>
                                    <TableCell align="center">
                                        50
                                    </TableCell>
                                    <TableCell align="center">
                                        <MessageIcon />
                                    </TableCell>
                                    <TableCell align="center">
                                        <a href='/edit-form' style={{ textDecoration: 'none', color: 'black'}}>
                                            <EditIcon />
                                        </a>
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteIcon />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <div style={{ marginTop: 20 }}>
                    <p>Итого баллов: 30</p>
                    <p>Итого баллов одобрено: 0</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, width: 450, margin: '30px auto'  }}>
                    <a href='/add-form' style={{ textDecoration: 'none' }}>
                        <Fab style={{ backgroundColor: '#212D3A', color: '#fff' }} variant="extended">
                            Добавить новый пункт
                        </Fab>
                    </a>
                    <a href='/from-db' style={{ textDecoration: 'none'}}>
                        <Fab style={{ backgroundColor: '#212D3A', color: '#fff' }} variant="extended">
                            Добавить пункт из БД
                        </Fab>
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, width: 350 }}>
                    <a href='/edit-contract' style={{ textDecoration: 'none'}}>
                        <Fab variant="extended">
                            Сохранить и закрыть
                        </Fab>
                    </a>
                    <Fab style={{ backgroundColor: '#212D3A', color: '#fff' }} variant="extended">
                        Отправить
                    </Fab>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default EditContrtact;