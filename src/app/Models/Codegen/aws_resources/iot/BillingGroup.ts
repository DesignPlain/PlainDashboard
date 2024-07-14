import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iot_BillingGroupProperties,
  iot_BillingGroupProperties_GetTypes,
} from "../types/iot_BillingGroupProperties";
import {
  iot_BillingGroupMetadata,
  iot_BillingGroupMetadata_GetTypes,
} from "../types/iot_BillingGroupMetadata";

export interface BillingGroupArgs {
  // The name of the Billing Group.
  name?: string;

  // The Billing Group properties. Defined below.
  properties?: iot_BillingGroupProperties;

  // Key-value mapping of resource tags
  tags?: Map<string, string>;
}
export class BillingGroup extends Resource {
  // The Billing Group properties. Defined below.
  public properties?: iot_BillingGroupProperties;

  // Key-value mapping of resource tags
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The current version of the Billing Group record in the registry.
  public version?: number;

  // The ARN of the Billing Group.
  public arn?: string;

  //
  public metadatas?: Array<iot_BillingGroupMetadata>;

  // The name of the Billing Group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Billing Group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "properties",
        "The Billing Group properties. Defined below.",
        iot_BillingGroupProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
