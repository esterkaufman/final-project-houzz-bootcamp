import axios from "axios";
import { Car } from "../../classes/ProductClass";

const url = "/Sale/";

function getAllSaleCars() {
    return axios
        .get(`${url}`, {})
        .then((res) => res.data.p)
        .catch((error) => {
            console.error(error);
        });
}

function getSaleCarById(id: string) {
    return axios
        .get(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}
function addSaleCar(newCar: Car) {
    return axios
        .post(`${url}/`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

async function updateSaleCar(newCar: Car, id: string) {

    return axios
        .put(`${url}/${id}`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });

}

function deleteSaleCar(id: string) {
    return axios
        .delete(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

export default {
    getAllSaleCars,
    getSaleCarById,
    addSaleCar,
    updateSaleCar,
    deleteSaleCar
};