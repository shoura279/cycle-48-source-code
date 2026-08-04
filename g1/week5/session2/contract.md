-- Get Users

- url : '/user'
- method : 'GET'
- request body: none
- response headers : { "content-type": "application/json" }
- response body : { message : "done" , success:true , data: data }

--------------------------------
-- Create User [Register] -> [signup]

- url : '/auth/register'
- method : 'POST'
- request body : {useName:string , email:string , password:string , phoneNumber: string}
- response headers : { "content-type": "application/json" }
- success response status : 201
- success response : { message : "user created successfully" , success:true , data: createdUser }
- fail response :{ message : "error message" , success:false }

--------------------------------
-- [login]

- url : '/auth/login'
- method : 'POST'
- request body : { email:string , password:string }
- response headers : { "content-type": "application/json" }
- success response status : 200
- success response : { message : "user login successfully" , success:true , data: {accessToken} }
- fail status : 404
- fail response : { message : "user not found" , success:false }

-----------------------------------------
