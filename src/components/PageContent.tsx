import { PageContentProps } from '../types.ts';

export default function PageContent({ title, children }: PageContentProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
