import { model, Schema } from 'dynamoose';

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: 'New User',
  },
  email: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

export const UserModel = model('User', UserSchema);
