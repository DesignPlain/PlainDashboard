import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  transfer_ServerWorkflowDetails,
  transfer_ServerWorkflowDetails_GetTypes,
} from "../types/transfer_ServerWorkflowDetails";
import {
  transfer_ServerProtocolDetails,
  transfer_ServerProtocolDetails_GetTypes,
} from "../types/transfer_ServerProtocolDetails";
import {
  transfer_ServerEndpointDetails,
  transfer_ServerEndpointDetails_GetTypes,
} from "../types/transfer_ServerEndpointDetails";

export interface ServerArgs {
  // Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:
  protocols?: Array<string>;

  // Specifies the workflow details. See Workflow Details below.
  workflowDetails?: transfer_ServerWorkflowDetails;

  // The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.
  endpointType?: string;

  // A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identity_provider_type`.
  forceDestroy?: boolean;

  // The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice. Using `AWS_DIRECTORY_SERVICE` will allow for authentication against AWS Managed Active Directory or Microsoft Active Directory in your on-premises environment, or in AWS using AD Connectors. Use the `AWS_LAMBDA` value to directly use a Lambda function as your identity provider. If you choose this value, you must specify the ARN for the lambda function in the `function` argument.
  identityProviderType?: string;

  // The protocol settings that are configured for your server.
  protocolDetails?: transfer_ServerProtocolDetails;

  // A set of ARNs of destinations that will receive structured logs from the transfer server such as CloudWatch Log Group ARNs. If provided this enables the transfer server to emit structured logs to the specified locations.
  structuredLogDestinations?: Array<string>;

  // The directory service ID of the directory service you want to connect to with an `identity_provider_type` of `AWS_DIRECTORY_SERVICE`.
  directoryId?: string;

  // The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.
  domain?: string;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
  loggingRole?: string;

  // Specify a string to display when users connect to a server. This string is displayed before the user authenticates.
  preAuthenticationLoginBanner?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // URL of the service endpoint used to authenticate users with an `identity_provider_type` of `API_GATEWAY`.
  url?: string;

  // The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`
  certificate?: string;

  // The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.
  endpointDetails?: transfer_ServerEndpointDetails;

  // Specify a string to display when users connect to a server. This string is displayed after the user authenticates. The SFTP protocol does not support post-authentication display banners.
  postAuthenticationLoginBanner?: string;

  /*
Specifies the name of the security policy that is attached to the server. Default value is: `TransferSecurityPolicy-2018-11`. The available values are:
- `TransferSecurityPolicy-2024-01`
- `TransferSecurityPolicy-2023-05`
- `TransferSecurityPolicy-2022-03`
- `TransferSecurityPolicy-2020-06`
- `TransferSecurityPolicy-2018-11`
- `TransferSecurityPolicy-FIPS-2024-01`
- `TransferSecurityPolicy-FIPS-2023-05`
- `TransferSecurityPolicy-FIPS-2020-06`
- `TransferSecurityPolicy-PQ-SSH-Experimental-2023-04`
- `TransferSecurityPolicy-PQ-SSH-FIPS-Experimental-2023-04`
*/
  securityPolicyName?: string;

  // The ARN for a lambda function to use for the Identity provider.
  function?: string;

  // RSA, ECDSA, or ED25519 private key (e.g., as generated by the `ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key`, `ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key` or `ssh-keygen -t ed25519 -N "" -f my-new-server-key` commands).
  hostKey?: string;

  // Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identity_provider_type` of `API_GATEWAY`.
  invocationRole?: string;
}
export class Server extends Resource {
  // A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identity_provider_type`.
  public forceDestroy?: boolean;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
  public loggingRole?: string;

  // Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:
  public protocols?: Array<string>;

  // URL of the service endpoint used to authenticate users with an `identity_provider_type` of `API_GATEWAY`.
  public url?: string;

  // Specifies the workflow details. See Workflow Details below.
  public workflowDetails?: transfer_ServerWorkflowDetails;

  // The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`
  public certificate?: string;

  // The endpoint of the Transfer Server (e.g., `s-12345678.server.transfer.REGION.amazonaws.com`)
  public endpoint?: string;

  // The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.
  public endpointType?: string;

  // This value contains the message-digest algorithm (MD5) hash of the server's host key. This value is equivalent to the output of the `ssh-keygen -l -E md5 -f my-new-server-key` command.
  public hostKeyFingerprint?: string;

  // The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice. Using `AWS_DIRECTORY_SERVICE` will allow for authentication against AWS Managed Active Directory or Microsoft Active Directory in your on-premises environment, or in AWS using AD Connectors. Use the `AWS_LAMBDA` value to directly use a Lambda function as your identity provider. If you choose this value, you must specify the ARN for the lambda function in the `function` argument.
  public identityProviderType?: string;

  // Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identity_provider_type` of `API_GATEWAY`.
  public invocationRole?: string;

  // The protocol settings that are configured for your server.
  public protocolDetails?: transfer_ServerProtocolDetails;

  /*
Specifies the name of the security policy that is attached to the server. Default value is: `TransferSecurityPolicy-2018-11`. The available values are:
- `TransferSecurityPolicy-2024-01`
- `TransferSecurityPolicy-2023-05`
- `TransferSecurityPolicy-2022-03`
- `TransferSecurityPolicy-2020-06`
- `TransferSecurityPolicy-2018-11`
- `TransferSecurityPolicy-FIPS-2024-01`
- `TransferSecurityPolicy-FIPS-2023-05`
- `TransferSecurityPolicy-FIPS-2020-06`
- `TransferSecurityPolicy-PQ-SSH-Experimental-2023-04`
- `TransferSecurityPolicy-PQ-SSH-FIPS-Experimental-2023-04`
*/
  public securityPolicyName?: string;

  // The directory service ID of the directory service you want to connect to with an `identity_provider_type` of `AWS_DIRECTORY_SERVICE`.
  public directoryId?: string;

  // The ARN for a lambda function to use for the Identity provider.
  public function?: string;

  // RSA, ECDSA, or ED25519 private key (e.g., as generated by the `ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key`, `ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key` or `ssh-keygen -t ed25519 -N "" -f my-new-server-key` commands).
  public hostKey?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of Transfer Server
  public arn?: string;

  // The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.
  public endpointDetails?: transfer_ServerEndpointDetails;

  // Specify a string to display when users connect to a server. This string is displayed before the user authenticates.
  public preAuthenticationLoginBanner?: string;

  // The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.
  public domain?: string;

  // Specify a string to display when users connect to a server. This string is displayed after the user authenticates. The SFTP protocol does not support post-authentication display banners.
  public postAuthenticationLoginBanner?: string;

  // A set of ARNs of destinations that will receive structured logs from the transfer server such as CloudWatch Log Group ARNs. If provided this enables the transfer server to emit structured logs to the specified locations.
  public structuredLogDestinations?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identity_provider_type`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityProviderType",
        "The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice. Using `AWS_DIRECTORY_SERVICE` will allow for authentication against AWS Managed Active Directory or Microsoft Active Directory in your on-premises environment, or in AWS using AD Connectors. Use the `AWS_LAMBDA` value to directly use a Lambda function as your identity provider. If you choose this value, you must specify the ARN for the lambda function in the `function` argument.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The directory service ID of the directory service you want to connect to with an `identity_provider_type` of `AWS_DIRECTORY_SERVICE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loggingRole",
        "Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicyName",
        "Specifies the name of the security policy that is attached to the server. Default value is: `TransferSecurityPolicy-2018-11`. The available values are:\n* `TransferSecurityPolicy-2024-01`\n* `TransferSecurityPolicy-2023-05`\n* `TransferSecurityPolicy-2022-03`\n* `TransferSecurityPolicy-2020-06`\n* `TransferSecurityPolicy-2018-11`\n* `TransferSecurityPolicy-FIPS-2024-01`\n* `TransferSecurityPolicy-FIPS-2023-05`\n* `TransferSecurityPolicy-FIPS-2020-06`\n* `TransferSecurityPolicy-PQ-SSH-Experimental-2023-04`\n* `TransferSecurityPolicy-PQ-SSH-FIPS-Experimental-2023-04`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostKey",
        'RSA, ECDSA, or ED25519 private key (e.g., as generated by the `ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key`, `ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key` or `ssh-keygen -t ed25519 -N "" -f my-new-server-key` commands).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointType",
        "The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "structuredLogDestinations",
        "A set of ARNs of destinations that will receive structured logs from the transfer server such as CloudWatch Log Group ARNs. If provided this enables the transfer server to emit structured logs to the specified locations.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "postAuthenticationLoginBanner",
        "Specify a string to display when users connect to a server. This string is displayed after the user authenticates. The SFTP protocol does not support post-authentication display banners.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "url",
        "URL of the service endpoint used to authenticate users with an `identity_provider_type` of `API_GATEWAY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workflowDetails",
        "Specifies the workflow details. See Workflow Details below.",
        transfer_ServerWorkflowDetails_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "protocolDetails",
        "The protocol settings that are configured for your server.",
        transfer_ServerProtocolDetails_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preAuthenticationLoginBanner",
        "Specify a string to display when users connect to a server. This string is displayed before the user authenticates.",
        [],
        false,
        false,
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
        "invocationRole",
        "Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identity_provider_type` of `API_GATEWAY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "protocols",
        "Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "endpointDetails",
        "The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.",
        transfer_ServerEndpointDetails_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "function",
        "The ARN for a lambda function to use for the Identity provider.",
        [],
        false,
        false,
      ),
    ];
  }
}
