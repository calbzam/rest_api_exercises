import axios from 'axios';
import {
    addCarRows,
    populateEditCarForm,
    cleanTable
} from '../uiHelpers';

const baseUrl = 'http://localhost:3050';


export const getAllCars = () => {
    axios.get(`${baseUrl}/api/cars/`)
        .then((result) => {
            const cars = result.data.map((i) => i);
            addCarRows(cars, 'cars-table');
        })
        .catch((err) => console.log(err));
}

export const getCarById = (id) => {
    axios.get(`${baseUrl}/api/cars/`)
        .then((result) => {
            const cars = result.data.map((i) => i);
            const filtered = cars.find((c) => c.car_id === id);
            populateEditCarForm(filtered);
        })
        .catch((err) => console.log(err));
}

export const addCar = (car) => {
    axios.post(`${baseUrl}/api/cars/`, car)
        .then((_) => {
            cleanTable('cars-table');
            getAllCars();
        })
        .catch((err) => console.log(err));
};





