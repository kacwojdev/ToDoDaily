import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        resolve: {
            alias: {
                '@icons': resolve(__dirname, '/src/assets/icons'),
                '@fonts': resolve(__dirname, '/src/assets/fonts'),
                '@components': resolve(__dirname, '/src/components'),
                '@globalStyles': resolve(__dirname, '/src/utils/globalStyles')
            }
        },

        build: {
            outDir: './dist'
        },
        plugins: [react()],

        define: {
            'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(
                env.REACT_APP_FIREBASE_API_KEY
            ),
            'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(
                env.REACT_APP_FIREBASE_AUTH_DOMAIN
            ),
            'process.env.REACT_APP_FIREBASE_DATABASE_URL': JSON.stringify(
                env.REACT_APP_FIREBASE_DATABASE_URL
            ),
            'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(
                env.REACT_APP_FIREBASE_PROJECT_ID
            ),
            'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(
                env.REACT_APP_FIREBASE_STORAGE_BUCKET
            ),
            'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
                env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
            ),
            'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(env.REACT_APP_FIREBASE_APP_ID),
            'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(
                env.REACT_APP_FIREBASE_MEASUREMENT_ID
            )
        },
        server: {
            port: 8000
        }
    }
})
