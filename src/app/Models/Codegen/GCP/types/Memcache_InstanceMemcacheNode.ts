import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Memcache_InstanceMemcacheNode {
  /*
(Output)
The port number of the Memcached server on this node.
*/
  Port?: number;

  /*
(Output)
Current state of the Memcached node.
*/
  State?: string;

  /*
(Output)
Location (GCP Zone) for the Memcached node.
*/
  Zone?: string;

  /*
(Output)
Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
*/
  Host?: string;

  /*
(Output)
Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
*/
  NodeId?: string;
}

export function Memcache_InstanceMemcacheNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodeId",
      "(Output)\nIdentifier of the Memcached node. The node id does not include project or location like the Memcached instance name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "(Output)\nThe port number of the Memcached server on this node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nCurrent state of the Memcached node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "(Output)\nLocation (GCP Zone) for the Memcached node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "(Output)\nHostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.",
      [],
      false,
      false,
    ),
  ];
}
