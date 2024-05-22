import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface memcache_InstanceMemcacheNode {
  /*
(Output)
Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
*/
  host?: string;

  /*
(Output)
Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
*/
  nodeId?: string;

  /*
(Output)
The port number of the Memcached server on this node.
*/
  port?: number;

  /*
(Output)
Current state of the Memcached node.
*/
  state?: string;

  /*
(Output)
Location (GCP Zone) for the Memcached node.
*/
  zone?: string;
}

export function memcache_InstanceMemcacheNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "host",
      "(Output)\nHostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeId",
      "(Output)\nIdentifier of the Memcached node. The node id does not include project or location like the Memcached instance name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "(Output)\nThe port number of the Memcached server on this node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nCurrent state of the Memcached node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "(Output)\nLocation (GCP Zone) for the Memcached node.",
      [],
      false,
      false,
    ),
  ];
}
