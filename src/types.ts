export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'principales' | 'especialidades' | 'postres' | 'vinos';
  image: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Paella de Marisco',
    description: 'Arroz bomba seleccionado con los mariscos más frescos traídos directamente de la lonja cada mañana.',
    price: 28,
    category: 'principales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADgKU_X3sfckWM8fYwMl-Y7JJCYnZzI2-SXPV7oYzQO_-GlpU_C6sztv0O6FJXvCLzsIgnvu3hutGdtF8S0b3GmlZKYGmEAdMZROC1YVWeXun3TiN-hWB3tocrRmPOi5GiQ3Dmgco2qNaJFBBCAwj3uAeg8bRwhqPhNgRbVyJYyfxQy8QY63FtIQlQYLl42mjEsPW0kg7qPRAEWDpVDDpgU-PSIqs6TdnhIjTFSqM8qzYQEx_hRqba4DPDj54Tz3Qt8fMrawAMAwY'
  },
  {
    id: '2',
    name: 'Solomillo al Romero',
    description: 'Corte premium de ternera gallega aromatizado con hierbas silvestres y reducción de vino tinto.',
    price: 32,
    category: 'principales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl8ZPj-jTyYpkmkuevcx_zOKytb9VZ5MTLJuqiGY5Cvfar55k23F_i6DGPj75PQzewQnkqW0OvfaZ0woacKUCg8Qc9nMwcGnG6a-h3xtvkAdad4bDGaPeJJ21ii8Wr410m6wkYR4uDs8KMRQwTCHbVqmCK1NOrEqGNk7ZO-2012qlhjbtNIfp47qwd55uFJfBJF2QxmxHvSM7rhMzGUnavtjabaIma_bzq1-r99I0Zs0k74mp3IeezLtc1X2Dz0sJEyTPethaN-fk'
  },
  {
    id: '3',
    name: 'Ensalada Laurel',
    description: 'Mix de hojas verdes, higos de temporada, nueces caramelizadas y nuestra exclusiva reducción de módena.',
    price: 16,
    category: 'entradas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiO-wH1_5oXH0LuJ-trrU8w1GGqP1LwV6an6iNaflF9mG1WYMghT4ChhIPh9OccYji8cmCb6qwgl7_rCYZr6LjMJQbbrBHeDiqMLVbsM_d9a6eQ0Db7iZEP3jcIYqlSD4hdboqAHPqAEddNK0TvzLtu9ZiOaIXES8cHqtp1jgncwTqKUwBQi0O3u49hmvvZwckXFuO5Yl0r92pqRbrNkoeOgcQ3uH8q3kIvbIqvPYPD0ZGPyU7I1pldn_KOpmYueq_LkTCcZSVE_8'
  },
  {
    id: '4',
    name: 'Tartar de Atún Rojo',
    description: 'Con emulsión de wasabi, aguacate maduro y crujiente de alga nori.',
    price: 18,
    category: 'entradas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTOmRDnHDhguNMiQb4cLtvFtb_6ld5k0QlQT-xKacEpElLwuftU_PgrM5i8sE-ytXdCOa6A4C7NUtO2_1KeYzUhuf4AHLcwDwhhHl7AtEqtPJf2TYXr48NUMNW2TJFe94H3h4I3p0vP6o7g9zwwYQ2ddxgleKGbInO9s25ABsHVSzYBTbUp5YP7N6NT641Mo7wU-Xw2XfZzlwbury8nxF7UgRknXhDK4yRFiKLCPOiYu1k4G5ron_M33bfYvEn7REsy-BIa66B-_8'
  },
  {
    id: '5',
    name: 'Arroz Meloso de Bogavante',
    description: 'Elaborado con sofrito artesanal y bogavante nacional. (Mínimo 2 pers.)',
    price: 32,
    category: 'especialidades',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk7KqWccQqj5VUrP0rb2PNPbLFXJEDOOj5vGytYCvbX1abzZlnNlkMPiagmn1yrXeLCYqmRPDAygJiokwqPA36i_jbv_5gNiEQPgMDkxZmE9WfrjQeVNj2U7Eo8FOCvqcPlkfeNJe3Silt3_sxwIhTRuQb0CAk9j4kX-IE2o97ObSQFG8shdUMPGy9YM9nIJkoook-1nVvizLLJeLLbNx-wtqFxjA6JtB4LVfUaPp3rlX-c17a5MnnaTsVwYVVn0Xu4XpDd70-XnI'
  },
  {
    id: '6',
    name: 'Tarta de Queso Casera',
    description: 'Nuestra famosa tarta horneada diariamente con queso de la zona y coulis de frutos rojos.',
    price: 8,
    category: 'postres',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWFoCo2S04EKKI4aDAtUqrck1jb5NZUUpcjAhlka1dj0nXOt6cv-hkKUNRW-QOPU-NH5m18YrIr_XWI0fRLs04SRhVC5ApEb3evOBSVIcpXLwz1ufXzbz9o_oy8Fo0vaRt6dlap4R0QV2bG6-BVT-T-ao-Clp8BwP4_s5POz51iushJWVOPgtJxMFSG7QAWwm7fQslg5Wi1mvrZyQRVwIvSMYQMP-uEuMqpz7_OvL8kC6yLNxeBbnO8dlg0fLkXnHfkT2xTs-mYR4'
  },
  {
    id: '7',
    name: 'Vino Tinto Reserva',
    description: 'Selección especial de la casa, con cuerpo y notas de madera.',
    price: 24,
    category: 'vinos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsYF33DESJmCwtR9LZgSu5UB2VbLOb-c_4aTPZd601_ATdiecobCgZjrLwQ027J60S-pKbKzD4rsgQcflDwkurVnm2XqRU06jf7sib80OMt4y72ViyLbNC6dHCd53yxQbviLwaWdNq5NQXPtSXWuLaxqI5Hj7NcX2E6dr2X6i22cr4IZ_Pyr9Kww3hXZsKfpbGW3SFCtXCkMpbo8-whHI4fCz4lVFPlMjiczOTJW3nF8a144pGWDhrlCuhAHeHRnQ0dllg568y3BQ'
  }
];
