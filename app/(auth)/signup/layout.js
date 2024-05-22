import Link from "next/link";
import "./globalauth.css";
import ContextSignup from "@/components/ContextSignup";

export default function SignUpLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextSignup>{children}</ContextSignup>
      </body>
    </html>
  );
}
