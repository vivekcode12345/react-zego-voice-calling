# ZEGO Voice Calling

Voice and video invitation demo built with React, Vite, Tailwind CSS, and ZEGO UIKit Prebuilt.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- ZEGO UIKit Prebuilt + ZIM Web SDK

## Project Structure

```text
src/
	components/
		CallPanel.jsx        # UI layer for call actions and user details
	config/
		env.js               # Environment variable parsing and validation helpers
	hooks/
		useZegoCall.js       # Call lifecycle and invitation business logic
	services/
		zegoClient.js        # ZEGO SDK wrapper/helpers
	App.jsx                # App composition/orchestration
	index.css              # Tailwind entry
	main.jsx               # React bootstrap
```

## Environment Setup

Create `.env.local` in project root and add:

```env
VITE_ZEGO_APP_ID=your_app_id
VITE_ZEGO_SERVER_SECRET=your_server_secret
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Security Note

`VITE_` variables are embedded in client bundles. For production, move token generation to a backend API and keep `SERVER_SECRET` only on server side.
