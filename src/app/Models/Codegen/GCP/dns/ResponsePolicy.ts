import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ResponsePolicyNetwork } from "../types/ResponsePolicyNetwork";
import { ResponsePolicyGkeCluster } from "../types/ResponsePolicyGkeCluster";

export interface ResponsePolicyArgs {
  // The description of the response policy, such as `My new response policy`.
  Description?: string;

  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  GkeClusters?: Array<ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  Networks?: Array<ResponsePolicyNetwork>;

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
  /*
The user assigned name for this Response Policy, such as `myresponsepolicy`.


- - -
*/
  public ResponsePolicyName?: string;

  // The description of the response policy, such as `My new response policy`.
  public Description?: string;

  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  public GkeClusters?: Array<ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  public Networks?: Array<ResponsePolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the response policy, such as `My new response policy`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GkeClusters",
        "The list of Google Kubernetes Engine clusters that can see this zone.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Networks",
        "The list of network names specifying networks to which this policy is applied.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResponsePolicyName",
        "The user assigned name for this Response Policy, such as `myresponsepolicy`.\n\n\n- - -",
      ),
    ];
  }
}
