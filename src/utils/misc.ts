import axios, { AxiosError } from 'axios';
import { CoreApiError, CoreApiResponse } from '@/services/responses.model';

/**
 * Retrieve a nested object value using an array of string keys.
 *
 * This function aims to provide a safe way to retrieve nested object
 * values in JavaScript. The function uses `Array.reduce` to recursively
 * navigate through the object based on the provided key path. If during
 * the navigation a non-existent property is encountered, the function
 * will return `undefined`, mitigating potential `TypeError` issues.
 *
 * @example
 * const user = { info: { name: 'John' } };
 * const name = getNestedObject(user, ['info', 'name']); // Returns 'John'
 *
 * @param {object} nestedObj - The object to retrieve the nested value from.
 * @param {string[]} pathStr - An array of strings in string format, each representing a property
 *                             name in the path to the desired value.
 * @returns {any} - The nested object value, if it exists. Otherwise, returns `undefined`.
 */
export const getNestedObject = (nestedObj: any, pathStr: string) => {
  const pathArr = pathStr.split('.').reduce<string[]>((acc, part) => {
    // Handle array indices
    // eslint-disable-next-line no-useless-escape
    const arrayParts = part.split(/[\[\]]/).filter(Boolean);
    return acc.concat(arrayParts);
  }, []);

  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined),
    nestedObj
  );
};

/**
 * Check if the error is an AxiosError with a CoreApiResponse
 *
 * @param error The error response from the API request
 * @returns A boolean indicating whether the error is an AxiosError with a CoreApiResponse
 */
function isAxiosErrorResponse(error: any): error is AxiosError<CoreApiResponse<any>> {
  return axios.isAxiosError(error) && error.response?.data;
}

/**
 * Function to set up the error map for a Pollen API response or Axios error
 *
 * @param error The error response from the API request
 * @param setErrorMap The function to set the error map in the component state
 */
export const setupErrorMap = (
  error: CoreApiResponse<any> | AxiosError<CoreApiResponse<any>>,
  setErrorMap: (errors: CoreApiError[]) => void
) => {
  if (isAxiosErrorResponse(error)) {
    // Now we're sure error is an AxiosError with the expected response shape
    const nestedErrors = error.response!.data.data?.errors;
    const errorList: CoreApiError[] = nestedErrors
      ? (Object.values(nestedErrors).flat() as CoreApiError[])
      : [];

    // Merging with any top-level errors found in the response data
    const combinedErrors = [...errorList, ...(error.response!.data.errors ?? [])];
    setErrorMap(combinedErrors);
  } else if ('errors' in error && error.errors) {
    // Handling non-Axios error responses directly containing an errors array
    setErrorMap(error.errors);
  }
};
