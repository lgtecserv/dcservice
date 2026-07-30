import { createFileRoute } from '@tanstack/react-router';
import { ServiceDetail } from './servicos/$slug';

export const Route = createFileRoute('/en/servicos/$slug')({
  component: ServiceDetail,
});
