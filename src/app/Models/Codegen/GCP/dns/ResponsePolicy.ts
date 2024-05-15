import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ResponsePolicyGkeCluster,
  Dns_ResponsePolicyGkeCluster_GetTypes,
} from "../types/Dns_ResponsePolicyGkeCluster";
import {
  Dns_ResponsePolicyNetwork,
  Dns_ResponsePolicyNetwork_GetTypes,
} from "../types/Dns_ResponsePolicyNetwork";

export interface ResponsePolicyArgs {
  // The description of the response policy, such as `My new response policy`.
  Description?: string;

  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  GkeClusters?: Array<Dns_ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  Networks?: Array<Dns_ResponsePolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The user assigned name for this Response Policy, such as `myresponsepolicy`.


- - -
*/
  ResponsePolicyName?: string;
}
export class ResponsePolicy extends Resource {
  // The description of the response policy, such as `My new response policy`.
  public Description?: string;

  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  public GkeClusters?: Array<Dns_ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  public Networks?: Array<Dns_ResponsePolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The user assigned name for this Response Policy, such as `myresponsepolicy`.


- - -
*/
  public ResponsePolicyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the response policy, such as `My new response policy`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "GkeClusters",
        "The list of Google Kubernetes Engine clusters that can see this zone.\nStructure is documented below.",
        Dns_ResponsePolicyGkeCluster_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Networks",
        "The list of network names specifying networks to which this policy is applied.\nStructure is documented below.",
        Dns_ResponsePolicyNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ResponsePolicyName",
        "The user assigned name for this Response Policy, such as `myresponsepolicy`.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
