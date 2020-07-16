//将我们http.js中封装好的  get,post.put,delete  导过来

import { axios_get, axios_post, axios_delete, axios_put } from './http.js'


//按照格式确定方法名
export const jwt_send_get = p  => axios_post("/users/login/",p)

