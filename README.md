# 🏥 Clínica Hope — Sistema PWA

Sistema unificado de gestão da Clínica Hope com suporte PWA completo para **Android** e **iOS**.

## 📱 Funcionalidades PWA

- ✅ Instalável na tela inicial (Android + iOS)
- ✅ Splash screen com logo
- ✅ Ícones em todos os tamanhos (72→512px)
- ✅ Modo standalone (sem barra do navegador)
- ✅ Service Worker com cache offline
- ✅ Banner de instalação nativo
- ✅ Detecção online/offline
- ✅ Safe areas (notch/barra de navegação)

## 📂 Estrutura do Projeto

```
clinica-hope-pwa/
├── Index.html          ← HTML principal (cole no Apps Script)
├── Codigo.gs           ← Código GAS (cole no Apps Script)
├── manifest.json       ← Manifesto PWA
├── sw.js               ← Service Worker
├── offline.html        ← Página offline
├── logo-header.png     ← Logo branca (header)
├── logo-original.png   ← Logo original
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    └── apple-touch-icon.png
```

## 🚀 Deploy — Opção 1: GitHub Pages (PWA Completa)

### Passo 1: Criar repositório no GitHub
1. Vá em [github.com/new](https://github.com/new)
2. Nome: `clinica-hope-pwa`
3. Marque "Public" e crie

### Passo 2: Upload dos arquivos
1. No repositório, clique **"Add file" → "Upload files"**
2. Arraste TODOS os arquivos e pastas deste projeto
3. Commit: `"Deploy PWA Clínica Hope"`

### Passo 3: Ativar GitHub Pages
1. Vá em **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / pasta: **/ (root)**
4. Clique **Save**

### Passo 4: Acessar
- URL: `https://SEU-USUARIO.github.io/clinica-hope-pwa/`
- O PWA ficará instalável após acessar pelo celular

## 🚀 Deploy — Opção 2: Google Apps Script (Dentro da planilha)

### Passo 1: Copiar o `Codigo.gs`
- Abra o Editor de Scripts da planilha
- Substitua o conteúdo de `Codigo.gs` pelo arquivo fornecido

### Passo 2: Copiar o `Index.html`
- No editor, crie/edite o arquivo `Index.html`
- Cole o conteúdo do `Index.html` deste projeto
- **Nota:** No modo GAS (iframe), o PWA funciona parcialmente. Para PWA completa, use GitHub Pages.

### Passo 3: Deploy como Web App
- **Executar como:** Eu (seu email)
- **Quem tem acesso:** Qualquer pessoa
- Copie a URL gerada

## 📲 Instalar no Celular

### Android
1. Acesse a URL pelo **Chrome**
2. Toque no banner "Instalar" ou no menu ⋮ → "Instalar app"
3. O app aparece na tela inicial

### iOS (iPhone/iPad)
1. Acesse a URL pelo **Safari**
2. Toque no botão **Compartilhar** (⬆️)
3. Selecione **"Adicionar à Tela Inicial"**
4. O app aparece na tela inicial

## 🎨 Design

- **Tipografia:** DM Sans + Playfair Display
- **Paleta:** Teal (#004d40) com acentos amber
- **Splash Screen:** Logo animada com gradiente
- **Animações:** Transições suaves entre views
- **Cards:** Design com profundidade e hover effects
- **Mobile-first:** Otimizado para toque

## ⚠️ Notas Importantes

- O `Codigo.gs` mantém **100% das regras de negócio** inalteradas
- A logo foi convertida para branco (sobre fundo teal) nos ícones
- O Service Worker **não interfere** nas chamadas ao Google Apps Script
- Para funcionar como PWA completa, **necessita HTTPS** (GitHub Pages fornece)
