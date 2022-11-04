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
      const chipElement        = document.createElement('div');
      const chipContentElement = document.createElement('div');
      const chipText           = document.createElement('div');
      const chipClose          = document.createElement('a');

      chipElement.classList.add('chip');
      chipElement.classList.add(`${type}`);

      chipContentElement.classList.add('chipContent');

      chipText.classList.add('chipText');
      chipClose.classList.add('chipClose');

      const chipIcon = document.createElement('i');

      chipIcon.classList.add('material-symbols-rounded');
      chipIcon.innerHTML = `${icon}`;

      chipText.innerHTML = text;
      chipClose.innerHTML = `<i class='material-symbols-rounded'>close</i>`;

      chipClose.addEventListener('click', () => {
        chipElement.style = 'opacity: 0%;';

        setTimeout(() => {
          chipElement.remove();
        }, 500);
      });

      chipContentElement.appendChild(chipIcon);
      chipContentElement.appendChild(chipText);

      chipElement.appendChild(chipContentElement);

      if (closable)
        chipElement.appendChild(chipClose);

      try {
        parent.appendChild(chipElement);

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
