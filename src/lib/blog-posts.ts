import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export interface BlogPost {
  title: string;
  slug: string;
  body: string;
  image: Omit<ImagePlaceholder, 'id'>;
}

const blogPostsData: { title: string; slug: string; }[] = [
  { title: "A Walker's Guide to Old Montréal", slug: 'old-montreal-guide' },
  { title: 'The Gothic Beauty of Notre-Dame', slug: 'notre-dame-basilica' },
  { title: 'City Vistas from Mount Royal Park', slug: 'mount-royal-park' },
  { title: 'The Ultimate Poutine Experience', slug: 'ultimate-poutine' },
  { title: 'A Feast for the Senses at Jean-Talon', slug: 'jean-talon-market' },
  { title: 'Discovering the Murals of The Plateau', slug: 'plateau-murals' },
];

const placeholderBodies = [
  `<p>Old Montréal is a journey back in time. As you wander through its cobblestone streets, you're surrounded by centuries-old architecture, from the charming Place Jacques-Cartier to the impressive Bonsecours Market. Every corner tells a story, and this guide will help you uncover its best-kept secrets.</p><p>Start your walk at the Old Port, where you can admire the view of the St. Lawrence River and the iconic Clock Tower. From there, delve into the narrow lanes, discover hidden courtyards, and soak in the European atmosphere. Don't forget to visit the Notre-Dame Basilica, a masterpiece of Gothic Revival architecture.</p>`,
  `<p>The Notre-Dame Basilica is not just a place of worship; it's a work of art. Its deep blue ceiling, adorned with golden stars, creates a celestial ambiance that captivates every visitor. The intricate woodwork, stunning stained-glass windows depicting Montréal's religious history, and the massive Casavant Frères pipe organ are all breathtaking.</p><p>Take a guided tour to fully appreciate the history and craftsmanship of this iconic landmark. Whether you're religious or not, the sheer beauty and grandeur of the basilica will leave you in awe.</p>`,
  `<p>For the best views of Montréal, head to Mount Royal Park. This large urban park, designed by Frederick Law Olmsted (who also designed New York's Central Park), is the city's green oasis. A hike to the Kondiaronk Belvedere lookout is rewarded with a stunning panoramic vista of the downtown skyline and the river beyond.</p><p>The park offers more than just views. Explore its network of trails, have a picnic by Beaver Lake, or go skating in the winter. It's a perfect escape from the urban hustle and a favorite spot for locals and tourists alike.</p>`,
  `<p>You can't visit Montréal without trying poutine, and this guide will lead you to the ultimate experience. Forget the imitations; we're talking about authentic Québec poutine with crispy fries, squeaky cheese curds, and rich, savory gravy. From classic diners to gourmet restaurants, we've scouted the best spots to indulge in this iconic dish.</p><p>Whether you prefer it traditional or with a modern twist (think foie gras or pulled pork), Montréal's poutine scene has something for everyone. Prepare for a delicious and satisfying culinary adventure.</p>`,
  `<p>Jean-Talon Market is a feast for the senses. Located in Little Italy, it's one of North America's largest open-air markets. The vibrant colors of fresh fruits and vegetables, the aroma of flowers and spices, and the bustling energy of vendors and shoppers create an unforgettable atmosphere.</p><p>Sample local cheeses, taste artisanal charcuterie, and pick up some of the best maple syrup you'll ever have. The market is a true reflection of Québec's rich agricultural heritage and a must-visit for any food lover.</p>`,
  `<p>The Plateau Mont-Royal is a living art gallery. Its streets are adorned with colorful murals created by local and international artists. The annual MURAL Festival transforms the neighborhood into a vibrant canvas, but you can discover impressive street art here any time of the year.</p><p>This guide will take you on a tour of the most iconic murals and hidden gems. From large-scale portraits to abstract designs, the creativity on display is inspiring. It's a perfect way to explore one of Montréal's trendiest neighborhoods and appreciate its artistic soul.</p>`
];


export const blogPosts: BlogPost[] = blogPostsData.map((post, index) => {
  const imageIndex = index % PlaceHolderImages.length;
  const { id, ...image } = PlaceHolderImages[imageIndex];
  return {
    ...post,
    image,
    body: placeholderBodies[index % placeholderBodies.length]
  };
});

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
