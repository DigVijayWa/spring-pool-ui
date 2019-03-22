export function PostData(type,userData,subType) {
   
    let BaseURL = 'http://localhost:8080/api/';

    let authentication_url = 'auth/';

    //type
    let signup = 'signup';
    let signin = 'signin';
    let pool_table = 'pool-table';
    let building = 'building';
    let user = 'user';

    console.log('accessing :'+BaseURL+type+subType+userData);

    //subtype
    let pool_table_get_all_available = 'get-all-available/'; //input startTime
    let pool_table_get_specific_available = 'get-specific-available/' //input buildingId,floorNo,startTime
    let pool_table_book_pool_table = 'book-pool-table/' //userId,poolId,startTime
    
    let building_floor_count = 'floor-count/'; //input buildingId
    let building_list = 'building-list/';      //no input

    let user_find_by_name = 'by-user-name/';

    function urlResolver(){

      let url = '';
        switch(type) {

            case pool_table : 
                              switch(subType) {
                                        case pool_table_get_all_available :  
                                                                                url=type+'/'+subType+userData.startTime; 
                                                                                break;
                                        case pool_table_get_specific_available :
                                                                                url=type+'/'+subType+userData.startTime+'/'
                                                                                +userData.buildingId+'/'+userData.floorNo+'/'+userData.startTime;
                                                                                break;
                                        case pool_table_book_pool_table : 
                                                                                url=type+'/'+subType
                                                                                +userData.userId+'/'+userData.poolId+'/'+userData.startTime;
                                                                                break; 

                                        default : url = 'default';
                              }
                              break;
            case building : 
                            switch(subType) {
                                        case building_floor_count : 
                                                                      url = type+'/'+subType+userData.buildingId;
                                                                      break;
                                        case building_list : 
                                                                      url = type+'/'+subType;
                                                                      break;
                                        default : url = 'default';

                            }
                            break;
            case user : 
                          url = type+'/'+subType+userData.userName;
                          break;
                              
            default : url = 'default';
          }
        return url;
    }


    switch(type) {

        case signin : 
        case signup :  return new Promise((resolve, reject) =>{
    
         
                      fetch(BaseURL+authentication_url+type, {
                          method: 'POST',
                          mode: 'cors',
                          headers: {
                                'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(userData)
                        })
                        .then((response) => response.json())
                        .then((res) => {
                          resolve(res);
                        })
                        .catch((error) => {
                          reject(error);
                        });

              
                    });

        case pool_table : 
        case user : 
        case building :
                      return new Promise((resolve, reject) =>{
    
         
                      fetch(BaseURL+urlResolver(), {
                          method: 'GET',
                          mode: 'cors',
                          headers: {
                                'Content-Type': 'application/json',
                                'Authorization': userData.tokenType + ' ' +userData.accessToken
                          }
                        })
                        .then((response) => response.json())
                        .then((res) => {
                          resolve(res);
                        })
                        .catch((error) => {
                          reject(error);
                        });

              
                    });

    }
   
}
