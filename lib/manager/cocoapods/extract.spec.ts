import { loadFixture } from '../../../test/util';
import { setGlobalConfig } from '../../config/global';
import type { RepoGlobalConfig } from '../../config/types';
import { extractPackageFile } from '.';

const simplePodfile = loadFixture('Podfile.simple');
const complexPodfile = loadFixture('Podfile.complex');

const adminConfig: RepoGlobalConfig = { localDir: '' };

describe('manager/cocoapods/extract', () => {
  describe('extractPackageFile()', () => {
    it('extracts from simple file', async () => {
      setGlobalConfig(adminConfig);
      const { deps } = await extractPackageFile(simplePodfile, 'Podfile');
      expect(deps).toMatchSnapshot([
        { depName: 'a' },
        { depName: 'a/sub' },
        { depName: 'b', currentValue: '1.2.3' },
        { depName: 'c', currentValue: '1.2.3' },
        { depName: 'd', skipReason: 'path-dependency' },
        { depName: 'e', skipReason: 'git-dependency' },
        { depName: 'f', skipReason: 'git-dependency' },
        { depName: 'g', datasource: 'git-tags', currentValue: '3.2.1' },
        { depName: 'h', currentValue: '0.0.1', datasource: 'github-tags' },
        { depName: 'i', lookupName: 'foo/foo', datasource: 'github-tags' },
        { depName: 'j', lookupName: 'bar/bar', datasource: 'gitlab-tags' },
        { depName: 'k', lookupName: 'bar/bar', datasource: 'gitlab-tags' },
        {
          depName: 'l',
          lookupName: 'https://example.com/baz/baz.git',
          datasource: 'git-tags',
        },
        {
          depName: 'm',
          lookupName: 'git@example.com:baz/baz.git',
          datasource: 'git-tags',
        },
      ]);
    });

    it('extracts from complex file', async () => {
      setGlobalConfig(adminConfig);
      const { deps } = await extractPackageFile(complexPodfile, 'Podfile');
      expect(deps).toMatchSnapshot([
        { depName: 'IQKeyboardManager', currentValue: '~> 6.5.0' },
        { depName: 'CYLTabBarController', currentValue: '~> 1.28.3' },
        { depName: 'PureLayout', currentValue: '~> 3.1.4' },
        { depName: 'AFNetworking/Serialization', currentValue: '~> 3.2.1' },
        { depName: 'AFNetworking/Security', currentValue: '~> 3.2.1' },
        { depName: 'AFNetworking/Reachability', currentValue: '~> 3.2.1' },
        { depName: 'AFNetworking/NSURLSession', currentValue: '~> 3.2.1' },
        { depName: 'MBProgressHUD', currentValue: '~> 1.1.0' },
        { depName: 'MJRefresh', currentValue: '~> 3.1.16' },
        { depName: 'MJExtension', currentValue: '~> 3.1.0' },
        { depName: 'TYPagerController', currentValue: '~> 2.1.2' },
        { depName: 'YYImage', currentValue: '~> 1.0.4' },
        { depName: 'SDWebImage', currentValue: '~> 5.0' },
        { depName: 'SDCycleScrollView', currentValue: '~> 1.80' },
        { depName: 'NullSafe', currentValue: '~> 2.0' },
        { depName: 'TZImagePickerController', currentValue: '~> 3.2.1' },
        { depName: 'TOCropViewController', currentValue: '~> 2.5.1' },
        { depName: 'FMDB', currentValue: '~> 2.7.5' },
        { depName: 'FDStackView', currentValue: '~> 1.0.1' },
        { depName: 'LYEmptyView', skipReason: 'unknown-version' },
        { depName: 'MMKV', currentValue: '~> 1.0.22' },
        { depName: 'fishhook', skipReason: 'unknown-version' },
        { depName: 'CocoaLumberjack', currentValue: '~> 3.5.3' },
        { depName: 'GZIP', currentValue: '~> 1.2' },
        { depName: 'LBXScan/LBXNative', currentValue: '~> 2.3' },
        { depName: 'LBXScan/LBXZXing', currentValue: '~> 2.3' },
        { depName: 'LBXScan/UI', currentValue: '~> 2.3' },
        { depName: 'MLeaksFinder', skipReason: 'unknown-version' },
        { depName: 'FBMemoryProfiler', skipReason: 'unknown-version' },
      ]);
    });
  });
});
