import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CoreNetworkPolicyAttachmentArgs {
  // The ID of the core network that a policy will be attached to and made `LIVE`.
  coreNetworkId?: string;

  // Policy document for creating a core network. Note that updating this argument will result in the new policy document version being set as the `LATEST` and `LIVE` policy document. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.
  policyDocument?: string;
}
export class CoreNetworkPolicyAttachment extends Resource {
  // The ID of the core network that a policy will be attached to and made `LIVE`.
  public coreNetworkId?: string;

  // Policy document for creating a core network. Note that updating this argument will result in the new policy document version being set as the `LATEST` and `LIVE` policy document. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.
  public policyDocument?: string;

  // Current state of a core network.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "coreNetworkId",
        "The ID of the core network that a policy will be attached to and made `LIVE`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyDocument",
        "Policy document for creating a core network. Note that updating this argument will result in the new policy document version being set as the `LATEST` and `LIVE` policy document. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information.",
        [],
        true,
        false,
      ),
    ];
  }
}
