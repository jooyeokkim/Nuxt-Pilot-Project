export class UserService {
  static async list(params) {
    const response = await useApiFetch('users/', { params });
    return response.data;
  }

  static async get(id) {
    const response = await useApiFetch(`users/${id}/`);
    return response.data;
  }

  static async me() {
    const response = await useApiFetch('users/me/');
    return response.data._value;
  }

  static async delete(form) {
    const response = await useApiFetch('users/me/', {
      method: 'delete',
      body: form,
    });
    return response.data;
  }

  static async create(userData) {
    AuthToken.set('');
    WorkspaceToken.set('', false);
    const response = await useApiFetch('users/', {
      method: 'post',
      body: userData
    });
    return response.data;
  }

  static async updateMe(userData) {
    const response = await useApiFetch('users/me/', {
      method: 'put',
      body: userData
    });
    return response.data;
  }

  static async resetPassword(email) {
    const response = await useApiFetch('users/reset_password/', {
      method: 'post',
      body: {
        email,
        site: 'synapse',
      }
    });
    return response.data;
  }

  static async resetPasswordConfirm(data) {
    const response = await useApiFetch('users/reset_password_confirm/', {
      method: 'post',
      body: data
    });
    return response.data;
  }

  static async emailVerifyCreate(email) {
    const response = await useApiFetch('users/email_verify/', {
      method: 'post',
      body: { email }
    });
    return response.data;
  }

  static async resetEmail(email) {
    const response = await useApiFetch('users/reset_email/', {
      method: 'post',
      body: { email }
    });
    return response.data;
  }

  static async resetEmailConfirm(data) {
    const response = await useApiFetch('users/reset_email_confirm/', {
      method: 'post',
      body: data
    });
    return response.data;
  }

  static async updatePassword(data) {
    const response = await useApiFetch('users/set_password/', {
      method: 'post',
      body: data
    });
    return response.data;
  }

  static async createVerified(userData) {
    const response = await useApiFetch('users/create_verified/', {
      method: 'post',
      body: userData
    });
    return response.data;
  }

  static async userVerified(userData) {
    const response = await useApiFetch('user_verifications/', {
      method: 'post',
      body: userData
    });
    return response.data;
  }

  static async addTags(data) {
    await useApiFetch('users/add_tags/', {
      method: 'patch',
      body: data
    });
  }

  static async changeEmail(data) {
    const response = await useApiFetch('users/change_email/', {
      method: 'put',
      body: data
    });
    return response.data;
  }
}
