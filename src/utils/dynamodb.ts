import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const putItem = async (table: string, item: any) => {
  const params = {
    TableName: table,
    Item: item,
  };

  return dynamodb.put(params).promise();
};

export const scanTable = async (table: string) => {
  const params = {
    TableName: table,
  };

  const result = await dynamodb.scan(params).promise();
  return result.Items;
};

export const getItem = async (table: string, key: any) => {
  const params = {
    TableName: table,
    Key: key,
  };

  const result = await dynamodb.get(params).promise();
  return result.Item;
};

export const updateItem = async (
  table: string,
  key: any,
  updateExpression: string,
  expressionAttributeValues: any,
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

export const deleteItem = async (table: string, key: any) => {
  const params = {
    TableName: table,
    Key: key,
  };

  return dynamodb.delete(params).promise();
};
