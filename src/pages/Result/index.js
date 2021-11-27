import {GoogleCharts} from 'google-charts';
import '../../index.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Paper} from '@mui/material';



const Result = () => {
    GoogleCharts.load(drawChart);
    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['Количество', 'Баллы'],
        ['УР',     78.09],
        ['НР', 20.95],
        ['ОВР',    0.93],
      ]);
      var options = {
        title: 'Статистика',
        is3D: true,
        pieResidueSliceLabel: 'Остальное'
      };
      var chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('air'));
      chart.draw(data, options);
    }
    
    return(<>
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
  <div className="content align-content-start pt-0">
    <Paper style={{ margin: '25px 0',width: '98%', height: 100, display: 'flex', alignItems: 'center'}}>
        <div>
            <Paper style={{ padding: 25, textAlign: 'center', marginLeft: 15 }}>
                <PeopleAltIcon />
            </Paper>
        </div>
        <div>
            <p style={{ fontSize: 18, fontWeight: 500, margin: 5, marginLeft: 15}}>Амина Албакова Ахмедовна</p>
            <p style={{ fontSize: 14, fontWeight: 200, margin: 5, color: 'gray', marginLeft: 15}}>Результаты деятельности</p>
        </div>
    </Paper>
    <div id="air" style={{ width: 600, height: 500 }}></div>
    <div className="reports-card ms-5 options-card card" >
      <h5>Отчеты</h5>
      <div className="accordion" id="reports-accordion" >
        <span data-bs-toggle="collapse" className="accordion-open-btn collapsed pb-2" data-bs-target="#studyReport">Общий отчет
          <span className="arrow-report"></span>
        </span>
        <div className="accordion-item border-0 pb-2" >
          <div className="accordion-collapse collapse" id="studyReport">
            <div className="option">
              <label for="time">Период времени</label>
              <select id="time">
                <option value="">test1</option>
                <option value="">test2</option>
                <option value="">test3</option>
              </select>
            </div>
            <div className="option">
              <div className="option-check d-flex align-items-center">
                <input type="checkbox" className="me-2" id="study" />
                <label for="study" className="mb-0">УР</label>
              </div>
              <div className="option-check d-flex align-items-center">
                <input type="checkbox" className="me-2" id="sience" />
                <label for="sience" className="mb-0">НР</label>
              </div>
              <div className="option-check d-flex align-items-center">
                <input type="checkbox" className="me-2" id="organize" />
                <label for="organize" className="mb-0">ОВР</label>
              </div>
            </div>
            <div className="option">
              <label for="format">Формат отчета</label>
              <select id="format">
                <option value="">test1</option>
                <option value="">test2</option>
                <option value="">test3</option>
              </select>
            </div>
            <div className="buttons">
              <button className="submitBtn">Сформировать</button>
            </div>
          </div>
        </div>
        <span data-bs-toggle="collapse" className="accordion-open-btn collapsed pb-2" data-bs-target="#sienceReport">Список трудов
          <span className="arrow-report"></span>
        </span>
        <div className="accordion-item border-0 pb-2">
          <div className="accordion-collapse collapse" id="sienceReport">
            <span className="option-main-label">Период времени</span>
            <div className="input-group">
              <div className="option input-group-item">
                <label for="rang">От</label>
                <select id="rang">
                  <option value="">test1</option>
                  <option value="">test2</option>
                  <option value="">test3</option>
                </select>
              </div>
              <div className="option input-group-item">
                <label for="graduate">До</label>
                <select id="graduate">
                  <option value="">test1</option>
                  <option value="">test2</option>
                  <option value="">test3</option>
                </select>
              </div>
            </div>
            <div className="option">
              <label for="format2">Формат отчета</label>
              <select id="format2">
                <option value="">test1</option>
                <option value="">test2</option>
                <option value="">test3</option>
              </select>
            </div>
            <div className="buttons">
              <button className="submitBtn">Сформировать</button>
            </div>
          </div>
        </div>
        <span data-bs-toggle="collapse" className="accordion-open-btn collapsed pb-2" data-bs-target="#organizeReport">Повышение квалификации
          <span className="arrow-report"></span>
        </span>
        <div className="accordion-item border-0 pb-2">
          <div className="accordion-collapse collapse" id="organizeReport">
            <span className="option-main-label">Период времени</span>
            <div className="input-group">
              <div className="option input-group-item">
                <label for="rang">От</label>
                <select id="rang">
                  <option value="">test1</option>
                  <option value="">test2</option>
                  <option value="">test3</option>
                </select>
              </div>
              <div className="option input-group-item">
                <label for="graduate">До</label>
                <select id="graduate">
                  <option value="">test1</option>
                  <option value="">test2</option>
                  <option value="">test3</option>
                </select>
              </div>
            </div>
            <div className="option">
              <label for="format3">Формат отчета</label>
              <select id="format3">
                <option value="">test1</option>
                <option value="">test2</option>
                <option value="">test3</option>
              </select>
            </div>
            <div className="buttons">
              <button className="submitBtn">Сформировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    </>);
};

export default Result;