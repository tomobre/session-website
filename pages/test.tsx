import classNames from 'classnames';

import { Layout } from '@/components/ui';
import Container from '@/components/Container';
import METADATA from '@/constants/metadata';

export default function Custom404() {
  return (
    <Layout title="Page not found" metadata={METADATA[404]}>
      <section>
        <iframe src="https://staging.oxen.io/"></iframe>
      </section>
    </Layout>
  );
}
