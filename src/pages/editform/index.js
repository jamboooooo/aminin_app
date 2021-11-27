import { Paper, Box, MenuItem, Button } from '@mui/material';
import '../../index.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Edit from '@mui/icons-material/Edit';

const EditForm = () => {
    const firstSelect = [
        {
          label: 'test1',
        },
        {
            label: 'test2',
        },
        {
            label: 'test3',
        },
        {
            label: 'test4',
        },
        {
            label: 'test5',
        },
    ];

    const [firstSelectValue, setFirstSelectValue] = useState(firstSelect[0].label);

    const handleFirstChange = (event) => {
        setFirstSelectValue(event.target.value);
    };

    const secondSelect = [
        {
          label: 'test1',
        },
        {
            label: 'test2',
        },
        {
            label: 'test3',
        },
        {
            label: 'test4',
        },
        {
            label: 'test5',
        },
    ];

    const [secondSelectValue, setSecondSelectValue] = useState(secondSelect[0].label);

    const handleChange = (event) => {
        setSecondSelectValue(event.target.value);
    };
      
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
                            <Edit style={{ fontSize: 28 }} />
                        </Paper>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, fontWeight: 500, margin: 5, marginLeft: 15}}>Редактировать</p>
                    </div>
                </Paper>
                <Paper style={{ padding: 30}}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div>
                            <TextField
                                select
                                label="Тип работы"
                                value={firstSelectValue}
                                onChange={handleFirstChange}
                                style={{ width: '100%'}}
                            >
                                {firstSelect.map((option) => (
                                    <MenuItem key={option.label} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                select
                                label="Показатель эффективности"
                                value={secondSelectValue}
                                onChange={handleChange}
                                style={{ width: '48%'}}
                            >
                                {secondSelect.map((option) => (
                                    <MenuItem key={option.label} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                style={{ width: '48%'}}
                                label="Баллы"
                                variant="standard"
                                defaultValue='50'
                            />
                        </div>
                        <div>
                            <TextField
                                label="Название работы"
                                variant="standard"
                                multiline
                                style={{ width: '48%'}}
                            />
                            <TextField
                                label="Объем"
                                variant="standard"
                                style={{ width: '48%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Источник иформации"
                                variant="standard"
                                multiline
                                style={{ width: '48%'}}
                            />
                            <TextField
                                label="URL источника"
                                variant="standard"
                                style={{ width: '48%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Номер документа"
                                variant="standard"
                                style={{ width: '48%'}}
                            />
                            <TextField
                                label="Сроки"
                                variant="standard"
                                style={{ width: '48%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Соавторы"
                                variant="standard"
                                style={{ width: '90%'}}
                                multiline
                            />
                        </div>
                        <div>
                            <TextField
                                label="Примечания"
                                variant="standard"
                                style={{ width: '50%'}}
                                multiline
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end'}}>
                            <Button variant="contained">
                                Сохранить
                            </Button>
                        </div>
                    </Box>
                </Paper>
            </div>
        </div>
        
    </>
    );
};

export default EditForm;