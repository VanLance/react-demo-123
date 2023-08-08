import Body from '../component/Body';

export default function Posts() {
  const posts: Postable[] = [
    {
      body: 'Insomnia Post 2',
      timestamp: 'Tue, 08 Aug 2023 14:30:12 GMT',
    },
    {
      body: 'Matrix in React',
      timestamp: 'Tue, 08 Aug 2023 14:30:25 GMT',
    },
    {
      body: 'React is a Powerful library',
      timestamp: 'Tue, 08 Aug 2023 14:30:44 GMT',
    },
    {
      body: 'How dare you call React a framework, Where is the router',
      timestamp: 'Tue, 08 Aug 2023 14:31:06 GMT',
    },
  ];
  // useEffect(()=>{},[posts])

  return (
    <Body sidebar={true}>
      <h2>Posts</h2>
      <>
        {posts.map((post: Postable,i:number) => {
          return (
            <p key={i}>
              {post.body} {post.timestamp.toLocaleString()}
            </p>
          );
        })}
      </>
    </Body>
  );
}
