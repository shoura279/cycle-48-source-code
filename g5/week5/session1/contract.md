-- GET Users API

- url : '/user'
- method : 'GET'
- request body : none
- response headers : {'content-type': 'application/json'}
- success response : {message :'done' ,success: true , data : dataOfUsers}

---------------------------

-- Create Users API

- url  : '/user'
- method : 'POST'
- request body : {userName:string , email:string , password:string , phoneNumber:string }
- response headers : {'content-type': 'application/json'}
- success response :{ message :'user create successfully' , success :true }
- fail response : {message :'user already exist' , success:false}

----------------------------
-- Update user API

- url : '/user/id'
- method : 'PUT' 
- request body : {userName:string , email:string , password:string , phoneNumber:string }
- response headers : {'content-type': 'application/json'}
- success response :{ message :'user updated successfully' ,success :true }
- fail response : {message :'user not found' , success:false}

-------------------------------
-- Delete user API

- url : '/user/id'
- method : 'DELETE'
- response headers : {'content-type': 'application/json'}
- success response :{ message :'user deleted successfully' ,success :true }
- fail response : {message :'user not found' , success:false}