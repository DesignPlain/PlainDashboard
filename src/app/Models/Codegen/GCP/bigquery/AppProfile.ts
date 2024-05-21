import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_AppProfileSingleClusterRouting,
  bigquery_AppProfileSingleClusterRouting_GetTypes,
} from "../types/bigquery_AppProfileSingleClusterRouting";
import {
  bigquery_AppProfileStandardIsolation,
  bigquery_AppProfileStandardIsolation_GetTypes,
} from "../types/bigquery_AppProfileStandardIsolation";

export interface AppProfileArgs {
  /*
The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all
clusters are eligible.
*/
  multiClusterRoutingClusterIds?: Array<string>;

  /*
If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
*/
  multiClusterRoutingUseAny?: boolean;

  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  singleClusterRouting?: bigquery_AppProfileSingleClusterRouting;

  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  appProfileId?: string;

  // If true, ignore safety checks when deleting/updating the app profile.
  ignoreWarnings?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The standard options used for isolating this app profile's traffic from other use cases.
Structure is documented below.
*/
  standardIsolation?: bigquery_AppProfileStandardIsolation;

  // Long form description of the use case for this app profile.
  description?: string;

  // The name of the instance to create the app profile within.
  instance?: string;
}
export class AppProfile extends Resource {
  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  public singleClusterRouting?: bigquery_AppProfileSingleClusterRouting;

  /*
The standard options used for isolating this app profile's traffic from other use cases.
Structure is documented below.
*/
  public standardIsolation?: bigquery_AppProfileStandardIsolation;

  // Long form description of the use case for this app profile.
  public description?: string;

  // The name of the instance to create the app profile within.
  public instance?: string;

  /*
If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
*/
  public multiClusterRoutingUseAny?: boolean;

  // The unique name of the requested app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<appProfileId>`.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  public appProfileId?: string;

  // If true, ignore safety checks when deleting/updating the app profile.
  public ignoreWarnings?: boolean;

  /*
The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all
clusters are eligible.
*/
  public multiClusterRoutingClusterIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appProfileId",
        "The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "standardIsolation",
        "The standard options used for isolating this app profile's traffic from other use cases.\nStructure is documented below.",
        bigquery_AppProfileStandardIsolation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiClusterRoutingUseAny",
        "If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available\nin the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes\nconsistency to improve availability.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "singleClusterRouting",
        "Use a single-cluster routing policy.\nStructure is documented below.",
        bigquery_AppProfileSingleClusterRouting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ignoreWarnings",
        "If true, ignore safety checks when deleting/updating the app profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Long form description of the use case for this app profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name of the instance to create the app profile within.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "multiClusterRoutingClusterIds",
        "The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all\nclusters are eligible.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
