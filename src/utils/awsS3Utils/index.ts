import { GetObjectCommandOutput, GetObjectCommand, ListObjectsV2Command, S3Client, StorageClass } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!
  }
});
const BUCKET = process.env.S3_BUCKET!;

namespace GetResource {
  export type GetResource = (path: string) => Promise<GetObjectCommandOutput | undefined>;

  export const getResource: GetResource = async (path) => {
    const command = new GetObjectCommand({
      Bucket: BUCKET,
      Key: path,
    });

    try {
      const res = await s3Client.send(command);
      return res;
    } catch (err) {
      console.error(err);
    }
  };
}

namespace GetResources {
  type Resource = {
    Key?: string,
    LastModified?: Date,
    ETag?: string,
    Size?: number,
    StorageClass?: StorageClass
  }
  export type GetResources = (directoryPath: string) => Promise<Resource[] | undefined>;

  export const getResources: GetResources = async (directoryPath) => {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: directoryPath
    });
  
    try {
      const response = await s3Client.send(command);
      if(response.Contents) {
        return response.Contents
                            .map((post) => ({...post, Key: post.Key?.replace(directoryPath, '')}))
                            .filter((content) => !!content.Key);
      }
    } catch(err) {
      console.error(err);
    }
  }
}

export type AwsS3Utils = {
  getResource: GetResource.GetResource,
  getResources: GetResources.GetResources
}

const awsS3Utils: AwsS3Utils = {
  getResource: GetResource.getResource,
  getResources: GetResources.getResources
}

export default awsS3Utils;