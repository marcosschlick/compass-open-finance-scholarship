
#### **Criação e Troca de Branches**
```bash
# Listar branches
git branch

# Criar nova branch
git branch nome_da_branch

# Trocar para uma branch
git switch nome_da_branch

# Criar e trocar para uma nova branch
git switch -c nome_da_branch
```

#### **Merge de Branches**
```bash
# Fazer merge de uma branch na branch atual
git merge nome_da_branch -m "Mensagem do merge"
```

#### **Exclusão de Branches**
```bash
# Excluir uma branch
git branch -d nome_da_branch
```