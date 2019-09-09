/** @noSelfInFile */

let conn = new MariaDB.Connection("localhost", "ormtest", "changeme", "ormtest");

interface DBPlayer {
    id: number;
    steam_id: string;
    name: string;
}
let playerTable = new Table<DBPlayer>(conn, "players");

let jake: DBPlayer = {
    id: 0,
    steam_id: "1337",
    name: "Jake"
}

playerTable.insertSync(jake);
jake.steam_id = "1234";
playerTable.updateSync(jake);
playerTable.deleteSync(jake);

conn.close();

Server.exit();