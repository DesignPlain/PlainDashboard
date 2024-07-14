import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PullThroughCacheRuleArgs {
  // ARN of the Secret which will be used to authenticate against the registry.
  credentialArn?: string;

  // The repository name prefix to use when caching images from the source registry.
  ecrRepositoryPrefix?: string;

  // The registry URL of the upstream public registry to use as the source.
  upstreamRegistryUrl?: string;
}
export class PullThroughCacheRule extends Resource {
  // The registry URL of the upstream public registry to use as the source.
  public upstreamRegistryUrl?: string;

  // ARN of the Secret which will be used to authenticate against the registry.
  public credentialArn?: string;

  // The repository name prefix to use when caching images from the source registry.
  public ecrRepositoryPrefix?: string;

  // The registry ID where the repository was created.
  public registryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "credentialArn",
        "ARN of the Secret which will be used to authenticate against the registry.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ecrRepositoryPrefix",
        "The repository name prefix to use when caching images from the source registry.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "upstreamRegistryUrl",
        "The registry URL of the upstream public registry to use as the source.",
        [],
        true,
        true,
      ),
    ];
  }
}
