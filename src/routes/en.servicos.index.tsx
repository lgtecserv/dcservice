import { createFileRoute } from '@tanstack/react-router';
import { ServicesIndex } from './servicos/index';

export const Route = createFileRoute('/en/servicos/')({
  component: ServicesIndex,
});
