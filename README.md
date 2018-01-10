# Dutchess.ai

A suite of nodejs black boxes for machine learning and automated trading. All named after cats.

## Secrets

### secrets.json
{
    "QuandlApiKey": "XXXXXXXXXXX",
    "GoogleSheetId": "XXXXXXXXXXXXXX",
    "BucketName": "XXXXXXXXXXX",
    "MailchimpApiKey": "XXXXXXXXXXX",
    "MailchimpListId": "XXXXXXXXXXX"
}

### sheetsClientSecret.json
{
    "type": "service_account",
    "project_id": "XXXXXXXXXXX",
    "private_key_id": "XXXXXXXXXXX",
    "private_key": "XXXXXXXXXXX",
    "client_email": "XXXXXXXXXXX",
    "client_id": "XXXXXXXXXXX",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "XXXXXXXXXXX"
}
  

## AWS Configuration

You need to set up your AWS security credentials before the sample code is able
to connect to AWS. You can do this by creating a file named "credentials" at ~/.aws/ 
(C:\Users\USER_NAME\.aws\ for Windows users) and saving the following lines in the file:

    [default]
    aws_access_key_id = <your access key id>
    aws_secret_access_key = <your secret key>

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
for more information.

## Running the black boxes

    node princess.js
    node tiger.js