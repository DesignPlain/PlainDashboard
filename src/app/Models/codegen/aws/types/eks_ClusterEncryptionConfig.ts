import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eks_ClusterEncryptionConfigProvider,
  eks_ClusterEncryptionConfigProvider_GetTypes,
} from './eks_ClusterEncryptionConfigProvider';

export interface eks_ClusterEncryptionConfig {
  // Configuration block with provider for encryption. Detailed below.
  provider?: eks_ClusterEncryptionConfigProvider;

  // List of strings with resources to be encrypted. Valid values: `secrets`.
  resources?: Array<string>;
}

export function eks_ClusterEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'provider',
      'Configuration block with provider for encryption. Detailed below.',
      () => eks_ClusterEncryptionConfigProvider_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resources',
      'List of strings with resources to be encrypted. Valid values: `secrets`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
