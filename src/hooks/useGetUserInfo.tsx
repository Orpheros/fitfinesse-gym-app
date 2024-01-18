export const useGetUserInfo = () => {
  const { user_id, name, photo, isAuth } =
    JSON.parse(localStorage.getItem("auth") as any) || {};
  return { user_id, name, photo, isAuth };
};
