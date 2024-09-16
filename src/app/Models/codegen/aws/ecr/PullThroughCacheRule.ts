import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PullThroughCacheRuleArgs {
  // The registry URL of the upstream public registry to use as the source.
  upstreamRegistryUrl?: string;

  // ARN of the Secret which will be used to authenticate against the registry.
  credentialArn?: string;

  // The repository name prefix to use when caching images from the source registry.
  ecrRepositoryPrefix?: string;
}
export class PullThroughCacheRule extends DS_Resource {
  // ARN of the Secret which will be used to authenticate against the registry.
  public credentialArn?: string;

  // The repository name prefix to use when caching images from the source registry.
  public ecrRepositoryPrefix?: string;

  // The registry ID where the repository was created.
  public registryId?: string;

  // The registry URL of the upstream public registry to use as the source.
  public upstreamRegistryUrl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'upstreamRegistryUrl',
        'The registry URL of the upstream public registry to use as the source.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'credentialArn',
        'ARN of the Secret which will be used to authenticate against the registry.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ecrRepositoryPrefix',
        'The repository name prefix to use when caching images from the source registry.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
