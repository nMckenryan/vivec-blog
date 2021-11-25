import { Link } from "gatsby";
import React from "react";

export default function Navbar(sermNum) {
  return (
    <nav class="space-x-4">
      <h3 class="inline-block">Sermons</h3>
      <Link class="inline-block" to="/">
        {sermNum}
      </Link>
    </nav>
  );
}
