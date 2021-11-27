import '../../index.css'

const HomePage = () => {
    return (<>
        <header>
            <div className="header-content">
                <h3 className="header-text">ФГБОУ ВО "ГГНТУ им. акад. М.Д. Миллионщикова"</h3>
                <a href="/login" className="exitLink">
                    <svg className="exit-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg>
                </a>
            </div>
        </header>
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
            <div className="content">
                <div className="avatar-card">
                    <div className="none-avatar">
                        <svg className="" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                    </div>
                    <span className="user-name">Албакова Аминат Ахмедовна</span>
                    <label className="avatar-label" for="avatar-file">Загрузить фото</label>
                    <input type="file" className="avatar-input" id="avatar-file" />
                </div>
                <div className="options-card">
                    <div className="option">
                        <label for="structure">Структурное подразделение</label>
                        <select id="structure">
                            <option value="">test1</option>
                            <option value="">test2</option>
                            <option value="">test3</option>
                        </select>
                    </div>
                    <div className="option">
                        <label for="structureChild">Подструктура</label>
                        <select id="structureChild">
                            <option value="">test1</option>
                            <option value="">test2</option>
                            <option value="">test3</option>
                        </select>
                    </div>
                    <div className="option">
                        <label for="job">Должность</label>
                        <select id="job">
                            <option value="">test1</option>
                            <option value="">test2</option>
                            <option value="">test3</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <div className="option input-group-item">
                            <label for="rang">Ученая Степень</label>
                            <select id="rang">
                                <option value="">test1</option>
                                <option value="">test2</option>
                                <option value="">test3</option>
                            </select>
                        </div>
                        <div className="option input-group-item">
                            <label for="graduate">Ученое звание</label>
                            <select id="graduate">
                                <option value="">test1</option>
                                <option value="">test2</option>
                                <option value="">test3</option>
                            </select>
                        </div>
                    </div>
                    <div className="option">
                        <label for="biography">Краткая биография</label>
                        <textarea name="" id="biography" cols="30" rows="3"></textarea>
                    </div>
                    <div className="buttons">
                        <button className="submitBtn">Сохранить</button>
                    </div>
                </div>
            </div>
        </main>
    </>)
};

export default HomePage;