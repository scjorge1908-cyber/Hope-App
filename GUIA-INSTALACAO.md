# 🚀 Guia: Instalar Clínica Hope como App Real (PWA)

## Como funciona?

Uma **página "casca"** hospedada no GitHub Pages carrega o sistema do Google Apps Script em tela cheia. Isso permite instalar como app real no celular.

**Você faz o setup UMA VEZ.** Depois, cada psicólogo recebe um link diferente — sem precisar repetir nada.

---

## 📋 O que você precisa

1. Uma conta no **GitHub** (gratuito) → github.com
2. Os **5 arquivos** desta pasta (index.html, manifest.json, sw.js, icon-192.png, icon-512.png)
3. O **ID de deploy** de cada psicólogo (a parte do meio da URL do Google Apps Script)

---

## 📝 Passo 1: Criar conta no GitHub

1. Acesse github.com
2. Clique em **Sign up**
3. Crie sua conta (gratuito)

---

## 📝 Passo 2: Criar um repositório

1. Logado no GitHub, clique no **+** (canto superior direito) → **New repository**
2. Configure:
   - **Repository name:** Hope-App
   - **Public** (deve ser público)
   - Marque **"Add a README file"**
3. Clique em **Create repository**

---

## 📝 Passo 3: Fazer upload dos arquivos

1. Na página do repositório, clique em **Add file** → **Upload files**
2. Arraste os 5 arquivos: index.html, manifest.json, sw.js, icon-192.png, icon-512.png
3. Clique em **Commit changes**

---

## 📝 Passo 4: Ativar GitHub Pages

1. No repositório, vá em **Settings** (aba no topo)
2. No menu lateral, clique em **Pages**
3. Em Source, selecione Branch: **main**, Folder: **/ (root)**
4. Clique em **Save**
5. Aguarde 1-2 minutos

Seu site estará em: https://SEU_USUARIO.github.io/Hope-App/

---

## 📝 Passo 5: Montar o link de cada psicólogo

Cada psicólogo tem um URL de deploy do Google Apps Script, tipo:

  https://script.google.com/macros/s/AKfycbxAbCdEfGh.../exec
                                      ^^^^^^^^^^^^^^^^
                                      ESTE É O ID

O link de cada psicólogo fica assim:

  https://SEU_USUARIO.github.io/Hope-App/?id=DEPLOY_ID

Exemplo:
  - Dra. Ana  → ?id=AKfycbxABC123...
  - Dr. João  → ?id=AKfycbxXYZ789...
  - Dra. Maria → ?id=AKfycbxDEF456...

Cada um recebe seu link e instala no celular. O ID fica salvo automaticamente no aparelho.

---

## 📱 Passo 6: Instalar no celular

1. O psicólogo abre seu link no Chrome (Android) ou Safari (iPhone)
2. Aparece a tela de instalação com o botão "Instalar App"
3. Depois de instalar, o app fica na tela inicial como um app normal
4. Nas próximas vezes, abre direto sem precisar do link

---

## 🔄 Atualizações

- Atualizou Code.gs ou Index.html no Apps Script? NÃO precisa mexer no GitHub!
- A casca sempre carrega a versão mais recente do GAS
- Só mexe no GitHub se mudar ícones ou nome do app

---

## ❓ Problemas comuns

"Tela em branco ou não carrega"
→ Verifique se o deploy do GAS está com permissão "Qualquer pessoa"

"Aparece 'Link incompleto'"
→ O link está sem o ?id=. Confira se o ID do deploy está correto

"Não aparece opção de instalar"
→ Use Chrome no Android ou Safari no iPhone

"Preciso adicionar novo psicólogo"
→ Só montar o link com o deploy ID dele. Não precisa mexer no GitHub
