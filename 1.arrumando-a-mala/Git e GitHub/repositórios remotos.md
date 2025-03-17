
#### **Gerenciamento de Conexões Remotas**
```bash
# Listar repositórios remotos
git remote -v

# Adicionar um repositório remoto
git remote add nome_remoto url_do_repositório

# Remover um repositório remoto
git remote rm nome_remoto

# Renomear um repositório remoto
git remote rename nome_antigo nome_novo
```

#### **Sincronização com Remoto**
```bash
# Buscar alterações do remoto (sem merge)
git fetch nome_remoto

# Puxar alterações do remoto (fetch + merge)
git pull nome_remoto nome_da_branch

# Enviar alterações para o remoto
git push nome_remoto nome_da_branch

# Enviar todas as branches para o remoto
git push --all
```