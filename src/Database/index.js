import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

const appbicodb = openDatabase();

async function openDatabase(pathToDatabaseFile){
    if(
        !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
        .exists
        ){
            await FileSystem.makeDirectoryAsync(
                FileSystem.documentDirectory + "SQLite"
            );
     }
     await FileSystem.downloadAsync(
        Asset.fromModule(require(pathToDatabaseFile)).uri,
        FileSystem.documentDirectory + "SQLiteDatabaseBrowserPortable/appbico.db"
    );
    return SQLite.openDatabase("appbico.db");
}
export default bdcicodb;
