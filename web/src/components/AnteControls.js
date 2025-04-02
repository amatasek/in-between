import React from 'react';
import styles from './styles/AnteControls.module.css';
import { useGameContext } from '../contexts/GameContext';
import { useSocket } from '../contexts/SocketContext';
import { useAuth } from '../contexts/AuthContext';
import { usePreferences } from '../contexts/PreferencesContext';
import CurrencyAmount from './common/CurrencyAmount';
import { ICONS } from '../constants/UIConstants';
import AutoAnteToggle from './AutoAnteToggle';

const AnteControls = () => {
  // Get game state and actions from context
  const { gameState, playerReady, playerUnready } = useGameContext();
  const { socket } = useSocket();
  const { user } = useAuth();
  const { preferences } = usePreferences();
  
  if (!gameState) return null;
  
  const { 
    players, 
    anteAmount, 
    phase 
  } = gameState;
  
  // Only show in waiting phase
  if (phase !== 'waiting') return null;
  
  const myPlayer = socket && players ? players[socket.id] : null;
  const playerBalance = Number(myPlayer?.balance || 0);
  const isPlayerReady = myPlayer?.isReady;
  const hasEnoughChips = playerBalance >= anteAmount;
  
  // Player state and readiness is managed by the game context
  
  return (
    <div className={styles.anteControlsWrapper}>
      {!isPlayerReady ? (
        // Player is not ready - show Ante button and Auto-Ante toggle
        <div className={styles.controlsContainer}>
          <div className={styles.buttonContainer}>
            <button 
              className={styles.anteButton}
              onClick={playerReady}
              disabled={!hasEnoughChips}
            >
              <span className={styles.anteIcon}>{ICONS.CHECK}</span>
              <div className={styles.buttonInfo}>
                <h3 className={styles.buttonLabel}>ANTE</h3>
                <span className={styles.buttonAmount}><CurrencyAmount amount={anteAmount} /></span>
              </div>
            </button>
            
            {!hasEnoughChips && (
              <p className={styles.notEnoughChipsText}>Not enough chips (<CurrencyAmount amount={anteAmount} /> required)</p>
            )}
          </div>
          
          {/* Auto-Ante toggle only shown when player is not ready */}
          <div className={styles.autoAnteContainer}>
            <AutoAnteToggle />
          </div>
        </div>
      ) : (
        // Player is ready - show Back Out button
        <div className={styles.controlsContainer}>
          <div className={styles.buttonContainer}>
            <button 
              className={styles.backOutButton}
              onClick={() => {
                if (typeof playerUnready === 'function') {
                  playerUnready();
                } else {
                  console.error('playerUnready is not a function');
                }
              }}
            >
              <span className={styles.backOutIcon}>✕</span>
              <div className={styles.buttonInfo}>
                <h3 className={styles.buttonLabel}>BACK OUT</h3>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnteControls;
