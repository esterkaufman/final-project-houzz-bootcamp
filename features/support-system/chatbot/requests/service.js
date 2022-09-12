import RequestModel from "./model";
const getAllRequests = ()=>
{
    return new Promise((resolve, reject) => 
    {
        RequestModel.find({},/*.toArray*/(err, result) => 
        {
            if (err)
            {
                reject(err);
                // throw boom.boomify(err);
            }
            for (let i = 0; i < result.length; i++) 
            {
                let request = result[i];
                console.log(email.emailNumber + ", " + email.subject + ", " + email.text);
            }
            resolve(result);
        })
    })   
}

const getEmailById = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        EmailModel.findOne({emailNumber: id} , (err, result) =>
        {   
            if (err)
            {
                reject(err);
            }else
            {
                console.log("this email:"+result.emailNumber + ", " + result.subject + ", " + result.text);
                resolve(result);
            }
        })
    });
}

const updateEmail = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        console.log('obj.id: '+obj.id);
        EmailModel.findOneAndUpdate({emailNumber: id},
        {
            "emailNumber": obj.emailNumber, 
            "subject": obj.subject,
            "text": obj.text
        },(err,res)=>
        {
            if(err)
            {  
                reject(err);  
            }else{
                resolve("email updated!")
            } 
        })
    })
}

const deleteEmail = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        EmailModel.findOneAndDelete({emailNumber:id}, (err, res)=>
        {
            if(err)
            {
                reject(err);
            }else{
                resolve("email deleted!")
            }
        })
    })
}
