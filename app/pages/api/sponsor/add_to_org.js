import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config(); // This loads the .env variables

export default async function handler(req, res) {
    const dbConfig = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    };

    console.log(dbConfig);

    const { user_ID, org_ID } = req.body;

    try {
        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        const sql_query = await connection.query(`
            INSERT into User_Org (user_ID, org_ID) VALUES (?, ?);
        `);

        await connection.execute(sql_query, [user_ID, org_ID]);

        // Close the database connection
        await connection.end();

        // Send the data as JSON response
        res.status(200).json("Successfuly added to org");
    } catch (error) {
        console.error('Database connection or query failed', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}