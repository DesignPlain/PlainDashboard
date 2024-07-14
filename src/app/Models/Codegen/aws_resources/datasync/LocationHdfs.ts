import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datasync_LocationHdfsNameNode,
  datasync_LocationHdfsNameNode_GetTypes,
} from "../types/datasync_LocationHdfsNameNode";
import {
  datasync_LocationHdfsQopConfiguration,
  datasync_LocationHdfsQopConfiguration_GetTypes,
} from "../types/datasync_LocationHdfsQopConfiguration";

export interface LocationHdfsArgs {
  // The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  kerberosKeytab?: string;

  // The Kerberos principal with access to the files and folders on the HDFS cluster. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  kerberosPrincipal?: string;

  // The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode. See configuration below.
  nameNodes?: Array<datasync_LocationHdfsNameNode>;

  // The user name used to identify the client on the host operating system. If `SIMPLE` is specified for `authentication_type`, this parameter is required.
  simpleUser?: string;

  // A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of authentication used to determine the identity of the user. Valid values are `SIMPLE` and `KERBEROS`.
  authenticationType?: string;

  // The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
  blockSize?: number;

  // The krb5.conf file that contains the Kerberos configuration information. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  kerberosKrb5Conf?: string;

  // The URI of the HDFS cluster's Key Management Server (KMS).
  kmsKeyProviderUri?: string;

  // The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If `qop_configuration` isn't specified, `rpc_protection` and `data_transfer_protection` default to `PRIVACY`. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value.  See configuration below.
  qopConfiguration?: datasync_LocationHdfsQopConfiguration;

  // The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.
  replicationFactor?: number;

  // A list of DataSync Agent ARNs with which this location will be associated.
  agentArns?: Array<string>;
}
export class LocationHdfs extends Resource {
  // The Kerberos principal with access to the files and folders on the HDFS cluster. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  public kerberosPrincipal?: string;

  // The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.
  public replicationFactor?: number;

  // The user name used to identify the client on the host operating system. If `SIMPLE` is specified for `authentication_type`, this parameter is required.
  public simpleUser?: string;

  // The type of authentication used to determine the identity of the user. Valid values are `SIMPLE` and `KERBEROS`.
  public authenticationType?: string;

  // The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
  public blockSize?: number;

  // The URI of the HDFS cluster's Key Management Server (KMS).
  public kmsKeyProviderUri?: string;

  // The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If `qop_configuration` isn't specified, `rpc_protection` and `data_transfer_protection` default to `PRIVACY`. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value.  See configuration below.
  public qopConfiguration?: datasync_LocationHdfsQopConfiguration;

  //
  public uri?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  public agentArns?: Array<string>;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  public kerberosKeytab?: string;

  // The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode. See configuration below.
  public nameNodes?: Array<datasync_LocationHdfsNameNode>;

  // A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.
  public subdirectory?: string;

  // The krb5.conf file that contains the Kerberos configuration information. If `KERBEROS` is specified for `authentication_type`, this parameter is required.
  public kerberosKrb5Conf?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationType",
        "The type of authentication used to determine the identity of the user. Valid values are `SIMPLE` and `KERBEROS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyProviderUri",
        "The URI of the HDFS cluster's Key Management Server (KMS).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "replicationFactor",
        "The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kerberosKeytab",
        "The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. If `KERBEROS` is specified for `authentication_type`, this parameter is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kerberosPrincipal",
        "The Kerberos principal with access to the files and folders on the HDFS cluster. If `KERBEROS` is specified for `authentication_type`, this parameter is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nameNodes",
        "The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode. See configuration below.",
        datasync_LocationHdfsNameNode_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "simpleUser",
        "The user name used to identify the client on the host operating system. If `SIMPLE` is specified for `authentication_type`, this parameter is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "blockSize",
        "The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kerberosKrb5Conf",
        "The krb5.conf file that contains the Kerberos configuration information. If `KERBEROS` is specified for `authentication_type`, this parameter is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "qopConfiguration",
        "The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If `qop_configuration` isn't specified, `rpc_protection` and `data_transfer_protection` default to `PRIVACY`. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value.  See configuration below.",
        datasync_LocationHdfsQopConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "agentArns",
        "A list of DataSync Agent ARNs with which this location will be associated.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
