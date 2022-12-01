import {DataSource} from 'typeorm' 

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password:'postgres',
    database: 'notesdb',
    port: 5432,
    entities: [],
})