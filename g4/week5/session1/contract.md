-- API GET users

- url -> /user
- method -> GET
- request body : none
- request headers : {"content-type" :"application/json"}
- success response : { message:'done' , success :true , data :[{id, userName , email,password}]}
- fail response : {message :'error reason' , success: false }
  -- test API

--------------------------------

-- API UPDATE specific user
- prerequisites -> email must be unique
- url -> /user/id
- method -> PUT
- request body : {userName, email , password , phoneNumber }
- success response : {message :"user updated successfully" , success: true}
- fail response : {message :"error reason" , success: false}

