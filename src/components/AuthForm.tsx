import { Form, Link, useSearchParams, useActionData } from 'react-router-dom';
import { httpReqError } from '../types.ts';

function AuthForm() {
  const data = useActionData() as httpReqError;

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <>
      <Form method="POST" className="form">
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.message && <p className="error">{data.message}</p>}
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err: string) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className="actions">
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
