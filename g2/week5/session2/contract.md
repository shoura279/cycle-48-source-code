-- register

- url : '/auth/register'
- method: 'POST'
- request body : {userName:string , email:string , password:string , phone: string}
- success response status: 201
- success response body: {message:string , success:boolean , data:data }
- fail response body: {message:"error" , success:false }

- -------------------------------------
-- login

- url : '/auth/login'
- method : 'POST'
- request body : {email:string , password:string}
- success response status: 200
- success response body: {message:'login successfully' , success:true , data:{ accessToken } }
- fail response status: 404
- fail response body: {message:"user not found" , success:false }
