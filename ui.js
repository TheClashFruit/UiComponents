/**
 *
 * @param {string} _ - Selector(s).
 *
 * @description It's just `document.querySelector(_);`
 *
 * @returns {HTMLElement}
 */
const $ = (_) => document.querySelector(_);

const ui = {
  alerts: {
    /**
      * @param {string} icon - Material icon
      * @param {string} text - Alert text
      * @param {string} type - Alert type
      * @param {boolean} closable - Is the alert closable
      * @param {HTMLElement} parent - The alert's parent
      *
      * @returns {boolean} - true if the alert was created
      *
      * @description - Creates a new alert.
      *
      * @example
      * ui.alerts.create('info', 'This is an alert', ui.alerts.TYPE.INFO, true, document.body);
      */
    createAlert: (icon, text, type, closable, parent) => {
      const alertElement        = document.createElement('div');
      const alertContentElement = document.createElement('div');
      const alertText           = document.createElement('div');
      const alertClose          = document.createElement('a');

      alertElement.classList.add('alert');
      alertElement.classList.add(`${type}`);

      alertContentElement.classList.add('alertContent');

      alertText.classList.add('alertText');
      alertClose.classList.add('alertClose');

      const alertIcon = document.createElement('i');

      alertIcon.classList.add('material-symbols-rounded');
      alertIcon.innerHTML = `${icon}`;

      alertText.innerHTML = text;
      alertClose.innerHTML = `<i class='material-symbols-rounded'>close</i>`;

      alertClose.addEventListener('click', () => {
        alertElement.style = 'opacity: 0%;';

        setTimeout(() => {
          alertElement.remove();
        }, 500);
      });

      alertContentElement.appendChild(alertIcon);
      alertContentElement.appendChild(alertText);

      alertElement.appendChild(alertContentElement);

      if (closable)
        alertElement.appendChild(alertClose);

      try {
        parent.appendChild(alertElement);

        return true;
      } catch (e) {
        console.error(e);

        return false;
      }
    },

    /**
     * @param {HTMLElement} e - The close button
     *
     * @description - Closes the alert.
     *
     * @example
     * ui.alerts.closeAlert(this);
     */
    closeAlert: (e) => {
      e.parentElement.style = 'opacity: 0%;';
      setTimeout(() => {
        e.parentElement.remove();
      }, 500);
    },

    TYPE: {
      SUCCESS: 'success',
      ERROR: 'error',
      WARNING: 'warning',
      INFO: 'info'
    }
  }
}
