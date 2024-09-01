

function Header( {score, bestScore} ) { 
    return( 
        <>
        <header className="game-header">
        <div className="game-description">
          <h1 className="game-title">HunterXHunter Memory Game</h1>
          <p>
            Earn points for each character. Don&apos;t Click on an image more than
            once!
          </p>
        </div>
        <div className="score-board">
        <h5>Score: {score}</h5>
        <h5>Best Score: {bestScore}</h5>
        </div>
        </header>
    </>
    )
}

export default Header 