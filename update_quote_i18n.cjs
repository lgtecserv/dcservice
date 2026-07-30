const fs = require('fs');

const ptPath = './src/locales/pt.json';
const enPath = './src/locales/en.json';

const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

pt.quote = {
  ...pt.quote,
  commitmentBadge: 'O Nosso Compromisso',
  commitmentTitle: 'O que pode esperar de nós',
  promises: [
    "Resposta em até 24h úteis",
    "Consultor sénior dedicado",
    "Proposta clara, sem letra pequena",
    "Confidencialidade garantida (NDA por defeito)"
  ],
  quoteMsg: '"Os nossos orçamentos são detalhados, transparentes e construídos à medida da realidade da sua empresa."',
  formTitle: 'Detalhes do Pedido'
};

en.quote = {
  ...en.quote,
  commitmentBadge: 'Our Commitment',
  commitmentTitle: 'What you can expect from us',
  promises: [
    "Response within 24 business hours",
    "Dedicated senior consultant",
    "Clear proposal, no small print",
    "Guaranteed confidentiality (NDA by default)"
  ],
  quoteMsg: '"Our quotes are detailed, transparent, and tailor-made for your company\'s reality."',
  formTitle: 'Request Details'
};

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
