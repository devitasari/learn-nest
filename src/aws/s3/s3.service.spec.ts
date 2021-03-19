import { S3Service } from './s3.service';

const mS3Instance = {
  upload: jest.fn().mockReturnThis(),
  promise: jest.fn(),
};

jest.mock('aws-sdk', () => {
  return { S3: jest.fn(() => mS3Instance) };
});

describe('S3Service', () => {
  it('should upload succesfully', async () => {
    const configService = {
      get: jest
        .fn()
        .mockReturnValueOnce('access-key-id')
        .mockReturnValueOnce('secret-access-key')
        .mockReturnValueOnce('ap-southeast-1')
        .mockReturnValueOnce('bucket-test'),
    };
    mS3Instance.promise.mockResolvedValueOnce('just for test');
    const s3ServiceInstance = new S3Service(configService);
    const actual = await s3ServiceInstance.upload('anyKey', Buffer.from('test'));
    expect(actual).toEqual('just for test');
    expect(mS3Instance.upload).toBeCalledWith({ Bucket: 'bucket-test', Key: 'anyKey', Body: Buffer.from('test') });

  });
});
