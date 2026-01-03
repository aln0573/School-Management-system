export default function ForgotPasswordPage() {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <p className="mb-4">Enter your email to reset your password.</p>
       <input type="email" className="w-full border p-2 rounded mb-4" placeholder="Email address" />
       <button className="w-full bg-blue-500 text-white p-2 rounded">Send Reset Link</button>
    </div>
  );
}
