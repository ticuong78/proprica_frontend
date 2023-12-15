import axios from '../components/api/axios';
import ErrorCompany from '../models/errorModels';

const useAxiosFetchSmall = () => {
  const itemFetch = async (url) => {
    let data;
    let errorMsg = null;
    try {
      const smallResponse = await axios.post(
        '/small',
        JSON.stringify({ url })
      )
      data = smallResponse.data;
    } catch (error) {
      errorMsg = new ErrorCompany().getErrorMsg(error);
      if (error.name === "CanceledError") return await Promise.resolve();
    } finally {
      return { data, errorMsg };
    }
  }

  return itemFetch;
}

export default useAxiosFetchSmall