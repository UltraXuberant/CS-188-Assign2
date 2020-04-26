import Link from 'next/link';
import React from "react";

export default function Index() {
    return (
        <div>
            <p>Welcome to Drake University Apparel</p>
            <Link href="/items">
                <a title="Start shopping">Start shopping</a>
            </Link>
        </div>
    );
}