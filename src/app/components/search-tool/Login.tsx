const Login = ({ signIn }: { signIn: any }) => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold">Inicia sesión</h1>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => signIn("google")}
        >
          Conectar con Google
        </button>
      </div>
    );
  };
  
  export default Login;
  