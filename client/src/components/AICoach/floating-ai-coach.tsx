import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from '@freecodecamp/ui';

import './floating-ai-coach.css';

function FloatingAICoach(): JSX.Element {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className='ai-coach-floating-trigger'
        onClick={() => setIsOpen(true)}
        variant='primary'
      >
        {t('ai-coach.open-button')}
      </Button>

      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <Modal.Header closeButtonClassNames='close'>
          {t('ai-coach.modal-title')}
        </Modal.Header>
        <Modal.Body>
          <div className='ai-coach-modal-body'>
            <p>{t('ai-coach.modal-description')}</p>
            <div className='ai-coach-chat-placeholder'>
              <p>{t('ai-coach.placeholder.assistant')}</p>
              <p>{t('ai-coach.placeholder.user')}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={true}
            onClick={() => setIsOpen(false)}
            variant='primary'
          >
            {t('buttons.close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

FloatingAICoach.displayName = 'FloatingAICoach';

export default FloatingAICoach;
