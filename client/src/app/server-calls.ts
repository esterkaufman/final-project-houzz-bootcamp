import axios from '../services/axios'


const ConectServer = () => {
   axios.get('')      
      .then((data:any) => { console.log(data.message, "conect") });
}
const GetAll = (async (model: string) => {
   try {
      return (await axios.get(`${model}`)).data;
   }
   catch (error) {
      console.log(error)
   }
})
const GetBYId = async (model: string, id: string) => {
   try {
      return (await axios.get(`$/${model}/${id}`)).data;      
   }
   catch (error) {
      console.log(error)
   }
}
const Add = async (model: string, item: any) => {
   try {
      console.log(item)
      return await axios.post(`$/${model}`,{item});     

   }
   catch (error) {
      console.log(error)
   }
}
const Edit = async (model: string, item: any) => {
   try {
      return await axios.put(`$/${model}/${item._id}`,{item});           
   }
   catch (error) {
      console.log(error)
   }
}

const DeleteById = async (model: string, id: string) => {
   try {
      console.log(`/${model}/${id}`)
      return await axios.delete(`$/${model}/${id}`);         
      
   }
   catch (error) {
      console.log(error)
   }
}

export { ConectServer, GetAll, GetBYId, Add, Edit, DeleteById}

