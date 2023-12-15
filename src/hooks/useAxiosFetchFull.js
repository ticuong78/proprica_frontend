import axios from '../components/api/axios';
import ErrorCompany from '../models/errorModels';

const useAxiosFetchFull = () => {
  const controller = new AbortController();
  const itemFetchFull = async (url) => {
    let data;
    let errorMsg = null;
    try {
      const heavyResponse = await axios.post(
        '/full',
        JSON.stringify({ url }),
        {
          withCredentials: true,
          signal: controller.signal,
        }
      );
      data = heavyResponse.data;
    } catch (error) {
      errorMsg = new ErrorCompany().getErrorMsg(error);
      if (error.name === "CanceledError") return await Promise.resolve();
    } finally {
      return { data, errorMsg };
    }
  }

  return { itemFetchFull, controller };
}

export default useAxiosFetchFull