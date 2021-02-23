import axios from "axios";

export default ({
    state: {
        products: [],
        filteredProducts: [],
        available: [],
        PRODUCTS_REQUEST_LOADING: true,
        PRODUCTS_REQUEST_ERRORS: false,
        PRODUCTS_REQUEST_STATUS: 'Первичная обработка данных',
        filter: {
            width: '',
            height: '',
            diametr: '',
            sparka: false,
            sparka_width: '',
            spartka_height: '',
            sparka_width2: '',
            brand: '',
            model: '',
            season: '',
            ships: '',
            runflat: false,
            light: false,
            mt: false,
            at: false,
            articul: '',
            total: '',
            sort: '',
        },
        filter_props: {
            width: [],
            height: [],
            diametr: [],
            sparka: [],
            sparka_width: [],
            spartka_height: [],
            sparka_width2: [],
            brand: [],
            model: [],
            season: [],
            ships: [],
        },
        choosedProduct: '',
        countProduct: ''
    },
    mutations: {
        TOGGLE_PRODUCTS_REQUEST_LOADING: (state, payload) => state.PRODUCTS_REQUEST_LOADING = payload,
        TOGGLE_PRODUCTS_REQUEST_ERRORS: (state, payload) => state.PRODUCTS_REQUEST_ERRORS = payload,
        SET_PRODUCTS: (state, payload) => state.products = payload,
        SET_AVAILABLE: (state, payload) => state.available = payload,
        SET_PRODUCTS_REQUEST_STATUS: (state, payload) => state.PRODUCTS_REQUEST_STATUS = payload,
        filterProducts(state) {
            state.filteredProducts = state.products

            if (state.filter.width) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => Math.ceil(filteredProduct.p_width) === state.filter.width);
            }
            if (state.filter.height) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => Math.ceil(filteredProduct.p_height) === state.filter.height);
            }
            if (state.filter.diametr) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => Math.ceil(filteredProduct.p_diameter) === state.filter.diametr);
            }
            if (state.filter.brand) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_brand === state.filter.brand);
            }
            if (state.filter.model) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_model === state.filter.model);
            }
            if (state.filter.season) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_season === state.filter.season);
            }
            if (state.filter.ships) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_thorn === state.filter.ships);
            }
            if (state.filter.articul) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.code === state.filter.articul);
            }
            if (state.filter.runflat) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.runflat ===true);
            }
            if (state.filter.light) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_cargo ===true);
            }
            if (state.filter.mt) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_mud_terrain ===true);
            }
            if (state.filter.at) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.p_all_terrain ===true);
            }
            if (state.filter.total) {
                state.filteredProducts = state.filteredProducts.filter(filteredProduct => {
                    let tmp = 0;
                    filteredProduct.available.forEach(item => {
                        tmp += item.quantity;
                    });
                    return tmp >= state.filter.total;
                });
            }
            if (state.filter.sort) {
                if (state.filter.sort === '0') {
                    console.log(state.filteredProducts)
                    state.filteredProducts = state.filteredProducts.sort(
                        function (a, b) {
                            if (a.aviable && b.aviable) {
                                if (a.aviable.price && b.aviable.price) {
                                    if (parseInt(a.aviable[0].price) < parseInt(b.aviable[0].price)) {
                                        return -1;
                                    }
                                    if (parseInt(a.aviable[0].price) > parseInt(b.aviable[0].price)) {
                                        return 1;
                                    }
                                } else {
                                    return 0
                                }
                                return 0
                            } else {
                                return 0
                            }
                        }
                    );
                    console.log(state.filteredProducts)

                } else if (state.filter.sort === '1') {
                    state.filteredProducts = state.filteredProducts.sort(
                        function (a, b) {
                            if (a.aviable && b.aviable) {
                                if (a.aviable.price && b.aviable.price) {
                                    if (parseInt(a.aviable[0].price) < parseInt(b.aviable[0].price)) {
                                        return -1;
                                    }
                                    if (parseInt(a.aviable[0].price) > parseInt(b.aviable[0].price)) {
                                        return 1;
                                    }
                                } else {
                                    return 0
                                }
                                return 0
                            } else {
                                return 0
                            }
                        }
                    ).reverse();
                } else if (state.filter.sort === '2') {
                    state.filteredProducts = state.filteredProducts.sort(function (a, b) {
                        if (a.p_full_name < b.p_full_name) {
                            return -1;
                        }
                        if (a.p_full_name > b.p_full_name) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (state.filter.sort === '3') {
                    state.filteredProducts = state.filteredProducts.sort(function (a, b) {
                        if (a.p_full_name < b.p_full_name) {
                            return -1;
                        }
                        if (a.p_full_name > b.p_full_name) {
                            return 1;
                        }
                        return 0;
                    }).reverse();
                }

                state.filteredProducts = state.filteredProducts.filter(filteredProduct => filteredProduct.total === state.filter.total);
            }
        },
        chooseProduct: (state,payload) =>{
            state.choosedProducs = payload
        },
        filterReset: (state) =>{
            state.filter = {
                width: '',
                    height: '',
                    diametr: '',
                    sparka: false,
                    sparka_width: '',
                    spartka_height: '',
                    sparka_width2: '',
                    brand: '',
                    model: '',
                    season: '',
                    ships: '',
                    runflat: false,
                    light: false,
                    mt: false,
                    at: false,
                    articul: '',
                    total: '',
                    sort: '',
            }
        }
    },
    actions: {
        LOAD_PRODUCTS_REQUEST: ({commit, state}) => {
            commit('TOGGLE_PRODUCTS_REQUEST_LOADING', true);
            commit('TOGGLE_PRODUCTS_REQUEST_ERRORS', false);
            commit('SET_PRODUCTS_REQUEST_STATUS', 'Получение товаров');
            axios.get('/products.php', {
            //axios.get('http://localhost:2020/products', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    let products = response.data.tires;
                    //let products = response.data;
                    commit('SET_PRODUCTS_REQUEST_STATUS', 'Получение складов');
                    axios.get('/avialability.php',{
                    //axios.get('http://localhost:2020/availability',{
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(async (response2) => {
                            let available = await response2.data.tires;
                            //let available = await response2.data;
                            await commit('SET_PRODUCTS_REQUEST_STATUS', 'Обработка данных скадов и товаров');
                            await products.forEach(product => {
                                let av = available.filter(item => item.code === product.code);
                                if(!av){
                                    console.log('none')
                                }
                                product.available = av;

                                //vadim start
                                if (!state.filter_props.width.includes(Math.ceil(product.p_width))) {
                                    state.filter_props.width.push(Math.ceil(product.p_width))
                                }
                                if (!state.filter_props.height.includes(Math.ceil(product.p_height))) {
                                    state.filter_props.height.push(Math.ceil(product.p_height))
                                }
                                if (!state.filter_props.diametr.includes(Math.ceil(product.p_diameter))) {
                                    state.filter_props.diametr.push(Math.ceil(product.p_diameter))
                                }
                                if (!state.filter_props.brand.includes(product.p_brand)) {
                                    state.filter_props.brand.push(product.p_brand)
                                }
                                if (!state.filter_props.model.includes(product.p_model)) {
                                    state.filter_props.model.push(product.p_model)
                                }
                                if (!state.filter_props.season.includes(product.p_season)) {
                                    state.filter_props.season.push(product.p_season)
                                }
                                if (!state.filter_props.ships.includes(product.p_thorn)) {
                                    state.filter_props.ships.push(product.p_thorn)
                                }
                                //vadim end


                            });
                            commit('SET_PRODUCTS_REQUEST_STATUS', 'Процесс законен');
                            commit('SET_PRODUCTS', products);
                            commit('TOGGLE_PRODUCTS_REQUEST_LOADING', false);
                        })
                })
        },
        FILTER_PRODUCTS: ({commit}) => {
            commit('SET_PRODUCTS_REQUEST_STATUS', 'Применение фильтрации');
            commit('TOGGLE_PRODUCTS_REQUEST_LOADING', true);
            commit('filterProducts');
            setTimeout(() => {
                commit('TOGGLE_PRODUCTS_REQUEST_LOADING', false);
            }, 1000)
        },
        filterReset: ({commit}) =>{
            commit('filterReset')
        }
    },
    getters: {
        getFilter(state) {
            return state.filter
        },
        getFilterProps(state) {
            return state.filter_props
        },
        getChoosedProduct(state){
            return state.choosedProduct
        },
        getState(state){
            return state
        }
    }
})

