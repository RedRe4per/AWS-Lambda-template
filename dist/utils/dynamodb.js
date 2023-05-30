'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteItem =
  exports.updateItem =
  exports.getItem =
  exports.scanTable =
  exports.putItem =
    void 0;
const aws_sdk_1 = __importDefault(require('aws-sdk'));
const dynamodb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const putItem = async (table, item) => {
  const params = {
    TableName: table,
    Item: item,
  };
  return dynamodb.put(params).promise();
};
exports.putItem = putItem;
const scanTable = async (table) => {
  const params = {
    TableName: table,
  };
  const result = await dynamodb.scan(params).promise();
  return result.Items;
};
exports.scanTable = scanTable;
const getItem = async (table, key) => {
  const params = {
    TableName: table,
    Key: key,
  };
  const result = await dynamodb.get(params).promise();
  return result.Item;
};
exports.getItem = getItem;
const updateItem = async (
  table,
  key,
  updateExpression,
  expressionAttributeValues,
) => {
  const params = {
    TableName: table,
    Key: key,
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: 'UPDATED_NEW',
  };
  return dynamodb.update(params).promise();
};
exports.updateItem = updateItem;
const deleteItem = async (table, key) => {
  const params = {
    TableName: table,
    Key: key,
  };
  return dynamodb.delete(params).promise();
};
exports.deleteItem = deleteItem;
