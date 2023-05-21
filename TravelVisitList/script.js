'use strict';

    // FORM SECTION

        // FORM
            const formCities = document.querySelector('.form__cities');

        // INPUT
            const formInput = document.querySelector('.form__input');
        
        // Unordered List    
            const listCities = document.querySelector('ul');

            formCities.addEventListener('submit', function(e) {
                e.preventDefault();
                const formInputValue = formInput.value;
                const listCitiesItem = document.createElement('li');
                listCitiesItem.innerText = formInputValue;
                listCities.appendChild(listCitiesItem);
                formInput.value = '';
            });