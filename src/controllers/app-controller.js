module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send(`
            <h1> Bem vindo a ToDo API </h1>
        `);
    });
};