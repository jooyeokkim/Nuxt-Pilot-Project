let inMemoryToken = null;

export class AuthToken {
  static get() {
    return inMemoryToken || localStorage.getItem('token') || null;
  }

  static set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('token', token || '');
    } else {
      inMemoryToken = token;
      localStorage.setItem('token', '');
    }
    if (!token) {
      localStorage.setItem('user', null);
    }
  }
}
