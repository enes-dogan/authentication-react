import NewsletterSignup from '../components/NewsletterSignup.tsx';
import PageContent from '../components/PageContent.tsx';

import { newsletterActionFn } from '../types.ts';

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

/* eslint-disable-next-line react-refresh/only-export-components */
export const action: newsletterActionFn = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');

  console.log(email);
  return { message: 'Signup successful!' };
};
