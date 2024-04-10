const productContainer = document.getElementById('product-cards')

async function getProducts() {
    console.log('Loading')
  try {
    const response = await axios({
      method: "get",
      url: "https://dummyjson.com/products",
    });

    console.log(response)
    return response?.data?.products
  } catch (error) {
    alert(error.message);
  }
  console.log('Done')

}

async function displayProducts(){
    const products = await getProducts()

    products.map((product,i)=>{
        productContainer.innerHTML+=`
        <div id="product-card">
        <img src="${product.thumbnail}" alt="img" />
        <h3>${product.title}</h3>
        <p class="category">Category: ${product.category}</p>
        <div class="price">
          <p>$567</p>
          <p style="font-size:15px;color: #FF1313;text-decoration: line-through;margin: auto 15px;">$1000</p>
        </div>
        <div class="footer">
          <div class="rating">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#F5C64D"
              />
            </svg>

            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#F5C64D"
              />
            </svg>

            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#F5C64D"
              />
            </svg>

            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#F5C64D"
              />
            </svg>

            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
          <p class="rating-text" style="margin: auto 0;">4.00</p>
        </div>
      </div>
        
        `
    })
}

displayProducts()


