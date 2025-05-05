import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'token');
    navigate({
      to: '/private',
      replace: true,
    });
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex p-6 md:p-10">
        <div className="flex flex-col flex-1 items-center justify-center">
          <form className="flex flex-col gap-6 w-full max-w-xs">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-bold">Entre na sua conta</h3>
              <p className="text-sm text-muted-foreground">
                Insira seu email e senha para acessar sua conta
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" placeholder="Senha" />
            </div>
            <Button type="submit" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/signin.png"
          alt="Signin background"
          className="object-cover absolute inset-0 h-full w-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
