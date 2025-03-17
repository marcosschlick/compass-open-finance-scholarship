
#### **Estados dos Arquivos**
- **Untracked**: Arquivos não rastreados pelo Git.
- **Tracked**: Arquivos rastreados (com snapshot).
  - **Staged**: Prontos para commit.
  - **Unstaged**: Modificados, mas não preparados para commit.

#### **Comandos Básicos**
```bash
# Adicionar arquivos ao staged
git add .

# Remover arquivos do staged
git rm --cached arquivo

# Realizar commit
git commit -m "Mensagem do commit"

# Pular o estágio de staging e commitar diretamente
git commit -a -m "Mensagem do commit"

# Alterar o último commit
git commit --amend -m "Nova mensagem"
```

#### **Restaurar Arquivos**
```bash
# Remover do staged
git restore --staged arquivo

# Restaurar arquivo para a versão do último commit
git restore arquivo

# Restaurar todos os arquivos
git restore .
```

#### **Visualizar Histórico**
```bash
# Ver histórico de commits
git log

# Ver histórico resumido (uma linha por commit)
git log --oneline

# Ver histórico detalhado (com diferenças)
git log -p
```