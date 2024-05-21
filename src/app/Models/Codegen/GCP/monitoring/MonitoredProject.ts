import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MonitoredProjectArgs {
  /*
Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}


- - -
*/
  metricsScope?: string;

  // Immutable. The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`
  name?: string;
}
export class MonitoredProject extends Resource {
  // Output only. The time when this `MonitoredProject` was created.
  public createTime?: string;

  /*
Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}


- - -
*/
  public metricsScope?: string;

  // Immutable. The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "metricsScope",
        "Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Immutable. The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`",
        [],
        false,
        true,
      ),
    ];
  }
}
