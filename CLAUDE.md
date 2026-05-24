# Portfolio Website — Claude Notes

## Adding New Photos to a Gallery Folder

Whenever the user mentions adding more pictures, photos, or images to the site, the full workflow is:

### 1. Drop the images in
Copy the new `.jpg` files into the appropriate folder under `my-app/public/`, e.g.:
- `my-app/public/Japan2026Pics/` for the Japan gallery

### 2. Generate compressed thumbnails
```bash
cd my-app
npm run thumbs
```
This runs `scripts/generate-thumbs.mjs` using **sharp** and writes 600px-wide, 60%-quality JPEG thumbnails into a `thumbs/` subfolder (e.g. `public/Japan2026Pics/thumbs/`). The script skips files that already have a thumbnail, so it's safe to re-run.

### 3. Register the images in App.jsx
In `my-app/src/App.jsx`, find the folder's `items` array (search for the folder's `id`, e.g. `"japan2026"`). Add an entry for each new file:
```js
{label:"IMG_XXXX", kind:"PHOTO", url:"/Japan2026Pics/IMG_XXXX.jpg"},
```
Also update the `count` field to match the new total, and update `thumbUrl` if the cover photo changed.

### How the gallery works
- **Grid view** — loads the small thumbnail (`/thumbs/IMG_XXXX.jpg`, ~26 KB avg) lazily via IntersectionObserver.
- **Lightbox** — clicking a thumbnail opens a fullscreen viewer that shows the blurred thumbnail instantly, then fades in the full-resolution image once it loads. Supports ← → arrow keys and Escape to close.

### Adding a brand-new gallery folder
1. Create a new subfolder under `my-app/public/` and drop images in.
2. Update `generate-thumbs.mjs` to point at the new folder (or make the script generic — currently it only targets `Japan2026Pics`).
3. Add a new folder object to the `FOLDERS` data in `App.jsx` following the same shape as the existing ones.
4. Run `npm run thumbs`.
