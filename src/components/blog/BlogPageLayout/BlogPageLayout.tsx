import { Container, Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { PostProps } from '../../../lib/studio/types';
import _BlogPageAuthorCard from './_BlogPageAuthorCard';
import _BlogPageHeader from './_BlogPageHeader';
import _BlogPageMain from './_BlogPageMain';
import { urlForImage } from '../../../lib/studio/urlForImage';
import { useRouter } from 'next/router';

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  const { seo } = props;
  const router = useRouter();
  return (
    <Container as={Stack} spacing={16} my={16} alignItems="center" maxW="8xl">
      <NextSeo
        title={seo.seoMetadata.title}
        description={seo.seoMetadata.description}
        canonical={`http://localhost:3000${router.asPath}`}
        openGraph={{
          type: 'article',
          url: `http://localhost:3000${router.asPath}`,
          title: seo.seoMetadata.title,
          description: seo.seoMetadata.description,
          images: [
            {
              url: urlForImage(seo.seoOpenGraph.shareImg).url(),
            },
          ],
        }}
      />
      {props.coverPhoto && Object.keys(props.coverPhoto).length > 2 && (
        <_BlogPageHeader coverPhoto={props.coverPhoto} />
      )}
      <_BlogPageMain {...props} />
      <_BlogPageAuthorCard author={props.author} />
    </Container>
  );
};

export default BlogPageLayout;
