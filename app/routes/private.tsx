import { createFileRoute } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { MaskedImage } from '~/components/ui/masked-image';

export const Route = createFileRoute('/private')({
  component: RouteComponent,
  beforeLoad: () => {
    if (!localStorage.getItem('token')) {
      return '/login';
    }
  },
});

const technologies = [
  { name: 'React', icon: '/icons/react.png', url: 'https://react.dev' },
  {
    name: 'Tailwind',
    icon: '/icons/tailwind.png',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.png',
    url: 'https://www.typescriptlang.org',
  },
  { name: 'Node.js', icon: '/icons/nodejs.png', url: 'https://nodejs.org' },
];

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex p-6 md:p-10">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="flex flex-col gap-16 w-full max-w-xs">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-4xl text-center font-bold">
                Bem-vindo ao Nosso Projeto
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Tecnologias usadas:</p>
              <ul className="space-y-2 text-3xl">
                {technologies.map((tech) => (
                  <li key={tech.name}>
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:scale-105 hover:text-blue-600 transition-transform duration-200"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5"
                      />
                      <span>{tech.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <MaskedImage
          src="/glib.png"
          alt="Signin background"
          variant="shape6"
          className="object-cover absolute inset-0 h-full w-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
