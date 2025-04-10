# --- 빌드 스테이지 ---
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    # 전체 의존성 설치 (dev 포함)
    COPY package*.json ./
    RUN npm install
    
    # 소스 복사 및 빌드
    COPY . .
    RUN npm run build
    
    
    # --- 런타임 스테이지 ---
    FROM node:18-alpine
    
    WORKDIR /app
    COPY --from=builder /app ./
    
    # ❌ 이거 제거
    # RUN npm install --omit=dev
    
    EXPOSE 3000
    CMD ["npm", "run", "start"]