import base_url from "./base_url";
import commonApi from "./commonApi"; 

export const registerApi = async (data) => {
  return await commonApi(`${base_url}/reg`, 'POST', "", data);
};

export const loginApi = async(data)=>{
  return await commonApi(`${base_url}/log`,'POST',"",data)
}

export const addProjectApi = async (data, header) => {
  return await commonApi(`${base_url}/addproject`, "POST", header, data);
};

