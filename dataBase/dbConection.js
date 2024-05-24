import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
})

try {
    const response = await pool.query("SELECT NOW()");
    console.log("Base de Datos conectada con éxito!")
} catch (error) {
    console.log(`ERROR: ${error}`);
}