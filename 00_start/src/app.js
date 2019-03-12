import {
    addCarRows,
    retrieveCarId,
    populateEditCarForm,
    retrieveCarFormEditCarForm,
    cleanTable,
} from './uiHelpers';
import {
} from './API/carsApi.double';
import {
    getAllCars,
    getCarById,
    addCar
} from './API/carsApi';

document.addEventListener('DOMContentLoaded', () => {
    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        cleanTable('cars-table');
        getAllCars();
        });
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        getCarById(carId);
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarFormEditCarForm();
        addCar(car);
    });