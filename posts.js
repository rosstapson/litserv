import axios from 'axios';

class Post {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3004' // json-server endpoint
        })
    }

    list() {
        console.log('Post.list')
        return this.api.get('/posts').then(res => res.data);
    }
    find(id) {
        return this.api.get(`/posts/${id}`).then(res => res.data)
    }
    create(data) {
        data.friends = data.friends
            ? data.friends.map(id => ({ id }))
            : [];
        
        return this.api.post('/posts', data).then(res => res.data)
    }
    update(id, data) {
        return this.api.patch(`/posts/${id}`, data).then(res => res.data)
    }
    
    delete(id) {
        return this.api.delete(`/posts/${id}`).then(() => ({ id }))
    }
}
export default new Post()