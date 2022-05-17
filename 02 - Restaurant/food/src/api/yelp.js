import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 597V4mdYDSbYj0z6Gx_KpNYSx5UJdp2GYx85RSDcWj621SghpaVEfwCuR5C6_ucsWTMfy0qjpuHm16wlCqlFnmzGH4ZL7ZLDFjeMhqOeNIPInWF-21k6REazdM4WYnYx',
  },
});
