//Server
import { server, app } from './init/server';

// Config
import { PORT } from './init/config';

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
