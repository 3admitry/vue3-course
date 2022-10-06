import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        page: 1,
        selectedSort: '',
        totalCountPage: 0,
        searchQuery: '',
        limit: 10,
        sortOptions: [
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By description'},
        ]
    }),
    getters: {  // это computed свойства
        sortedPost(state) {
            return [...state.posts].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        // Ничто иное как редюсеры))
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostsLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalCountPage(state, totalPages) {
            state.totalCountPage = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setIsPostsLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalCountPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
                commit('setIsPostsLoading', false)
            } catch(e) {
                console.log(e)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalCountPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])

            } catch(e) {
                console.log(e)
            }
        }
    },
    namespaced: true,
}