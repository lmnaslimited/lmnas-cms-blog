# Base image for both apps
FROM node:20-alpine AS base
 
# Install git and other dependencies required for cloning
RUN apk add --no-cache git vim
 
# Use ARG to pass the Personal Access Token securely
ARG REPO_KEY
 
# Install dependencies for stunning-braccoli
FROM base AS stunning-braccoli-deps
WORKDIR /app1
RUN apk add --no-cache libc6-compat
RUN git clone -b release https://$REPO_KEY@github.com/lmnaslimited/stunning-braccoli.git .
RUN npm ci
 
# Build stunning-braccoli
FROM base AS stunning-braccoli-builder
WORKDIR /app1
COPY --from=stunning-braccoli-deps /app1/node_modules ./node_modules
ARG SUBSCRIBE_URL=${SUBSCRIBE_URL}
ENV SUBSCRIBE_URL=${SUBSCRIBE_URL}
ARG AUTH_BASE_64=${AUTH_BASE_64}
ENV AUTH_BASE_64=${AUTH_BASE_64}
COPY --from=stunning-braccoli-deps /app1 .
RUN npm run build
 
# Install dependencies for lmnas-cms-blog
FROM base AS lmnas-cms-blog-deps
WORKDIR /app2
RUN apk add --no-cache libc6-compat
COPY . .
RUN npm ci
 
# Build lmnas-cms-blog
FROM base AS lmnas-cms-blog-builder
WORKDIR /app2
COPY --from=lmnas-cms-blog-deps /app2/node_modules ./node_modules
COPY --from=lmnas-cms-blog-deps /app2 .
COPY --from=lmnas-cms-blog-deps /app2/env-config.js ./env-config.js
ARG NEXT_PUBLIC_STRAPI_API_URL=https://dumps-240005.lmnaslens.com
ENV NEXT_PUBLIC_STRAPI_API_URL=${NEXT_PUBLIC_STRAPI_API_URL}
RUN npm run build
 
# Production setup for both apps
FROM base AS runner
WORKDIR /app
 
ENV NODE_ENV production
ARG SUBSCRIBE_URL=${SUBSCRIBE_URL}
ENV SUBSCRIBE_URL=${SUBSCRIBE_URL}
ARG AUTH_BASE_64=${AUTH_BASE_64}
ENV AUTH_BASE_64=${AUTH_BASE_64}
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
 
# Copy stunning-braccoli build files
COPY --from=stunning-braccoli-builder /app1 ./app1
COPY --from=stunning-braccoli-builder --chown=nextjs:nodejs /app1/.next/standalone ./app1/
COPY --from=stunning-braccoli-builder  --chown=nextjs:nodejs /app1/.next/static ./app1/.next/static
 
# Copy lmnas-cms-blog build files
COPY --from=lmnas-cms-blog-builder /app2 ./app2
 
# Ensure proper permissions for both apps
RUN chown -R nextjs:nodejs /app
 
USER nextjs
 
# Expose both apps on different ports
EXPOSE 3000 4000
 
# Start stunning-braccoli with next start and lmnas-cms-blog with next start
CMD ["sh", "-c", "node /app/app1/server.js & cd /app/app2 && npm run start"]