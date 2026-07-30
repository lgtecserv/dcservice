const fs = require('fs');

const ptPath = './src/locales/pt.json';
const enPath = './src/locales/en.json';

const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

pt.contactForm = {
  ...pt.contactForm,
  nameLabel: 'Nome *',
  namePlaceholder: 'O seu nome',
  nameError: 'Nome muito curto',
  emailLabel: 'Email *',
  emailPlaceholder: 'voce@empresa.com',
  emailError: 'Email inválido',
  phoneLabel: 'Telefone',
  phonePlaceholder: '+258 ...',
  companyLabel: 'Empresa',
  companyPlaceholder: 'Nome da empresa',
  serviceLabel: 'Serviço de interesse',
  servicePlaceholder: 'Ex.: Consultoria, Informática...',
  messageLabel: 'Mensagem *',
  messagePlaceholder: 'Descreva o que procura...',
  messageError: 'Descreva um pouco mais',
  sendQuote: 'Enviar Pedido de Orçamento',
  sendMessage: 'Enviar Mensagem',
  talkWhatsapp: 'Falar no WhatsApp',
  openingWhatsapp: 'A abrir o WhatsApp...'
};

en.contactForm = {
  ...en.contactForm,
  nameLabel: 'Name *',
  namePlaceholder: 'Your name',
  nameError: 'Name too short',
  emailLabel: 'Email *',
  emailPlaceholder: 'you@company.com',
  emailError: 'Invalid email',
  phoneLabel: 'Phone',
  phonePlaceholder: '+258 ...',
  companyLabel: 'Company',
  companyPlaceholder: 'Company name',
  serviceLabel: 'Service of interest',
  servicePlaceholder: 'E.g., Consulting, IT...',
  messageLabel: 'Message *',
  messagePlaceholder: 'Describe what you are looking for...',
  messageError: 'Please describe a bit more',
  sendQuote: 'Send Quote Request',
  sendMessage: 'Send Message',
  talkWhatsapp: 'Talk on WhatsApp',
  openingWhatsapp: 'Opening WhatsApp...'
};

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
