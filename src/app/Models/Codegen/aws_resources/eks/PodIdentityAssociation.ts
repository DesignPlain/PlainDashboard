import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PodIdentityAssociationArgs {
  // The name of the cluster to create the association in.
  clusterName?: string;

  // The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
  namespace?: string;

  // The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
  roleArn?: string;

  /*
The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.

The following arguments are optional:
*/
  serviceAccount?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class PodIdentityAssociation extends Resource {
  // The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
  public namespace?: string;

  // The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
  public roleArn?: string;

  /*
The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.

The following arguments are optional:
*/
  public serviceAccount?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the association.
  public associationArn?: string;

  // The ID of the association.
  public associationId?: string;

  // The name of the cluster to create the association in.
  public clusterName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.\n\nThe following arguments are optional:",
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
        "clusterName",
        "The name of the cluster to create the association in.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.",
        [],
        true,
        false,
      ),
    ];
  }
}
