export const useGetUser = () => {
  const { user_id, name, photo, isAuth, last_login, gyms } =
    JSON.parse(localStorage.getItem("auth") as any) || {};
  return { user_id, name, photo, isAuth, last_login, gyms };
};
