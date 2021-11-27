import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../../index.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DoneIcon from '@mui/icons-material/Done';
import DraftsIcon from '@mui/icons-material/Drafts';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Contrtact = () => {
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
                <a className="aside-nav-link" href="/">Эффективный контракт</a>
                <a className="aside-nav-link" href="/">БРС</a>
                <a className="aside-nav-link" href="/">Расписание</a>
                </div>
            </aside>
            </main>
            <div style={{ width: '72%', margin: '0 auto'}}>
                <Paper style={{ margin: '25px auto',width: '100%', height: 100, display: 'flex', alignItems: 'center'}}>
                    <div>
                        <Paper style={{ padding: 25, textAlign: 'center', marginLeft: 15 }}>
                            <PeopleAltIcon />
                        </Paper>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, fontWeight: 500, margin: 5, marginLeft: 15}}>Амина Албакова Ахмедовна</p>
                        <p style={{ fontSize: 14, fontWeight: 200, margin: 5, color: 'gray', marginLeft: 15}}>Эффективные контракты</p>
                    </div>
                </Paper>
                <Paper style={{ padding: 30}}>
                    <TableContainer>
                        <Table>
                            <TableHead style={{ backgroundColor: 'rgb(223 225 226)'}}>
                                <TableRow>
                                    <TableCell align="center">
                                        Название
                                    </TableCell>
                                    <TableCell align="center">
                                        Дата
                                    </TableCell>
                                    <TableCell align="center">
                                        Статус
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">
                                        Эффективный контракт
                                    </TableCell>
                                    <TableCell align="center">
                                        2021-11-22
                                    </TableCell>
                                    <TableCell align="center">
                                        <a href='/edit-contract' style={{ textDecoration: 'none'}}>
                                            <Chip icon={<DraftsIcon />} label="Черновик" />
                                        </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">
                                        Эффективный контракт
                                    </TableCell>
                                    <TableCell align="center">
                                        2021-07-15
                                    </TableCell>
                                    <TableCell align="center">
                                        <Chip style={{ backgroundColor: '#81c784'}} icon={<DoneIcon style={{ color: 'fff'}} />} label="Проверено" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">
                                        Эффективный контракт
                                    </TableCell>
                                    <TableCell align="center">
                                        2021-02-01
                                    </TableCell>
                                    <TableCell align="center">
                                        <Chip style={{ backgroundColor: '#81c784'}} icon={<DoneIcon style={{ color: 'fff'}} />} label="Проверено" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <a href='/add-contract'>
                        <Fab style={{ backgroundColor: 'black', color: '#fff' }} aria-label="add">
                            <AddIcon />
                        </Fab>
                    </a>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default Contrtact;