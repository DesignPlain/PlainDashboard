import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LocationObjectStorageArgs {
  // The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.
  accessKey?: string;

  // The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.
  secretKey?: string;

  // Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem string. The certificate can be up to 32768 bytes (before Base64 encoding).
  serverCertificate?: string;

  // A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of DataSync Agent ARNs with which this location will be associated.
  agentArns?: Array<string>;

  // The bucket on the self-managed object storage server that is used to read data from.
  bucketName?: string;

  // The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network.
  serverHostname?: string;

  // The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (`HTTP`) or TCP 443 (`HTTPS`). You can specify a custom port if your self-managed object storage server requires one.
  serverPort?: number;

  // The protocol that the object storage server uses to communicate. Valid values are `HTTP` or `HTTPS`.
  serverProtocol?: string;
}
export class LocationObjectStorage extends DS_Resource {
  // The URL of the Object Storage location that was described.
  public uri?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  public agentArns?: Array<string>;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The bucket on the self-managed object storage server that is used to read data from.
  public bucketName?: string;

  // The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network.
  public serverHostname?: string;

  // A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.
  public accessKey?: string;

  // The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.
  public secretKey?: string;

  // Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem string. The certificate can be up to 32768 bytes (before Base64 encoding).
  public serverCertificate?: string;

  // The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (`HTTP`) or TCP 443 (`HTTPS`). You can specify a custom port if your self-managed object storage server requires one.
  public serverPort?: number;

  // The protocol that the object storage server uses to communicate. Valid values are `HTTP` or `HTTPS`.
  public serverProtocol?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serverProtocol",
        "The protocol that the object storage server uses to communicate. Valid values are `HTTP` or `HTTPS`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessKey",
        "The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "secretKey",
        "The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverCertificate",
        "Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem string. The certificate can be up to 32768 bytes (before Base64 encoding).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "agentArns",
        "A list of DataSync Agent ARNs with which this location will be associated.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "serverPort",
        "The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (`HTTP`) or TCP 443 (`HTTPS`). You can specify a custom port if your self-managed object storage server requires one.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "The bucket on the self-managed object storage server that is used to read data from.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverHostname",
        "The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
