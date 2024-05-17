import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_FulfillmentFeature {
  /*
The type of the feature that enabled for fulfillment.
- SMALLTALK: Fulfillment is enabled for SmallTalk.
Possible values are: `SMALLTALK`.
*/
  Type?: string;
}

export function Diagflow_FulfillmentFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of the feature that enabled for fulfillment.\n* SMALLTALK: Fulfillment is enabled for SmallTalk.\nPossible values are: `SMALLTALK`.",
      [],
      true,
      false,
    ),
  ];
}
