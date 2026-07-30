import { createFileRoute } from '@tanstack/react-router';
import { Contact } from './contactos';

export const Route = createFileRoute('/en/contactos')({
  component: Contact,
});
