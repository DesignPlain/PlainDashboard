import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  storagegateway_FileSystemAssociationCacheAttributes,
  storagegateway_FileSystemAssociationCacheAttributes_GetTypes,
} from "../types/storagegateway_FileSystemAssociationCacheAttributes";

export interface FileSystemAssociationArgs {
  // The user name of the user credential that has permission to access the root share of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
  username?: string;

  // The Amazon Resource Name (ARN) of the storage used for the audit logs.
  auditDestinationArn?: string;

  // Refresh cache information. see Cache Attributes for more details.
  cacheAttributes?: storagegateway_FileSystemAssociationCacheAttributes;

  // The Amazon Resource Name (ARN) of the gateway.
  gatewayArn?: string;

  // The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.
  locationArn?: string;

  // The password of the user credential.
  password?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class FileSystemAssociation extends Resource {
  // Amazon Resource Name (ARN) of the newly created file system association.
  public arn?: string;

  // The Amazon Resource Name (ARN) of the storage used for the audit logs.
  public auditDestinationArn?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  public gatewayArn?: string;

  // The user name of the user credential that has permission to access the root share of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
  public username?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Refresh cache information. see Cache Attributes for more details.
  public cacheAttributes?: storagegateway_FileSystemAssociationCacheAttributes;

  // The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.
  public locationArn?: string;

  // The password of the user credential.
  public password?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cacheAttributes",
        "Refresh cache information. see Cache Attributes for more details.",
        storagegateway_FileSystemAssociationCacheAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayArn",
        "The Amazon Resource Name (ARN) of the gateway.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "locationArn",
        "The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password of the user credential.",
        [],
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
        "username",
        "The user name of the user credential that has permission to access the root share of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "auditDestinationArn",
        "The Amazon Resource Name (ARN) of the storage used for the audit logs.",
        [],
        false,
        false,
      ),
    ];
  }
}
