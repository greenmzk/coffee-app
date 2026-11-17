// Brew Day Instagram recipe card, 1080 × 1080.
export const RECIPE_CARD_SIZE = 1080;

const blue = '#0b4f9c';
const deepBlue = '#083d79';
const cream = '#f7f2ea';
const ink = '#18334f';
const muted = '#425c78';
const rule = '#bbc7cf';
const sans = '"Noto Sans CJK JP", "Hiragino Sans", Meiryo, sans-serif';
const serif = 'Georgia, "Liberation Serif", "Noto Serif CJK JP", "Yu Mincho", serif';

const iconPaths = {
  "beans": "M15.33 1.48L13.45 1.84L11.43 2.61L10.05 3.35L8.29 4.61L6.88 5.90L5.36 7.66L3.62 10.55L3.00 12.06L2.48 14.07L2.32 15.46L2.38 17.16L2.76 18.70L3.49 20.11L4.39 21.12L5.52 21.88L7.16 22.41L9.55 22.43L11.50 22.00L13.57 21.13L15.71 19.75L17.47 18.14L19.00 16.21L20.27 13.95L21.01 12.06L21.65 9.17L21.64 6.66L21.12 4.64L20.24 3.13L18.98 2.09L17.60 1.59ZM15.82 2.38L17.22 2.46L18.30 2.88L16.32 4.64L14.52 6.78L13.40 8.79L12.48 11.43L11.86 12.69L10.70 14.20L7.28 17.49L6.40 18.99L5.90 20.87L5.78 20.92L4.77 20.14L4.09 19.23L3.60 18.10L3.34 16.84L3.35 15.08L3.62 13.45L4.25 11.56L4.98 10.05L6.02 8.42L7.51 6.66L10.05 4.48L12.69 3.09L14.20 2.59ZM19.01 3.64L19.23 3.52L19.67 4.01L20.41 5.52L20.70 7.16L20.66 9.17L20.28 11.06L19.64 12.94L17.89 16.09L15.71 18.51L14.58 19.40L12.69 20.52L10.81 21.25L9.55 21.51L8.16 21.59L6.91 21.38L7.14 19.73L7.85 18.35L8.79 17.20L11.43 14.80L12.83 12.94L14.40 8.92L15.16 7.54L16.66 5.65Z",
  "dripper": "M2.10 2.64L1.57 2.88L1.46 3.48L6.49 14.88L6.42 15.03L4.74 15.08L4.02 15.62L2.45 19.80L2.52 20.52L2.82 21.00L3.18 21.26L3.90 21.40L16.98 21.40L17.94 21.06L18.35 20.52L18.41 19.80L16.86 15.60L16.14 15.07L14.46 15.03L14.30 14.88L14.97 13.44L17.34 12.52L19.38 11.46L20.78 10.44L21.68 9.48L22.26 8.47L22.49 7.32L22.42 6.00L22.04 5.16L20.94 4.54L19.02 4.37L19.34 3.24L19.20 2.88L18.78 2.61ZM2.56 3.48L18.18 3.46L18.29 3.60L13.26 15.00L8.10 15.04L7.62 15.03L7.46 14.88ZM18.49 5.40L20.22 5.33L20.82 5.47L21.21 5.76L21.43 6.12L21.52 6.72L21.46 7.68L21.23 8.40L20.44 9.48L19.26 10.48L17.34 11.55L15.54 12.28ZM6.90 5.59L6.59 5.88L6.60 6.24L7.94 12.48L8.22 12.89L8.58 12.90L8.85 12.60L8.85 12.36L7.50 6.00L7.26 5.63ZM10.26 5.60L9.97 6.00L9.97 12.48L10.06 12.72L10.38 12.91L10.74 12.78L10.88 12.48L10.88 6.12L10.74 5.71ZM13.62 5.62L13.34 6.00L12.04 12.12L12.03 12.72L12.30 12.91L12.66 12.85L12.86 12.60L14.27 6.12L14.10 5.68ZM4.95 15.96L15.90 15.91L16.17 16.32L17.48 20.16L17.10 20.49L3.66 20.48L3.36 20.16L3.36 19.92Z",
  "filter": "M10.76 3.65L8.72 3.95L7.10 4.38L5.38 5.04L3.44 6.11L2.14 7.10L2.09 7.53L2.57 8.50L1.66 9.15L1.49 9.58L9.15 19.98L9.47 20.09L11.95 20.06L12.48 19.92L13.88 20.38L22.41 8.72L22.56 8.28L21.85 7.51L20.13 6.21L17.33 4.70L14.32 3.84L12.48 3.62ZM10.39 4.41L12.92 4.38L16.04 5.03L17.87 5.78L19.59 6.75L21.68 8.39L13.67 19.52L13.02 19.33L13.00 19.16L20.06 9.36L20.12 9.04L18.95 8.06L16.90 6.97L15.07 6.31L12.70 5.88L10.22 5.89L7.85 6.33L5.48 7.09L3.33 8.10L2.96 7.53L2.99 7.32L3.98 6.62L6.02 5.54L8.18 4.81ZM9.98 6.67L12.70 6.63L14.96 7.06L17.22 7.96L18.52 8.69L19.21 9.25L11.95 19.32L9.58 19.34L2.41 9.58L3.76 8.68L6.13 7.60L8.28 6.96Z",
  "grind": "M18.06 1.49L17.55 1.67L17.29 1.90L17.07 2.61L17.24 3.32L17.53 3.82L17.86 4.13L18.36 4.33L18.26 4.39L10.69 4.43L10.28 4.64L9.95 5.13L9.92 6.14L9.42 6.25L9.04 6.65L8.97 7.84L5.64 7.87L5.21 8.16L5.30 9.07L5.90 10.49L6.61 11.39L7.57 12.20L7.25 12.63L4.33 12.66L3.92 12.86L3.69 13.21L3.65 14.12L3.78 14.52L4.12 14.79L4.75 14.93L4.75 20.28L4.15 20.68L3.95 21.19L3.97 22.00L4.33 22.44L4.73 22.54L15.84 22.54L16.34 22.44L16.60 22.20L16.75 21.79L16.68 20.88L16.44 20.57L15.89 20.28L15.85 14.93L16.54 14.73L16.76 14.52L16.89 14.22L16.88 13.31L16.67 12.91L16.24 12.66L13.31 12.62L12.96 12.20L14.12 11.14L14.66 10.38L15.15 9.27L15.34 8.26L15.23 8.04L14.93 7.87L11.60 7.81L11.54 6.65L11.19 6.24L10.66 6.14L10.63 5.34L10.79 5.12L10.99 5.08L18.56 5.07L18.87 4.98L19.07 4.73L19.11 4.33L19.64 4.02L20.11 3.32L20.28 2.61L20.22 2.21L19.96 1.80L19.57 1.57ZM17.95 2.21L19.27 2.15L19.47 2.26L19.57 2.51L19.52 2.91L19.17 3.55L18.46 3.65L18.16 3.50L17.83 2.91L17.77 2.51ZM9.74 6.85L10.79 6.81L10.90 7.05L10.89 7.79L9.78 7.85ZM5.90 8.57L14.57 8.57L14.06 9.98L13.11 11.17L11.90 11.93L10.38 12.23L8.87 12.03L7.56 11.32L6.61 10.28L6.23 9.58ZM8.19 12.61L8.26 12.53L9.38 12.83L10.28 12.89L11.19 12.82L12.30 12.54L12.61 13.01L13.01 13.26L16.04 13.30L16.20 13.51L16.18 14.12L4.35 14.12L4.33 13.51L4.53 13.28L7.46 13.27L7.86 13.07ZM5.45 14.93L5.54 14.84L15.03 14.84L15.14 14.93L15.17 20.28L15.03 20.38L14.64 20.28L14.59 17.45L14.42 17.05L14.02 16.71L13.51 16.61L7.05 16.62L6.45 16.82L6.12 17.25L6.03 20.28L5.54 20.37L5.45 20.28ZM6.87 17.35L13.72 17.30L13.93 17.65L13.93 20.28L6.75 20.34L6.70 17.65ZM10.28 17.96L9.67 18.26L9.46 18.87L9.78 19.50L10.38 19.67L10.99 19.37L11.19 18.76L10.88 18.16ZM10.18 18.56L10.38 18.52L10.61 18.76L10.38 19.10L10.18 19.07L10.03 18.87ZM4.76 21.09L15.74 21.02L16.01 21.19L16.02 21.79L4.73 21.87L4.62 21.79L4.62 21.29Z",
  "clock": "M9.33 1.49L8.85 1.97L8.83 3.04L9.45 3.55L10.40 3.59L10.45 4.47L8.62 5.03L6.96 5.88L5.84 6.72L4.55 8.14L3.71 9.57L3.13 11.23L2.87 13.01L3.02 15.26L3.61 17.16L4.31 18.47L5.53 19.98L6.72 20.98L8.50 21.93L10.04 22.40L11.94 22.57L13.84 22.41L15.74 21.81L17.04 21.09L18.39 20.01L19.57 18.58L20.50 16.81L21.01 15.03L21.14 13.13L20.89 11.35L19.91 8.86L18.58 7.08L16.45 5.49L15.14 4.92L13.60 4.47L13.62 3.64L14.67 3.55L15.15 3.16L15.27 2.21L14.97 1.62L14.43 1.42ZM9.71 2.21L14.31 2.16L14.46 2.33L14.45 2.69L14.31 2.86L9.81 2.86L9.61 2.69ZM11.34 3.64L12.65 3.59L12.72 4.35L11.35 4.39ZM10.81 5.30L12.42 5.23L13.84 5.39L15.26 5.86L16.81 6.70L18.04 7.79L19.10 9.21L19.80 10.75L20.14 12.18L20.27 13.60L20.04 15.38L19.68 16.57L18.86 18.11L17.77 19.42L16.57 20.40L15.26 21.11L13.72 21.59L12.06 21.74L10.28 21.60L8.74 21.12L7.55 20.50L6.36 19.59L5.28 18.35L4.42 16.81L3.94 15.26L3.76 13.48L3.95 11.58L4.41 10.16L5.26 8.62L6.48 7.27L7.79 6.33L9.09 5.73ZM15.62 7.06L15.26 7.29L14.87 8.03L15.14 8.40L15.49 8.26L15.93 7.55L15.93 7.31ZM8.26 7.15L8.10 7.55L8.36 8.03L8.62 8.36L8.97 8.37L9.16 8.03L8.87 7.43L8.62 7.13ZM11.82 7.14L11.58 7.55L11.08 13.60L11.42 14.19L12.06 14.38L12.71 14.08L12.95 13.36L12.78 12.77L12.42 7.43L12.18 7.13ZM5.89 9.65L5.69 9.92L5.77 10.23L6.60 10.72L6.96 10.56L6.95 10.16L6.13 9.65ZM17.87 9.68L17.12 10.16L17.03 10.40L17.16 10.65L17.52 10.71L18.33 10.16L18.40 9.92L18.25 9.69ZM5.06 13.10L4.80 13.48L5.06 13.79L6.01 13.79L6.28 13.60L6.13 13.13ZM17.99 13.10L17.73 13.36L17.87 13.73L18.94 13.77L19.18 13.60L19.22 13.36L19.06 13.15ZM6.60 16.15L5.77 16.70L5.73 17.04L5.89 17.21L6.25 17.18L6.99 16.69L6.99 16.33ZM17.28 16.14L17.01 16.45L17.08 16.69L17.87 17.21L18.23 17.14L18.37 16.92L18.30 16.69ZM8.62 18.41L8.10 19.30L8.12 19.53L8.38 19.72L8.78 19.53L9.21 18.70L8.97 18.38ZM15.03 18.40L14.78 18.70L14.87 18.94L15.26 19.58L15.62 19.70L15.89 19.30L15.42 18.47ZM11.82 19.24L11.63 19.53L11.62 20.36L11.71 20.60L12.06 20.70L12.33 20.48L12.33 19.42L12.18 19.25Z",
  "thermometer": "M11.42 1.50L10.68 1.78L10.15 2.17L9.70 2.77L9.43 3.51L9.32 14.37L8.46 15.32L7.83 16.31L7.59 17.01L7.48 18.28L7.83 19.83L8.34 20.71L8.91 21.34L9.63 21.87L10.58 22.30L12.16 22.52L13.00 22.40L13.85 22.10L15.22 21.10L15.80 20.39L16.18 19.65L16.43 18.70L16.49 17.86L16.39 17.01L16.06 16.07L15.59 15.32L14.69 14.37L14.59 3.33L14.16 2.46L13.42 1.80L12.58 1.48ZM11.44 2.24L12.26 2.16L13.00 2.40L13.53 2.88L13.86 3.51L13.93 14.69L15.15 16.06L15.56 16.91L15.69 17.54L15.54 19.12L14.76 20.49L13.64 21.38L12.16 21.79L10.68 21.56L9.41 20.77L8.54 19.55L8.25 18.07L8.34 17.22L8.63 16.38L9.06 15.75L10.09 14.69L10.13 3.93L10.45 2.98L10.89 2.53ZM12.05 6.21L11.78 6.57L12.05 6.91L13.42 6.91L13.78 6.67L13.78 6.46L13.53 6.23ZM11.95 8.95L11.78 9.31L12.05 9.59L13.53 9.57L13.75 9.31L13.53 8.93ZM11.95 11.61L11.78 11.95L12.05 12.24L13.53 12.23L13.78 11.95L13.53 11.58ZM11.95 13.71L11.67 14.06L11.65 16.06L11.00 16.36L10.47 16.81L10.14 17.43L10.03 18.07L10.22 18.91L10.59 19.44L11.31 19.89L12.05 20.01L12.69 19.89L13.38 19.44L13.86 18.70L13.98 18.07L13.87 17.43L13.54 16.80L13.00 16.34L12.37 16.06L12.36 13.95L12.16 13.73ZM11.69 16.80L12.26 16.77L12.69 16.95L13.06 17.33L13.23 17.75L13.26 18.17L13.07 18.70L12.37 19.27L11.84 19.31L11.33 19.12L10.99 18.81L10.76 18.28L10.77 17.75L10.96 17.33Z",
  "water": "M11.94 1.46L11.58 1.74L8.55 5.82L6.30 9.54L4.96 12.78L4.68 13.98L4.60 15.30L4.73 16.74L5.20 18.30L5.93 19.62L6.66 20.47L8.10 21.56L9.18 22.07L10.38 22.40L12.06 22.55L13.50 22.41L15.06 21.93L16.14 21.36L17.25 20.46L18.09 19.50L18.80 18.18L19.28 16.50L19.38 15.18L19.27 13.86L18.91 12.42L17.37 8.94L14.36 4.26L12.42 1.64ZM11.90 2.82L12.06 2.71L13.76 4.98L16.52 9.30L18.10 12.90L18.48 15.18L18.35 16.50L17.98 17.82L17.39 18.90L16.60 19.86L15.66 20.62L14.46 21.22L13.26 21.58L11.94 21.68L10.74 21.58L9.42 21.21L8.34 20.65L7.23 19.74L6.50 18.78L5.94 17.68L5.56 16.02L5.51 15.06L5.92 12.78L7.21 9.78L9.01 6.78ZM8.22 12.62L7.92 12.90L7.55 14.58L7.58 15.78L7.92 16.98L8.57 18.06L9.42 18.82L10.38 19.30L11.10 19.40L11.39 19.14L11.34 18.75L9.78 17.98L9.17 17.34L8.75 16.62L8.44 15.06L8.76 13.02L8.58 12.70Z",
  "milk": "M7.92 1.49L7.36 1.80L7.13 2.28L7.10 4.29L4.57 8.21L4.33 8.87L4.33 21.38L4.46 21.91L4.92 22.39L5.58 22.55L18.42 22.53L19.09 22.35L19.54 21.90L19.69 21.38L19.67 8.54L19.36 7.76L16.96 4.29L16.91 2.39L16.78 1.95L16.41 1.59L15.97 1.47ZM8.02 2.28L8.26 2.19L15.85 2.19L16.10 2.39L16.11 3.85L15.97 3.99L8.03 3.98ZM7.83 4.74L15.63 4.72L15.73 4.85L13.62 8.25L5.58 8.25ZM16.52 5.19L18.65 8.21L14.65 8.20ZM5.19 9.10L5.35 8.99L13.51 9.02L13.53 14.46L12.61 14.85L11.50 14.83L10.60 14.38L9.15 13.09L7.92 12.53L6.47 12.52L5.24 12.96ZM14.39 9.10L14.51 9.00L18.84 9.10L18.85 21.38L18.65 21.75L14.43 21.72ZM7.11 13.23L7.81 13.30L8.37 13.52L10.16 15.04L11.05 15.52L12.17 15.71L13.56 15.46L13.51 21.78L5.58 21.82L5.24 21.61L5.22 14.01L6.14 13.42Z",
  "ice": "M16.53 1.46L16.31 1.70L14.24 7.17L5.98 7.24L5.68 7.34L5.48 7.58L5.46 8.37L6.97 21.11L7.35 22.00L7.97 22.41L8.47 22.51L15.53 22.50L16.33 22.21L16.85 21.50L18.55 7.87L18.42 7.49L18.02 7.24L16.37 7.17L18.11 2.20L17.92 1.83L16.83 1.43ZM16.77 2.50L16.93 2.40L17.17 2.50L17.16 2.79L15.58 7.17L15.14 7.24L15.07 7.07ZM6.16 7.97L13.96 7.97L13.10 10.16L11.55 10.29L8.96 10.12L6.48 10.24ZM14.75 7.97L15.28 7.97L14.58 9.86L14.04 10.02ZM16.07 7.97L17.74 7.97L17.42 10.26L15.30 10.06ZM7.85 10.86L9.16 10.80L11.95 11.00L15.53 10.78L17.38 10.95L16.17 21.21L15.93 21.61L15.43 21.79L8.47 21.80L7.87 21.47L7.72 21.11L6.52 11.05L6.58 10.92ZM9.36 11.54L9.06 11.63L8.71 11.95L7.86 14.34L7.90 14.84L8.37 15.24L9.96 15.77L10.86 16.02L11.35 15.96L11.65 15.72L11.85 15.33L12.58 13.24L12.58 12.85L12.38 12.55L12.04 12.35ZM9.32 12.35L9.66 12.29L11.84 13.05L11.05 15.28L10.36 15.17L8.61 14.54ZM13.74 15.31L11.39 16.43L11.01 16.83L11.02 17.52L11.91 19.61L12.45 20.03L13.05 19.96L15.23 18.94L15.53 18.76L15.76 18.42L15.76 17.92L14.77 15.63L14.44 15.31ZM13.82 16.03L14.04 15.96L14.14 16.05L15.02 18.22L12.65 19.32L11.69 17.13Z"
};
const grindSizeDotsPath = (
  'M6 5h.01M12 5h.01M18 5h.01M6 12h.01M12 12h.01M18 12h.01M6 19h.01M12 19h.01M18 19h.01'
);

const hotCupPath = (
  'M4 10h13v6c0 3.4-2 5.7-5.5 5.7h-2C6 21.7 4 19.4 4 16z' +
  'M17 11.5h1.5a3 3 0 0 1 0 6H17' +
  'M7 8c1.4-1.7-1.2-2.3 0-4M10.5 8c1.6-2.3-1.8-3.1 0-5.7M14 8c1.3-1.8-1.2-2.4 0-4.2'
);

/**
 * Draw a recipe card onto a Canvas. See README.md for the recipe schema.
 * The canvas is resized to 1080 × 1080. Returns the supplied canvas.
 */
export function renderRecipeCard(canvas, recipe, { language = 'ja' } = {}) {
  canvas.width = RECIPE_CARD_SIZE;
  canvas.height = RECIPE_CARD_SIZE;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D is unavailable.');

  function localized(ja, en) {
    return language === 'en' ? en : ja;
  }

  const englishDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC'
  });

  function formatDate(value) {
    if (!value) return '';
    return localized(value.replaceAll('-', '.'), englishDate.format(new Date(value + 'T00:00:00Z')));
  }

  // Silhouettes traced from the supplied Brew Day coffee icon sheet.
  function drawIcon(name, centerX, centerY, size, color) {
    ctx.save();
    ctx.translate(centerX - size / 2, centerY - size / 2);
    ctx.scale(size / 24, size / 24);
    if (name === 'grindSize' || name === 'hot') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.65;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke(new Path2D(name === 'hot' ? hotCupPath : grindSizeDotsPath));
    } else {
      const path = new Path2D(iconPaths[name]);
      ctx.fillStyle = color;
      ctx.fill(path, 'evenodd');
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.35;
      ctx.lineJoin = 'round';
      ctx.stroke(path);
    }
    ctx.restore();
  }

  function rect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function write(value, x, y, { size = 24, color = ink, weight = 400, family = sans, align = 'left', width = Infinity } = {}) {
    ctx.font = `${weight} ${size}px ${family}`;
    while (size > 15 && ctx.measureText(value).width > width) {
      size -= 1;
      ctx.font = `${weight} ${size}px ${family}`;
    }
    const fits = ctx.measureText(value).width <= width;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = 'alphabetic';
    if (fits) ctx.fillText(value, x, y);
    return fits;
  }

  function wrap(value, font, width) {
    ctx.font = font;
    const lines = [];
    let line = '';
    const tokens = value.replace(/\s+/g, ' ').match(/[a-zA-Z0-9-]+|./gu) || [];
    for (const token of tokens) {
      if (line && ctx.measureText(line + token).width > width) {
        lines.push(line.trimEnd());
        line = token.trimStart();
      } else {
        line += token;
      }
    }
    if (line) lines.push(line.trimEnd());
    return lines;
  }

  const tasteAxes = [
    ['aroma', '香り', 'Aroma'], ['acidity', '酸味', 'Acidity'], ['sweetness', '甘さ', 'Sweetness'],
    ['body', 'コク', 'Body'], ['finish', '後味', 'Finish']
  ];

  function drawRadar(x, y, width, height, scores) {
    const centerX = x + width / 2;
    const headerHeight = 40;
    // Center the grid and axis labels below the heading. The top label rises
    // above its baseline, so the visible plot extends farther upward.
    const labelOffset = 7;
    const centerY = y + (headerHeight + height) / 2 + labelOffset;
    const radius = 80;
    const scaleMax = 5;

    function point(axis, fraction) {
      const angle = axis * 2 * Math.PI / tasteAxes.length - Math.PI / 2;
      return [
        centerX + Math.cos(angle) * radius * fraction,
        centerY + Math.sin(angle) * radius * fraction
      ];
    }

    function trace(points, closed = false) {
      ctx.beginPath();
      ctx.moveTo(...points[0]);
      points.slice(1).forEach(vertex => ctx.lineTo(...vertex));
      if (closed) ctx.closePath();
    }

    write(localized('フレーバープロファイル', 'Flavor profile'), x + 20, y + 31, { size: 24, color: blue, weight: 700 });
    ctx.lineWidth = 1;
    ctx.strokeStyle = rule;
    for (let level = 1; level <= scaleMax; level += 1) {
      trace(tasteAxes.map((_, index) => point(index, level / scaleMax)), true);
      ctx.stroke();
    }
    tasteAxes.forEach((_, index) => {
      trace([[centerX, centerY], point(index, 1)]);
      ctx.stroke();
    });

    const vertices = scores.map((score, index) => score === null ? null : point(index, score / scaleMax));
    if (vertices.every(Boolean)) {
      trace(vertices, true);
      ctx.fillStyle = '#0b4f9c38';
      ctx.fill();
      ctx.strokeStyle = blue;
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
    vertices.filter(Boolean).forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, 2 * Math.PI);
      ctx.fillStyle = blue;
      ctx.fill();
    });

    const labels = [
      [0, -91, 'center'], [90, -19, 'left'], [56, 88, 'left'],
      [-56, 88, 'right'], [-90, -19, 'right']
    ];
    tasteAxes.forEach(([, ja, en], index) => {
      const [dx, dy, align] = labels[index];
      write(localized(ja, en) + ' ' + (scores[index] ?? '–'), centerX + dx, centerY + dy,
        { size: 19, color: deepBlue, align });
    });
  }

  const gramsFormat = new Intl.NumberFormat('en-US', {
    useGrouping: false, maximumFractionDigits: 10
  });

  const textFields = [
    'title', 'date', 'roaster', 'roasted', 'beans', 'water', 'temperature', 'duration',
    'dripper', 'filter', 'grinder', 'grind', 'ice', 'milk', 'serving', 'note'
  ];
  const data = Object.fromEntries(textFields.map(key => [key, String(recipe[key] ?? '').trim()]));
  const steps = recipe.pours ?? [];
  if (!Array.isArray(steps) || steps.length > 5) {
    throw new RangeError(localized('注湯手順は最大5行です。', 'Use up to 5 pour steps.'));
  }
  const pours = steps.map(({ time, grams }) => {
    if (typeof time !== 'string' || !time.trim() || !Number.isFinite(grams) || grams < 0) {
      throw new TypeError(localized('注湯手順の時刻と湯量を確認してください。', 'Enter a time and non-negative grams for each pour.'));
    }
    return { time: time.trim(), grams: '+' + gramsFormat.format(grams), amount: grams };
  });
  if (!data.water && pours.length) {
    data.water = gramsFormat.format(pours.reduce((total, pour) => total + pour.amount, 0));
  }
  const scores = tasteAxes.map(([key]) => recipe.flavor?.[key] ?? null);
  const validScores = scores.every(score => score === null || Number.isInteger(score) && score >= 1 && score <= 5);
  if (!validScores) {
    throw new RangeError(localized('味の強さは1〜5の整数で入力してください。', 'Taste scores must be whole numbers from 1 to 5.'));
  }
  const hasScores = scores.some(score => score !== null);

  const left = 64;
  const right = 868;
  const contentWidth = right - left;

  rect(0, 0, 1080, 1080, cream);
  rect(932, 0, 148, 1080, blue);
  rect(955, 64, 103, 1, '#f7f2ea70');
  rect(955, 1016, 103, 1, '#f7f2ea70');
  drawIcon('beans', 1006, 118, 54, cream);
  ctx.save();
  ctx.translate(989, 540);
  ctx.rotate(Math.PI / 2);
  write('Brew Day', 0, 0, { size: 62, color: cream, family: serif, align: 'center' });
  ctx.restore();

  write(localized('コーヒーレシピ', 'Brew recipe'), left, 73, { size: 23, color: blue, weight: 700 });
  write(formatDate(data.date), right, 73, { size: 23, color: muted, align: 'right' });
  rect(left, 92, contentWidth, 2, blue);

  const title = data.title || localized('コーヒー豆', 'Coffee');
  const titleX = left + 69;
  const titleWidth = right - titleX;
  const titleOneLine = wrap(title, `700 73px ${serif}`, titleWidth);
  const titleLines = titleOneLine.length === 1 ? titleOneLine : wrap(title, `700 52px ${serif}`, titleWidth);
  const isIced = data.serving === 'iced' ||
    (data.serving !== 'hot' && Number(data.ice.normalize('NFKC')) > 0);
  drawIcon(isIced ? 'ice' : 'hot', left + 24, titleLines.length === 1 ? 148 : 119, 48, blue);
  let fits = titleLines.length <= 2;
  if (titleLines.length === 1) {
    fits = write(title, titleX, 172, { size: 73, weight: 700, family: serif, width: titleWidth }) && fits;
  } else {
    titleLines.slice(0, 2).forEach((line, index) => {
      fits = write(line, titleX, 138 + index * 52, { size: 52, weight: 700, family: serif, width: titleWidth }) && fits;
    });
  }
  const origin = [
    data.roaster && `${localized('ロースター：', 'Roaster: ')}${data.roaster}`,
    data.roasted && `${localized('焙煎日', 'Roasted on')}  ${formatDate(data.roasted)}`
  ].filter(Boolean).join('  ·  ');
  fits = write(origin, left, 224, { size: 23, color: muted, width: contentWidth }) && fits;

  rect(left, 248, contentWidth, 127, deepBlue);
  const metrics = [
    ['beans', data.beans, ' g'],
    ['water', data.water, ' g'],
    ['thermometer', data.temperature, ' °C'],
    ['clock', data.duration, '']
  ];
  metrics.forEach(([name, value, unit], index) => {
    const cell = contentWidth / metrics.length;
    const x = left + cell * index;
    if (index) rect(x, 270, 1, 82, '#f7f2ea60');
    drawIcon(name, x + cell / 2, 284, 43, cream);
    write(value ? value + unit : '—', x + cell / 2, 345, { size: 44, color: cream, weight: 700, family: serif, align: 'center', width: cell - 30 });
  });

  const gear = [
    ['dripper', data.dripper], ['filter', data.filter],
    ['grind', data.grinder], ['grindSize', data.grind],
    ['ice', data.ice && data.ice + ' g'], ['milk', data.milk]
  ];
  gear.forEach(([name, value], index) => {
    if (!value) return;
    const x = index % 2 === 0 ? left : 477;
    const y = 407 + Math.floor(index / 2) * 34;
    drawIcon(name, x + 14, y - 8, 30, blue);
    fits = write(value, x + 42, y, { size: 23, width: 340 }) && fits;
  });

  const panelY = data.ice || data.milk ? 490 : 458;
  const panelHeight = 330;
  const panelGap = 24;
  const halfWidth = (contentWidth - panelGap) / 2;
  const hasPours = pours.length > 0;

  if (hasPours) {
    const tableWidth = hasScores ? halfWidth : contentWidth;
    const tableRight = left + tableWidth;
    const headingY = panelY + 31;
    const ruleY = panelY + 48;
    const rowHeight = Math.min(71, (panelHeight - 48) / pours.length);
    const totalX = tableRight - 12;
    const pouredX = totalX - 104;
    const timeX = left + (pouredX - left) * 0.48;

    write(localized('注湯手順', 'Pours'), left, headingY, { size: 24, color: blue, weight: 700 });
    write(localized('注湯量', 'Poured'), pouredX, headingY, { size: 17, color: muted, align: 'right' });
    write(localized('累計湯量', 'Total water'), totalX, headingY, { size: 17, color: muted, align: 'right' });
    rect(left, ruleY, tableWidth, 2, blue);
    let totalGrams = 0;
    pours.forEach(({time = '', grams, amount}, index) => {
      totalGrams += amount;
      const cumulative = Number.isFinite(totalGrams) ? gramsFormat.format(totalGrams) + ' g' : '—';
      const y = ruleY + index * rowHeight;
      const baseline = y + rowHeight / 2 + 8;
      if (index % 2 === 0) rect(left, y + 2, tableWidth, rowHeight - 2, '#e9eced');
      rect(left, y + rowHeight, tableWidth, 1, rule);
      write(String(index), left + 14, baseline, { size: 22, color: blue, weight: 700 });
      fits = write(time, timeX, baseline, { size: 23, weight: 700, family: serif, align: 'center', width: 120 }) && fits;
      fits = write(grams ? grams + ' g' : '—', pouredX, baseline, { size: 23, weight: 700, family: serif, align: 'right', width: 82 }) && fits;
      fits = write(cumulative, totalX, baseline, { size: 23, weight: 700, family: serif, color: blue, align: 'right', width: 86 }) && fits;
    });
  }

  if (hasScores) {
    const radarX = hasPours ? left + halfWidth + panelGap : left;
    const radarWidth = right - radarX;
    rect(radarX, panelY, radarWidth, panelHeight, '#e4ebf0');
    drawRadar(radarX, panelY, radarWidth, panelHeight, scores);
  }

  if (data.note) {
    const noteY = hasPours || hasScores ? panelY + panelHeight + 28 : panelY;
    const noteHeight = 1016 - noteY;
    rect(left, noteY, contentWidth, noteHeight, '#e4ebf0');
    rect(left, noteY, 4, noteHeight, blue);
    write(localized('メモ', 'Notes'), left + 24, noteY + 35,
      { size: 23, color: blue, weight: 700 });
    const noteTextWidth = contentWidth - 48;
    const lines = wrap(data.note, `400 23px ${sans}`, noteTextWidth);
    const maxLines = Math.floor((noteHeight - 88) / 29) + 1;
    fits = lines.length <= maxLines && fits;
    lines.slice(0, maxLines).forEach((line, index) => {
      fits = write(line, left + 24, noteY + 72 + index * 29,
        { size: 23, width: noteTextWidth }) && fits;
    });
  }

  if (!fits) {
    throw new RangeError(localized('画像に収まるよう、長い入力を短くしてください。', 'Shorten long entries so they fit on the card.'));
  }
  return canvas;
}

/** Create the PNG Blob used by the app's share or download flow. */
export async function createRecipeCardPng(recipe, options) {
  const canvas = document.createElement('canvas');
  await document.fonts?.ready;
  renderRecipeCard(canvas, recipe, options);
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('Could not export the recipe card PNG.'));
    }, 'image/png');
  });
}
