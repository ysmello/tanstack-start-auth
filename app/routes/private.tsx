import { createFileRoute } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { MaskedImage } from '~/components/ui/masked-image';

export const Route = createFileRoute('/private')({
  component: RouteComponent,
});

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
              <div className="flex flex-wrap gap-2 text-3xl">
                <ul>
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                </ul>
              </div>
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
