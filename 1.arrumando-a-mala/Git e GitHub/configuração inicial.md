
#### **Introdução ao Git e GitHub**
- **Git**: Sistema de controle de versão distribuído e de código aberto (local).
- **GitHub**: Plataforma na nuvem para hospedar repositórios Git, com ferramentas de colaboração e rede social.

#### **Comandos Básicos**
```bash
# Configurar nome e e-mail
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"

# Definir branch padrão como "main"
git config --global init.defaultBranch main
```

#### **Escopos de Configuração**
- **Local**: Apenas para o repositório atual.
  ```bash
  git config --local user.email "email"
  ```
- **Global**: Para todos os repositórios no sistema.
  ```bash
  git config --global user.email "email"
  ```
- **Sistema**: Para todos os usuários do sistema.
  ```bash
  git config --system user.email "email"
  ```

#### **Atalhos**
- **Alias**: Criar atalhos para comandos frequentes.
  ```bash
  git config --global alias.log1 "log --oneline"
  ```
- **Boas práticas com branches**:
  - Crie branches para novas funcionalidades ou correções.
  - Faça merge na branch principal (`main`) após testes.