import { NextApiRequest, NextApiResponse } from "next";

let products = [
  {
    id: "1",
    name: "Sneakers Nike",
    price: 120,
    description: "Chaussures confortables",
    imageUrl: "/sneakers.jpg",
  },
  {
    id: "2",
    name: "Sac Gucci",
    price: 890,
    description: "Sac à main de luxe",
    imageUrl: "/gucci.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const newProduct = { id: Date.now().toString(), ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else if (req.method === "PUT") {
    const { id, ...rest } = req.body;
    products = products.map((p) => (p.id === id ? { ...p, ...rest } : p));
    res.status(200).json({ message: "Produit modifié", products });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    products = products.filter((p) => p.id !== id);
    res.status(200).json({ message: "Produit supprimé", products });
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
