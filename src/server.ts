import http from 'http';

import app from '~/base/infra/app';import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  paginateListObjectsV2,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
// This is used for getting user input.
import { createInterface } from "readline/promises";

const server = http.createServer(app);

const PORT :number = Number(process.env.PORT) || 3000;

server.listen(PORT, () => {
  console.log(` === SERVER IS RUNNING ON PORT [${PORT}] === `);
});

(async ()=>{
  const s3Client = new S3Client({});

 const bucketName = `test-bucket-${Date.now()}`;
  // Create an Amazon S3 bucket. The epoch timestamp is appended
  // to the name to make it unique.
 await s3Client.send(
   new CreateBucketCommand({
     Bucket: bucketName,
   })
 );

  // Put an object into an Amazon S3 bucket.
  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: "my-first-object.txt",
      Body: "Hello JavaScript SDK!",
    })
  );

  // Read the object.
  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: bucketName,
      Key: "my-first-object.txt",
    })
  );
  if(!Body) return 

  console.log(await Body.transformToString());

  // Confirm resource deletion.
  const prompt = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const result = await prompt.question("Empty and delete bucket? (y/n) ");
  prompt.close();

  if (result === "y") {
    // Create an async iterator over lists of objects in a bucket.
    const paginator = paginateListObjectsV2(
      { client: s3Client },
      { Bucket: bucketName }
    );
    for await (const page of paginator) {
      const objects = page.Contents;
      if (objects) {
        // For every object in each page, delete it.
        for (const object of objects) {
          await s3Client.send(
            new DeleteObjectCommand({ Bucket: bucketName, Key: object.Key })
          );
        }
      }
    }

    // Once all the objects are gone, the bucket can be deleted.
    await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));

  }
})()


