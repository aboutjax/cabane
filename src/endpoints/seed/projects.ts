import type { Media, Category } from '@/payload-types'

export type ProjectArgs = {
  featuredImage: Media
  galleryImages: Media[]
  categories: Record<string, Category>
}

function richText(children: any[]) {
  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

function heading(text: string, tag: 'h2' | 'h3' | 'h4' = 'h2') {
  return {
    type: 'heading',
    children: [
      { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text, version: 1 },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    tag,
    version: 1,
  }
}

function paragraph(text: string) {
  return {
    type: 'paragraph',
    children: [
      { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text, version: 1 },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    textFormat: 0,
    version: 1,
  }
}

function mediaBlock(mediaId: number) {
  return {
    type: 'block',
    fields: {
      blockName: '',
      blockType: 'mediaBlock',
      media: mediaId,
    },
    format: '' as const,
    version: 2,
  }
}

export const project1 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Hudson Yards Penthouse',
  slug: 'hudson-yards-penthouse',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('A Residence Above the City'),
    paragraph(
      'Perched atop one of Hudson Yards\u2019 most prestigious towers, this 4,200-square-foot penthouse required a complete interior transformation. The client sought a space that balanced the drama of panoramic Manhattan views with the warmth and intimacy of a true home.',
    ),
    paragraph(
      'Our design strategy centered on restraint\u2014allowing the architecture of the skyline to serve as the primary artwork. A material palette of honed Calacatta marble, blackened steel, and white oak establishes a quiet sophistication throughout. Custom millwork conceals mechanical systems and storage, maintaining clean sight lines from every vantage point.',
    ),
    heading('Living & Entertaining', 'h3'),
    paragraph(
      'The open-plan living and dining area spans nearly 60 feet along the western fa\u00e7ade, oriented to capture sunset views over the Hudson River. A cantilevered fireplace in patinated bronze anchors the seating arrangement, while a concealed bar and catering kitchen support large-scale entertaining.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Private Quarters', 'h3'),
    paragraph(
      'The primary suite occupies the southeast corner, with floor-to-ceiling glazing on two exposures. A freestanding soaking tub in carved Bianco Dolomiti marble sits before the window wall, framing views of the Empire State Building. The dressing room features backlit onyx shelving and integrated climate control for a collection of fine garments.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Private Client',
  date: '2024-03-15T00:00:00.000Z',
  location: 'Hudson Yards, NYC',
  projectStatus: 'completed' as const,
  description:
    'A 4,200 sq ft penthouse interior renovation featuring custom millwork, honed marble surfaces, and floor-to-ceiling glazing with panoramic views of the Manhattan skyline.',
  categories: [categories['Residential']?.id].filter(Boolean),
  meta: {
    title: 'Hudson Yards Penthouse | Interior Design',
    description:
      'Luxury penthouse interior in Hudson Yards featuring bespoke finishes, panoramic skyline views, and a refined material palette of marble, bronze, and white oak.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project2 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Tribeca Loft Renovation',
  slug: 'tribeca-loft-renovation',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Honoring Industrial Heritage'),
    paragraph(
      'This 3,800-square-foot loft in a former textile warehouse presented a compelling tension: how to create a refined family home while preserving the raw character that makes Tribeca lofts irreplaceable. The Kaplan family\u2014a couple with two young children\u2014needed flexible spaces that could evolve with their family.',
    ),
    paragraph(
      'We retained the original cast-iron columns, timber beams, and portions of exposed brick, treating them as a canvas against which contemporary interventions are carefully placed. New insertions are deliberately legible\u2014a blackened steel mezzanine, poured-in-place concrete kitchen island, and frameless glass partitions\u2014so the dialogue between old and new remains honest.',
    ),
    heading('Open Living', 'h3'),
    paragraph(
      'The main living space preserves the loft\u2019s characteristic openness with 13-foot ceilings and original timber flooring. A double-height bookshelf wall in oiled walnut serves as both library and room divider, with a rolling ladder providing access to upper shelves. South-facing factory windows flood the space with natural light throughout the day.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Family Integration', 'h3'),
    paragraph(
      'Rather than compartmentalizing children\u2019s spaces, we wove play and learning into the architecture itself. A reading nook is carved into the base of the mezzanine stair. The kitchen island doubles as a homework station with concealed power and task lighting. Sliding barn doors on reclaimed hardware allow bedrooms to open to or close off from the central living area.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'The Kaplan Family',
  date: '2023-11-20T00:00:00.000Z',
  location: 'Tribeca, NYC',
  projectStatus: 'completed' as const,
  description:
    'A sensitive renovation of a 3,800 sq ft former textile warehouse into a family loft, preserving cast-iron columns and timber beams while introducing contemporary living spaces.',
  categories: [categories['Residential']?.id].filter(Boolean),
  meta: {
    title: 'Tribeca Loft Renovation | Adaptive Residential',
    description:
      'Tribeca warehouse loft transformed into a modern family home, balancing industrial heritage with contemporary comfort across 3,800 square feet.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project3 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Flatiron Office Tower',
  slug: 'flatiron-office-tower',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Redefining the Workplace'),
    paragraph(
      'Meridian Capital Group commissioned a 28-story office tower in the Flatiron District that challenges the conventions of speculative office development. Rather than maximizing leasable area at the expense of occupant experience, the design prioritizes daylight, air quality, and biophilic connection\u2014resulting in a building that commands premium rents while achieving LEED Platinum certification.',
    ),
    paragraph(
      'The tower\u2019s massing steps back at three intervals, creating planted terraces accessible to tenants on floors 8, 16, and 24. A triple-height lobby at grade connects to a through-block passage, activating the streetscape and providing a public shortcut between Broadway and Fifth Avenue.',
    ),
    heading('Facade System', 'h3'),
    paragraph(
      'The curtain wall employs a unitized system of triple-glazed panels with integrated ceramic frit patterns that reduce solar heat gain by 40% while maintaining transparency. Operable windows on every floor\u2014unusual for a building of this scale\u2014allow natural ventilation during temperate months, reducing mechanical cooling loads and connecting occupants to the urban environment.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Ground Plane', 'h3'),
    paragraph(
      'At street level, the building pulls back from the lot line to create a generous covered arcade. Retail spaces with 18-foot ceilings and operable storefronts animate the pedestrian experience. The lobby features a living wall by a botanical artist, filtering air and softening the transition from city to workplace.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Meridian Capital Group',
  date: '2025-06-01T00:00:00.000Z',
  location: 'Flatiron District, NYC',
  projectStatus: 'inProgress' as const,
  description:
    'A 28-story LEED Platinum office tower featuring stepped planted terraces, a unitized triple-glazed facade, and a through-block public passage activating the Flatiron streetscape.',
  categories: [categories['Commercial']?.id].filter(Boolean),
  meta: {
    title: 'Flatiron Office Tower | Commercial Architecture',
    description:
      'A 28-story sustainable office tower in the Flatiron District with planted terraces, triple-glazed curtain wall, and LEED Platinum certification.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project4 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Williamsburg Mixed-Use Development',
  slug: 'williamsburg-mixed-use',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Building Community at the Waterfront'),
    paragraph(
      'This 120,000-square-foot mixed-use development on the Williamsburg waterfront weaves together 84 residential units, 15,000 square feet of ground-floor retail, and a publicly accessible rooftop park. The project responds to the neighborhood\u2019s industrial past while addressing its rapidly evolving present\u2014creating architecture that feels both rooted and forward-looking.',
    ),
    paragraph(
      'The building is organized as three interlocking volumes clad in a combination of Corten steel, zinc panels, and reclaimed brick sourced from a demolished warehouse on the adjacent lot. This material strategy grounds the building in Williamsburg\u2019s industrial vernacular while the volumetric articulation breaks down the perceived mass, maintaining a human scale along Kent Avenue.',
    ),
    heading('Residential Program', 'h3'),
    paragraph(
      'Units range from studios to three-bedroom family apartments, all oriented to maximize either Manhattan skyline views to the west or courtyard garden views to the east. Cross-ventilation is achieved in 90% of units through careful massing and operable windows. Shared amenities include a double-height fitness studio, co-working lounge, and a children\u2019s playroom opening onto a landscaped courtyard.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Public Realm', 'h3'),
    paragraph(
      'The ground floor is conceived as an extension of the streetscape. Retail bays with 16-foot ceilings and operable glazed walls accommodate a curated mix of local food vendors, a neighborhood bookshop, and a ceramics studio. A publicly accessible rooftop park\u2014the first of its kind in Williamsburg\u2014provides a quarter-acre of native plantings, seating, and unobstructed views of the East River.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Borough Partners LLC',
  date: '2024-09-10T00:00:00.000Z',
  location: 'Williamsburg, Brooklyn',
  projectStatus: 'completed' as const,
  description:
    'A 120,000 sq ft waterfront development comprising 84 residential units, ground-floor retail, and a publicly accessible rooftop park, clad in Corten steel, zinc, and reclaimed brick.',
  categories: [categories['Commercial']?.id, categories['Residential']?.id].filter(Boolean),
  meta: {
    title: 'Williamsburg Mixed-Use Development | Waterfront Living',
    description:
      'Mixed-use waterfront development in Williamsburg featuring 84 residences, curated retail, and Brooklyn\u2019s first publicly accessible rooftop park.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project5 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Upper East Side Townhouse',
  slug: 'upper-east-side-townhouse',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Restoring a Gilded Age Landmark'),
    paragraph(
      'This five-story limestone townhouse on East 72nd Street had endured decades of unsympathetic alterations before our client acquired it with the ambition of a comprehensive restoration. The project demanded forensic research into the 1903 Beaux-Arts original, combined with the discreet integration of 21st-century building systems\u2014geothermal heating, motorized skylight systems, and a residential elevator\u2014behind period-appropriate finishes.',
    ),
    paragraph(
      'Working closely with the Landmarks Preservation Commission, we restored the street facade to its original composition: rusticated limestone base, piano nobile with arched French doors, and a copper mansard roof. The rear facade was reimagined with a contemporary intervention\u2014a full-height glass curtain wall that floods the stairwell and interior rooms with northern light while remaining invisible from the street.',
    ),
    heading('Interior Restoration', 'h3'),
    paragraph(
      'The parlor floor retains original plaster ceiling medallions and herringbone oak parquet, meticulously repaired and refinished. New additions\u2014a sculptural steel-and-glass stair connecting the garden level to the parlor floor, and a kitchen carved from Pietra Cardosa stone\u2014are intentionally contemporary, creating a legible timeline of the building\u2019s evolution.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Garden & Rooftop', 'h3'),
    paragraph(
      'The rear garden was redesigned as an extension of the ground-floor entertaining spaces, with bluestone paving, a reflecting pool, and mature Japanese maples providing privacy from neighboring buildings. A new rooftop terrace with an outdoor kitchen and planted perimeter offers panoramic views of Central Park\u2014a private retreat above the city.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Private Client',
  date: '2024-05-22T00:00:00.000Z',
  location: 'Upper East Side, NYC',
  projectStatus: 'completed' as const,
  description:
    'A comprehensive restoration of a 1903 Beaux-Arts limestone townhouse, integrating geothermal systems and a contemporary rear glass facade while preserving landmark-designated period details.',
  categories: [categories['Residential']?.id].filter(Boolean),
  meta: {
    title: 'Upper East Side Townhouse | Historic Restoration',
    description:
      'Full restoration of a Gilded Age townhouse on East 72nd Street, blending Beaux-Arts preservation with contemporary interventions and modern building systems.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project6 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Chelsea Gallery & Studio',
  slug: 'chelsea-gallery-studio',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('A Canvas for Art and Making'),
    paragraph(
      'The Ellsworth Art Foundation required a dual-purpose space in Chelsea\u2019s gallery district: 6,000 square feet of museum-quality exhibition space on the ground floor, with a 3,500-square-foot artist residency studio above. The challenge lay in serving two fundamentally different programs\u2014one demanding controlled stillness, the other productive chaos\u2014within a single building envelope.',
    ),
    paragraph(
      'The ground-floor gallery is a study in precision. Poured concrete floors are ground to a mirror finish. Walls are built from a proprietary plaster system achieving Class A fire rating and gallery-standard flatness. A grid of recessed tracks in the 14-foot ceiling accommodates reconfigurable lighting, allowing curators to transform the space for each exhibition without visible infrastructure.',
    ),
    heading('Exhibition Systems', 'h3'),
    paragraph(
      'Climate control meets museum standards: temperature held at 70\u00b0F \u00b11\u00b0, relative humidity at 50% \u00b15%. A dedicated air handling unit with HEPA filtration protects works on paper and textiles. Movable partition walls on a concealed floor-track system allow the open plan to be subdivided into intimate rooms or opened entirely for large-scale installations.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Artist Residency', 'h3'),
    paragraph(
      'Upstairs, the residency studio embraces the opposite ethos. Raw concrete block walls, stained and scarred by previous industrial tenants, are left exposed. A north-facing sawtooth skylight\u2014the building\u2019s original feature, carefully restored\u2014delivers even, diffuse light ideal for painting and sculpture. A heavy-duty freight elevator connects both levels, allowing large works to move between creation and exhibition seamlessly.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Ellsworth Art Foundation',
  date: '2023-08-14T00:00:00.000Z',
  location: 'Chelsea, NYC',
  projectStatus: 'completed' as const,
  description:
    'A 9,500 sq ft dual-purpose space combining a museum-quality ground-floor gallery with climate control and flexible exhibition systems, and a raw artist residency studio with restored sawtooth skylights above.',
  categories: [categories['Commercial']?.id].filter(Boolean),
  meta: {
    title: 'Chelsea Gallery & Studio | Cultural Architecture',
    description:
      'Dual-purpose art space in Chelsea featuring a climate-controlled exhibition gallery and artist residency studio with restored industrial skylights.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project7 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'DUMBO Waterfront Pavilion',
  slug: 'dumbo-waterfront-pavilion',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('A Civic Threshold Between City and Water'),
    paragraph(
      'Our competition entry for the Brooklyn Bridge Park Conservancy envisions a 12,000-square-foot public pavilion at the foot of Main Street in DUMBO. Sited at the intersection of two iconic bridges and the East River, the pavilion is conceived not as an object but as a landscape\u2014a topographic fold that rises from the park\u2019s terrain to create sheltered gathering spaces beneath, and a publicly accessible green roof above.',
    ),
    paragraph(
      'The structure is composed of mass timber portal frames\u2014glue-laminated Douglas fir arches spanning 80 feet\u2014that touch the ground lightly at six points. Between the arches, a membrane roof of ETFE cushions admits diffuse daylight while shedding rain to bioswales integrated into the surrounding landscape. The result is a space that feels simultaneously enclosed and open, protected and permeable.',
    ),
    heading('Program', 'h3'),
    paragraph(
      'The pavilion houses a seasonal market hall, community meeting rooms, public restrooms, and a caf\u00e9 with outdoor seating oriented toward the Manhattan skyline. All program elements are organized along a central spine\u2014a covered promenade that extends the existing park path network, allowing pedestrians to pass through the building as naturally as walking through a grove of trees.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Sustainability', 'h3'),
    paragraph(
      'The project targets Living Building Challenge certification. Mass timber construction sequesters 480 tons of carbon. Photovoltaic arrays integrated into the ETFE roof generate 120% of the building\u2019s annual energy demand. Rainwater is captured, filtered through the landscape, and stored in underground cisterns for irrigation and toilet flushing. The pavilion is designed to be a net-positive contributor to its ecosystem.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Brooklyn Bridge Park Conservancy',
  date: '2025-01-08T00:00:00.000Z',
  location: 'DUMBO, Brooklyn',
  projectStatus: 'competition' as const,
  description:
    'A competition entry for a 12,000 sq ft public waterfront pavilion using mass timber portal frames and ETFE membrane roof, targeting Living Building Challenge certification.',
  categories: [categories['Public Space']?.id].filter(Boolean),
  meta: {
    title: 'DUMBO Waterfront Pavilion | Competition Entry',
    description:
      'Mass timber waterfront pavilion in DUMBO designed as a civic landscape, featuring ETFE roof, seasonal market, and Living Building Challenge sustainability targets.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project8 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Midtown Hospitality Suite',
  slug: 'midtown-hospitality-suite',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Intimate Luxury at Forty Stories'),
    paragraph(
      'The Whitfield Hotel Group engaged us to design a 22-room boutique floor within their Midtown tower\u2014a hotel-within-a-hotel concept targeting extended-stay guests and corporate retreats. The brief called for spaces that feel more like a private members\u2019 club than a conventional hotel, with residential proportions, curated art, and bespoke furnishings throughout.',
    ),
    paragraph(
      'We began by demolishing the existing standard hotel layout on the 40th floor, removing corridor walls to create a central lounge that functions as a living room for the floor\u2019s guests. Rooms radiate from this shared space, their entries recessed into alcoves to create a sense of arrival and privacy. The palette draws from the warm tones of a Manhattan autumn: burnished brass, tobacco leather, figured walnut, and Venetian plaster in a custom terracotta hue.',
    ),
    heading('Guest Rooms', 'h3'),
    paragraph(
      'Each of the 22 rooms is individually configured\u2014no two are identical. Corner suites feature deep soaking tubs positioned at the window wall, framing nighttime views of the Chrysler Building. Materials are tactile and layered: linen wall coverings, hand-knotted wool rugs, bedside tables in solid travertine. Lighting is entirely indirect, with cove details and sculptural pendants replacing the flat, even illumination typical of hotel rooms.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Central Lounge & Dining', 'h3'),
    paragraph(
      'The floor\u2019s central lounge seats 35 across a series of intimate arrangements: fireside wingbacks, a communal library table, and window banquettes. An open kitchen serves a rotating menu from a guest chef program, while a dedicated sommelier curates a cellar of rare and natural wines. The space operates on the rhythm of a private home\u2014breakfast is unhurried, afternoon tea is a ritual, and evening cocktails encourage conversation among strangers.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'The Whitfield Hotel Group',
  date: '2024-01-30T00:00:00.000Z',
  location: 'Midtown, NYC',
  projectStatus: 'completed' as const,
  description:
    'A 22-room boutique hotel floor redesigned as a private members\u2019 club, featuring individually configured rooms, a central guest lounge, and bespoke furnishings in brass, walnut, and Venetian plaster.',
  categories: [categories['Hospitality']?.id].filter(Boolean),
  meta: {
    title: 'Midtown Hospitality Suite | Boutique Hotel Design',
    description:
      'Boutique hotel-within-a-hotel on the 40th floor of a Midtown tower, with 22 individually designed rooms and a private lounge and dining experience.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project9 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'Greenpoint Passive House',
  slug: 'greenpoint-passive-house',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Building Without Compromise'),
    paragraph(
      'This single-family residence in Greenpoint is one of the first Certified Passive House buildings in Brooklyn\u2014a ground-up, three-story home that consumes 90% less heating energy than a conventional building of equal size. The client, an environmental engineer, challenged us to prove that radical sustainability and architectural beauty are not competing priorities.',
    ),
    paragraph(
      'The building envelope is the hero of this project. Walls are constructed with 14 inches of continuous mineral wool insulation outboard of a cross-laminated timber structural shell. Triple-glazed, thermally broken windows from a German manufacturer are precisely positioned to optimize passive solar gain in winter while deep exterior reveals and operable exterior blinds prevent overheating in summer.',
    ),
    heading('Energy Systems', 'h3'),
    paragraph(
      'A compact energy recovery ventilator supplies fresh filtered air to every room while recovering 92% of outgoing heat\u2014eliminating the need for a conventional furnace. A single air-source heat pump provides supplemental heating and cooling on extreme days. Rooftop photovoltaic panels generate more electricity annually than the house consumes, feeding surplus energy back to the grid.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Living Spaces', 'h3'),
    paragraph(
      'Inside, the house feels anything but austere. Cross-laminated timber ceilings are left exposed, their honey-toned grain warming every room. The open-plan ground floor connects kitchen, dining, and living areas to a south-facing rear garden through triple-glazed sliding doors. Upper floors house three bedrooms, a home office, and a rooftop terrace with raised vegetable beds and beehives\u2014a productive landscape contributing to the household\u2019s self-sufficiency.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Private Client',
  date: '2025-09-15T00:00:00.000Z',
  location: 'Greenpoint, Brooklyn',
  projectStatus: 'inProgress' as const,
  description:
    'One of Brooklyn\u2019s first Certified Passive House residences: a three-story CLT home with 14-inch mineral wool insulation, triple glazing, and net-positive energy performance.',
  categories: [categories['Residential']?.id].filter(Boolean),
  meta: {
    title: 'Greenpoint Passive House | Sustainable Residential',
    description:
      'Certified Passive House in Greenpoint, Brooklyn\u2014a net-positive energy residence built with cross-laminated timber and 90% less heating demand than conventional construction.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})

export const project10 = ({ featuredImage, galleryImages, categories }: ProjectArgs) => ({
  title: 'SoHo Flagship Retail',
  slug: 'soho-flagship-retail',
  _status: 'published' as const,
  featuredImage: featuredImage.id,
  content: richText([
    heading('Retail as Architecture'),
    paragraph(
      'When Maison Laurent selected a landmark cast-iron building on Greene Street for their North American flagship, they sought an architectural partner who could transform 8,500 square feet of raw commercial space into an immersive brand experience\u2014one that honors SoHo\u2019s industrial heritage while expressing the fashion house\u2019s Parisian identity.',
    ),
    paragraph(
      'Our intervention begins at the facade. Working within Landmarks Commission guidelines, we restored the original cast-iron columns and installed floor-to-ceiling bronze-framed glass panels that transform the storefront into a luminous vitrine visible from the cobblestone street. At night, the building glows like a lantern, drawing pedestrians from blocks away.',
    ),
    heading('Interior Experience', 'h3'),
    paragraph(
      'Inside, the space unfolds as a sequence of curated rooms rather than a conventional open retail floor. Guests enter through a double-height vestibule of hand-applied Venetian plaster in a pale rose hue\u2014a color drawn from the brand\u2019s signature packaging. Beyond, a series of arched openings\u2014referencing SoHo\u2019s cast-iron architecture\u2014frame individual salons dedicated to ready-to-wear, leather goods, fragrance, and a private VIP fitting suite.',
    ),
    mediaBlock(galleryImages[0]?.id),
    heading('Materiality', 'h3'),
    paragraph(
      'Every surface is considered. Floors alternate between reclaimed French oak parquet and polished Rosso Levanto marble. Display fixtures are milled from solid blocks of travertine, their weight and permanence a counterpoint to the ephemeral nature of fashion. A monumental staircase in folded blackened steel connects the ground floor to a mezzanine lounge where clients may browse collections over espresso\u2014a gesture toward the brand\u2019s belief that shopping should be an unhurried pleasure.',
    ),
  ]),
  gallery: galleryImages.map((img) => ({ image: img.id })),
  client: 'Maison Laurent',
  date: '2024-07-18T00:00:00.000Z',
  location: 'SoHo, NYC',
  projectStatus: 'completed' as const,
  description:
    'An 8,500 sq ft flagship retail interior within a landmark SoHo cast-iron building, featuring restored facade, Venetian plaster salons, travertine display fixtures, and a monumental blackened steel staircase.',
  categories: [categories['Commercial']?.id].filter(Boolean),
  meta: {
    title: 'SoHo Flagship Retail | Luxury Retail Design',
    description:
      'Maison Laurent\u2019s North American flagship in a landmark SoHo cast-iron building, blending Parisian luxury with industrial heritage across 8,500 square feet.',
    image: featuredImage.id,
  },
  publishedAt: new Date().toISOString(),
})
