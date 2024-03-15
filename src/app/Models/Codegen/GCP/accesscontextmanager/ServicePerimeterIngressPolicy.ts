import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServicePerimeterIngressPolicyIngressFrom } from "../types/ServicePerimeterIngressPolicyIngressFrom";
import { ServicePerimeterIngressPolicyIngressTo } from "../types/ServicePerimeterIngressPolicyIngressTo";

export interface ServicePerimeterIngressPolicyArgs {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: ServicePerimeterIngressPolicyIngressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  Perimeter?: string;
}
export class ServicePerimeterIngressPolicy extends Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public Perimeter?: string;

  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  public IngressFrom?: ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  public IngressTo?: ServicePerimeterIngressPolicyIngressTo;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IngressFrom",
        "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IngressTo",
        "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Perimeter",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
      ),
    ];
  }
}
