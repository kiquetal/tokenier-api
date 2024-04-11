const axios = require('axios');
const fastify = require('fastify')({logger:true});



fastify.get('/token', async (request, reply) => {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const keycloakUrl = process.env.KEYCLOAK_URL;

    try {
        const response = await axios({
            method: 'post',
            url: `${keycloakUrl}/protocol/openid-connect/token`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&scope=profile+email`
        });

        return response.data;

    } catch (error) {
        reply.code(500).send({ error: 'Failed to fetch token' });
    }
})

const start = async () => {
    try {
        await fastify.listen({
            port: process.env.PORT || 3000,
            host: '0.0.0.0'

        })
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start().then(r =>   console.log("Server started")
).catch(e => console.log("Error starting server")   );
