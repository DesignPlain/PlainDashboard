import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_AppProfileStandardIsolation,
  Bigquery_AppProfileStandardIsolation_GetTypes,
} from "../types/Bigquery_AppProfileStandardIsolation";
import {
  Bigquery_AppProfileSingleClusterRouting,
  Bigquery_AppProfileSingleClusterRouting_GetTypes,
} from "../types/Bigquery_AppProfileSingleClusterRouting";

export interface AppProfileArgs {
  // Long form description of the use case for this app profile.
  Description?: string;

  // The name of the instance to create the app profile within.
  Instance?: string;

  /*
The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all
clusters are eligible.
*/
  MultiClusterRoutingClusterIds?: Array<string>;

  /*
If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
*/
  MultiClusterRoutingUseAny?: boolean;

  /*
The standard options used for isolating this app profile's traffic from other use cases.
Structure is documented below.
*/
  StandardIsolation?: Bigquery_AppProfileStandardIsolation;

  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  AppProfileId?: string;

  // If true, ignore safety checks when deleting/updating the app profile.
  IgnoreWarnings?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  SingleClusterRouting?: Bigquery_AppProfileSingleClusterRouting;
}
export class AppProfile extends Resource {
  // If true, ignore safety checks when deleting/updating the app profile.
  public IgnoreWarnings?: boolean;

  /*
The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all
clusters are eligible.
*/
  public MultiClusterRoutingClusterIds?: Array<string>;

  /*
If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
*/
  public MultiClusterRoutingUseAny?: boolean;

  // The unique name of the requested app profile. Values are of the form `projects/<project>/instances/<instance>/appProfiles/<appProfileId>`.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The standard options used for isolating this app profile's traffic from other use cases.
Structure is documented below.
*/
  public StandardIsolation?: Bigquery_AppProfileStandardIsolation;

  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  public AppProfileId?: string;

  // Long form description of the use case for this app profile.
  public Description?: string;

  // The name of the instance to create the app profile within.
  public Instance?: string;

  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  public SingleClusterRouting?: Bigquery_AppProfileSingleClusterRouting;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Long form description of the use case for this app profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AppProfileId",
        "The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IgnoreWarnings",
        "If true, ignore safety checks when deleting/updating the app profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name of the instance to create the app profile within.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "MultiClusterRoutingClusterIds",
        "The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all\nclusters are eligible.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "MultiClusterRoutingUseAny",
        "If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available\nin the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes\nconsistency to improve availability.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "StandardIsolation",
        "The standard options used for isolating this app profile's traffic from other use cases.\nStructure is documented below.",
        Bigquery_AppProfileStandardIsolation_GetTypes(),
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
        InputType.Object,
        "SingleClusterRouting",
        "Use a single-cluster routing policy.\nStructure is documented below.",
        Bigquery_AppProfileSingleClusterRouting_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
