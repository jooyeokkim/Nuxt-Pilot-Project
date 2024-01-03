let inMemoryToken = null;

export class WorkspaceToken {
  static get() {
    return inMemoryToken || localStorage.getItem('workspace') || null;
  }

  static set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('workspace', token || '');
    } else {
      inMemoryToken = token;
      localStorage.setItem('workspace', '');
    }
  }
}
