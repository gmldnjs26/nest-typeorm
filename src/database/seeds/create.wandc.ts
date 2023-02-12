import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Workspaces } from '../../entities/Workspaces';
import { Channels } from '../../entities/Channels';

export default class ChannelSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const workSpacesRepository = dataSource.getRepository(Workspaces);
    await workSpacesRepository.insert([
      {
        id: 2,
        name: 'Sleact2',
        url: 'sleact2',
      },
    ]);
    const channelsRepository = dataSource.getRepository(Channels);
    await channelsRepository.insert([
      {
        id: 2,
        name: '일반2',
        WorkspaceId: 2,
        private: false,
      },
    ]);
  }
}
