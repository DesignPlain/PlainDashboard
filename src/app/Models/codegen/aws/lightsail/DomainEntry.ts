import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DomainEntryArgs {
  // Type of record
  type?: string;

  // The name of the Lightsail domain in which to create the entry
  domainName?: string;

  // If the entry should be an alias Defaults to `false`
  isAlias?: boolean;

  // Name of the entry record
  name?: string;

  // Target of the domain entry
  target?: string;
}
export class DomainEntry extends DS_Resource {
  // If the entry should be an alias Defaults to `false`
  public isAlias?: boolean;

  // Name of the entry record
  public name?: string;

  // Target of the domain entry
  public target?: string;

  // Type of record
  public type?: string;

  // The name of the Lightsail domain in which to create the entry
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the entry record",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        "Target of the domain entry",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of record",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name of the Lightsail domain in which to create the entry",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isAlias",
        "If the entry should be an alias Defaults to `false`",
        () => [],
        false,
        true,
      ),
    ];
  }
}
