export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  return false;
};

export const loginUser = (username: string, password: string): boolean => {
  // Hardcoded auth logic
  if (username === 'admin' && password === 'foodie123') {
    localStorage.setItem('token', 'dummy-jwt-token');
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
