import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Uma paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x200"
    },
    {
        id: 3,
        descricao: "Um prato delicioso de comida",
        imagem: "https://source.unsplash.com/food/300x200"
    },
    {
        id: 4,
        descricao: "Um carro esportivo",
        imagem: "https://source.unsplash.com/cars/300x200"
    },
    {
        id: 5,
        descricao: "Um cachorro brincando",
        imagem: "https://source.unsplash.com/dogs/300x200"
     },
     {
        id: 6,
        descricao: "Uma cidade à noite",
        imagem: "https://source.unsplash.com/city/300x200"
     }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostId(req.params.id)
    res.status(200).json(posts[index]);
});
