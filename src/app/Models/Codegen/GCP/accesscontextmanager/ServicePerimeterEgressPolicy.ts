import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServicePerimeterEgressPolicyEgressFrom } from "../types/ServicePerimeterEgressPolicyEgressFrom";
import { ServicePerimeterEgressPolicyEgressTo } from "../types/ServicePerimeterEgressPolicyEgressTo";

export interface ServicePerimeterEgressPolicyArgs {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: ServicePerimeterEgressPolicyEgressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  Perimeter?: string;
}
export class ServicePerimeterEgressPolicy extends Resource {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  public EgressFrom?: ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  public EgressTo?: ServicePerimeterEgressPolicyEgressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public Perimeter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EgressFrom",
        "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EgressTo",
        "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Perimeter",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
      ),
    ];
  }
}
