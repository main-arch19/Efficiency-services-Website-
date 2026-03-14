// Starts the Next.js dev server for HNeef Efficiency Services
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const server = spawn('npm', ['run', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
})

server.on('error', (err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
