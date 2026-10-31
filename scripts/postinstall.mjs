import { spawnSync } from 'node:child_process';
import process from 'node:process';

if (process.platform === 'win32') {
  console.log(
    '[install-subfinder] Unsupported platform Windows — skipping (Unix only; set SUBFINDER_BIN to use a system install)',
  );
  process.exit(0);
} else {
  const result = spawnSync('bash', ['./scripts/install-subfinder.sh'], {
    stdio: 'inherit',
  });
  if (result.error) {
    console.error('[install-subfinder] Failed to execute install-subfinder.sh:', result.error);
    process.exit(1);
  }
  process.exit(result.status ?? 0);
}
