export const restRequest = (origin: string) => {
  return {
    REQUEST: `${origin}.REQUEST`,
    SUCCESS: `${origin}.SUCCESS`,
    FAIL: `${origin}.FAIL`
  };
};
