

function Header( {score, bestScore} ) { 
    return( 
        <>
        <header className="game-header">
        <div className="game-description">
          <h1 className="game-title">Pokemon Memory Game</h1>
          <p>
            Earn points for each pokemon. Don&apos;t Click on an image more than
            once!
          </p>
        </div>
        <div className="score-board">
        <h5>Current Score: {score}</h5>
        <h5>Best Score: {bestScore}</h5>
        </div>
        </header>
    </>
    )
}

export default Header 