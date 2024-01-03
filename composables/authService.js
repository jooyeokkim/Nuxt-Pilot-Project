export class AuthService {
  static async createToken(user, node) {
    AuthToken.set('');
    const fetchResponse = await useApiFetch('auth/token/login/', {
      method: 'post',
      body: {
        email: user.email,
        password: user.password,
      },
      onResponseError({ request, response, options }) {
        if (response.status === 400) {
          node.setErrors(response._data.non_field_errors, {})
        }
        return;
      },
    })
    return fetchResponse.data.value;
  }
}
