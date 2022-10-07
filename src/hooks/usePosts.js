import axios from "axios";
import {ref, onMounted} from 'vue';

export function usePosts(limit) {
    const posts = ref([])
    const totalCountPage = ref(0)
    const isPostsLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            totalCountPage.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        posts, isPostsLoading, totalCountPage
    }
}