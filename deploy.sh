#!/usr/bin/env bash
# Despliegue de arianet.eu (Astro estático).
#
# Lo ejecuta GitHub Actions por SSH tras cada push a main (clave con
# command= forzado a este script). Builda en el VPS dentro de Docker
# (el host no tiene toolchain de Node) y publica en /var/www/arianet.eu,
# porque www-data no lee ~/apps.
#
# Requisito de primera vez en el VPS:
#   sudo install -d -o "$USER" -g www-data -m 755 /var/www/arianet.eu
set -euo pipefail

cd "$(dirname "$(readlink -f "$0")")"

git fetch origin main
git reset --hard origin/main

# Build dentro de node:22 con límites para no molestar a los vecinos.
# La caché de npm vive en el propio checkout (propiedad de este usuario);
# PUBLIC_API_URL se hornea en el JS del cliente en tiempo de build.
docker run --rm -u "$(id -u):$(id -g)" \
  --memory=2g --cpus=2 \
  -v "$PWD":/src -w /src \
  -e npm_config_cache=/src/.npm-cache \
  -e PUBLIC_API_URL=https://api.arianet.eu \
  -e PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAD2E6gDJUuOCOmbm \
  node:22 sh -c 'npm ci && npm run build'

rsync -a --delete dist/ /var/www/arianet.eu/

echo "arianet.eu desplegado: $(date -Is)"
