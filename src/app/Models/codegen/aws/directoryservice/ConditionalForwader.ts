import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ConditionalForwaderArgs {
  // A list of forwarder IP addresses.
  dnsIps?: Array<string>;

  // The fully qualified domain name of the remote domain for which forwarders will be used.
  remoteDomainName?: string;

  // ID of directory.
  directoryId?: string;
}
export class ConditionalForwader extends DS_Resource {
  // ID of directory.
  public directoryId?: string;

  // A list of forwarder IP addresses.
  public dnsIps?: Array<string>;

  // The fully qualified domain name of the remote domain for which forwarders will be used.
  public remoteDomainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "dnsIps",
        "A list of forwarder IP addresses.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "remoteDomainName",
        "The fully qualified domain name of the remote domain for which forwarders will be used.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "ID of directory.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
