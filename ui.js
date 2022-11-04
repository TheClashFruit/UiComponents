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
      const chipElement = document.createElement('div');
      const chipIcon    = document.createElement('div');
      const chipText    = document.createElement('div');
      const chipClose   = document.createElement('div');
      
      chipElement.classList.add('chip');
      chipElement.classList.add(`${type}`);
      
      chipIcon.classList.add('chipIcon');
      chipText.classList.add('chipText');
      chipClose.classList.add('chipClose');
      
      chipIcon.innerHTML = `<i class="material-icons">${icon}</i>`;
      chipText.innerHTML = text;
      chipClose.innerHTML = `<i class="material-icons">close</i>`;
      
      chipElement.appendChild(chipIcon);
      chipElement.appendChild(chipText);
      
      if (closable)
        chipElement.appendChild(chipClose);
      
      try {
        $(parent).appendChild(chipElement);
        
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
        e.parentElement.style = 'display: none;';
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
