import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_ClusterControlPlaneLocal {
  /*
Name of the Google Distributed Cloud Edge zones where this node pool
will be created. For example: `us-central1-edge-customer-a`.
*/
  nodeLocation?: string;

  /*
Policy configuration about how user applications are deployed.
Possible values are: `SHARED_DEPLOYMENT_POLICY_UNSPECIFIED`, `ALLOWED`, `DISALLOWED`.
*/
  sharedDeploymentPolicy?: string;

  /*
Only machines matching this filter will be allowed to host control
plane nodes. The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).
*/
  machineFilter?: string;

  /*
The number of nodes to serve as replicas of the Control Plane.
Only 1 and 3 are supported.
*/
  nodeCount?: number;
}

export function edgecontainer_ClusterControlPlaneLocal_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of nodes to serve as replicas of the Control Plane.\nOnly 1 and 3 are supported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeLocation",
      "Name of the Google Distributed Cloud Edge zones where this node pool\nwill be created. For example: `us-central1-edge-customer-a`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sharedDeploymentPolicy",
      "Policy configuration about how user applications are deployed.\nPossible values are: `SHARED_DEPLOYMENT_POLICY_UNSPECIFIED`, `ALLOWED`, `DISALLOWED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineFilter",
      'Only machines matching this filter will be allowed to host control\nplane nodes. The filtering language accepts strings like "name=<name>",\nand is documented here: [AIP-160](https://google.aip.dev/160).',
      [],
      false,
      false,
    ),
  ];
}
