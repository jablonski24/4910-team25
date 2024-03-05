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
        UPDATE User_Org SET app_Status = 'REJECTED' WHERE user_ID = ? AND org_ID = ?;
        `);

        const [results] = await connection.execute(sql_query, [user_ID, org_ID]);

        // Close the database connection
        await connection.end();

        if (results.affectedRows > 0) {
            res.status(200).json({ message: "Driver rejected from organization successfully." });
        } else {
            res.status(404).json({ message: "Driver or organization not found." });
        }
    } catch (error) {
        console.error('Database connection or query failed', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}