import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_StorageLensConfigurationStorageLensConfiguration,
  s3control_StorageLensConfigurationStorageLensConfiguration_GetTypes,
} from "../types/s3control_StorageLensConfigurationStorageLensConfiguration";

export interface StorageLensConfigurationArgs {
  // The S3 Storage Lens configuration. See Storage Lens Configuration below for more details.
  storageLensConfiguration?: s3control_StorageLensConfigurationStorageLensConfiguration;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // The ID of the S3 Storage Lens configuration.
  configId?: string;
}
export class StorageLensConfiguration extends Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // The Amazon Resource Name (ARN) of the Amazon Web Services organization.
  public arn?: string;

  // The ID of the S3 Storage Lens configuration.
  public configId?: string;

  // The S3 Storage Lens configuration. See Storage Lens Configuration below for more details.
  public storageLensConfiguration?: s3control_StorageLensConfigurationStorageLensConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "storageLensConfiguration",
        "The S3 Storage Lens configuration. See Storage Lens Configuration below for more details.",
        s3control_StorageLensConfigurationStorageLensConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the AWS provider.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configId",
        "The ID of the S3 Storage Lens configuration.",
        [],
        true,
        true,
      ),
    ];
  }
}
