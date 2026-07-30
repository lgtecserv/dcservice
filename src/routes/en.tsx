import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/en')({
  component: EnLayout,
});

function EnLayout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en');
      document.documentElement.lang = 'en';
    }
  }, [i18n]);

  return <Outlet />;
}
