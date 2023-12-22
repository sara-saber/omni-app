import { gql } from "@apollo/client";

export const Make_Order =gql`
//  1.getAllProducts
query getProducts
{
  products(
    search: ""
    filter: {}
    pageSize: 20
    currentPage: 1
    sort: {}
  ) {
    items {
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
    page_info {
      current_page
      page_size
      total_pages
    }
    suggestions {
      search
    }
    total_count
  }
}
// 2.Create Empty Card
mutation {
    createEmptyCart(input: {})
  }
  

// 3.add Products To Card

mutation AddProduct {
    addProductsToCart(cartId: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf", cartItems: [
  { sku: "JNPR.027",quantity:2 },
  { sku: "JNPR.003" ,quantity:1},
  { sku: "MRS.080618",quantity:1 },
  { sku: "MI5609",quantity:3},
    ]) {
      cart {
        email
        id
        items{
          uid
          product{
            description{html}
            image{
              url
              thumbnail_url
            }
            
          }
        }
        itm_pricing_order_date
        total_quantity
      }
     
    }
  }

// 4.set Shipping Addresses return  selected_payment_method code
mutation {
    setShippingAddressesOnCart(
      input: { cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf", shipping_addresses: [{customer_notes:"notes",customer_address_id:59}] }
    ) {
      cart {
        email
        id
        selected_payment_method{
            code
            purchase_order_number
          }
        itm_pricing_order_date
        total_quantity
      }
    }
  }

/// 5. Set Billing address


mutation {
    setBillingAddressOnCart(input: { billing_address: {
      customer_address_id :59
    }, cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf" }) {
      cart {
        id
        is_virtual
        items{quantity}
        itm_pricing_order_date
        selected_payment_method{
          code
        }
        shipping_addresses{
          firstname
          lastname
          postcode
          region{code}
        }
        total_quantity
      }
    }
  }
  
  

// 7. Set Payment 

mutation {
    setPaymentMethodOnCart(
      input: { cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf", payment_method: { code: "dibseasycheckout" } }) {
      cart {
        id
      }
    }
  }


// 8.get Payment config..
  {
    getPaymentConfiguration(
      cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf"
    ) {
      checkoutKey
      checkoutUrl
      error_message
      language
      paymentId 
    }
  }

//  9. place Order  "order_id": "000000108", "order_number": "000000108"

mutation {
    placeOrder(input: { cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf" }) {
      order {
        email
        firstname
        lastname
        order_entity_id
        order_id
        order_number
      }
    }
  }
  


// 10 .
mutation {
    confirmOrder(input: { paymentId: "019e0000658032baec35b1c46fbc6a91" }) {
      error
      message
      order_id
      order_number
    }
  }
  


  mutation {
    setPaymentMethodAndPlaceOrder(
      input: { cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf", payment_method: { code: "dibseasycheckout" } }
    ) {
      order {
        email
        firstname
        lastname
        order_entity_id
        order_id
        order_number
      }
    }
  }

 ///get Customer Orders

  query
{
  customerOrders {
    items {
      billing_address{firstname}
      itm_delivery_date
      number
      order_date
      payment_methods{name}
      shipments{id}
      shipping_address{city}
      shipping_method
      state
      status
      total{grand_total{currency}}
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}



  query getCard
  {
    cart(cart_id: "GkHTTMbp3EKuHdh9PfTzsjDjYaW0LaZf") {
      applied_coupons {
        code
      }
      available_payment_methods {
        code
        instructions
        is_deferred
        title
      }
      billing_address {
        city
        company
        country{label}
        customer_notes
        firstname
        lastname
        postcode
        region{label}
        street
        telephone
        uid
        vat_id
      }
      email
      error_message
      gift_message {
        from
        message
        to
      }
      id
      is_virtual
      items {
        id
        prices{price{currency}}
        product{country_of_manufacture}
        quantity
        uid
      }
      itm_pricing_order_date
      selected_payment_method {
        code
        purchase_order_number
        title
      }
      shipping_addresses {
        city
        company
        customer_notes
        firstname
        items_weight
        lastname
        pickup_location_code
        postcode
        street
        telephone
        uid
        vat_id
      }
      total_quantity
    }
  }
  

  add Product to wishlist

mutation {
  addProductsToWishlist(
    wishlistId: ""
    wishlistItems: [{ sku: "TID.760460",quantity:2 }]
  ) {
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}


`