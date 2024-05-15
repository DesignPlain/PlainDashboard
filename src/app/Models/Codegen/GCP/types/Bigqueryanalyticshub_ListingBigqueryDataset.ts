import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigqueryanalyticshub_ListingBigqueryDataset {
  /*
Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123

- - -
*/
  Dataset?: string;
}

export function Bigqueryanalyticshub_ListingBigqueryDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Dataset",
      "Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
