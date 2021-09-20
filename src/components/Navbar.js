import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav class="space-x-4">
      <h3 class="inline-block">Sermons</h3>
      <Link class="inline-block" to="/">
        Number
      </Link>
      {/* Populate dynamically */}
    </nav>
  );
}
