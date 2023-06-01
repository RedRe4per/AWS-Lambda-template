### AWS Lambda Templates

**The technology stack of this template includes serverless framework, AWS lambda, express.js, Typescript. Using this template allows Lambda to run locally, and when submitted to the main branch of git repo, it is automatically deployed to the AWS Lambda service.**

1. **Configuration**

   First, set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in the git repo where Lambda is deployed. They can be obtained when the AWS IAM account is created and placed in `git repo - setting - security - secrets and variables - action - new repository secret` once obtained.

2. **AWS Lambda region & lambda name**

   It is crucial to choose a region that is close to your customers. It needs to be set in serverless.yml, just change the value of provider/region to the required region.
   Then the service name should be changed to your lambda.

3. **Local test**

   Run command:

   ```
   npm start
   ```

4. **AWS Lambda Environment Test**

   Commit your code directly to the main branch and it will automatically deploy to AWS Lambda in minutes (if the deployment is successful).

5. **DynamoDB connect fail in cloud (PROD env)**

   The reason for the failure is that `DynamoDB full access` is not included in Lambda's default permissions. Therefore, you need to find the IAM role of Lambda first, and then add the `DynamoDB full access` permission.
