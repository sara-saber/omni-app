import { gql } from "@apollo/client";

export const Login = gql`
mutation generateToken($email:String!,$password:String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`

export const Add_Product_ToWishList = gql`
mutation {
    addProductsToWishlist(
      wishlistId: "_____"
      wishlistItems: [{ sku: "MDV.054231",quantity:2 },{
        sku:"FST.604653",quantity:1
      }]
    ) {
      user_errors {
        code
        message
      }
      wishlist {
        id
        items_count
        items_v2{
          items{
            id
            quantity
            product{name, sku}}}
        sharing_code
        updated_at
      }
    }
  }
`
export const Create_Customer_Address = gql`

mutation AddAddress($InputAdress:CustomerAddressInput) {
  createCustomerAddress(input: $InputAdress) {
    city
    company
    country_code
    country_id
    custom_attributes {
      attribute_code
      value
    }
    customer_id
    default_billing
    default_shipping
    extension_attributes {
      attribute_code
      value
    }
    fax
    firstname
    id
    itm_address_id
    lastname
    middlename
    postcode
    prefix
    region {
      region
      region_code
      region_id
    }
    region_id
    street
    suffix
    telephone
    vat_id
  }
}


`
export const Post_create_Addresses = gql`
mutation createCustomerAddress($CustomerAddress:CustomerAddressInput!) {
    createCustomerAddress(input:$CustomerAddress) {
        id
    }
  }
`
export const Post_Create_Cutomer = gql`
mutation CreateCustomer($Customer:CustomerInput!) {
  createCustomer(input:$Customer) {
    customer {
      id
      created_at
    }
  }
}
`

export const Post_Update_Customer = gql`
mutation UpdateCustomer($Customerinfo:CustomerInput!) {
    updateCustomer(input: $Customerinfo) {
      customer {
        id
        created_at
        date_of_birth
        email
        firstname
        gender
      }
    }
  }
`

export const Post_Update_Customer_Addresses = gql`
mutation {
  updateCustomer(input: {}) {
    customer {
      id
      allow_remote_shopping_assistance
      created_at
      date_of_birth
      default_billing
      default_shipping
      email
      firstname
      gender
      is_b2b
      is_subscribed
      lastname
      middlename
      store_code
      store_id
      suffix
      taxvat
      website_id
      website_url
    }
  }
}

`
export const REMOVE_FROM_WISHLIST = gql`
mutation removeProduct($wishlistId:ID!,$itemId:[ID!]!) {
  removeProductsFromWishlist(wishlistId:$wishlistId , wishlistItemsIds: $itemId) {
    user_errors {
      code
      message
    }
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
`
export const RESET_EMAIL = gql`
mutation requestPassword ($email:String!){
  requestPasswordResetEmail(email: $email)
}
`

export const CHANGE_PASSWORD = gql`
mutation changePassword($currentPassword:String!,$newPassword:String!){
  changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
     email
   }
 }
`
export const CHANGE_EMAILL = gql`
mutation changeEmail($Email:String!,$Password:String!){
  updateCustomerEmail(email: $Email, password: $Password) {
     customer {
     id
     email
      }
  }
}
`
