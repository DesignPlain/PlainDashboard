import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AppProfileSingleClusterRouting } from "../types/AppProfileSingleClusterRouting";
import { AppProfileStandardIsolation } from "../types/AppProfileStandardIsolation";

export interface AppProfileArgs {
  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  AppProfileId?: string;

  // Long form description of the use case for this app profile.
  Description?: string;

  // If true, ignore safety checks when deleting/updating the app profile.
  IgnoreWarnings?: boolean;

  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  SingleClusterRouting?: AppProfileSingleClusterRouting;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The standard options used for isolating this app profile's traffic from other use cases.
Structure is documented below.
*/
  StandardIsolation?: AppProfileStandardIsolation;
}
export class AppProfile extends Resource {
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
  public StandardIsolation?: AppProfileStandardIsolation;

  /*
The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]-`.


- - -
*/
  public AppProfileId?: string;

  // Long form description of the use case for this app profile.
  public Description?: string;

  // If true, ignore safety checks when deleting/updating the app profile.
  public IgnoreWarnings?: boolean;

  // The name of the instance to create the app profile within.
  public Instance?: string;

  /*
If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
*/
  public MultiClusterRoutingUseAny?: boolean;

  /*
The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all
clusters are eligible.
*/
  public MultiClusterRoutingClusterIds?: Array<string>;

  /*
Use a single-cluster routing policy.
Structure is documented below.
*/
  public SingleClusterRouting?: AppProfileSingleClusterRouting;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "MultiClusterRoutingClusterIds",
        "The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all\nclusters are eligible.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "MultiClusterRoutingUseAny",
        "If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available\nin the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes\nconsistency to improve availability.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IgnoreWarnings",
        "If true, ignore safety checks when deleting/updating the app profile.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SingleClusterRouting",
        "Use a single-cluster routing policy.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name of the instance to create the app profile within.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StandardIsolation",
        "The standard options used for isolating this app profile's traffic from other use cases.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AppProfileId",
        "The unique name of the app profile in the form `[_a-zA-Z0-9][-_.a-zA-Z0-9]*`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Long form description of the use case for this app profile.",
      ),
    ];
  }
}
