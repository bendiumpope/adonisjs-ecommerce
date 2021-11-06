# AdoniJs Ecommerce
# AdoniJS Ecommerce App

# product category
> Make things easier for your teammates with a complete folder description.

# GET
# Get All product-category

• http://127.0.0.1:3333/api/product-category

> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

• Example
> Get All product-category example
> Request
> cURL
• curl --location --request GET 'http://127.0.0.1:3333/api/product-category'
# Response


# json
```
{
  "data": [
    {
      "id": 2,
      "name": "men shoes",
      "status": 2,
      "created_at": "2021-11-05T06:50:23.661+01:00",
      "updated_at": "2021-11-05T06:50:23.661+01:00"
    }
  ]
}
```
# POST
# Create product-category
• http://127.0.0.1:3333/api/product-category
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
> Bodyraw (json)
# json
```
{
  "name": "men shoes",
  "status": "2"
}
```
# Example
• Create product-category example
# Request
```
cURL
curl --location --request POST 'http://127.0.0.1:3333/api/product-category' \
--data-raw '{
    "name" : "men shoes",
    "status" : "2"
}'
```

# Response

# json
```
{
  "data": {
    "name": "men shoes",
    "status": "2",
    "created_at": "2021-11-05T06:50:23.661+01:00",
    "updated_at": "2021-11-05T06:50:23.661+01:00",
    "id": 2
  }
}
```
# GET
# Get product-category By id
• http://127.0.0.1:3333/api/product-category/2
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

# Example
# Get product-category By id example
• Request
> cURL
> curl --location --request GET 'http://127.0.0.1:3333/api/product-category/2'
# Response

# json
```
{
  "data": {
    "id": 2,
    "name": "men shoes",
    "status": 2,
    "created_at": "2021-11-05T06:50:23.661+01:00",
    "updated_at": "2021-11-05T06:50:23.661+01:00"
  }
}
```
# PUT
# Update product-category by id
> http://127.0.0.1:3333/api/product-category/1
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
> Bodyraw (json)
# json
```
{
  "name": "men outfit",
  "status": "4"
}
```

# Example
# Update product-category by id example
• Request
> cURL
> curl --location --request PUT 'http://127.0.0.1:3333/api/product-category/1' \
```
--data-raw '{
    "name" : "men outfit",
    "status" : "4"
}'
```
# Response
# json
```
{
  "data": {
    "id": 1,
    "name": "men outfit",
    "status": "4",
    "created_at": "2021-11-05T06:47:29.831+01:00",
    "updated_at": "2021-11-05T06:49:29.357+01:00"
  }
}
```
# DEL
# Delete product-category by id
• http://127.0.0.1:3333/api/product-category/1
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

# Example
# Delete product-category by id example
• Request
> cURL
> curl --location --request DELETE 'http://127.0.0.1:3333/api/product-category/1'
# Response
# json
```
{
  "data": null
}
```
# Authentication Routes
> Make things easier for your teammates with a complete folder description.
# POST
# register
• http://127.0.0.1:3333/api/register
> Make things easier for your teammates with a complete request description.
> Bodyraw (json)
# json
```
{
  "username": "benpope",
  "email": "bendiumpope@gmail.com",
  "password": "benmaria1234",
  "type": "admin",
  "first_name": "benedict",
  "last_name": "ama",
  "address": "Edo Tech Park, along Ohen Road, Okhuoromi Community Benin City Nigeria",
  "contact_number": "08068681904",
  "status": "admin"
}
```

# Example
# register example
# Request
• cURL
• curl --location --request POST 'http://127.0.0.1:3333/api/register' \
```
--data-raw '{
    "username" : "benpope",
    "email": "bendiumpope@gmail.com",
    "password": "benmaria1234",
    "type" : "admin",
    "first_name": "benedict",
    "last_name": "ama",
    "address": "Edo Tech Park, along Ohen Road, Okhuoromi Community Benin City Nigeria",
    "contact_number" : "08068681904",
    "status": "admin"

}'
```
# POST
# login
• http://127.0.0.1:3333/api/login
> Make things easier for your teammates with a complete request description.
> Bodyraw (json)
# json
```
{
  "email": "bendiumpope@gmail.com",
  "password": "benmaria1234"
}
```
# Example
# login example
# Request
• cURL
• curl --location --request POST 'http://127.0.0.1:3333/api/login' \
```
--data-raw '{
    "email" : "bendiumpope@gmail.com",
    "password" : "benmaria1234"
}'
```
# Response
# json
```
{
  "data": {
    "type": "bearer",
    "token": "NQ.hYS3M0j9boB5QL9fPtGq1wD42ltNZo09d2FejS4TemXLJnhHaV6GGrXffQkx",
    "expires_at": "2021-11-15T06:45:41.701+01:00"
  }
}
```
# product subcategory
> Make things easier for your teammates with a complete folder description.
# POST
# create product-sub-category
• http://127.0.0.1:3333/api/product-sub-category/
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
> Bodyraw (json)
# json
```
{
  "name": "gucci shoes",
  "product_category_id": 3,
  "status": "3"
}
```
# Example
# create product-sub-category example
# Request
• cURL
• curl --location --request POST 'http://127.0.0.1:3333/api/product-sub-category/' \
```
--data-raw '{
    "name" : "gucci shoes",
    "product_category_id": 3,
    "status" : "3"
}'
```
# Response
# json
```
{
  "data": {
    "name": "gucci shoes",
    "product_category_id": 3,
    "status": "3",
    "created_at": "2021-11-05T14:30:53.777+01:00",
    "updated_at": "2021-11-05T14:30:53.777+01:00",
    "id": 2
  }
}
```
# GET
# Get All product-sub-category
• http://127.0.0.1:3333/api/product-sub-category/
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

# Example
# Get All product-sub-category example
# Request
• cURL
• curl --location --request GET 'http://127.0.0.1:3333/api/product-sub-category/'
# Response
# json
```
{
  "data": [
    {
      "id": 1,
      "name": "powdered Milk",
      "product_category_id": 1,
      "status": 1,
      "created_at": "2021-11-05T14:29:17.998+01:00",
      "updated_at": "2021-11-05T14:29:17.998+01:00",
      "productCategory": {
        "id": 1,
        "name": "men wrist-watch",
        "status": 4,
        "created_at": "2021-11-05T14:20:06.311+01:00",
        "updated_at": "2021-11-05T14:20:06.311+01:00"
      }
    }
  ]
}
```
# GET
# Get product-sub-category by id
• http://127.0.0.1:3333/api/product-sub-category/1
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

# Example
# Get product-sub-category by id example
# Request
• cURL
• curl --location --request GET 'http://127.0.0.1:3333/api/product-sub-category/1'
# Response
# json
```
{
  "data": {
    "id": 1,
    "name": "powdered Milk",
    "product_category_id": 1,
    "status": 1,
    "created_at": "2021-11-05T14:29:17.998+01:00",
    "updated_at": "2021-11-05T14:29:17.998+01:00",
    "productCategory": {
      "id": 1,
      "name": "men wrist-watch",
      "status": 4,
      "created_at": "2021-11-05T14:20:06.311+01:00",
      "updated_at": "2021-11-05T14:20:06.311+01:00"
    }
  }
}
```
# PATCH
# Update product-sub-category by id
• http://127.0.0.1:3333/api/product-sub-category/1
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
> Bodyraw (json)
# json
```
{
  "name": "gucci shoes",
  "product_category_id": 1,
  "status": "5"
}
```
# Example
# Update product-sub-category by id example
# Request
• cURL
• curl --location --request PATCH 'http://127.0.0.1:3333/api/product-sub-category/1' \
```
--data-raw '{
    "name" : "gucci shoes",
    "product_category_id": 1,
    "status" : "5"
}'
```
# Response
# json
```
{
  "data": {
    "id": 1,
    "name": "gucci shoes",
    "product_category_id": 1,
    "status": "5",
    "created_at": "2021-11-05T22:25:49.020+01:00",
    "updated_at": "2021-11-05T23:31:24.768+01:00",
    "productCategory": {
      "id": 1,
      "name": "children food",
      "status": 4,
      "created_at": "2021-11-05T22:25:32.484+01:00",
      "updated_at": "2021-11-05T22:25:32.484+01:00"
    }
  }
}
```
# DEL
# Delete product-sub-category by Id
• http://127.0.0.1:3333/api/product-sub-category/1
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token

# Example
# Delete product-sub-category by Id example
# Request
• cURL
• curl --location --request DELETE 'http://127.0.0.1:3333/api/product-sub-category/1'
# Response
# json
```
{
  "data": null
}
```
# product
> Make things easier for your teammates with a complete folder description.
# POST
# Create product
• http://127.0.0.1:3333/api/product/
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
> Bodyraw (json)
# json
```
{
  "day_type": "monday",
  "product_category_id": 1,
  "product_sub_category_id": 2,
  "calender_days": "wednesday",
  "title": "Italian Gucci shoes for men",
  "description": "Black, yellow and brown Leather shoes",
  "address": "Ohen road okhuoromi community, Benin City Nigeria"
}
```
# Example
# Create product example
# Request
• cURL
• curl --location --request POST 'http://127.0.0.1:3333/api/product/' \
```
--data-raw '{
"day_type": "monday",
"product_category_id": 1,
"product_sub_category_id": 2,
"calender_days": "wednesday",
"title": "Italian Gucci shoes for men",
"description": "Black, yellow and brown Leather shoes",
"address": "Ohen road okhuoromi community, Benin City Nigeria"
}'
```
# Click to Expand
# Response
# json
```
{
  "data": {
    "user_id": 1,
    "day_type": "monday",
    "product_category_id": 1,
    "product_sub_category_id": 2,
    "calender_days": "wednesday",
    "title": "Italian Gucci shoes for men",
    "description": "Black, yellow and brown Leather shoes",
    "address": "Ohen road okhuoromi community, Benin City Nigeria",
    "created_at": "2021-11-05T23:34:30.580+01:00",
    "updated_at": "2021-11-05T23:34:30.580+01:00"
  }
}
```
# GET
# Get All products
• http://127.0.0.1:3333/api/product
> Make things easier for your teammates with a complete request description.
> Authorization
> Bearer Token
> Token
