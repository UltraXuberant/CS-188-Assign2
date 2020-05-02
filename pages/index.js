import Link from 'next/link';
import React from "react";

export default function Index() {
    return (
        <div>
            <p>Welcome to Drake University Apparel</p>
            <ul>
                <li>
                    <Link href="/items">
                        <a title="Start shopping">Start shopping</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a title="View cart">View Cart</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}