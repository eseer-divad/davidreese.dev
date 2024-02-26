import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
