import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <Spinner size="xl" />
        <p className="mt-4 text-gray-600">Loading content, please wait...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-red-600">Something went wrong.</h2>
        <p className="mt-2 text-gray-600">We couldn’t load the post. Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="p-6 flex flex-col max-w-6xl mx-auto min-h-screen bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-4">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-3"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-4 p-3 max-h-[320px] w-full object-cover rounded-lg shadow-md"
      />
      <div className="flex justify-between p-4 border-b border-slate-300 text-xs text-gray-600">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} min read
        </span>
      </div>
      <div
        className="p-4 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="max-w-4xl mx-auto w-full mt-6">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />

      <div className="flex flex-col justify-center items-center mt-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
