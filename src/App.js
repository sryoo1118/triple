import logo from './logo.svg';
import './App.css';
import React from 'react';
import CountUp from 'react-countup';

function App() {
  
  const CountHook = () => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume } = CountUp({
      ref: countUpRef,
      start: 0,
      delay: 0,
      duration: 2,
      onStart: ({ pauseResume }) => console.log(pauseResume),
      onEnd: ({ pauseResume }) => console.log(pauseResume),
    });
  };
  
  return (
    <div className="App">
      <div class="section__SectionContainer-n67ivv-0 kICDEU">
        <div class="section__ResponsiveSection-n67ivv-1 eazCtG">
          <div class="statistic-section__ContentLogo-g7uoq4-0 gZKAVN fade-enter-done">
            2021년 12월 기준
          </div>
          <div class="statistic-section__MetricsContainer-g7uoq4-1 cmAuF fade-enter-done">
            <div class="statistic-section__MetricItem-g7uoq4-2 eMmFIv">
              <strong>
                <CountUp
                  end={350}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef}/>
                  )}
                </CountUp>
                만 명</strong>의 여행자
            </div>
            <div class="statistic-section__MetricItem-g7uoq4-2 eMmFIv">
              <strong>
              <CountUp
                  end={21}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef}/>
                  )}
                </CountUp>
                만 개</strong>의 여행 리뷰
            </div>
            <div class="statistic-section__MetricItem-g7uoq4-2 eMmFIv">
              <strong>
              <CountUp
                  end={650}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef}/>
                  )}
                </CountUp>
                만 개</strong>의 여행 일정
            </div>
          </div>
          <div class="statistic-section__AwardsContainer-g7uoq4-3 gHgAYa fade-enter-done">
            <div class="statistic-section__AwardItem-g7uoq4-4 irRUrI">
              2018 구글 플레이스토어<br/>
              올해의 앱 최우수상 수상
            </div>
            <div class="statistic-section__AwardItem-g7uoq4-4 jhehzm">
              2018 애플 앱스토어<br/>오늘의 여행앱 선정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
