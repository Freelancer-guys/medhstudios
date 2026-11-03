export type ProjectCategory =
  | 'Living Spaces'
  | 'Bedrooms'
  | 'Modular Kitchens'
  | 'Residential Interiors'
  | 'Commercial Interiors';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  images: string[];
  /** Layout hint for the editorial grid. */
  span: 'feature' | 'tall' | 'wide' | 'regular';
}

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Living Spaces',
  'Bedrooms',
  'Modular Kitchens',
  'Residential Interiors',
  'Commercial Interiors',
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'The Courtyard Residence',
    category: 'Living Spaces',
    location: 'Bangalore',
    span: 'feature',
    images: [
      'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7166929/pexels-photo-7166929.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p2',
    title: 'Serene Minimalist Master Suite',
    category: 'Bedrooms',
    location: 'Hyderabad',
    span: 'tall',
    images: [
      'https://images.pexels.com/photos/8135118/pexels-photo-8135118.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/8135248/pexels-photo-8135248.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/36708054/pexels-photo-36708054.png?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p3',
    title: 'Warm Oak & Quartz Culinary Space',
    category: 'Modular Kitchens',
    location: 'Chennai',
    span: 'regular',
    images: [
      'https://images.pexels.com/photos/7515855/pexels-photo-7515855.png?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/7018836/pexels-photo-7018836.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p4',
    title: 'Contemporary Urban Apartment',
    category: 'Residential Interiors',
    location: 'Bangalore',
    span: 'wide',
    images: [
      'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/39828898/pexels-photo-39828898.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p5',
    title: 'Boutique Creative Workspace',
    category: 'Commercial Interiors',
    location: 'Mumbai',
    span: 'regular',
    images: [
      'https://images.pexels.com/photos/32647381/pexels-photo-32647381.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/17748651/pexels-photo-17748651.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/31904494/pexels-photo-31904494.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p6',
    title: 'Earth & Linen Guest Retreat',
    category: 'Bedrooms',
    location: 'Goa',
    span: 'regular',
    images: [
      'https://images.pexels.com/photos/28853343/pexels-photo-28853343.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/4682136/pexels-photo-4682136.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/18285931/pexels-photo-18285931.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p7',
    title: 'Sleek Matte Minimalist Kitchen',
    category: 'Modular Kitchens',
    location: 'Hyderabad',
    span: 'tall',
    images: [
      'https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/6489104/pexels-photo-6489104.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p8',
    title: 'Sunlit Contemporary Villa',
    category: 'Residential Interiors',
    location: 'Coimbatore',
    span: 'regular',
    images: [
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/39829283/pexels-photo-39829283.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'p9',
    title: 'Executive Studio & Lounge',
    category: 'Commercial Interiors',
    location: 'Bangalore',
    span: 'wide',
    images: [
      'https://images.pexels.com/photos/35128914/pexels-photo-35128914.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/20436149/pexels-photo-20436149.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/15063328/pexels-photo-15063328.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
];

/** Editorial image set — each used in exactly one place to avoid repetition. */
export const heroImage =
  'https://images.pexels.com/photos/6934172/pexels-photo-6934172.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const heroInset =
  'https://images.pexels.com/photos/4968698/pexels-photo-4968698.jpeg?auto=compress&cs=tinysrgb&w=800';

export const aboutImage =
  'https://images.pexels.com/photos/19239905/pexels-photo-19239905.jpeg?auto=compress&cs=tinysrgb&w=1400';

export const philosophyImages = {
  personality: 'https://images.pexels.com/photos/39805580/pexels-photo-39805580.jpeg?auto=compress&cs=tinysrgb&w=1200',
  function: 'https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&w=1200',
  detail: 'https://images.pexels.com/photos/6583361/pexels-photo-6583361.jpeg?auto=compress&cs=tinysrgb&w=1000',
};

export const serviceImages: string[] = [
  'https://images.pexels.com/photos/7166929/pexels-photo-7166929.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/7018836/pexels-photo-7018836.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/32647381/pexels-photo-32647381.jpeg?auto=compress&cs=tinysrgb&w=1000',
];
