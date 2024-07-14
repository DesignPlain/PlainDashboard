import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ReceiptFilterArgs {
  // Block or Allow
  policy?: string;

  // The IP address or address range to filter, in CIDR notation
  cidr?: string;

  // The name of the filter
  name?: string;
}
export class ReceiptFilter extends Resource {
  // The SES receipt filter ARN.
  public arn?: string;

  // The IP address or address range to filter, in CIDR notation
  public cidr?: string;

  // The name of the filter
  public name?: string;

  // Block or Allow
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "Block or Allow",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidr",
        "The IP address or address range to filter, in CIDR notation",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the filter",
        [],
        false,
        true,
      ),
    ];
  }
}
