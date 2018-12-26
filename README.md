# Node Express AWS S3 File Upload
A simple file uploader using multer and aws-sdk

## Routes
### POST /upload
- Handles a file upload form
- only accepts image/video/attachment input field

## Create .env file and provide values for the following:
```
AWS_S3_BUCKET = 
AWS_ACCESS_KEY_ID = 
AWS_SECRET_ACCESS_KEY = 
AWS_DEFAULT_REGION = 
```

## References
### AWS S3 Official Docs
* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
### Multer S3
* https://www.npmjs.com/package/multer-s3
### AWS S3 Bucket with NodeJS
* https://medium.com/@Keithweaver_/uploading-a-file-to-amazon-web-services-aws-s3-bucket-with-node-js-133b0a1af2b9