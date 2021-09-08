function Post({ post }) {
  // Render post...
  return (
    <div>
      <p className="hideMobile">hideMobile</p>
      <p className="showTablet">showTablet</p>
      <p className="showDestkop">showDestkop</p>
      <p className="hideTablet">hideTablet</p>
      <p className="hideDesktop">hideDesktop</p>
      <p className="showMobile">showMobile</p>
    </div>
  )

}


// This also gets called at build time
export async function getServerSideProps({ params }) {
  
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { a:1 } }
}

export default Post