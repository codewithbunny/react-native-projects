import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zjC2OPzZHORI24h1mYmEU4bklHG4fDC8g8HvQvLOReweGQIsGL-dfTEnh8opKBkQoqiUVqqWv0NzevK7EUdAKAXsKS1McZNWGMORouD5yZluogPTgOdFUA_fC4bHZHYx',
    }
});