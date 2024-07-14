import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface HsmConfigurationArgs {
  // A text description of the HSM configuration to be created.
  description?: string;

  // The identifier to be assigned to the new Amazon Redshift HSM configuration.
  hsmConfigurationIdentifier?: string;

  // The IP address that the Amazon Redshift cluster must use to access the HSM.
  hsmIpAddress?: string;

  // The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
  hsmPartitionName?: string;

  // The password required to access the HSM partition.
  hsmPartitionPassword?: string;

  // The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.
  hsmServerPublicCertificate?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class HsmConfiguration extends Resource {
  // The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
  public hsmPartitionName?: string;

  // The identifier to be assigned to the new Amazon Redshift HSM configuration.
  public hsmConfigurationIdentifier?: string;

  // The IP address that the Amazon Redshift cluster must use to access the HSM.
  public hsmIpAddress?: string;

  // The password required to access the HSM partition.
  public hsmPartitionPassword?: string;

  // The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.
  public hsmServerPublicCertificate?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the Hsm Client Certificate.
  public arn?: string;

  // A text description of the HSM configuration to be created.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "hsmConfigurationIdentifier",
        "The identifier to be assigned to the new Amazon Redshift HSM configuration.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hsmIpAddress",
        "The IP address that the Amazon Redshift cluster must use to access the HSM.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hsmPartitionName",
        "The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hsmPartitionPassword",
        "The password required to access the HSM partition.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hsmServerPublicCertificate",
        "The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A text description of the HSM configuration to be created.",
        [],
        true,
        true,
      ),
    ];
  }
}
