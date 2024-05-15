import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterProxy {
  /*
A list of IPs, hostnames, and domains that should skip the proxy.
Examples: ["127.0.0.1", "example.com", ".corp", "localhost"].
*/
  NoProxies?: Array<string>;

  /*
Specifies the address of your proxy server.
Examples: http://domain
WARNING: Do not provide credentials in the format
http://(username:password@)domain these will be rejected by the server.
*/
  Uri?: string;
}

export function Gkeonprem_BareMetalAdminClusterProxy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NoProxies",
      'A list of IPs, hostnames, and domains that should skip the proxy.\nExamples: ["127.0.0.1", "example.com", ".corp", "localhost"].',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "Specifies the address of your proxy server.\nExamples: http://domain\nWARNING: Do not provide credentials in the format\nhttp://(username:password@)domain these will be rejected by the server.",
      [],
      true,
      false,
    ),
  ];
}
