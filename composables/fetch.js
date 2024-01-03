export const useApiFetch = (url, extra_options) => {
  const config = useRuntimeConfig()
  const authToken = AuthToken.get();
  const workspaceToken = WorkspaceToken.get();
  return useFetch(url, {
    ...extra_options,
    baseURL: config.public.apiUrl,
    onRequest({ request, options}) {
      options.headers = options.headers || {}
      if (authToken) {
        options.headers.Authorization = `Token ${authToken}`;
      }
      if (workspaceToken) {
        options.headers['DATAMAKER-Workspace'] = `Token ${workspaceToken}`;
      }
    },
  })
}