const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })

const handle = app.getRequestHandler();


app.prepare()
    .then(() => {
        const server = express();


        server.get("/p/:id", (req, resp) => {
            const actualPage = '/post';
            const queryParams = { title: req.params.id };
            app.render(req, resp, actualPage, queryParams);
        });

        //placed it last
        server.get('*', (req, resp) => {
            return handle(req, resp);
        });

        server.listen(3000, (err) => {
            if (err)
                throw err
            console.log(`> ready on http://localhost:3002`);
        })
    }).catch((ex) => {
        console.error(ex.stack);
        process.exit(1);

    })