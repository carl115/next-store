import mysql from "serverless-mysql";

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: '123c4r10$456',
        port: 3306,
        database: 'next_store'
    }
})