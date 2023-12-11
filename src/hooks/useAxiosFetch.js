import axios from '../components/api/axios';
import ErrorCompany from '../models/errorModels';

const useAxiosFetch = () => {
  const itemFetch = async (url, { ...config }) => {
    let errorMsg = '';
    let data = {};
    try {
      const smallResponse = await axios.post(
        '/item',
        JSON.stringify({ url }),
        { ...config }
      )
      data = smallResponse.data;
      // const heavyResponse = smallResponse.data ? await axios.post(
      //   '/item',
      //   JSON.stringify({ url }),
      //   {
      //     withCredentials: true,
      //     ...config
      //   }
      // ) : null;
      // console.log(heavyResponse.data);
    } catch (error) {
      errorMsg = new ErrorCompany().getErrorMsg(error);
      if (error.name === "CanceledError") return await Promise.resolve();
    } finally {
      return { data, errorMsg };
    }
  }

  return itemFetch;
}

export default useAxiosFetch