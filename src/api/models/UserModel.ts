import { Document, Schema, Types } from 'mongoose';
import * as connections from '../config/connection/connection';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
    _id: Types.ObjectId;
    createdAt ? : Date;
    updatedAt ? : Date;
    name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    collection: 'usermodel',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    if (this._doc) {
        const doc: IUserModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IUserModel > ('UserModel', UserSchema);
