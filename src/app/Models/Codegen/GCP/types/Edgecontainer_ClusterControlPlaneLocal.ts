import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterControlPlaneLocal {
  /*
Name of the Google Distributed Cloud Edge zones where this node pool
will be created. For example: `us-central1-edge-customer-a`.
*/
  NodeLocation?: string;

  /*
Policy configuration about how user applications are deployed.
Possible values are: `SHARED_DEPLOYMENT_POLICY_UNSPECIFIED`, `ALLOWED`, `DISALLOWED`.
*/
  SharedDeploymentPolicy?: string;

  /*
Only machines matching this filter will be allowed to host control
plane nodes. The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).
*/
  MachineFilter?: string;

  /*
The number of nodes to serve as replicas of the Control Plane.
Only 1 and 3 are supported.
*/
  NodeCount?: number;
}

export function Edgecontainer_ClusterControlPlaneLocal_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodeLocation",
      "Name of the Google Distributed Cloud Edge zones where this node pool\nwill be created. For example: `us-central1-edge-customer-a`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SharedDeploymentPolicy",
      "Policy configuration about how user applications are deployed.\nPossible values are: `SHARED_DEPLOYMENT_POLICY_UNSPECIFIED`, `ALLOWED`, `DISALLOWED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineFilter",
      'Only machines matching this filter will be allowed to host control\nplane nodes. The filtering language accepts strings like "name=<name>",\nand is documented here: [AIP-160](https://google.aip.dev/160).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes to serve as replicas of the Control Plane.\nOnly 1 and 3 are supported.",
      [],
      false,
      false,
    ),
  ];
}
