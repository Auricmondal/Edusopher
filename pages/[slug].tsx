import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import { Posts } from "../typings";
import Link from "next/link";
import styles from "../styles/blogs.module.css";

interface Props {
  posts: [Posts];
}
const Slug = ({ posts }: Props) => {
  const toUpFirst = (name) => {
    if (name) return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.blogs}>
      <Head>
        <title>Edusopher | {toUpFirst({ slug }.slug)} </title>
      </Head>

      <h1>{slug}</h1>

      <div className={styles.posts}>
        {posts &&
          posts.map((post) => (
            <Link key={post._id} href={`/blogs/${post.slug.current}`}>
              <div className={styles.post}>
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    className={styles.mainimg}
                  />
                )}
                <div className={styles.cardcont}>
                  <div>
                    <p>{post.title}</p>

                    <p>
                      {post.description} by {post.author.name} on{" "}
                      {new Date(post._createdAt).toLocaleDateString("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <img
                    className={styles.authorimg}
                    src={urlFor(post.author.image).url()}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
    category,
   } `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((posts: Posts) => ({
    params: {
      slug: posts.category,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post"&& category==$slug]{
        _createdAt,
        category,
         _id,
        title,
        author ->{
        name,
        image
      },
      description,
      slug,
      mainImage,
    }
    `;

  const posts = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};
