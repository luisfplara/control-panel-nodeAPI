import axios from "axios";
import { useAuth } from "../components/AuthProvider";
import { baseUrl } from "../../config";

const apiMiddlewareRequest = (accessToken, method, url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      headers: { authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
      .then((response ) => {
      
        resolve(response);
      })
      .catch(({ response }) => {
   
        if (response.status === 403) {

          axios({
            method: "get",
            url: `${baseUrl}/auth/refreshtoken`,
            withCredentials: true,
          })
            .then((response) => {
    
  
              axios({
                method: method,
                url: url,
                data: data,
                headers: {
                  authorization: `Bearer ${response.data.access_token}`,
                },
                withCredentials: true,
              })
                .then((responseNewToken) => {
                  resolve(responseNewToken);
                })
                .catch((responseNewToke) => {
      
                  reject(responseNewToke);
                });
            })
            .catch(({ invalidRefresh }) => {
   
              reject(invalidRefresh);
            });
        }
  
      });
  });
};

export default apiMiddlewareRequest;
