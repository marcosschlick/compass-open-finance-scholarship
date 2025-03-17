
#### **Inicializar um Repositório**
```bash
git init
```

#### **Clonar um Repositório**
```bash
# Clonar repositório remoto
git clone "url_do_repositório"

# Clonar um branch específico
git clone --branch "nome_do_branch" "url_do_repositório"

# Clonar para um diretório específico
git clone "url_do_repositório" "diretório"
```

#### **Conectar e Enviar para um Repositório Remoto**
```bash
# Adicionar um repositório remoto
git remote add origin git@github.com:marcosschlick/s.git

# Renomear a branch atual para "main"
git branch -M main

# Enviar commits para o repositório remoto
git push -u origin main
```