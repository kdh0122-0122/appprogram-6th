import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MyPage.module.css'; // 마이페이지 본문 스타일
import detailStyles from '../styles/DetailPage.module.css'; // 헤더 스타일 재사용

const MyPage = () => {
    
  return (
    <div className={detailStyles.container}>
      
      {/* 1. 상단 헤더 메뉴 (DetailPage의 CSS를 재사용하여 스타일 유지) */}
      <header className={detailStyles.header}>
        <div className={detailStyles.headerWrapper}> 
          
          <Link to="/" className={detailStyles.logo}>MOABOM</Link> 
          
          <nav className={detailStyles.nav}>
            <Link to="/mypage" className={detailStyles.navLink}>마이페이지</Link>
            <Link to="/alerts" className={detailStyles.navLink}>알림</Link>
            <Link to="/moachat" className={detailStyles.navLink}>모아챗</Link>
            <Link to="/login" className={detailStyles.navLink}>로그인/회원가입</Link> 
          </nav>
        </div>
      </header>
      
      {/* 2. 메인 콘텐츠 영역: styles.contentArea에 의해 중앙 정렬 */}
      <div className={styles.contentArea}> 
          <h2 className={styles.sectionTitle}>MY HISTORY</h2>

          {/* 3. 통계/정보 카드 그리드 (2x2) */}
          <div className={styles.cardGrid}>
              
              {/* 카드 1: 나의 서비스 신청 내역 */}
              <Link to="/mypage/application" className={styles.statCard}>
                  <div className={styles.cardIcon}>✅</div> 
                  <div className={styles.cardText}>
                      나의 서비스 신청 내역 &gt; 
                      <span className={styles.cardCount}>0</span>
                  </div>
              </Link>
              
              {/* 카드 2: 나의 즐겨찾기 */}
              <Link to="/mypage/favorites" className={styles.statCard}>
                  <div className={styles.cardIcon}>⭐</div> 
                  <div className={styles.cardText}>
                      나의 즐겨찾기 &gt; 
                      <span className={styles.cardCount}>2</span>
                  </div>
              </Link>

              {/* 카드 3: 나의 지원금 확인하기 */}
              <Link to="/mypage/support-history" className={styles.statCard}>
                  <div className={styles.cardIcon}>🎁</div> 
                  <div className={styles.cardText}>
                      나의 지원금 확인하기 &gt; 
                      <span className={styles.cardCount}>20</span>
                  </div>
              </Link>

              {/* 카드 4: 프로필 수정하기 */}
              <div className={styles.actionCard}>
                  <div className={styles.cardIcon}>👤</div> 
                  <div className={styles.cardText}>
                      프로필 수정하기 &gt; 
                      <button className={styles.checkButton}>확인하기</button>
                  </div>
              </div>
          </div>

          {/* 4. 문의/공지 카드 그리드 (2x1) */}
          <div className={styles.infoGrid}>
              
              {/* 카드 5: 문의사항 */}
              <Link to="/mypage/inquiry" className={styles.infoCard}>
                  <div className={styles.infoTitle}>
                      문의사항 &gt;
                  </div>
                  <div className={styles.infoDetail}>1:1 문의 내역 / 자주 묻는 질문</div>
              </Link>

              {/* 카드 6: 공지사항 */}
              <Link to="/alerts" className={styles.infoCard}>
                  <div className={styles.infoTitle}>
                      공지사항 &gt;
                  </div>
                  <div className={styles.infoDetail}>서비스 이용에 필요한 정보 확인하기</div>
              </Link>
          </div>
          
      </div>
    </div>
  );
};

export default MyPage;