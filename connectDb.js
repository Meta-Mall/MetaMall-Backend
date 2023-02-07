import { connect } from "mongoose";

const databaseUri = `mongodb+srv://admin:admin%40lalluverse@metamall-db.gpdxaxs.mongodb.net/MetaMall?retryWrites=true&w=majority`;
function connectAtlasDB() {
    connect(databaseUri)
        .then(() => {
            console.log('MongoDB Connected')
        })
        .catch(err => console.log(err));
}

export default connectAtlasDB;
