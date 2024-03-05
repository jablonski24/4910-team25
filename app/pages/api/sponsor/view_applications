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

    const { org_ID } = req.body;

    try {
        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        const sql_query = await connection.query(`
        SELECT U.user_ID, U.email, U.first_Name, U.last_Name, U.user_Type, O.org_ID, O.org_Name, UO.app_Status
        FROM User_Org UO
        JOIN User U ON UO.user_ID = U.user_ID
        JOIN Org O ON UO.org_ID = O.org_ID
        WEHRE UO.app_Status = 'PENDING'
        AND UO.org_ID = ?
        `);

        const [rows] = await connection.execute(sql_query, [org_ID]);

        // Close the database connection
        await connection.end();

        res.json({
            success: true,
            message: 'Successfuly returned applications',
            data: rows
        })
    } catch (error) {
        console.error('Database connection or query failed', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}