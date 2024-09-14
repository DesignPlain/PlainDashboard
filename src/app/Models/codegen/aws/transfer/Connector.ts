import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_ConnectorAs2Config,
  transfer_ConnectorAs2Config_GetTypes,
} from "../types/transfer_ConnectorAs2Config";
import {
  transfer_ConnectorSftpConfig,
  transfer_ConnectorSftpConfig_GetTypes,
} from "../types/transfer_ConnectorSftpConfig";

export interface ConnectorArgs {
  // The URL of the partners AS2 endpoint or SFTP endpoint.
  url?: string;

  // The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.
  accessRole?: string;

  // Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.
  as2Config?: transfer_ConnectorAs2Config;

  // The IAM Role which is required for allowing the connector to turn on CloudWatch logging for Amazon S3 events.
  loggingRole?: string;

  // Name of the security policy for the connector.
  securityPolicyName?: string;

  // Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.
  sftpConfig?: transfer_ConnectorSftpConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Connector extends DS_Resource {
  // The URL of the partners AS2 endpoint or SFTP endpoint.
  public url?: string;

  // Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.
  public as2Config?: transfer_ConnectorAs2Config;

  // The unique identifier for the AS2 profile or SFTP Profile.
  public connectorId?: string;

  //
  public tagsAll?: Map<string, string>;

  // Name of the security policy for the connector.
  public securityPolicyName?: string;

  // Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.
  public sftpConfig?: transfer_ConnectorSftpConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.
  public accessRole?: string;

  // The ARN of the connector.
  public arn?: string;

  // The IAM Role which is required for allowing the connector to turn on CloudWatch logging for Amazon S3 events.
  public loggingRole?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "url",
        "The URL of the partners AS2 endpoint or SFTP endpoint.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessRole",
        "The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "as2Config",
        "Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.",
        () => transfer_ConnectorAs2Config_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loggingRole",
        "The IAM Role which is required for allowing the connector to turn on CloudWatch logging for Amazon S3 events.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicyName",
        "Name of the security policy for the connector.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sftpConfig",
        "Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below.",
        () => transfer_ConnectorSftpConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
