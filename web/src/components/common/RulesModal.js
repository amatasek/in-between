import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
// Try importing CloseIcon with error handling
let CloseIcon;
try {
  const IconModule = require('@mui/icons-material');
  CloseIcon = IconModule.Close;
} catch (error) {
  console.warn('Could not import CloseIcon, using fallback');
  CloseIcon = () => <span>✕</span>;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: '#1a1a2e',
  border: '2px solid #3498db',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  color: '#ecf0f1',
};

const RulesModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="rules-modal-title"
      aria-describedby="rules-modal-description"
    >
      <Box sx={modalStyle}>
        <Button
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#ecf0f1',
          }}
        >
          <CloseIcon />
        </Button>
        
        <Typography id="rules-modal-title" variant="h4" component="h2" sx={{ mb: 3, color: '#3498db' }}>
          🃏 How to Play In Between
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, color: '#e74c3c' }}>
          The Objective
        </Typography>
        <Typography paragraph>
          Your goal is to bet on whether a third card will fall "in between" two dealt cards. Simple? Yes! Fun? Absolutely!
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#e74c3c' }}>
          Game Flow
        </Typography>
        <Typography component="div" sx={{ mb: 2 }}>
          1. Two cards are dealt face-up 🎴 🎴
          <br />
          2. Place your bet if you think the next card will be in between
          <br />
          3. Third card is revealed - moment of truth! 🎴
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#e74c3c' }}>
          Winning & Losing
        </Typography>
        <Typography paragraph>
          • Win: Third card falls between the first two - collect your bet! 💰
          <br />
          • Lose: Card is outside or matches either card - bet goes to the house 🏦
          <br />
          • Aces are considered low (value of 1)
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#e74c3c' }}>
          Pro Tips 💡
        </Typography>
        <Typography paragraph>
          • The wider the gap between cards, the better your odds
          <br />
          • Consecutive cards? Maybe sit this one out!
          <br />
          • Manage your balance wisely - it's a marathon, not a sprint
        </Typography>

        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: '#3498db',
            '&:hover': {
              bgcolor: '#2980b9',
            },
          }}
        >
            Got it, let's play! 🎮
        </Button>
      </Box>
    </Modal>
  );
};

export default RulesModal; 