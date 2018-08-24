//Default Object Values to Function Arguments
const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
};

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
};

openGraphMetadata(blog);