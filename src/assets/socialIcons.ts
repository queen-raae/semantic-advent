import type { SocialIcons } from "../types";

const socialIcons: SocialIcons = {
  Github: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M 31 2 C 15.011719 2 2 15.011719 2 31 C 2 43.648438 10.144531 54.425781 21.457031 58.378906 C 21.617188 58.492188 21.808594 58.5625 22.011719 58.566406 C 24.839844 59.492188 27.863281 60 31 60 C 46.988281 60 60 46.988281 60 31 C 60 15.011719 46.988281 2 31 2 Z M 31 4 C 45.886719 4 58 16.113281 58 31 C 58 42.660156 50.570313 52.613281 40.199219 56.386719 C 40.089844 56.0625 40 55.582031 40 55.253906 L 40 50 C 40 47.90625 38.976563 45.625 37.96875 44.09375 C 43.519531 43.15625 49.863281 40.277344 49.863281 29.53125 C 49.863281 26.585938 48.941406 23.988281 47.125 21.800781 C 47.523438 20.488281 48.015625 17.71875 46.640625 14.242188 C 46.53125 13.964844 46.300781 13.75 46.015625 13.65625 C 45.734375 13.570313 43.167969 12.902344 37.839844 16.398438 C 35.671875 15.839844 33.378906 15.550781 31 15.542969 C 28.632813 15.550781 26.335938 15.839844 24.175781 16.398438 C 18.847656 12.898438 16.273438 13.566406 15.996094 13.65625 C 15.710938 13.75 15.480469 13.964844 15.371094 14.242188 C 13.992188 17.722656 14.484375 20.488281 14.890625 21.800781 C 13.066406 23.988281 12.144531 26.585938 12.144531 29.53125 C 12.144531 40.179688 18.375 43.113281 23.878906 44.089844 C 23.1875 44.964844 22.460938 46.097656 22.140625 47.25 C 20.71875 47.644531 17.804688 47.65625 15.847656 44.304688 C 15.777344 44.175781 14.066406 41.136719 10.691406 40.902344 C 10.15625 40.90625 8.796875 40.992188 8.46875 42.03125 C 8.105469 43.183594 9.378906 44.058594 9.925781 44.429688 C 9.960938 44.453125 10.015625 44.484375 10.050781 44.503906 C 10.113281 44.535156 11.570313 45.300781 12.65625 48.035156 C 12.882813 48.75 14.871094 54.136719 22.007813 53.1875 C 22.011719 53.976563 22.007813 54.375 22 54.691406 L 22 55.25 C 22 55.574219 21.902344 56.0625 21.792969 56.378906 C 11.421875 52.605469 4 42.652344 4 31 C 4 16.113281 16.113281 4 31 4 Z M 30.757813 7.003906 C 26.859375 7.046875 23.003906 8.074219 19.609375 10.015625 C 19.128906 10.285156 18.960938 10.898438 19.234375 11.375 C 19.417969 11.699219 19.753906 11.882813 20.105469 11.882813 C 20.273438 11.882813 20.441406 11.839844 20.597656 11.75 C 24.734375 9.390625 29.617188 8.507813 34.339844 9.265625 C 34.882813 9.355469 35.394531 8.984375 35.484375 8.4375 C 35.570313 7.890625 35.199219 7.378906 34.65625 7.289063 C 33.363281 7.082031 32.058594 6.988281 30.757813 7.003906 Z M 38.65625 8.386719 C 38.269531 8.402344 37.90625 8.648438 37.765625 9.035156 C 37.570313 9.554688 37.832031 10.128906 38.351563 10.324219 C 39.0625 10.589844 39.765625 10.894531 40.453125 11.238281 C 40.597656 11.3125 40.75 11.347656 40.902344 11.347656 C 41.265625 11.347656 41.617188 11.148438 41.796875 10.796875 C 42.042969 10.308594 41.84375 9.703125 41.351563 9.453125 C 40.605469 9.078125 39.828125 8.738281 39.050781 8.449219 C 38.921875 8.402344 38.789063 8.382813 38.65625 8.386719 Z M 44.984375 15.546875 C 46.058594 18.707031 45.324219 20.996094 45.058594 21.644531 C 44.914063 22.003906 44.988281 22.414063 45.25 22.699219 C 46.980469 24.59375 47.859375 26.890625 47.859375 29.53125 C 47.859375 39.667969 41.851563 41.703125 35.96875 42.355469 C 35.574219 42.398438 35.242188 42.671875 35.125 43.050781 C 35.003906 43.429688 35.125 43.84375 35.425781 44.105469 C 36.214844 44.78125 38 47.714844 38 50 L 38 55.253906 C 38 55.273438 38.003906 56.144531 38.289063 56.992188 C 35.96875 57.644531 33.527344 58 31 58 C 28.46875 58 26.023438 57.640625 23.699219 56.988281 C 23.988281 56.136719 23.996094 55.265625 23.996094 55.25 L 24 54.714844 C 24.003906 54.261719 24.011719 53.648438 24 51.996094 C 23.996094 51.691406 23.859375 51.410156 23.625 51.21875 C 23.390625 51.03125 23.082031 50.960938 22.785156 51.023438 C 16.070313 52.488281 14.617188 47.640625 14.5625 47.4375 C 14.550781 47.402344 14.539063 47.371094 14.527344 47.335938 C 13.566406 44.898438 12.300781 43.65625 11.546875 43.09375 C 13.175781 43.667969 14.085938 45.257813 14.109375 45.292969 C 16.753906 49.820313 21.121094 49.9375 23.40625 48.914063 C 23.722656 48.773438 23.941406 48.480469 23.988281 48.140625 C 24.191406 46.710938 25.761719 44.820313 26.554688 44.125 C 26.851563 43.863281 26.96875 43.449219 26.847656 43.074219 C 26.730469 42.695313 26.402344 42.421875 26.011719 42.378906 C 20.144531 41.710938 14.144531 39.660156 14.144531 29.53125 C 14.144531 26.894531 15.023438 24.59375 16.761719 22.699219 C 17.023438 22.414063 17.097656 22.003906 16.949219 21.644531 C 16.683594 20.996094 15.945313 18.714844 17.015625 15.550781 C 17.867188 15.578125 19.941406 15.941406 23.433594 18.3125 C 23.675781 18.476563 23.984375 18.527344 24.265625 18.449219 C 26.355469 17.867188 28.6875 17.554688 31 17.542969 C 33.320313 17.554688 35.652344 17.867188 37.746094 18.449219 C 38.027344 18.527344 38.332031 18.476563 38.574219 18.3125 C 42.085938 15.929688 44.160156 15.574219 44.984375 15.546875 Z M 21.375 34.394531 C 20.984375 34.347656 20.589844 34.527344 20.386719 34.886719 L 19.386719 36.617188 C 19.109375 37.097656 19.273438 37.707031 19.75 37.984375 C 19.90625 38.074219 20.078125 38.117188 20.25 38.117188 C 20.59375 38.117188 20.929688 37.9375 21.113281 37.617188 L 22.113281 35.886719 C 22.390625 35.410156 22.230469 34.796875 21.75 34.519531 C 21.628906 34.453125 21.503906 34.410156 21.375 34.394531 Z M 40.625 34.394531 C 40.496094 34.410156 40.367188 34.453125 40.25 34.519531 C 39.769531 34.796875 39.609375 35.410156 39.886719 35.890625 L 40.886719 37.621094 C 41.070313 37.941406 41.40625 38.121094 41.75 38.121094 C 41.921875 38.121094 42.09375 38.074219 42.25 37.984375 C 42.730469 37.707031 42.890625 37.097656 42.613281 36.621094 L 41.613281 34.890625 C 41.40625 34.53125 41.011719 34.347656 40.625 34.394531 Z M 36.1875 36.34375 C 36.058594 36.324219 35.921875 36.332031 35.785156 36.371094 C 35.253906 36.511719 34.9375 37.058594 35.078125 37.59375 L 35.597656 39.527344 C 35.71875 39.972656 36.121094 40.265625 36.5625 40.265625 C 36.652344 40.265625 36.738281 40.253906 36.824219 40.234375 C 37.355469 40.089844 37.675781 39.542969 37.53125 39.007813 L 37.015625 37.078125 C 36.90625 36.675781 36.570313 36.398438 36.1875 36.34375 Z M 25.816406 36.34375 C 25.429688 36.398438 25.09375 36.675781 24.984375 37.078125 L 24.46875 39.011719 C 24.324219 39.542969 24.644531 40.089844 25.175781 40.234375 C 25.261719 40.257813 25.347656 40.265625 25.4375 40.265625 C 25.875 40.265625 26.28125 39.972656 26.402344 39.527344 L 26.921875 37.59375 C 27.0625 37.0625 26.746094 36.511719 26.214844 36.371094 C 26.078125 36.332031 25.945313 36.328125 25.816406 36.34375 Z M 31 37 C 30.445313 37 30 37.445313 30 38 L 30 40 C 30 40.554688 30.445313 41 31 41 C 31.554688 41 32 40.554688 32 40 L 32 38 C 32 37.445313 31.554688 37 31 37 Z"></path>
</svg>`,
  Instagram: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M 13 6 C 9.140625 6 6 9.140625 6 13 L 6 51 C 6 54.859375 9.140625 58 13 58 L 51 58 C 54.859375 58 58 54.859375 58 51 L 58 13 C 58 9.140625 54.859375 6 51 6 Z M 13 8 L 51 8 C 53.757813 8 56 10.242188 56 13 L 56 51 C 56 53.757813 53.757813 56 51 56 L 13 56 C 10.242188 56 8 53.757813 8 51 L 8 13 C 8 10.242188 10.242188 8 13 8 Z M 48 13 C 46.347656 13 45 14.347656 45 16 C 45 17.652344 46.347656 19 48 19 C 49.652344 19 51 17.652344 51 16 C 51 14.347656 49.652344 13 48 13 Z M 48 14.53125 C 48.808594 14.53125 49.46875 15.191406 49.46875 16 C 49.46875 16.808594 48.808594 17.46875 48 17.46875 C 47.191406 17.46875 46.53125 16.808594 46.53125 16 C 46.53125 15.191406 47.191406 14.53125 48 14.53125 Z M 32 18 C 24.28125 18 18 24.28125 18 32 C 18 39.71875 24.28125 46 32 46 C 39.71875 46 46 39.71875 46 32 C 46 24.28125 39.71875 18 32 18 Z M 32 20 C 38.617188 20 44 25.382813 44 32 C 44 38.617188 38.617188 44 32 44 C 25.382813 44 20 38.617188 20 32 C 20 25.382813 25.382813 20 32 20 Z M 32 22 C 26.484375 22 22 26.484375 22 32 C 22 37.515625 26.484375 42 32 42 C 37.515625 42 42 37.515625 42 32 C 42 26.484375 37.515625 22 32 22 Z M 32 24 C 36.410156 24 40 27.589844 40 32 C 40 36.410156 36.410156 40 32 40 C 27.589844 40 24 36.410156 24 32 C 24 27.589844 27.589844 24 32 24 Z M 12 49 C 11.449219 49 11 49.449219 11 50 L 11 52 C 11 52.550781 11.449219 53 12 53 C 12.550781 53 13 52.550781 13 52 L 13 50 C 13 49.449219 12.550781 49 12 49 Z M 17 49 C 16.449219 49 16 49.449219 16 50 L 16 52 C 16 52.550781 16.449219 53 17 53 C 17.550781 53 18 52.550781 18 52 L 18 50 C 18 49.449219 17.550781 49 17 49 Z M 22 49 C 21.449219 49 21 49.449219 21 50 L 21 52 C 21 52.550781 21.449219 53 22 53 C 22.550781 53 23 52.550781 23 52 L 23 50 C 23 49.449219 22.550781 49 22 49 Z M 27 49 C 26.449219 49 26 49.449219 26 50 L 26 52 C 26 52.550781 26.449219 53 27 53 C 27.550781 53 28 52.550781 28 52 L 28 50 C 28 49.449219 27.550781 49 27 49 Z M 32 49 C 31.449219 49 31 49.449219 31 50 L 31 52 C 31 52.550781 31.449219 53 32 53 C 32.550781 53 33 52.550781 33 52 L 33 50 C 33 49.449219 32.550781 49 32 49 Z M 37 49 C 36.449219 49 36 49.449219 36 50 L 36 52 C 36 52.550781 36.449219 53 37 53 C 37.550781 53 38 52.550781 38 52 L 38 50 C 38 49.449219 37.550781 49 37 49 Z M 42 49 C 41.449219 49 41 49.449219 41 50 L 41 52 C 41 52.550781 41.449219 53 42 53 C 42.550781 53 43 52.550781 43 52 L 43 50 C 43 49.449219 42.550781 49 42 49 Z M 47 49 C 46.449219 49 46 49.449219 46 50 L 46 52 C 46 52.550781 46.449219 53 47 53 C 47.550781 53 48 52.550781 48 52 L 48 50 C 48 49.449219 47.550781 49 47 49 Z M 52 49 C 51.449219 49 51 49.449219 51 50 L 51 52 C 51 52.550781 51.449219 53 52 53 C 52.550781 53 53 52.550781 53 52 L 53 50 C 53 49.449219 52.550781 49 52 49 Z"></path>
</svg>`,
  LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M 13 6 C 9.140625 6 6 9.140625 6 13 L 6 51 C 6 54.859375 9.140625 58 13 58 L 51 58 C 54.859375 58 58 54.859375 58 51 L 58 13 C 58 9.140625 54.859375 6 51 6 Z M 13 8 L 51 8 C 53.757813 8 56 10.242188 56 13 L 56 51 C 56 53.757813 53.757813 56 51 56 L 13 56 C 10.242188 56 8 53.757813 8 51 L 8 13 C 8 10.242188 10.242188 8 13 8 Z M 12 12 C 11.445313 12 11 12.449219 11 13 L 11 15 C 11 15.550781 11.445313 16 12 16 C 12.554688 16 13 15.550781 13 15 L 13 13 C 13 12.449219 12.554688 12 12 12 Z M 17 12 C 16.445313 12 16 12.449219 16 13 L 16 15 C 16 15.550781 16.445313 16 17 16 C 17.554688 16 18 15.550781 18 15 L 18 13 C 18 12.449219 17.554688 12 17 12 Z M 22 12 C 21.445313 12 21 12.449219 21 13 L 21 15 C 21 15.550781 21.445313 16 22 16 C 22.554688 16 23 15.550781 23 15 L 23 13 C 23 12.449219 22.554688 12 22 12 Z M 27 12 C 26.445313 12 26 12.449219 26 13 L 26 15 C 26 15.550781 26.445313 16 27 16 C 27.554688 16 28 15.550781 28 15 L 28 13 C 28 12.449219 27.554688 12 27 12 Z M 32 12 C 31.445313 12 31 12.449219 31 13 L 31 15 C 31 15.550781 31.445313 16 32 16 C 32.554688 16 33 15.550781 33 15 L 33 13 C 33 12.449219 32.554688 12 32 12 Z M 37 12 C 36.445313 12 36 12.449219 36 13 L 36 15 C 36 15.550781 36.445313 16 37 16 C 37.554688 16 38 15.550781 38 15 L 38 13 C 38 12.449219 37.554688 12 37 12 Z M 42 12 C 41.445313 12 41 12.449219 41 13 L 41 15 C 41 15.550781 41.445313 16 42 16 C 42.554688 16 43 15.550781 43 15 L 43 13 C 43 12.449219 42.554688 12 42 12 Z M 47 12 C 46.445313 12 46 12.449219 46 13 L 46 15 C 46 15.550781 46.445313 16 47 16 C 47.554688 16 48 15.550781 48 15 L 48 13 C 48 12.449219 47.554688 12 47 12 Z M 52 12 C 51.445313 12 51 12.449219 51 13 L 51 15 C 51 15.550781 51.445313 16 52 16 C 52.554688 16 53 15.550781 53 15 L 53 13 C 53 12.449219 52.554688 12 52 12 Z M 19.5 18 C 17.019531 18 15 20.019531 15 22.5 C 15 24.980469 17.019531 27 19.5 27 C 21.980469 27 24 24.980469 24 22.5 C 24 20.019531 21.980469 18 19.5 18 Z M 19.5 19.671875 C 21.058594 19.671875 22.328125 20.941406 22.328125 22.5 C 22.328125 24.058594 21.058594 25.328125 19.5 25.328125 C 17.941406 25.328125 16.671875 24.058594 16.671875 22.5 C 16.671875 20.941406 17.941406 19.671875 19.5 19.671875 Z M 39.875 27.4375 C 37.558594 27.4375 35.726563 28.253906 34.433594 29.3125 L 34.433594 28.972656 C 34.433594 28.421875 33.988281 27.972656 33.433594 27.972656 L 27 27.972656 C 26.449219 27.972656 26 28.421875 26 28.972656 L 26 51 C 26 51.550781 26.449219 52 27 52 L 33.703125 52 C 34.257813 52 34.703125 51.550781 34.703125 51 L 34.703125 39.886719 C 34.703125 36.574219 35.523438 35.34375 37.730469 35.34375 C 39.855469 35.34375 40.214844 36.800781 40.214844 40.066406 L 40.214844 51 C 40.214844 51.550781 40.660156 52 41.214844 52 L 47.921875 52 C 48.476563 52 48.921875 51.550781 48.921875 51 L 48.921875 38.722656 C 48.925781 33.144531 47.851563 27.4375 39.875 27.4375 Z M 16 28 C 15.445313 28 15 28.449219 15 29 L 15 51 C 15 51.550781 15.445313 52 16 52 L 23 52 C 23.554688 52 24 51.550781 24 51 L 24 29 C 24 28.449219 23.554688 28 23 28 Z M 39.875 29.4375 C 45.746094 29.4375 46.925781 32.988281 46.925781 38.722656 L 46.925781 50 L 42.214844 50 L 42.214844 40.0625 C 42.214844 37.714844 42.214844 33.339844 37.730469 33.339844 C 32.703125 33.339844 32.703125 38.265625 32.703125 39.886719 L 32.703125 50 L 28 50 L 28 29.972656 L 32.4375 29.972656 L 32.4375 31.925781 C 32.4375 32.476563 32.972656 32.925781 33.527344 32.925781 C 33.898438 32.925781 34.238281 32.71875 34.410156 32.390625 C 35.128906 31.027344 36.992188 29.4375 39.875 29.4375 Z M 17 30 L 22 30 L 22 50 L 17 50 Z"></path>
</svg>`,
  Twitter: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
    <path d="M 32 3 C 16.009 3 3 16.01 3 32 C 3 47.99 16.009 61 32 61 C 47.991 61 61 47.99 61 32 C 61 16.01 47.991 3 32 3 z M 32 5 C 46.888 5 59 17.112 59 32 C 59 46.888 46.888 59 32 59 C 17.112 59 5 46.888 5 32 C 5 17.112 17.112 5 32 5 z M 32 8 C 18.767 8 8 18.767 8 32 C 8 34.113 8.2744063 36.209469 8.8164062 38.230469 C 8.9354062 38.677469 9.34025 38.970703 9.78125 38.970703 C 9.86725 38.970703 9.9559688 38.9605 10.042969 38.9375 C 10.576969 38.7945 10.891047 38.245891 10.748047 37.712891 C 10.251047 35.859891 10 33.938 10 32 C 10 19.869 19.869 10 32 10 C 37.706 10 43.115469 12.174047 47.230469 16.123047 C 47.628469 16.504047 48.262531 16.494703 48.644531 16.095703 C 49.027531 15.697703 49.013234 15.064641 48.615234 14.681641 C 44.125234 10.373641 38.225 8 32 8 z M 39.195312 18.773438 C 37.197688 18.838437 35.226453 19.664781 33.751953 21.238281 C 32.395953 22.686281 31.640625 24.596078 31.640625 26.580078 L 31.640625 27.199219 C 26.730625 26.657219 22.227609 24.213625 19.099609 20.390625 C 18.792609 20.014625 18.237328 19.957625 17.861328 20.265625 C 17.780328 20.331625 17.713156 20.41 17.660156 20.5 C 16.220156 22.981 16.255 26.052 17.75 28.5 C 17.299 28.318 16.785516 28.535328 16.603516 28.986328 C 16.563516 29.086328 16.541062 29.193781 16.539062 29.300781 L 16.539062 29.400391 C 16.555062 31.788391 17.660062 34.036766 19.539062 35.509766 C 19.101063 35.669766 18.866 36.143844 19 36.589844 C 19.772 38.959844 21.63 40.817844 24 41.589844 C 21.609 42.889844 18.872922 43.416609 16.169922 43.099609 C 15.686922 43.046609 15.252219 43.395906 15.199219 43.878906 C 15.163219 44.207906 15.313844 44.528937 15.589844 44.710938 C 18.897844 46.849938 22.750453 47.991 26.689453 48 C 32.536453 48.137 38.143 45.675297 42 41.279297 C 45.374 37.441297 47.255781 32.520156 47.300781 27.410156 L 47.300781 26.939453 C 48.586781 25.951453 49.699609 24.759156 50.599609 23.410156 C 50.864609 23.002156 50.749797 22.457359 50.341797 22.193359 C 50.096797 22.034359 49.788531 22.006141 49.519531 22.119141 L 49.490234 22.119141 L 48.800781 22.400391 C 49.207781 21.781391 49.523234 21.108391 49.740234 20.400391 C 49.869234 19.931391 49.592047 19.447359 49.123047 19.318359 C 48.899047 19.257359 48.662937 19.286391 48.460938 19.400391 C 47.319938 20.078391 46.081063 20.577859 44.789062 20.880859 C 43.215063 19.406359 41.192937 18.708438 39.195312 18.773438 z M 39.654297 20.597656 C 41.223109 20.654375 42.732844 21.319484 43.839844 22.490234 C 44.046844 22.710234 44.353391 22.808 44.650391 22.75 C 45.363391 22.609 46.065 22.414922 46.75 22.169922 C 46.35 22.607922 45.889859 22.984062 45.380859 23.289062 C 44.984859 23.571063 44.891828 24.121578 45.173828 24.517578 C 45.361828 24.781578 45.679 24.920859 46 24.880859 C 46.42 24.827859 46.837 24.759687 47.25 24.679688 C 46.816 25.083687 46.354141 25.459781 45.869141 25.800781 C 45.631141 25.974781 45.496766 26.255781 45.509766 26.550781 L 45.509766 27.410156 C 45.500766 37.815156 37.057344 46.241422 26.652344 46.232422 C 24.238344 46.230422 21.847375 45.764375 19.609375 44.859375 C 22.253375 44.536375 24.760375 43.499375 26.859375 41.859375 C 27.240375 41.557375 27.305906 41.004047 27.003906 40.623047 C 26.840906 40.416047 26.593078 40.294063 26.330078 40.289062 C 24.245078 40.253062 22.325 39.146375 21.25 37.359375 C 21.909 37.351375 22.563219 37.261844 23.199219 37.089844 C 23.667219 36.959844 23.9425 36.473859 23.8125 36.005859 C 23.7235 35.687859 23.464625 35.446859 23.140625 35.380859 C 20.797625 34.899859 18.955453 33.086 18.439453 30.75 C 19.113453 30.96 19.813531 31.077609 20.519531 31.099609 C 20.912531 31.120609 21.269859 30.868234 21.380859 30.490234 C 21.500859 30.116234 21.356297 29.708234 21.029297 29.490234 C 18.768297 27.982234 17.788859 25.154312 18.630859 22.570312 C 22.278859 26.471312 27.296859 28.805078 32.630859 29.080078 C 32.906859 29.098078 33.173609 28.982531 33.349609 28.769531 C 33.524609 28.558531 33.591297 28.277766 33.529297 28.009766 C 32.779297 24.747766 34.816125 21.495094 38.078125 20.746094 C 38.601625 20.625844 39.131359 20.57875 39.654297 20.597656 z M 54.041016 24.103516 C 53.911719 24.090984 53.778234 24.103531 53.646484 24.144531 C 53.119484 24.309531 52.826188 24.871437 52.992188 25.398438 C 53.660188 27.527438 54 29.748 54 32 C 54 34.687 53.520172 37.311781 52.576172 39.800781 C 52.381172 40.317781 52.641203 40.894844 53.158203 41.089844 C 53.274203 41.133844 53.393719 41.154297 53.511719 41.154297 C 53.915719 41.154297 54.296266 40.908766 54.447266 40.509766 C 55.478266 37.792766 56 34.93 56 32 C 56 29.545 55.629391 27.122828 54.900391 24.798828 C 54.775891 24.404328 54.428906 24.141109 54.041016 24.103516 z M 51.169922 42.001953 C 50.783016 41.952922 50.387438 42.135641 50.179688 42.494141 C 49.903688 42.972141 50.066922 43.583375 50.544922 43.859375 L 52.275391 44.861328 C 52.433391 44.953328 52.605391 44.996094 52.775391 44.996094 C 53.121391 44.996094 53.457578 44.818047 53.642578 44.498047 C 53.918578 44.020047 53.755344 43.408813 53.277344 43.132812 L 51.546875 42.130859 C 51.427125 42.060859 51.298891 42.018297 51.169922 42.001953 z M 48.398438 45.587891 C 48.143062 45.603141 47.894437 45.717328 47.710938 45.923828 C 47.343938 46.337828 47.381922 46.969938 47.794922 47.335938 L 49.291016 48.662109 C 49.481016 48.831109 49.717125 48.914062 49.953125 48.914062 C 50.229125 48.914062 50.504125 48.801125 50.703125 48.578125 C 51.070125 48.164125 51.032141 47.532016 50.619141 47.166016 L 49.123047 45.839844 C 48.916047 45.656344 48.653813 45.572641 48.398438 45.587891 z M 16.646484 48.177734 C 16.390984 48.192359 16.140531 48.305219 15.957031 48.511719 C 15.590031 48.923719 15.625109 49.554875 16.037109 49.921875 C 20.434109 53.841875 26.104 56 32 56 C 32.629 56 33.270297 55.974781 33.904297 55.925781 C 34.454297 55.882781 34.865266 55.401562 34.822266 54.851562 C 34.779266 54.300563 34.295047 53.885641 33.748047 53.931641 C 27.717047 54.397641 21.829141 52.405687 17.369141 48.429688 C 17.162641 48.245688 16.901984 48.163109 16.646484 48.177734 z M 45.345703 48.603516 C 45.092328 48.567641 44.824516 48.627969 44.603516 48.792969 C 44.162516 49.124969 44.07425 49.752359 44.40625 50.193359 L 45.607422 51.792969 C 45.803422 52.053969 46.104203 52.191406 46.408203 52.191406 C 46.617203 52.191406 46.827813 52.125234 47.007812 51.990234 C 47.448812 51.658234 47.537078 51.032797 47.205078 50.591797 L 46.003906 48.992188 C 45.838406 48.771688 45.599078 48.639391 45.345703 48.603516 z M 41.375 50.886719 C 41.245125 50.892156 41.113281 50.923422 40.988281 50.982422 C 40.489281 51.218422 40.276672 51.815453 40.513672 52.314453 L 41.371094 54.121094 C 41.542094 54.481094 41.901391 54.691406 42.275391 54.691406 C 42.418391 54.691406 42.564125 54.660703 42.703125 54.595703 C 43.202125 54.359703 43.414734 53.762672 43.177734 53.263672 L 42.320312 51.457031 C 42.143312 51.083531 41.764625 50.870406 41.375 50.886719 z M 37.400391 52.373047 C 37.272469 52.352391 37.138609 52.357625 37.005859 52.390625 C 36.469859 52.522625 36.142437 53.062609 36.273438 53.599609 L 36.748047 55.542969 C 36.860047 55.998969 37.26875 56.304688 37.71875 56.304688 C 37.79775 56.304688 37.877031 56.295391 37.957031 56.275391 C 38.493031 56.143391 38.822406 55.601453 38.691406 55.064453 L 38.214844 53.123047 C 38.115844 52.721047 37.784156 52.435016 37.400391 52.373047 z"></path>
</svg>`,
  YouTube: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M 32 7.984375 C 26.058594 7.984375 20.121094 8.316406 14.21875 8.96875 L 11.03125 9.324219 C 6.964844 9.777344 3.714844 12.921875 3.132813 16.980469 C 1.710938 26.945313 1.648438 37.054688 2.953125 47.035156 L 3.195313 48.921875 C 3.734375 53.035156 6.988281 56.226563 11.109375 56.6875 L 14.21875 57.03125 C 20.121094 57.6875 26.058594 58.015625 32 58.015625 C 37.941406 58.015625 43.882813 57.6875 49.78125 57.03125 L 52.890625 56.6875 C 57.011719 56.226563 60.265625 53.035156 60.800781 48.921875 L 61.046875 47.03125 C 62.351563 37.054688 62.289063 26.941406 60.863281 16.980469 C 60.285156 12.921875 57.035156 9.777344 52.96875 9.324219 L 49.78125 8.96875 C 43.878906 8.316406 37.941406 7.984375 32 7.984375 Z M 32 9.984375 C 37.867188 9.984375 43.734375 10.308594 49.558594 10.957031 L 52.746094 11.3125 C 55.910156 11.660156 58.433594 14.109375 58.886719 17.261719 C 60.28125 27.046875 60.34375 36.976563 59.0625 46.773438 L 58.816406 48.660156 C 58.398438 51.859375 55.871094 54.339844 52.667969 54.699219 L 49.558594 55.042969 C 37.90625 56.335938 26.09375 56.339844 14.441406 55.042969 L 11.332031 54.699219 C 8.128906 54.339844 5.597656 51.859375 5.179688 48.660156 L 4.9375 46.777344 C 3.65625 36.976563 3.71875 27.046875 5.117188 17.261719 C 5.566406 14.109375 8.089844 11.660156 11.253906 11.3125 L 14.441406 10.957031 C 20.269531 10.308594 26.132813 9.984375 32 9.984375 Z M 9 14 C 8.449219 14 8 14.445313 8 15 L 8 17 C 8 17.554688 8.449219 18 9 18 C 9.550781 18 10 17.554688 10 17 L 10 15 C 10 14.445313 9.550781 14 9 14 Z M 14 14 C 13.449219 14 13 14.445313 13 15 L 13 17 C 13 17.554688 13.449219 18 14 18 C 14.550781 18 15 17.554688 15 17 L 15 15 C 15 14.445313 14.550781 14 14 14 Z M 19 14 C 18.449219 14 18 14.445313 18 15 L 18 17 C 18 17.554688 18.449219 18 19 18 C 19.550781 18 20 17.554688 20 17 L 20 15 C 20 14.445313 19.550781 14 19 14 Z M 24 14 C 23.449219 14 23 14.445313 23 15 L 23 17 C 23 17.554688 23.449219 18 24 18 C 24.550781 18 25 17.554688 25 17 L 25 15 C 25 14.445313 24.550781 14 24 14 Z M 29 14 C 28.449219 14 28 14.445313 28 15 L 28 17 C 28 17.554688 28.449219 18 29 18 C 29.550781 18 30 17.554688 30 17 L 30 15 C 30 14.445313 29.550781 14 29 14 Z M 34 14 C 33.449219 14 33 14.445313 33 15 L 33 17 C 33 17.554688 33.449219 18 34 18 C 34.550781 18 35 17.554688 35 17 L 35 15 C 35 14.445313 34.550781 14 34 14 Z M 39 14 C 38.449219 14 38 14.445313 38 15 L 38 17 C 38 17.554688 38.449219 18 39 18 C 39.550781 18 40 17.554688 40 17 L 40 15 C 40 14.445313 39.550781 14 39 14 Z M 44 14 C 43.449219 14 43 14.445313 43 15 L 43 17 C 43 17.554688 43.449219 18 44 18 C 44.550781 18 45 17.554688 45 17 L 45 15 C 45 14.445313 44.550781 14 44 14 Z M 49 14 C 48.449219 14 48 14.445313 48 15 L 48 17 C 48 17.554688 48.449219 18 49 18 C 49.550781 18 50 17.554688 50 17 L 50 15 C 50 14.445313 49.550781 14 49 14 Z M 54 14 C 53.449219 14 53 14.445313 53 15 L 53 17 C 53 17.554688 53.449219 18 54 18 C 54.550781 18 55 17.554688 55 17 L 55 15 C 55 14.445313 54.550781 14 54 14 Z M 24.984375 21.890625 C 24.8125 21.894531 24.644531 21.941406 24.492188 22.03125 C 24.1875 22.210938 24 22.535156 24 22.890625 L 24 43 C 24 43.355469 24.1875 43.679688 24.492188 43.859375 C 24.648438 43.953125 24.824219 44 25 44 C 25.167969 44 25.332031 43.957031 25.484375 43.875 L 43.769531 33.855469 C 44.089844 33.675781 44.292969 33.34375 44.292969 32.980469 C 44.292969 32.613281 44.09375 32.277344 43.777344 32.101563 L 25.484375 22.015625 C 25.328125 21.929688 25.15625 21.886719 24.984375 21.890625 Z M 26 24.582031 L 41.21875 32.972656 L 26 41.3125 Z M 9 48 C 8.449219 48 8 48.445313 8 49 L 8 51 C 8 51.554688 8.449219 52 9 52 C 9.550781 52 10 51.554688 10 51 L 10 49 C 10 48.445313 9.550781 48 9 48 Z M 14 48 C 13.449219 48 13 48.445313 13 49 L 13 51 C 13 51.554688 13.449219 52 14 52 C 14.550781 52 15 51.554688 15 51 L 15 49 C 15 48.445313 14.550781 48 14 48 Z M 19 48 C 18.449219 48 18 48.445313 18 49 L 18 51 C 18 51.554688 18.449219 52 19 52 C 19.550781 52 20 51.554688 20 51 L 20 49 C 20 48.445313 19.550781 48 19 48 Z M 24 48 C 23.449219 48 23 48.445313 23 49 L 23 51 C 23 51.554688 23.449219 52 24 52 C 24.550781 52 25 51.554688 25 51 L 25 49 C 25 48.445313 24.550781 48 24 48 Z M 29 48 C 28.449219 48 28 48.445313 28 49 L 28 51 C 28 51.554688 28.449219 52 29 52 C 29.550781 52 30 51.554688 30 51 L 30 49 C 30 48.445313 29.550781 48 29 48 Z M 34 48 C 33.449219 48 33 48.445313 33 49 L 33 51 C 33 51.554688 33.449219 52 34 52 C 34.550781 52 35 51.554688 35 51 L 35 49 C 35 48.445313 34.550781 48 34 48 Z M 39 48 C 38.449219 48 38 48.445313 38 49 L 38 51 C 38 51.554688 38.449219 52 39 52 C 39.550781 52 40 51.554688 40 51 L 40 49 C 40 48.445313 39.550781 48 39 48 Z M 44 48 C 43.449219 48 43 48.445313 43 49 L 43 51 C 43 51.554688 43.449219 52 44 52 C 44.550781 52 45 51.554688 45 51 L 45 49 C 45 48.445313 44.550781 48 44 48 Z M 49 48 C 48.449219 48 48 48.445313 48 49 L 48 51 C 48 51.554688 48.449219 52 49 52 C 49.550781 52 50 51.554688 50 51 L 50 49 C 50 48.445313 49.550781 48 49 48 Z M 54 48 C 53.449219 48 53 48.445313 53 49 L 53 51 C 53 51.554688 53.449219 52 54 52 C 54.550781 52 55 51.554688 55 51 L 55 49 C 55 48.445313 54.550781 48 54 48 Z"></path>
</svg>`,
};

export default socialIcons;
