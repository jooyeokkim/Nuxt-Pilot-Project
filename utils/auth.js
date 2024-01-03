export class Auth {
  static isLoggedIn() {
    if (AuthToken.get()) {
      return true;
    } else {
      return false;
    }
  }

  static isWorkspaceIn() {
    if (WorkspaceToken.get()) {
      return true;
    } else {
      return false;
    }
  }
}