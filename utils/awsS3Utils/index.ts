import {
	GetObjectCommandOutput,
	GetObjectCommand,
	ListObjectsV2Command,
	S3Client,
	StorageClass,
	ListObjectsV2CommandOutput,
} from '@aws-sdk/client-s3';

const s3Client = new S3Client({
	region: process.env.S3_REGION!,
	credentials: {
		accessKeyId: process.env.S3_ACCESS_KEY!,
		secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
	},
});

type GetResource = (path: string) => Promise<GetObjectCommandOutput | undefined>;

const getResource: GetResource = async (path) => {
	const command = new GetObjectCommand({
		Bucket: process.env.S3_BUCKET!,
		Key: path,
	});

	try {
		const res = await s3Client.send(command);
		return res;
	} catch (err) {
		console.error(err);
	}
};

type Resource = {
	Key?: string;
	LastModified?: Date;
	ETag?: string;
	Size?: number;
	StorageClass?: StorageClass;
};
type GetResources = (directoryPath: string) => Promise<ListObjectsV2CommandOutput | undefined>;

const getResources: GetResources = async (directoryPath) => {
	const command = new ListObjectsV2Command({
		Bucket: process.env.S3_BUCKET!,
		Prefix: directoryPath,
	});

	try {
		const response = await s3Client.send(command);
		return response;
	} catch (err) {
		console.error(err);
	}
};

export type AwsS3Utils = {
	getResource: GetResource;
	getResources: GetResources;
};

const awsS3Utils: AwsS3Utils = {
	getResource,
	getResources,
};

export default awsS3Utils;
