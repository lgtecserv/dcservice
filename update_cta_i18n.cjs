const fs = require('fs');

const ptPath = './src/locales/pt.json';
const enPath = './src/locales/en.json';

const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

pt.cta = {
  badge: 'Vamos trabalhar juntos',
  title: 'Pronto para elevar a operação da sua',
  titleHighlight: 'empresa?',
  desc: 'Marque uma conversa exploratória sem compromisso. Em 30 minutos ajudamos a clarificar objetivos e próximos passos.',
  quoteBtn: 'Solicitar Orçamento',
  contactBtn: 'Falar Connosco'
};

en.cta = {
  badge: 'Let\'s work together',
  title: 'Ready to elevate your',
  titleHighlight: 'company\'s operation?',
  desc: 'Schedule a no-obligation exploratory conversation. In 30 minutes we can help clarify your objectives and next steps.',
  quoteBtn: 'Request Quote',
  contactBtn: 'Talk to Us'
};

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
