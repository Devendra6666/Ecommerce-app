const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                // companyProducts : [...action.payload]
            }
        case "LOAD_COM_PRODUCTS":
            return {
                ...state,
                companyProducts: [...action.payload]
            }
        case "SORT_VALUE":
            let selectedValue = document.getElementById("sort");
            let tempSelectedValue = selectedValue.options[selectedValue.selectedIndex].value;
            // console.log(tempSelectedValue)
            return {
                ...state,
                sortingValue: tempSelectedValue
            }
        case "SORT_FILTERPRODUCTS":
            let sortedProducts;
            let tempSortedProducts = [...action.payload];
            console.log(tempSortedProducts)
            // sortedProducts = tempSortedProducts.sort((a,b))
            // if(state.sortingValue === "lowest"){
            //     sortedProducts = tempSortedProducts.sort((a,b) => {
            //         return a.name.localeCompare(b.name)
            //     })

            // }
            // if(state.sortingValue==="lowest"){
            //     sortedProducts = tempSortedProducts
            // }
            if (state.sortingValue === "lowest") {
                const sortingProducts = (a, b) => {
                    return a.price - b.price;
                }
                sortedProducts = tempSortedProducts.sort(sortingProducts)
            }
            if (state.sortingValue === "highest") {
                const sortingProducts = (a, b) => {
                    return b.price - a.price;
                }
                sortedProducts = tempSortedProducts.sort(sortingProducts)
            }
            if (state.sortingValue === "a-z") {
                sortedProducts = tempSortedProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })

            }
            if (state.sortingValue === "z-a") {
                sortedProducts = tempSortedProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })

            }
            // console.log(sortedProducts)
            return {
                ...state,
                filter_products: sortedProducts
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            // console.log(name,value)
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        case "FILTER_SEARCH_PRODUCTS":
            let { filter_products } = state;
            let tempSearchProducts = [...filter_products]

            const { text } = state.filters

            // console.log(text)
            if (text) {
                tempSearchProducts = tempSearchProducts.filter((curele, index) => {
                    return curele.name.toLowerCase().startsWith(text)
                })
            }
            return {
                ...state,
                filter_products: tempSearchProducts
            }


        // const {name,value} = state.filters
        case "FILTER_CATEGORY_PRODUCTS":
            let { all_products } = state;
            let tempfilteredProducts = [...all_products]

            const { category, company } = state.filters


            console.log(category)
            console.log(company)
            // if(category){
            //     tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
            //               return curele.category===category

            //     })

            // }
            if (category === "computer") {
                tempfilteredProducts = tempfilteredProducts.filter((curele, index) => {
                    return curele.category === "computer"
                })
            }
            if (category === "mobile") {
                tempfilteredProducts = tempfilteredProducts.filter((curele, index) => {
                    return curele.category === "mobile"
                })
            }
            if (category === "watch") {
                tempfilteredProducts = tempfilteredProducts.filter((curele, index) => {
                    return curele.category === "watch"
                })
            }
            if (category === "laptop") {
                tempfilteredProducts = tempfilteredProducts.filter((curele, index) => {
                    return curele.category === "laptop"
                })
            }
            if (category === "accessories") {
                tempfilteredProducts = tempfilteredProducts.filter((curele, index) => {
                    return curele.category === "accessories"
                })
            }
           
            if(company==="apple"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="apple";
                })
            }
            if(company==="samsung"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="samsung";
                })
            }
            if(company==="dell"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="dell";
                })
            }
            if(company==="nokia"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="nokia";
                })
            }
            if(company==="asus"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="asus";
                })
            }
            if(company==="lenova"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="lenova";
                })
            }
            if(company==="rolex"){
                tempfilteredProducts = tempfilteredProducts.filter((curele,index) => {
                    return curele.company==="rolex";
                })
            }
            return {
                ...state,
                filter_products: tempfilteredProducts
            }
        // case "UPDATE_COMPANY_PRODUCTS":
        //     let {companyname,companyvalue} = action.payload
        //     console.log(companyname,companyvalue)
        //     return{
        //         ...state,
        //         filters:{
        //             ...state.filters,
        //             [companyname]:companyvalue
        //         }
        //     }
        // case "COMPANY_SERACH_PRODUCTS":
        //     // const {all_products} = state;
        //     const {companyProducts} =state;
        //     console.log(companyProducts)

        default:
            return state;
    }
    return state;
}
export default filterReducer;
