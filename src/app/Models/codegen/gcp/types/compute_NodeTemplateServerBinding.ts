import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_NodeTemplateServerBinding {
  /*
Type of server binding policy. If `RESTART_NODE_ON_ANY_SERVER`,
nodes using this template will restart on any physical server
following a maintenance event.
If `RESTART_NODE_ON_MINIMAL_SERVER`, nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied.
Possible values are: `RESTART_NODE_ON_ANY_SERVER`, `RESTART_NODE_ON_MINIMAL_SERVERS`.
*/
  type?: string;
}

export function compute_NodeTemplateServerBinding_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of server binding policy. If `RESTART_NODE_ON_ANY_SERVER`,\nnodes using this template will restart on any physical server\nfollowing a maintenance event.\nIf `RESTART_NODE_ON_MINIMAL_SERVER`, nodes using this template\nwill restart on the same physical server following a maintenance\nevent, instead of being live migrated to or restarted on a new\nphysical server. This option may be useful if you are using\nsoftware licenses tied to the underlying server characteristics\nsuch as physical sockets or cores, to avoid the need for\nadditional licenses when maintenance occurs. However, VMs on such\nnodes will experience outages while maintenance is applied.\nPossible values are: `RESTART_NODE_ON_ANY_SERVER`, `RESTART_NODE_ON_MINIMAL_SERVERS`.",
      () => [],
      true,
      true,
    ),
  ];
}
