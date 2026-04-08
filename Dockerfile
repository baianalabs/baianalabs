# Stage 1: Build the Vite + React application
FROM node:20-alpine as build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de manifesto para aproveitar o cache do Docker
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm ci

# Copiar o restante do código fonte
COPY . .

# Fazer o build do projeto (gera os arquivos estáticos na pasta dist)
RUN npm run build

# Stage 2: Servir a aplicação usando o Nginx
FROM nginx:alpine

# Remover a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos gerados no Stage 1 para o diretório público do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Precisamos copiar uma configuração customizada do nginx se o app usar roteamento client-side (React Router)
# Para um site simples, a configuração padrão do Nginx costuma funcionar. 
# Adicionando regra para fallback no index.html (SPA)
RUN echo -e "server {\n\
    listen 80;\n\
    server_name localhost;\n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        index  index.html index.htm;\n\
        try_files \$uri \$uri/ /index.html;\n\
    }\n\
}" > /etc/nginx/conf.d/default.conf

# Expor a porta 80 do container
EXPOSE 80

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
