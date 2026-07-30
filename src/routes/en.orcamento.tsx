import { createFileRoute } from '@tanstack/react-router';
import { Quote } from './orcamento';

export const Route = createFileRoute('/en/orcamento')({
  component: Quote,
});
