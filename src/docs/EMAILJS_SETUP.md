# 📧 Configuração EmailJS - Portfolio 2025

## 🎯 **Visão Geral**

Este documento explica como configurar o EmailJS para que o formulário de contato funcione corretamente.

## 🚀 **Passo 1: Criar Conta no EmailJS**

1. Acesse [EmailJS.com](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

## ⚙️ **Passo 2: Configurar Serviço de Email**

### **2.1 Gmail (Recomendado para testes)**

1. No dashboard do EmailJS, vá em "Email Services"
2. Clique em "Add New Service"
3. Selecione "Gmail"
4. Faça login com sua conta Google
5. Dê um nome ao serviço (ex: "gmail_service")
6. **Anote o Service ID** - você precisará dele

### **2.2 Outros Serviços**

- **Outlook**: Similar ao Gmail
- **Yahoo**: Configuração similar
- **Custom SMTP**: Para servidores próprios

## 📝 **Passo 3: Criar Template de Email**

1. No dashboard, vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template:

```html
<!-- Template HTML -->
<h2>Nova mensagem do portfólio</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Assunto:</strong> {{subject}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>

<hr />
<p><em>Enviado via portfólio de Thiago Cainelli</em></p>
```

4. **Anote o Template ID** - você precisará dele

## 🔑 **Passo 4: Obter Chave Pública**

1. No dashboard, vá em "Account" → "API Keys"
2. **Anote a Public Key** - você precisará dela

## 🌍 **Passo 5: Configurar Variáveis de Ambiente**

### **5.1 Criar arquivo .env**

Na raiz do projeto, crie um arquivo chamado `.env`:

```bash
# EmailJS Configuration
VITE_APP_APP_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_APP_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_APP_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### **5.2 Exemplo com valores reais:**

```bash
VITE_APP_EMAILJS_SERVICE_ID=service_abc123
VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_APP_EMAILJS_PUBLIC_KEY=public_key_def456
```

## 🔧 **Passo 6: Verificar Configuração**

### **6.1 Verificar no Console**

Abra o console do navegador e verifique se não há erros de configuração.

### **6.2 Verificar no Formulário**

O formulário deve mostrar:

- ✅ **Verde**: "Configuração EmailJS" se tudo estiver correto
- ⚠️ **Amarelo**: Aviso se alguma variável estiver faltando

## 🧪 **Passo 7: Testar o Formulário**

1. Preencha o formulário com dados de teste
2. Clique em "Enviar Mensagem"
3. Verifique se recebeu o email
4. Verifique o console para logs de sucesso

## 🚨 **Solução de Problemas**

### **Problema: "EmailJS não está configurado"**

**Solução:**

- Verifique se o arquivo `.env` existe
- Verifique se as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### **Problema: "Failed to send email"**

**Soluções:**

- Verifique se o Service ID está correto
- Verifique se o Template ID está correto
- Verifique se a Public Key está correta
- Verifique se o serviço de email está ativo

### **Problema: "CORS Error"**

**Solução:**

- EmailJS não deve ter problemas de CORS
- Verifique se está usando HTTPS em produção

### **Problema: "Template not found"**

**Solução:**

- Verifique se o Template ID está correto
- Verifique se o template está publicado no EmailJS

## 📊 **Monitoramento e Logs**

### **Logs de Sucesso:**

```javascript
Email sent successfully: {
  status: 200,
  text: "OK"
}
```

### **Logs de Erro:**

```javascript
EmailJS Error: {
  message: "Service not found",
  status: 400
}
```

## 🔒 **Segurança**

### **⚠️ Importante:**

- **NUNCA** commite o arquivo `.env` no Git
- **NUNCA** exponha suas chaves privadas
- Use apenas a **Public Key** no frontend
- As chaves privadas ficam no backend do EmailJS

### **Arquivo .gitignore:**

```gitignore
# Environment variables
.env
.env.local
.env.production
```

## 🚀 **Deploy em Produção**

### **Vercel/Netlify:**

1. Configure as variáveis de ambiente no painel
2. Não precisa do arquivo `.env`
3. As variáveis são injetadas automaticamente

### **Servidor Próprio:**

1. Configure as variáveis no servidor
2. Use `process.env` em vez de `import.meta.env`
3. Reinicie o servidor após mudanças

## 📱 **Teste em Diferentes Dispositivos**

- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Mobile (iOS, Android)
- ✅ Tablets
- ✅ Diferentes navegadores

## 🎯 **Próximos Passos**

Após configurar o EmailJS:

1. **Teste o formulário** com dados reais
2. **Monitore os logs** para identificar problemas
3. **Configure notificações** se necessário
4. **Otimize o template** de email
5. **Implemente rate limiting** se necessário

---

## 📞 **Suporte**

Se ainda tiver problemas:

1. **Verifique a documentação oficial**: [EmailJS Docs](https://www.emailjs.com/docs/)
2. **Console do navegador**: Verifique erros JavaScript
3. **Network tab**: Verifique requisições HTTP
4. **EmailJS Dashboard**: Verifique status dos serviços

---

_Última atualização: Janeiro 2025_
_Versão: 1.0_
