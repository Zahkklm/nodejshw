// src/lib/service.js
import axios from "axios";

const getData = async (userId) => {
    try {
        // Kullanıcı bilgilerini çek
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = userResponse.data;

        // Kullanıcıya ait post'ları çek
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = postsResponse.data;

        // Kullanıcı bilgileri ve post'ları birleştir
        return {
            ...user,
            posts
        };
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    }
};

export default getData;
