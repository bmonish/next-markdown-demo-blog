import Link from "next/link";
import Image from "next/image";

export default function Post({ post: { frontmatter, slug } }) {
  const { cover_image, date, title, excerpt } = frontmatter;

  return (
    <div class="card">
      <Image
        src={cover_image}
        alt=""
        layout="responsive"
        width="300"
        height="200"
      />

      <div className="post-date">Posted on {date}</div>

      <h3>{title}</h3>

      <p>{excerpt}</p>

      <Link href={`/blog/${slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
