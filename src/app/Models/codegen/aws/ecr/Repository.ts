import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecr_RepositoryEncryptionConfiguration,
  ecr_RepositoryEncryptionConfiguration_GetTypes,
} from "../types/ecr_RepositoryEncryptionConfiguration";
import {
  ecr_RepositoryImageScanningConfiguration,
  ecr_RepositoryImageScanningConfiguration_GetTypes,
} from "../types/ecr_RepositoryImageScanningConfiguration";

export interface RepositoryArgs {
  // The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.
  imageTagMutability?: string;

  // Name of the repository.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Encryption configuration for the repository. See below for schema.
  encryptionConfigurations?: Array<ecr_RepositoryEncryptionConfiguration>;

  /*
If `true`, will delete the repository even if it contains images.
Defaults to `false`.
*/
  forceDelete?: boolean;

  // Configuration block that defines image scanning configuration for the repository. By default, image scanning must be manually triggered. See the [ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) for more information about image scanning.
  imageScanningConfiguration?: ecr_RepositoryImageScanningConfiguration;
}
export class Repository extends DS_Resource {
  /*
If `true`, will delete the repository even if it contains images.
Defaults to `false`.
*/
  public forceDelete?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Full ARN of the repository.
  public arn?: string;

  // Encryption configuration for the repository. See below for schema.
  public encryptionConfigurations?: Array<ecr_RepositoryEncryptionConfiguration>;

  // Configuration block that defines image scanning configuration for the repository. By default, image scanning must be manually triggered. See the [ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) for more information about image scanning.
  public imageScanningConfiguration?: ecr_RepositoryImageScanningConfiguration;

  // The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.
  public imageTagMutability?: string;

  // Name of the repository.
  public name?: string;

  // The registry ID where the repository was created.
  public registryId?: string;

  // The URL of the repository (in the form `aws_account_id.dkr.ecr.region.amazonaws.com/repositoryName`).
  public repositoryUrl?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "imageTagMutability",
        "The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the repository.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "encryptionConfigurations",
        "Encryption configuration for the repository. See below for schema.",
        () => ecr_RepositoryEncryptionConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDelete",
        "If `true`, will delete the repository even if it contains images.\nDefaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageScanningConfiguration",
        "Configuration block that defines image scanning configuration for the repository. By default, image scanning must be manually triggered. See the [ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) for more information about image scanning.",
        () => ecr_RepositoryImageScanningConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
