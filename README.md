# 🌐 Projeto API com Node.js e AWS

Este projeto foi desenvolvido durante a **Imersão Backend Alura**. A ideia principal foi configurar uma **API REST** que se conecta a um banco de dados externo e alimenta uma aplicação web. Diferentemente do projeto original, que utilizava um servidor local, este servidor foi implementado em uma instância **AWS EC2** para simular um ambiente de trabalho real onde é necessário conectar-se s um BD externo.

---

## 🚀 **Objetivo do Projeto**
- Criar e configurar um servidor utilizando **Node.js**.
- Construir uma **API REST** capaz de fornecer dados de um banco externo.
- Simular um ambiente real, hospedando o servidor em uma instância da AWS **EC2** e utilizando **MongoDB** como banco de dados.

---

## 🛠️ **Tecnologias Utilizadas**
- **Node.js**: Para a criação e gerenciamento do servidor.
- **JavaScript**: Linguagem principal do projeto.
- **AWS**: Para hospedar o servidor em nuvem.
- **MongoDB**: Banco de dados externo para armazenamento e manipulação de dados.

---

## 📝 **Descrição do Projeto**
A API é responsável por gerenciar um conjunto de posts. Cada post contém:
- Um **ID único**.
- Uma **descrição**.
- Um **link para uma imagem**.

Atualmente, a API possui as seguintes funcionalidades:
1. **Listar todos os posts:**  
   Endpoint: `GET /posts`  
   Retorna todos os posts disponíveis.

2. **Buscar um post por ID:**  
   Endpoint: `GET /posts/:id`  
   Retorna as informações do post associado ao ID fornecido.

---

## ⚙️ **Status atual**

Em desenvolvimento.

---

