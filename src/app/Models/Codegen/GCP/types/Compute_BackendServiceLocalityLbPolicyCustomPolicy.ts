import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_BackendServiceLocalityLbPolicyCustomPolicy {
  /*
An optional, arbitrary JSON object with configuration data, understood
by a locally installed custom policy implementation.
*/
  Data?: string;

  /*
Identifies the custom policy.
The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.
Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.
*/
  Name?: string;
}

export function Compute_BackendServiceLocalityLbPolicyCustomPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Data",
      "An optional, arbitrary JSON object with configuration data, understood\nby a locally installed custom policy implementation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Identifies the custom policy.\nThe value should match the type the custom implementation is registered\nwith on the gRPC clients. It should follow protocol buffer\nmessage naming conventions and include the full path (e.g.\nmyorg.CustomLbPolicy). The maximum length is 256 characters.\nNote that specifying the same custom policy more than once for a\nbackend is not a valid configuration and will be rejected.",
      [],
      true,
      false,
    ),
  ];
}
