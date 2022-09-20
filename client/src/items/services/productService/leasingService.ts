import axios from "axios";
import { Car } from "../../classes/ProductClass";

const url = "/leasing/";

function getAllLeasingCars() {
    return axios
        .get(`${url}`, {})
        .then((res) => res.data.p)
        .catch((error) => {
            console.error(error);
        });
}

function getLeasingCarById(id: string) {
    return axios
        .get(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}
function addLeasingCar(newCar: Car) {
    return axios
        .post(`${url}/`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

async function updateLeasingCar(newCar: Car, id: string) {

    return axios
        .put(`${url}/${id}`, newCar)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });

}

function deleteLeasingCar(id: string) {
    return axios
        .delete(`${url}/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
        });
}

export default {
    getAllLeasingCars,
    getLeasingCarById,
    addLeasingCar,
    updateLeasingCar,
    deleteLeasingCar
};