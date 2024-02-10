import Resource from '@/domain/Resource';
import awsS3Utils from '@/utils/awsS3';

class ResourceRepository {
  store = awsS3Utils;

  async getResource(resourcePath: string): Promise<Resource | undefined> {
    const response = await this.store.getResource(resourcePath);
    if (response) {
      const resourceContent = await response?.Body?.transformToString();
      return { resourceContent: resourceContent || ''};
    }
  }
}

const instance = new ResourceRepository();
export default instance;