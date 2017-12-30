// @flow
type AuthResponse = {
  auth: boolean,
};
export async function checkAlreadyAuthed() {
  const response: Response = await fetch('/api/login', {
    method: 'GET',
    credentials: 'same-origin',
  });
  if (response.ok) {
    const res: AuthResponse = await (response.json(): Promise<AuthResponse>);
    return res.auth;
  } else {
    throw new Error(`Error communicating with authentication server: ${response.statusText}`);
  }
}
