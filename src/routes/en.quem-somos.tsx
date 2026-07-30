import { createFileRoute } from '@tanstack/react-router';
import { About } from './quem-somos';

export const Route = createFileRoute('/en/quem-somos')({
  component: About,
});
