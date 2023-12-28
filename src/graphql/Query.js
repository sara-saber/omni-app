import { gql } from "@apollo/client";

export const Get_Products = gql`

query getProducts
{
  products(
    search: ""
    filter: {}
    pageSize: 20
    currentPage: 2
    sort: {}
  ) {
    
    items {
      stock_status
      id
      name
      sku
      brand
      image{
        url
        thumbnail_url
      }
      small_image{
        thumbnail_url
      }
      
    }
  
    total_count
  }
}
`

export const Get_Categories = gql`
query getCategories{
  categories(filters: {}, pageSize:6, currentPage: 1) {
    items {
      name
      children_count
  }
}
}

`
export const Get_Countries = gql`
query getCountries
{
  countries {
    available_regions {
      id
      name
    }
    full_name_english
    id
  }
}
`
export const Get_Customer = gql`
query getFirstName{
  customer {
    firstname
    id
  }
}
`

export const Get_Customer_Addresses = gql`
query getCustomerAddresses{
  customer {
    addresses {
        city
        company
        country_code
        country_id
        firstname
        id
        itm_address_id
        lastname
        middlename
        postcode
        prefix
        region_id
        street
        telephone
      }
      created_at
  }
}
`

export const Get_Customer_Info = gql`
query getCustomerInfo{
  customer {
    created_at
    date_of_birth
    email
    firstname
    gender
    id
    lastname
    middlename
  }
}
`
export const Get_Order_Details = gql`
query getOrderDetails
{
    customer {
      orders{
        total_count
        items{
          id,
          number,
          status,
          order_date,
          state,
          invoices{
            files{url}
          },
          shipments{
            files{url}
          },
          total{
          subtotal{currency}
          subtotal{value},
          shipping_handling{
          discounts{
          amount{currency}},
          taxes{amount{value}},
          discounts{amount{value}}},
          total_shipping{value}
             }
          items{
            id,
            product_name,
            product_small_image{url},
            quantity_invoiced,
            quantity_ordered,
            
          },
          billing_address{
            firstname,
            lastname,
            street,
           telephone,
           region,
            city
          },
          payment_methods{
            name
          },
          shipping_address{
            city,
            country_code,
            firstname,
            lastname,
            street
            }
        }
      }
    }
  }
`


export const Get_Customer_Orders = gql`
query getCustomer{
  customer {
    orders{
      items{
        id,
        number,
        status,
        order_date,
        state,
        total{subtotal{currency}}
      }
      total_count
    }
   
  }
}

`


export const Get_Cutomer_Wishlist = gql`
query GetWishList{
  customer{
  wishlist {
      items {
        product{
          categories{name}
          name
          stock_status
          image{url}
          display_tax{price_currency}
          
        }
      }
      updated_at
    }
  }
}
`

export const GET_DASHBOARD = gql`
query GetCustomerOrders{
  customer {
    orders {
        total_count
      }
      wishlist {
        items_count
      }
  }
}
`
