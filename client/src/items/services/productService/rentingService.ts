import axios from "axios";
import { Car } from "../../classes/ProductClass";

const url = "/Renting/";

function getAllRentingCars() {
    return axios
        .get(`${url}`, {})
        .then((res) => res.data.p)
        .catch((error) => {
            console.error(error);
        });
}

function getRentingCarById(id: string) {
    return axios
        .get(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}
function addRentingCar(newCar: Car) {
    return axios
        .post(`${url}/`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

async function updateRentingCar(newCar: Car, id: string) {

    return axios
        .put(`${url}/${id}`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });

}

function deleteRentingCar(id: string) {
    return axios
        .delete(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

export default {
    getAllRentingCars,
    getRentingCarById,
    addRentingCar,
    updateRentingCar,
    deleteRentingCar
};