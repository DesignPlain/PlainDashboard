import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccessEntryArgs {
  // Name of the EKS Cluster.
  clusterName?: string;

  // List of string which can optionally specify the Kubernetes groups the user would belong to when creating an access entry.
  kubernetesGroups?: Array<string>;

  /*
The IAM Principal ARN which requires Authentication access to the EKS cluster.

The following arguments are optional:
*/
  principalArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Defaults to STANDARD which provides the standard workflow. EC2_LINUX, EC2_WINDOWS, FARGATE_LINUX types disallow users to input a username or groups, and prevent associations.
  type?: string;

  // Defaults to principal ARN if user is principal else defaults to assume-role/session-name is role is used.
  userName?: string;
}
export class AccessEntry extends DS_Resource {
  // List of string which can optionally specify the Kubernetes groups the user would belong to when creating an access entry.
  public kubernetesGroups?: Array<string>;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was updated.
  public modifiedAt?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the Access Entry.
  public accessEntryArn?: string;

  // Name of the EKS Cluster.
  public clusterName?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was created.
  public createdAt?: string;

  /*
The IAM Principal ARN which requires Authentication access to the EKS cluster.

The following arguments are optional:
*/
  public principalArn?: string;

  // (Optional) Key-value map of resource tags, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Defaults to STANDARD which provides the standard workflow. EC2_LINUX, EC2_WINDOWS, FARGATE_LINUX types disallow users to input a username or groups, and prevent associations.
  public type?: string;

  // Defaults to principal ARN if user is principal else defaults to assume-role/session-name is role is used.
  public userName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userName",
        "Defaults to principal ARN if user is principal else defaults to assume-role/session-name is role is used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the EKS Cluster.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kubernetesGroups",
        "List of string which can optionally specify the Kubernetes groups the user would belong to when creating an access entry.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalArn",
        "The IAM Principal ARN which requires Authentication access to the EKS cluster.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Defaults to STANDARD which provides the standard workflow. EC2_LINUX, EC2_WINDOWS, FARGATE_LINUX types disallow users to input a username or groups, and prevent associations.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
