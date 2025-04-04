import React, { useRef, useEffect, useState } from 'react';
import styles from './styles/PlayerList.module.css';
import { useGameContext } from '../contexts/GameContext';
import { useSocket } from '../contexts/SocketContext';
import CurrencyAmount from './common/CurrencyAmount';
import UserAvatar from './UserAvatar';
import { ICONS } from '../constants/UIConstants';

const PlayerList = () => {
  const { gameState } = useGameContext();
  const { socket } = useSocket();
  
  if (!gameState || !gameState.players) {
    return (
      <div className={styles.emptyPlayerList}>
        <p>Waiting for game data...</p>
      </div>
    );
  }
  
  const { players, currentPlayerId, dealerId, deckNumber, remainingCards } = gameState;
  const currentUserId = socket?.id;
  if (!players || Object.keys(players).length === 0) {
    return (
      <div className={styles.emptyPlayerList}>
        <p>Waiting for players to join...</p>
      </div>
    );
  }

  // Display deck information if available
  const renderDeckInfo = () => {
    if (typeof deckNumber === 'number' && typeof remainingCards === 'number') {
      return (
        <div className={styles.deckInfo}>
          <span className={styles.deckNumber}>Deck #{deckNumber}</span>
          <span className={styles.remainingCards}>{remainingCards} cards remaining</span>
        </div>
      );
    }
    return null;
  };

  // Debug log for all players' data
  console.log('[PlayerList] Game State:', {
    players,
    currentPlayerId,
    dealerId,
    currentUserId,
    playerKeys: Object.keys(players),
    playerValues: Object.values(players).map(p => ({
      id: p.id,
      name: p.name,
      isConnected: p.isConnected,
      mediaPreferences: p.mediaPreferences,
      profileImg: p.mediaPreferences?.profileImg
    }))
  });
  
  return (
    <div className={styles.playersContainer}>
      <h3 className={styles.playersTitle}>Players</h3>
      {renderDeckInfo()}
      <div className={styles.playersList}>
        {/* Use gameState.seats to render players in seat order */}
        {gameState.seats
          .filter(playerId => playerId !== null && players[playerId])
          .map(playerId => {
            const player = players[playerId];
            const isCurrentPlayer = player.id === currentPlayerId;
            const isCurrentUser = player.id === currentUserId;
            const isDealer = player.id === dealerId;
            
            // Debug log for individual player
            console.log(`[PlayerList] Player ${player.name} (seat ${player.seatNumber}):`, {
              id: player.id,
              mediaPreferences: player.mediaPreferences,
              profileImg: player.mediaPreferences?.profileImg
            });
            
            return (
              <div 
                key={player.id} 
                className={`
                  ${styles.playerItem}
                  ${isCurrentPlayer ? styles.currentPlayer : ''}
                  ${isCurrentUser ? styles.currentUser : ''}
                `}
              >
              <div className={styles.playerInfo}>
                <UserAvatar 
                  user={{ 
                    username: player.name, 
                    profileImg: player.mediaPreferences?.profileImg 
                  }} 
                  size="small" 
                  showName={false}
                />
                <span className={styles.playerName}>
                  {player.name}
                  <span className={styles.playerStatus}>
                    {isCurrentUser && ' (You)'}
                    {isDealer && ` ${ICONS.DEALER}`}
                  </span>
                </span>
              </div>
              <div className={styles.playerBalanceContainer}>
                <BalanceDisplay balance={Number(player.balance || 0)} />

                <div className={`${styles.readyIndicator} ${player.isReady ? styles.ready : styles.notReady}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BalanceDisplay = ({ balance }) => {
  const [prevBalance, setPrevBalance] = useState(balance);
  const [animationClass, setAnimationClass] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (balance !== prevBalance) {
      // Determine if balance increased or decreased
      const isIncrease = balance > prevBalance;
      setAnimationClass(isIncrease ? styles.balanceIncrease : styles.balanceDecrease);

      // Clear previous timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Remove animation class after animation completes
      timeoutRef.current = setTimeout(() => {
        setAnimationClass('');
      }, 1000); // Match animation duration

      setPrevBalance(balance);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [balance]);

  return (
    <span className={`${styles.playerBalance} ${animationClass}`}>
      <CurrencyAmount amount={balance} />
    </span>
  );
};

export default PlayerList;
