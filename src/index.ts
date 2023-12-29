import { server } from './server/server';


server.listen(process.env.PORT || 3333, () => console.log(`App running on the door ${process.env.PORT}.`));