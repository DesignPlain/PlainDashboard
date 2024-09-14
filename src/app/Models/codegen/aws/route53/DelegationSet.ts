import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DelegationSetArgs {
  /*
This is a reference name used in Caller Reference
(helpful for identifying single delegation set amongst others)
*/
  referenceName?: string;
}
export class DelegationSet extends DS_Resource {
  /*
A list of authoritative name servers for the hosted zone
(effectively a list of NS records).
*/
  public nameServers?: Array<string>;

  /*
This is a reference name used in Caller Reference
(helpful for identifying single delegation set amongst others)
*/
  public referenceName?: string;

  // The Amazon Resource Name (ARN) of the Delegation Set.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "referenceName",
        "This is a reference name used in Caller Reference\n(helpful for identifying single delegation set amongst others)",
        () => [],
        false,
        true,
      ),
    ];
  }
}
